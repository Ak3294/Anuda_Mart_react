import {configureStore} from '@reduxjs/toolkit';
import toggleNavReducer from '../Buyer/slices/NavBarSlice'
import adminToggleSidenavReducer from '../Admin/slices/AdminSideNavSlice';
import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     toggleNav: toggleNavReducer,
//     adminToggleSidenav: adminToggleSidenavReducer,
// });

export const store = configureStore({
    reducer : {
        toggleNav : toggleNavReducer,
        adminToggleSidenav : adminToggleSidenavReducer
    }
})