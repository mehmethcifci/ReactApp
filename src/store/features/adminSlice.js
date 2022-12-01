import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateAdmin = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  isRegisterLoading: false,
  admin: [],
};
export const fetchDoLogin = createAsyncThunk(
  "admin/fetchDoLogin",
  async (payload) => {
    try {
      const result = await fetch("http://104.197.73.6:8081/v1/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Encoding": "br;q=1.0, gzip;q=0.8, *;q=0.1",
        },
        body: JSON.stringify({
          mail: payload.mail,
          password: payload.password,
        }),
      })
        .then((p) => p.json())
        .then((p) => {
            //* Giriş yaptıktan sonra user bilgisi localStorage'a set ediliyor.
          localStorage.setItem("User", JSON.stringify(p));
         
            //window.location.href="/home";
          
          return p;
        })
        .catch((err) => console.log(err));
      return result;
    } catch (error) {}
  }
);

export const fetchSendMail = createAsyncThunk(
  "admin/fetchSendMail",
  async (payload) => {
    try {
      const result = await fetch(
        "http://104.197.73.6:8081/v1/api/user/forgot-password?email=" + payload.email,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "br;q=1.0, gzip;q=0.8, *;q=0.1",
          },
          body: JSON.stringify({
            email: payload.email,
          }),
        }
      )
        .then((p) => p.json())
        .then((p) => {
          return p;
        })
        .catch((err) => console.log(err));
      return result;
    } catch (error) {}
  }
);

export const fetchProfileDetail = createAsyncThunk(
  "admin/fetchProfileDetail",
  async (payload) => {
    try {
      const token=localStorage.getItem("User").split(",")[0].split('"')[3];
     // const token2=localStorage.getItem("User").json().token;
      
      console.log("user token",token,typeof token)
      const result = await fetch(
        "http://104.197.73.6:8081/v1/api/user/profiledetail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "br;q=1.0, gzip;q=0.8, *;q=0.1",
          },
          body: JSON.stringify({
            token: token,
          }),
         
        }
      )
        .then((p) => p.json())
        .then(console.log(initialStateAdmin))
        .catch((err) => console.log(err));
      return result;
    } catch (error) {}
  }
);

export const fetchUpdate = createAsyncThunk(
  "admin/fetchUpdate",
  async (payload) => {
    try {
      const token=localStorage.getItem("User").split(",")[0].split('"')[3];
      return await axios
        .put("http://104.197.73.6:8081/v1/api/user/update", {
          token: token,
          photo: payload.photo,
          phoneNumber: payload.phoneNumber,
          address: payload.address,
        })
        .then((response) => response.data)
        .catch((err) => console.log(err));
    } catch (error) {
      console.log("update işleminde hata oluştu...: ", error);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: initialStateAdmin,
  reducers: {
    setLogin: (state) => {
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchDoLogin.fulfilled, (state, action) => {
      /**
       * Eğer responsecode tanımsız gelmiş ise, bir hata oluşmuştur
       */
      if (action.payload.responsecode === undefined) {
        state.isAuthenticated = false;
        state.isLoading = false;
        alert("Hata...: " + action.payload.fields[0]);
      } else {
        /**
         * 200 ise token doğrudur.
         * 400 ise token GEÇERSİZDİR.
         */
        if (action.payload.responsecode === 200) {
          state.isAuthenticated = true;
          state.isLoading = false;
          state.token = action.payload.token;
        } else {
          state.isAuthenticated = false;
          state.isLoading = false;
          alert("Kullanıcı adı ya da şifre hatalıdır.");
        }
      }
    });
    build.addCase(fetchDoLogin.rejected, (state, action) => {
      state.token = "";
      state.isAuthenticated = false;
      console.log("fetchDoLogin rejected: ", action.payload);
    });
  },
});

export const { setLogin, setLogout } = adminSlice.actions;

export default adminSlice.reducer;
