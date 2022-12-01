import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileDetail } from "../../store/features/adminSlice";
import toastr from "toastr";
import 'toastr/build/toastr.min.css'
import Axios from "axios";

export default function Profile() {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState();
  const getAdmin = () => {
    /**
     * redux bişlenlerini tetiklemek için dispatch kullanıyoruz.
     */
    dispatch(fetchProfileDetail()).then((data) => setAdmin(data.payload));
  };

  useEffect(() => {
    getAdmin();
  }, []);
  console.log(admin);

  
  const update = (e)=>{
    const token=localStorage.getItem("User").split(",")[0].split('"')[3];
    e.preventDefault(); //* Submit işleminden sonra sayfanın yenilenmesini engellemek için.
      Axios.put("http://104.197.73.6:8081/v1/api/user/update",  {
        token:token,
        phoneNumber: admin.phoneNumber,
        photo: admin.photo,
        address: admin.address,
        
      }).then((res) => {
       
       
        setTimeout(() => toastr.success(`İşlem başarılı bir şekilde gerçekleşti!`), 300)
       
        ('#modal').modal('hide');
      
         
      }).catch((err)=>{ setTimeout(() => toastr.error(`Bir Hata Oluştu!`), 300) 
                                          
    });
    };  
  
  
    const handle = (e) => {
      const newdata = { ...admin };
      newdata[e.target.id] = e.target.value;
      setAdmin(newdata);
     
    };

  return (
    <div>
      {admin === undefined ? (
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="alert alert-danger" role="alert">
              Admin için herhangi bir veri bulunamadı!
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="row">
                <div className="col-xl-12 col-sm-12 col-12 ">
                  <div className="breadcrumb-path mb-4">
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
                      <li className="breadcrumb-item active"> Profile</li>
                    </ul>
                    <h3>Profile </h3>
                  </div>
                 
                 
                 
                  <div style={{width:"100%",display: 'flex', justifyContent: 'flex-end'}}>
                  <a href="/home"
                   type="button"
                   className="btn btn-success mb-3"
                   
                   data-toggle="modal"
                   data-target="#exampleModal"
                   style={{width:"8rem", marginLeft:"16rem"}}>
                   Update
                   </a>
                </div>
                
                
                </div>


                <div className="col-xl-12 col-sm-12 col-12 ">
                  <div className="row">
                    <div className="col-xl-12 col-sm-12 col-12 d-flex ">
                      <div className="card card-lists flex-fill">
                        <div className="card-header">
                          <h2 className="card-titles">Information</h2>
                        </div>
                        <div className="row">
                        <div className="card-body d-flex "  >
                          <div className="member-info col-xl-6 col-sm-6 col-6">
                            <ul>
                              <li>
                                <label> Name </label>
                                <span>{admin.name}</span>
                              </li>
                              <li>
                                <label>Second Name </label>
                                <span>{admin.secondName}</span>
                              </li>
                              <li>
                                <label>Last Name </label>
                                <span>{admin.lastName}</span>
                              </li>
                              <li>
                                <label>Second Lastname</label>
                                <span>
                                  {" "}
                                  {admin.secondLastname === undefined
                                    ? " "
                                    : admin.secondLastname}
                                </span>
                              </li>
                              <li>
                                <label>Gender </label>
                                <span>{admin.gender}</span>
                              </li>

                              <li>
                                <label>Birthdate</label>
                                <span>{admin.birthdate}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="member-info col-xl-6 col-sm-6 col-6">
                            <ul>
                              <li>
                                <label>Phone Number </label>
                                <span>{admin.phoneNumber}</span>
                              </li>
                              <li>
                                <label> Email</label>
                                <span>{admin.mail}</span>
                              </li>
                              <li>
                                <label>Address </label>
                                <span>{admin.address}</span>
                              </li>

                              <li>
                                <label>Department </label>
                                <span>{admin.department}</span>
                              </li>
                              <li>
                                <label>Work Start Date </label>
                                <span>{admin.workStartDate}</span>
                              </li>
                              <li>
                                <label>Role</label>
                                <span>{admin.role}</span>
                              </li>


                            </ul>
                          </div>
                          


                        </div>
                        </div>
                        
                      </div>
                      </div>
                      {/* <div className="card card-lists flex-fill ">
                        <div className="card-header">
                          <h2 className="card-titles mb-4"></h2>
                        </div>
                        <div className="card-body">
                          
                        </div>
                      </div> */}
                    {/* <div className="col-xl-4 col-sm-12 col-12 d-flex ">
                      
                    </div> */}
                    {/* <div className="col-xl-4 col-sm-12 col-12 ">
                      <div className="card card-lists flex-fill">
                        <div className="card-header">
                          <h2 className="card-titles mb-4"></h2>
                        </div>
                        <div className="card-body">
                          
                        </div>
                      </div>

                      <div className="card card-lists flex-fill" style={{background:"transparent", boxShadow:"none"}} >
                       
                        
                        
                      </div>
                    </div> */}

                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      )}


      {/* pop-up */}
      {admin === undefined ? (
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="alert alert-danger" role="alert">
              Admin için herhangi bir veri bulunamadı!
            </div>
          </div>
        </div>
      ) : (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <form onSubmit={(e)=>update(e)} >
              <div id="modal" className="modal-body">
                  <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <div className="form-group">
                        <label>Phone </label>
                        <input
                        maxLength={10}
                          type="text"
                          id="phoneNumber"
                          onChange={(e) => handle(e)}
                          value={admin.phoneNumber}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <div className="mb-3 form-group">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                          style={{display: "inline-block",wordBreak:"break-all"}}
                        >
                          Address
                        </label>
                        <input
                          maxLength={50}
                          className="form-control"
                          type="text"
                          id="address"
                          style={{display: "inline-block",wordBreak:"break-all"}}
                          onChange={(e) => handle(e)}
                          value={admin.address}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <div className="mr-5 form-group">
                        <label htmlFor="formFile" className="form-group">
                         File
                        </label>
                        <input
                          className="form-group mr-5"
                          type="file"
                          accept="image/*"
                          id="photo"
                          onChange={(e) => handle(e)}
                          
                        />
                        {/* <img
                          src="assets/img/boost.png"
                          height={150}
                          width={250}
                          alt="logo"
                        /> */}
                      </div>
                    </div>
                  </div>
              </div>
              <div className="modal-footer">
                <button
                  
                  className="btn btn-outline-danger"
                  data-dismiss="modal"
                  >
                  Close
                </button>
                <button  className="btn btn-outline-success">
                  Save
                </button>
              </div>
                  </form>
            </div>
          </div>
        </div>
      )}
      {/* popup bitiş */}
    </div>
  );
}
