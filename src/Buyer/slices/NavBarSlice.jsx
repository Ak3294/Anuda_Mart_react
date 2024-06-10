import {createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';




export const toggleNavSlice = createSlice({
    name : 'toggleNav',
    initialState : {showNav : false},
    reducers:{
        toggleNavbar : (state , action, showNav) =>{
            state.showNav = !state.showNav;
        }
    }
})


export const {toggleNavbar} = toggleNavSlice.actions

export default toggleNavSlice.reducer