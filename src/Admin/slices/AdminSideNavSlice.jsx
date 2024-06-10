import {createSlice } from '@reduxjs/toolkit';

export const adminToggleSidenavSlice = createSlice({
  name : 'adminToggleSidenav',
  initialState : {showAdminSidenav : true},
  reducers:{
      toggleAdminSidenavbar : (state , action) =>{
          state.showAdminSidenav = !state.showAdminSidenav;
      }
  }})


  export const {toggleAdminSidenavbar} = adminToggleSidenavSlice.actions

export default adminToggleSidenavSlice.reducer