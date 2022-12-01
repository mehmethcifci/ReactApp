//* React
import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import validator from 'validator';

//* Axios
import Axios from "axios";

 
const Company = (props) => {
  const baseUrl = "http://104.197.73.6:8081/v1/api/company/newcompany"; //* API'ye post isteği atacağın URL.

  const [file, setFile] = useState();
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const [data, setData] = useState({
    companyName: "",
    title: "",
    taxNo: "",
    commercialRegistryNo: "",
    employeeNumber: "",
    address: "",
    phone: "",
    mail: "",
    foundingDate: "",
    logo: "",
    //* Modelde gönderilecek diğer veriler.
  });


  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    console.log(e);
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const submit = (e) => {
    e.preventDefault(); //* Submit işleminden sonra sayfanın yenilenmesini engellemek için.

    if (
      data.companyName !== "" &&
      data.title !== "" &&
      data.taxNo !== "" &&
      data.commercialRegistryNo !== "" &&
      data.employeeNumber !== "" &&
      data.address !== "" &&
      data.phone !== "" &&
      data.mail !== "" &&
      data.foundingDate !== "" &&
      data.logo !== ""
    ) {
      Axios.post(baseUrl, {
        companyName: data.companyName,
        title: data.title,
        taxNo: data.taxNo,
        commercialRegistryNo: data.commercialRegistryNo,
        employeeNumber: data.employeeNumber,
        address: data.address,
        phone: data.phone,
        mail: data.mail,
        foundingDate: data.foundingDate,
        logo: data.logo,
      })
        .then((res) => {
          setTimeout(
            () => toastr.success(`İşlem başarılı bir şekilde gerçekleşti!`),
            300
          );
          console.log(res.data);
        })
        .catch((err) => {
          setTimeout(() => toastr.error(`Bir Hata Oluştu!`), 300);
        });
    } else {
      alert("Lütfen boş alanları doldurunuz.");
    }
  };

  const handleNumber = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value.replace(/\D/, "");
    setData(newdata);
  };
  const handleText = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

 

  return (
    <div className="page-wrapper overflow-scroll">
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
                <li className="breadcrumb-item active"> New Company</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-sm-12 col-12 ">
            <div className="card">
              <div className="card-header" height={100}>
                <h2 className="card-titles">New Company </h2>
              </div>
              <div className="form-creation">
                <form onSubmit={(e) => submit(e)}>
                  <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                          Default file input example
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          accept="image/*"
                          id="logo"
                          onChange={(e) => handleText(e)}
                          value={data.logo}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Founding Date <span className="mandatory">
                          *
                        </span></label>
                      <input
                        className="form-control"
                        id="foundingDate"
                        type="date"
                        onChange={(e) => handleText(e)}
                        value={data.foundingDate}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Company Name <span className="mandatory">
                          *
                        </span></label>
                      <input
                        className="form-control"
                        id="companyName"
                        type="text"
                        onChange={(e) => handleText(e)}
                        value={data.companyName}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-sm-6 col-12 ">
                      <label>
                        Title <span className="mandatory">*</span>{" "}
                      </label>
                      <select
                        className="select form-control"
                        id="title"
                        onChange={(e) => handleText(e)}
                        value={data.title}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      >
                        <option value="-1">Choose one</option>
                        <option value="Select leave">A.Ş.</option>
                        <option value="leave">Ltd.Şti.</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>
                        Phone{" "}
                        <span className="mandatory">
                          *(Başında 0 olmadan 10 haneli numaranızı giriniz)
                        </span>
                      </label>

                      {/* <PhoneInput     className="form-control"
                        type="tel" 
                        id="phone" 
                        onChange={(e) => handleNumber(e)}
                        value={data.phone} 
                        maxLength={10}
                        minLength={10}
                        onInvalid="alert('You must fill out the form!');" required         /> */}
                      <input
                        className="form-control"
                        type="tel"
                        id="phone"
                        onChange={(e) => handleNumber(e)}
                        value={data.phone}
                        maxLength={10}
                        minLength={10}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email
                          <span className="mandatory">
                          *
                        </span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="mail"
                          onChange={(e) => validateEmail(e)}
                          placeholder="name@example.com"
                          onInvalid="alert('You must fill out the form!');"
                          required
                        /><span style={{
                          fontWeight: 'bold',
                          color: 'red',
                          }}>{emailError}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Address<span className="mandatory">
                          *
                        </span> </label>
                      <input
                        className="form-control"
                        type="text"
                        id="address"
                        onChange={(e) => handleText(e)}
                        value={data.address}
                        onInvalid="alert('You must fill out the form!');"
                        required
                        maxLength={50}
                      />
                    </div>
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Employee Number <span className="mandatory">
                          *
                        </span> </label>
                      <input
                        className="form-control"
                        type="text"
                        id="employeeNumber"
                        onChange={(e) => handleNumber(e)}
                        value={data.employeeNumber}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Commercial Registry No <span className="mandatory">
                          *
                        </span> </label>
                      <input
                        className="form-control"
                        type="text"
                        id="commercialRegistryNo"
                        onChange={(e) => handleNumber(e)}
                        value={data.commercialRegistryNo}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
                    </div>
                    <div className="col-xl-6 col-sm-12 col-12 ">
                      <label>Tax No <span className="mandatory">
                          *
                        </span></label>
                      <input
                        className="form-control"
                        type="text"
                        id="taxNo"
                        onChange={(e) => handleNumber(e)}
                        value={data.taxNo}
                        onInvalid="alert('You must fill out the form!');"
                        required
                      />
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
  );
};

export default Company;