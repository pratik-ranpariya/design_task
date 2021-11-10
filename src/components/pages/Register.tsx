import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/main.module.css";
import "../css/bootstrap.module.css";
import logo from './43047.jpg'
import axios from "axios";


const Register = () : any => {

    return (

        <>
            <div className="row m-0" style={{ height: "100vh", width: "100vw", backgroundColor: "hsl(240deg 21% 15%)" }}>


                <div className=" col-md-6 d-flex justify-content-center align-items-center">
                    <img src={logo} alt="fdsf" height="400px" />
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="p-4" style={{ backgroundColor: "white", width: '400px', border: "5px solid hsl(214deg 100% 49%)", borderRadius: "30px" }}>

                        <div className="text-center"><b>CADASTRE-SE</b></div>

                        <div className="row px-4 pt-4 pb-0" >

                            <div className="col-md-6">
                                <div className="d-flex flex-column">
                                    <label> <b>ID</b> </label>
                                    <input type="text" name="id" placeholder="Ex: 635" className=" border-md" style={{borderRadius: "10px", border: "1px solid hsl(0deg 1% 81%)", borderBottom: "5px solid hsl(0deg 1% 81%)", backgroundColor: "hsl(0deg 100% 99%)"}} />
                                </div>
                            </div>

                            <div className="pb-3 col-md-6">
                                <div className="d-flex flex-column">
                                    <label> <b> Nome</b> </label>
                                    <input type="text" name="name" placeholder="Ex: ozo" className=" border-md" style={{borderRadius: "10px", border: "1px solid hsl(0deg 1% 81%)", borderBottom: "5px solid hsl(0deg 1% 81%)", backgroundColor: "hsl(0deg 100% 99%)"}} />
                                </div>
                            </div>

                            <div className="pb-3 col-md-12">
                                <div className="d-flex flex-column">
                                    <label> <b>Email</b> </label>
                                    <input type="email" name="email" placeholder="Ex: seuemail@gmail.com" style={{display: "block", borderRadius: "10px", border: "1px solid hsl(0deg 1% 81%)", borderBottom: "5px solid hsl(0deg 1% 81%)", backgroundColor: "hsl(0deg 100% 99%)"}} />
                                </div>
                            </div>

                            <div className="pb-3 col-md-12">
                                <div className="d-flex flex-column">
                                    <label> <b>Senha</b> </label>
                                    <input type="password" name="senha" placeholder="Ex: *****" style={{display: "block", borderRadius: "10px", border: "1px solid hsl(0deg 1% 81%)", borderBottom: "5px solid hsl(0deg 1% 81%)", backgroundColor: "hsl(0deg 100% 99%)"}} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="d-flex flex-column">
                                    <label> <b>Funcio</b> </label>
                                    <select id="job" name="jobtitle" className=" custom-select border-md" style={{ display: "block", borderRadius: "10px", border: "1px solid hsl(0deg 1% 81%)", borderBottom: "5px solid hsl(0deg 1% 81%)", backgroundColor: "hsl(0deg 100% 99%)" }}>
                                        <option value="">Choose your job</option>
                                        <option value="">Designer</option>
                                        <option value="">Developer</option>
                                        <option value="">Manager</option>
                                        <option value="">Accountant</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pb-3 col-md-6">
                                <div className="d-flex flex-column">
                                    <label> <b>Cargo</b> </label>
                                    <select id="job" name="jobtitle" className="custom-select border-md" style={{ display: "block", borderRadius: "10px", border: "1px solid hsl(0deg 1% 81%)", borderBottom: "5px solid hsl(0deg 1% 81%)", backgroundColor: "hsl(0deg 100% 99%)" }}>
                                        <option value="">Choose your job</option>
                                        <option value="">Designer</option>
                                        <option value="">Developer</option>
                                        <option value="">Manager</option>
                                        <option value="">Accountant</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12 mx-auto mb-0">
                                <a href="#" className="btn btn-primary btn-block py-2" style={{borderRadius: "10px"}}>
                                    <span className="font-weight-bold">CADASTRAR</span>
                                </a>
                            </div>

                            <div className="col-md-12 d-flex justify-content-end mt-2">
                                <small>
                                ja tem uma conta? <a href="#"> Entrar</a>
                                </small>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>

            </div>
        </>

    );
};

export default Register