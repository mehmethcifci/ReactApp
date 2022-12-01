import Axios from "axios";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCompanies } from '../../store/features/companySlice';


export default function CompanyManager() {
    const dispatch = useDispatch();
  const [companies,setCompanies] = useState([]);
  const [data, setData] = useState({
    companyId: -1,
    photo: "",
    name: "",
    lastName:"",
    secondLastName:"",
    secondName:"",
    birthdate:"",
    workStartDate:"",
    address:"",
    phoneNumber:"",
    //* Modelde gönderilecek diğer veriler.


   
  });
  const getCompanies = () => {
    /**
     * redux bişlenlerini tetiklemek için dispatch kullanıyoruz.
     */
     dispatch(fetchCompanies()).then(data=>setCompanies(data.payload));
  };

  useEffect(() => {
    getCompanies();
  }, []);

  
  const submit = (e) => {
    e.preventDefault(); //* Submit işleminden sonra sayfanın yenilenmesini engellemek için.

    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('photo', file.photo)
    
    if(data.companyName !== "" && data.title !== "" && data.taxNo !== "" && data.commercialRegistryNo !== "" && 
    data.employeeNumber !== "" && data.address !== "" && data.phone !== "" && data.mail !== "" && data.foundingDate !== "" && data.photo !== ""){
    Axios.post("http://104.197.73.6:8081/v1/api/user/newmanager",  {
    companyId: -1,
    photo: "",
    name: "",
    lastName:"",
    secondLastName:"",
    secondName:"",
    birthdate:"",
    workStartDate:"",
    address:"",
    phoneNumber:"",
    gender:"",
    
    }).then((res) => {
      console.log(res.data);
    });
  }else{
    alert("Lütfen boş alanları doldurunuz.");
  }
  };
 
  const handleText = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };
  const handleNumber = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value.replace(/\D/, "");
    setData(newdata);
  };
  return (
    <div className="page-wrapper overflow-scroll">
    <div className="content container-fluid">
      <div className="row">
        <div className="col-xl-12 col-sm-12 col-12 mb-4">
          <div className="breadcrumb-path ">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
              <a href="/home">
               <img
                src="assets/img/dash.png"
                className="mr-2"
                alt="breadcrumb"
                />
                Home
                </a>
              </li>
              <li className="breadcrumb-item active"> New Manager</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-sm-12 col-12 ">
          <div className="card">
            <div className="card-header" height={100}>
              <h2 className="card-titles">Add</h2>
            </div>
            <div className="form-creation">

              <form onSubmit={(e) => submit(e)}>
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 ">
                    <div className="mb-3">
                      <label for="formFile" className="form-label">
                        Photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/*"
                        id="photo"
                        onChange={(e) => handleText(e)}
                          value={data.photo}       />
                     
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-6 col-12 ">
                    
                    <label>
                      Company Name <span className="mandatory">*</span>{""}
                    </label>
                   <select className="select form-control" id="title"
                      onChange={(e) => handleText(e)}
      
                      onInvalid="alert('You must fill out the form!');"
                      required >
                        
                     {     
                     companies &&
                          companies.map((company,id) => (
                      <option value={data.companyId}>{company.companyName}</option> 
                      )) 
                      }
                    </select>
                   
                    </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Birth Date <span className="mandatory">*</span>{""}</label>
                      <input className="form-control"
                      id="birthdate"
                          type="date"
                          onChange={(e) => handleText(e)}
                          value={data.birthdate}
                          onInvalid="alert('You must fill out the form!');"
                          required />
                    
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Work Start Date <span className="mandatory">*</span>{""}</label>
                      <input className="form-control"
                      id="workStartDate"
                          type="date"
                          onChange={(e) => handleText(e)}
                          value={data.workStartDate}
                          onInvalid="alert('You must fill out the form!');"
                        required />
                    
                  </div>
                  </div>
                
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 ">
                   
                      <label>Name <span className="mandatory">*</span>{""}</label>
                      <input className="form-control" id="name"
                          type="text"
                          onChange={(e) => handleText(e)}
                          value={data.name}
                          onInvalid="alert('You must fill out the form!');"
                        required />
                   
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 ">
                   
                      <label>Second Name <span className="mandatory">*</span>{""}</label>
                      <input className="form-control" id="secondName"
                          type="text"
                          onChange={(e) => handleText(e)}
                          value={data.secondName}
                          onInvalid=""
                        required />            
                  </div>
                           
                </div>

                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12 ">
                   
                      <label>Last Name <span className="mandatory">*</span>{""}</label>
                      <input className="form-control" id="lastName"
                          type="text"
                          onChange={(e) => handleText(e)}
                          value={data.lastName}
                          onInvalid="alert('You must fill out the form!');"
                        required />
                   
                  </div>
                  <div className="col-xl-6 col-sm-12 col-12 ">
                   
                      <label>Second Last Name <span className="mandatory">*</span>{""}</label>
                      <input className="form-control" id="secondLastName"
                          type="text"
                          onChange={(e) => handleText(e)}
                          value={data.secondName}
                          onInvalid="alert('You must fill out the form!');"
                        required />
                   
                  </div>
                 
                </div>




                <div className="row">

                  <div className="col-xl-6 col-sm-12 col-12 ">
                    
                      <label>Phone <span className="mandatory">*</span>{""}</label>
                      <input
                        className="form-control"
                        type="tel"
                        id="phone"
                        onChange={(e) => handleNumber(e)}
                        value={data.phoneNumber}
                        maxLength={10}
                        minLength={10}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
                    
                  </div>
                  <div className="col-xl-6 col-sm-6 col-12 ">
                      <label>
                        Gender <span className="mandatory">*</span>{""}
                      </label>
                      <select
                        className="select form-control"
                        id="title"
                        onChange={(e) => handleText(e)}
                        value={data.gender}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      >
                        <option value="-1">Choose one</option>
                        <option value="Select leave">FEMALE</option>
                        <option value="leave">MALE</option>
                      </select>
                    </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-sm-12 col-12">
                   
                      <label>Address <span className="mandatory">*</span>{""}</label>
                      
                      <textarea className="form-control" type='text'
                      maxLength={100}
                      id="address" 
                      onChange={(e) => handleText(e)}
                      value={data.address}
                      onInvalid="alert('You must fill out the form!');"
                        required />
                    
                  </div>
                
                </div>
                

                <div className="row">
                  <div className="col-xl-12 col-sm-12 col-12 ">
                    <div className="form-btn">
                      <button className="btn btn-apply mt-3">Save</button>

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}