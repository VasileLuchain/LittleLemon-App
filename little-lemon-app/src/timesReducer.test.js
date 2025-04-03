import { timesReducer } from "ReservationsForm";

// Initialize default times
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"];

test("initializeTimes returns default time slots", () => {
    expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]);
});

test("updateTimes removes early slots on weekends", () => {
    const state = initializeTimes();

    // Simulate weekend
    const action = {type: "UPDATE_TIMES", payload: "2025-04-05"};
    const newState = timesReducer(state, action);

    expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "21:00"]);
});

test("updateTimes keeps all time slots for weekdays", () => {
    const state = initializeTimes();

    //Simualte weekday
    const action = {type: "UPDATE_TIMES", payload: "2025-04-01"};
    const newState = timesReducer(state, action);

    expect(newState).toEqual(initializeTimes());
});

test("updateTimes returns the same state if action is unknown", () => {
    const state = initializeTimes();

    const action = {type: "UNKNOWN_ACTION", payload: "2025-04-07"};
    const newState = timesReducer(state, action);

    expect(newState).toEqual(state);
});