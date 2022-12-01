import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileDetail } from "../../store/features/adminSlice";
import Axios from "axios";
import toastr from "toastr";
import 'toastr/build/toastr.min.css'

export const Home = () => {

  const baseUrl = "http://104.197.73.6:8081/v1/api/user/update"; //* API'ye post isteği atacağın URL.

  const dispatch = useDispatch();
  const [admin, setAdmin] = useState({});
  const getHome = () => {
    /**
     * redux bişlenlerini tetiklemek için dispatch kullanıyoruz.
     */
    dispatch(fetchProfileDetail()).then((data) => setAdmin(data.payload));
  };

  useEffect(() => {
    getHome();
  }, []);
const update = (e)=>{
  const token=localStorage.getItem("User").split(",")[0].split('"')[3];
  e.preventDefault(); //* Submit işleminden sonra sayfanın yenilenmesini engellemek için.
    Axios.put(baseUrl,  {
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
      <div>
        {admin !== undefined ? (
          <div className="page-wrapper">
            <div className="content container-fluid">
            <div className="row mb-4">
                <div className="col-xl-6 col-sm-12 col-12">
                  <div className="breadcrumb-path ">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/home">
                          <img
                            src="assets/img/dash.png"
                            className="mr-3"
                            alt="breadcrumb"
                          />
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ul>
                   
                  </div>
                </div>
              </div>
              <div className="page-name 	mb-4">
             
                
                {/* <div className="card"> */}
          
                {/* <div className="table-responsive" > */}
                  <table className="table no-footer">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Address</th>
                        <th>Transaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>
                            <label>
                              {admin.name} {admin.lastName}
                            </label>
                        </td>

                        <td>
                          <label type="text">{admin.phoneNumber}</label>
                        </td>
                        <td>
                          <label>{admin.department}</label>
                        </td>
                     
                        <td style={{maxWidth:"50px",wordwrap:"break-word",overflowWrap: 'break-word', overflow:"hidden"}}>
                          {admin.address}
                           {/* <label name="address" style={{display: "inline-block",wordwrap:"break-word"}}>
                           </label>
                            <div> </div> */}
                        </td>
           
                        <td className="tab-select">
                          <a
                            href="/"
                            type="button"
                            className="btn btn-success mr-1"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Update
                          </a>
                          <a
                            href="/profile"
                            type="button"
                            className="btn btn-success" 
                          >
                            Detail
                          </a>
                        </td>                      
                      </tr>
                    </tbody>
                  </table>
                {/* </div> */}
              {/* </div> */}
              </div>
    
            </div>
          </div>
        ) : (
          <div className="page-wrapper">
            <div className="content container-fluid">
              <div className="alert alert-danger" role="alert">
                Admin için herhangi bir veri bulunamadı!
              </div>
            </div>
          </div>
        )}
      </div>
      {/* POP-UP */}

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
    </div>
  );
};