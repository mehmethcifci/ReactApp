import {configureStore} from '@reduxjs/toolkit';
import {
    adminSlice,
    companySlice

} from './features';
const store = configureStore({
    reducer:{
        company: companySlice,
        admin: adminSlice,
    }     
});
export default store;