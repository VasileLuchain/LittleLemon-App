import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationsForm from '../ReservationsForm';

test('Renders all labels and headings correctly', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  const mockUpdateTimes = jest.fn();
  const mockSubmitAPI = jest.fn();

  render(
    <ReservationsForm
      availableTimes={mockTimes}
      updateTimes={mockUpdateTimes}
      submitAPI={mockSubmitAPI}
    />
  );

  expect(screen.getByText('Reservation Form')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose date:')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time:')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of guests:')).toBeInTheDocument();
  expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();
});