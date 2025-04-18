import { timesReducer } from "../Reservations";
import { fetchAPI } from "../api/bookingAPI"
import { describe, it, expect } from '@jest/globals';

jest.mock('../api/bookingAPI');

describe('updateTimes', () => {
    const mockDispatch = jest.fn();

    //Actual function to test
    const updateTimes = async (date) => {
        try {
            const times = await fetchAPI(date);
            mockDispatch({type: 'UPDATE_TIMES', payload: times });
        }   catch{
            mockDispatch({type: 'UPDATE_TIMES', payload: [] })
        }
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('dispatches available times when fetchAPI succeeds', async () => {
        const mockDate = "2023-09-01";
        const mockTimes = ['10:00', '11:00', '12:00'];

        fetchAPI.mockResolvedValue(mockTimes);
        await updateTimes(mockDate);

        expect(fetchAPI).toHaveBeenCalledWith(mockDate);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: mockTimes,
        });
    });

    it('dispatches empty array when fetchAPI fails', async () => {
        const mockDate = '2023-09-30';
        fetchAPI.mockRejectedValue(new Error('No times'));

        await updateTimes(mockDate);

        expect(fetchAPI).toHaveBeenCalledWith(mockDate);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: [],
        });
    });
});

describe('timesReducer', () => {
    it('should return updated times on UPDATE_TIMES action', () => {
      const initialState = [];
      const action = {
        type: 'UPDATE_TIMES',
        payload: ['10:00', '11:00'],
      };
      const newState = timesReducer(initialState, action);
      expect(newState).toEqual(['10:00', '11:00']);
    });

    it('should return current state on unknown action', () => {
      const initialState = ['09:00'];
      const action = { type: 'UNKNOWN' };
      const newState = timesReducer(initialState, action);
      expect(newState).toEqual(initialState);
    });
});
