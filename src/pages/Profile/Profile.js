import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileDetail } from "../../store/features/adminSlice";


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
                      {/* <div className="card card-lists flex-fill ">
                        <div className="card-header">
                          <h2 className="card-titles mb-4"></h2>
                        </div>
                        <div className="card-body">
                          
                        </div>
                      </div> */}
                    </div>
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
    </div>
  );
}
