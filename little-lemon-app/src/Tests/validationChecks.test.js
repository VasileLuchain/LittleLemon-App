import { render, screen, fireEvent } from '@testing-library/react';
import ReservationsForm from '../ReservationsForm';
import {validateField} from '../ReservationsForm';
import React from 'react';

const mockAvailableTimes = ['10:00', '11:00', '12:00'];
const mockUpdatedTimes = jest.fn();
const mockSubmitAPI = jest.fn();

describe('ReservationsForm - Input Field Attributes', () => {
    beforeEach(() => {
        <ReservationsForm
            availableTimes={mockAvailableTimes}
            updateTimes={mockUpdatedTimes}
            submitAPI={mockSubmitAPI}
        />
    });


    test('Date input has correct attributes', () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toBeInTheDcoument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toBeRequired();
    });

    test('Time select has correct options and required attribute', () => {
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toBeInTheDcoument();
        expect(timeSelect).toBeRequired();
        mockAvailableTimes.forEach(time => {
            expect(screen.getByText(time)).toBeInTheDcoument();
        });
    });

    test('Guests input has correct attributes.', () => {
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toBeInTheDcoument();
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toBeRequired();
    });

    test('Occasion select field has correct options and its required', () => {
        const occationSelect = screen.getByLabelText(/occasion/i);
        expect(occationSelect).toBeRequired();
        expect(screen.getByText('Birthday')).toBeInTheDcoument();
        expect(screen.getByText('Anniverasry')).toBeInTheDcoument();
    });
});



describe('validateField()', () => {
    test('validates guests field - valid', () => {
        const error = validateField('guests', '5');
        expect(error).toBe('');
    })

    test('validate guests field - too few', () => {
        const error = validateField('guests', '0');
        expect(error).toBe('Please enter a number of guests between 1 and 10');
    });

    test('validates guests field - too many', () => {
        const error = validateField('guests', '20');
        expect(error).toBe('Please enter a number of guests between 1 and 10');
    });

    test('validates date field - before today', () => {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1);
        const formatted = pastDate.toISOString().split('T')[0];
        const error = validateField('date', formatted);
        expect(error).toBe('Please select a date starting from today.');
    });

    test('validates occasion field - empty', () => {
        const error = validateField('occasion', '');
        expect(error).toBe('Please select an occasion');
    });

    test('validates time field - missing value', () => {
        const error = validateField('time', '');
        expect(error).toBe('Please select a time');
    });
});