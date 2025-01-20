import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addAndRemoveWishlist: (state, action)=>{
            const existPorduct= state.wishlist.find((item)=> item._id == action.payload._id)

            if(!existPorduct){
                state.wishlist.push(action.payload)
            }else{
                state.wishlist = state.wishlist.filter((item)=> item._id !== action.payload._id)
            }
        }
    }
})

export default wishlistSlice.reducer
export const {addAndRemoveWishlist} = wishlistSlice.actions