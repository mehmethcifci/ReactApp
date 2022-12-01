import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import toastr from "toastr";

const initialStateCompany ={
    companies: []
}
export const fetchCompanies = createAsyncThunk(
    'company/fetchCompanies',
    async (payload)=>{     
        try {
         const result=  await fetch('http://104.197.73.6:8081/v1/api/company/findall',{
         method: 'GET',
       })
        .then(p=>p.json())
        .then(console.log(initialStateCompany)) 
        .catch(err=>console.log(err));
        return result;
        } catch (error) {  
        }
    });

export const fetchNewCompany = createAsyncThunk(
    'company/fetchNewCompany',
    async (payload)=>{
        try {
         return await axios.post('http://104.197.73.6:8081/v1/api/company/newcompany',{
                photo: payload.photo,
                phoneNumber: payload.phoneNumber,
                address: payload.address
            }).then(response=> response.data)
            .then((res) => {
     
     
                setTimeout(() => toastr.success(`İşlem başarılı bir şekilde gerçekleşti!`), 300)
               
               
              
                 
              })    
              .catch((err)=>{ setTimeout(() => toastr.error(`Bir Hata Oluştu!`), 300) });
        } catch (error) {
       
        }
    }
);

const companySlice = createSlice({
    name: 'company',
    initialState: initialStateCompany,
    reducers:{
        setLogin: (state)=>{
            state.isAuthenticated = true;
        },
        setLogout: (state)=>{
            state.isAuthenticated = false;
        },
    },
    extraReducers:(build) =>{
        
    }
});

export const 
{
    setLogin,
    setLogout
} = companySlice.actions;


export const getAllCompanies = (state) =>state.company.companies;
export default companySlice.reducer;