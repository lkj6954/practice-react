import { configureStore, createSlice } from '@reduxjs/toolkit';

let cartData = createSlice({
    name: 'cartData',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    reducers: {
        addCnt: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.count += 1;
            }
        },
    },
});

export default configureStore({
    reducer: {
        cartData: cartData.reducer,
    },
});

export const { addCnt } = cartData.actions;
