import { useContext, useRef } from 'react'
import '../RegisterPage/RegisterPage.css'
import axios from 'axios';
import { HeaderStateContext } from "../Components/Context";
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';



export default function RegisterPage() {

    const emailInput = useRef();
    const passInput = useRef();
    const {token,setToken} = useContext(HeaderStateContext);
    const navigat = useNavigate();

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
            navigat("/buyPage")
        }).catch((err)=>{
            console.log("sorry")
        })   
        }



  return (
    <div style={{backgroundColor:"var(--bgProducts)",height:"90vh"}}>
        <div className="container d-flex flex-column align-items-center justify-content-center py-5" style={{height:"80vh"}}>
            <div className='alert alert-warning text-center px-5'>
                To make your purchase order you have to login first
            </div>
            <h3>Login</h3>
            <div>
                <form onClick={handleLogin} className='register' style={{width:"100%",margin:"auto"}}>
                    <div className="row gap-2 gap-md-0 mb-2 justify-content-center">

                        <div className="col-12 row">
                            <div className='col-12'>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className='col-12'>
                                <input ref={emailInput} type="email" id="email" name="email" placeholder="Your email.." />
                            </div>
                        </div>

                        <div className="col-12 row">
                            <div className='col-12'>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className='col-12'>
                                <input ref={passInput} type="password" id="password" name="password" placeholder="Your password.." />
                            </div>
                        </div>
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
