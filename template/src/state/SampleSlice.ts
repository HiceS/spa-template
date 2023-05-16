import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SampleState {
    loaded: boolean;
}

const initialState: SampleState = {
    loaded: false,
};

const slice = createSlice({
    name: "sample",
    initialState,
    reducers: {
        loadState: (state, action: PayloadAction<boolean>) => {
            state.loaded = action.payload;
        },
        resetSampleState: (state) => {
            state = initialState;
        }
    }
});

export const { loadState, resetSampleState } = slice.actions;

export default slice.reducer;
