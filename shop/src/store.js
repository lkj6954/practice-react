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
        addCart: (state, action) => {
            console.log('Current cartData:', JSON.parse(JSON.stringify(state)));
            const { id, title } = action.payload;
            console.log(`Adding to cart: id=${id}, title=${title}`);
            state.push({ id, name: title, count: 1 });
            // console.log(`id: ${id}, title: ${title}`);
            console.log('Updated cartData:', JSON.parse(JSON.stringify(state)));
        },
    },
});

export default configureStore({
    reducer: {
        cartData: cartData.reducer,
    },
});

export const { addCnt, addCart } = cartData.actions;
