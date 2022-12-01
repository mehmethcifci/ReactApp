import React, { useEffect,useState } from "react";
import './CompanyList.css';
import {
  fetchCompanies,
  getAllCompanies,
} from "../../store/features/companySlice";
import { useDispatch, useSelector } from "react-redux";

export default function CompanyList() {
  const dispatch = useDispatch();
  const [companies,setCompanies] = useState([]);
  const getCompanies = () => {
    /**
     * redux bişlenlerini tetiklemek için dispatch kullanıyoruz.
     */
     dispatch(fetchCompanies()).then(data=>setCompanies(data.payload));
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-12 col-sm-12 col-12 mb-4">
              <div className="breadcrumb-path ">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">
                      <img
                        src="assets/img/dash.png"
                        className="mr-2"
                        alt="breadcrumb"
                      />
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active"> Company List</li>
                </ul>
              </div>
            </div>

           

            <div className="col-xl-12 col-sm-12 col-12 ">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-titles">Company List</h2>
                  <div style={{width:"99%",display: 'flex', justifyContent: 'flex-end'}}>
                      <a className="btn-success btn-sm" href="/newcompany" >
                          New Company Create
                        </a>
                      </div>
                </div>
                <div className="table-responsive">
                  <table className="table  custom-table  no-footer">
                    <thead>
                      <tr>
                      <th className="thStyle">Company Name</th>
                        <th className="thStyle">Logo </th>
                        <th className="thStyle">Email </th>
                        <th className="thStyle">Phone </th>
                      </tr>
                    </thead>

                    <tbody>
                      {companies &&
                        companies.map((company,id) => (
                          <tr key={id}>
                            <td>
                              <label>{company.companyName} </label>
                            </td>
                            <td>
                              <div className="table-img">
                                <img
                                  src="assets/img/boost.png"
                                  alt="profile"
                                  className="img-table"
                                />
                              </div>
                            </td>
                            <td>
                              <label>{company.mail}</label>
                            </td>
                            <td>
                              <label>{company.phone} </label>
                            </td>
                            {/* <td>
                              <div className="actionset">
                                <label>
                                  <a
                                    className="action_label4"
                                    data-toggle="modal"
                                    data-target="#delete"
                                  >
                                    Delete <i data-feather="trash-2"></i>
                                  </a>
                                </label>
                              </div>
                            </td> */}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ml-3">
          <div className="col-xl-12 col-sm-12 col-12 mb-4">
            <div className="head-link-set">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}