//* Components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

//* React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import CompanyList from "./pages/Company/CompanyList";
import Company from "./pages/Company/Company";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { PrivateRoute } from "./routes/PrivateRoute";
import { NotFound } from "./components/NotFound";
import { useSelector } from "react-redux";
import CompanyManager from "./pages/CompanyManager/CompanyManager";
import ResetPassword from "./components/ResetPassword";

function App() {
   const isLogin = useSelector((state)=>state.admin.isAuthenticated);
  
  const userJson =  JSON.parse(localStorage.getItem("User")); //true;
  //console.log(userJson);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!userJson ? (
            <>
             
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </>
          ) : (
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/newcompany" element={<Company />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/companylist" element={<CompanyList />} />
              <Route path="/newmanager" element={<CompanyManager />} />
            </Route>
          )}
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

{
  /* {isLogin ? 
<BrowserRouter>
  <Header />
  <Sidebar />
  <Routes>
  <Route path='/' element={isLogin ? <Home/> : <Login/>}/>
    <Route exact path="/" element={<Home />} />
    <Route path="/newcompany" element={<Company />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/companylist" element={<CompanyList />} />
  </Routes>
</BrowserRouter> : <Login/>} */
}

{
  /* {!isLogin ? 
    <>
     <Routes>
       <Login/> 
       <Route path="/forgot-password" element={<ForgotPassword />} />
     </Routes>
     </>
     :
      <>
     <Header />
     <Sidebar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/newcompany" element={<Company />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/companylist" element={<CompanyList />} />
     </Routes>
      </>
     } */
}
