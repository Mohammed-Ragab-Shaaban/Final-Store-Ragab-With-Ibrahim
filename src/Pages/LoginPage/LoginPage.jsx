import { useContext, useRef, useState } from 'react'
import '../RegisterPage/RegisterPage.css'
import axios from 'axios';
import { HeaderStateContext } from "../Components/Context";
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



export default function RegisterPage() {

    const emailInput = useRef();
    const passInput = useRef();
    const {token,setToken,userData , setUserData} = useContext(HeaderStateContext);
    const navigat = useNavigate();
    const [viewPassword,setViewPassword] =  useState(false);
    const [invalidAccount,setInvalidAccount] = useState(false);


    const handleLogin = ()=>{
        event.preventDefault();
        const emailInputValue = emailInput.current.value;
        const passInputValue = passInput.current.value;
        const obj ={
            "identifier": emailInputValue,
            "password":passInputValue,
        }

        axios.post("http://localhost:1337/api/auth/local",obj).then((res)=>{
            localStorage.setItem("token",JSON.stringify(res.data.jwt));
            setToken(res.data.jwt);
            setUserData(res.data);
            navigat("/buyPage");
        }).catch((err)=>{
           setInvalidAccount(true);
        })   
        };

    const handleViewPassword = ()=>{
        if(viewPassword == false){
            setViewPassword(true);
        }else{
            setViewPassword(false);
        }
    };

  return (
    <div style={{backgroundColor:"var(--bgProducts)",height:"90vh"}}>
        <div className="container d-flex flex-column align-items-center justify-content-center py-5" style={{height:"80vh"}}>
            <div className='alert alert-warning text-center px-5'>
                To make your purchase order you have to login first
            </div>
            <h3>Login</h3>
            <div>
                <form onSubmit={handleLogin} className='register' style={{width:"100%",margin:"auto"}}>
                    <div className="row gap-2 gap-md-0 mb-2 justify-content-center">

                        <div className="col-12 row">
                            <div className='col-12'>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className='col-12'>
                                <input onChange={()=>{setInvalidAccount(false)}} ref={emailInput} type="email" id="email" name="email" placeholder="Your email.." />
                            </div>
                        </div>

                        <div className="col-12 row">
                            <div className='col-12'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className='col-12 position-relative'>
                                <input onChange={()=>{setInvalidAccount(false)}} ref={passInput} type={viewPassword == false ? "password" : "text"} id="password" name="password" placeholder="Your password.." />
                                   <div onClick={handleViewPassword} className='position-absolute' style={{top:"10%" , right:"25px",cursor:"pointer"}}>
                                     {
                                        viewPassword == false ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                                     }
                                   </div>
                            </div>
                        </div>
                        <div className='col-6 text-center text-danger' style={invalidAccount ? {display:"block"} : {display:"none"}}>Invalid email or password</div>
                    </div>
                    <div style={{width:"92%",margin:"auto"}}>
                        <div className='d-flex justify-content-between'>
                            <button type='submit' className='btnLogin' >Login</button>
                            <Link to={'/register'}>Create account</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}
