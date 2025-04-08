import React from "react";
import { render, screen } from "@testing-library/react";
import ReservationForm from "../ReservationsForm";

test("renders all labels and headings correctly", () => {
    render(<ReservationForm onFormSubmit={() => {}}/>);

    // Check labels
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/no. of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

    // Check submit btn
    expect(screen.getByRole("button", { name: /submit/i})).toBeInTheDocument();
});