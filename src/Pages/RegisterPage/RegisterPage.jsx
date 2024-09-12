import { useEffect, useRef } from 'react'
import './RegisterPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






export default function RegisterPage() {

  const fNameRef =useRef();
  const lNameRef =useRef();
  const emailRef =useRef();
  const passwordRef =useRef();
//   const ConfirmPasswordRef =useRef();
  const usernameRef =useRef();
  const navigateToLogin = useNavigate();

// console.log(fNameRef.current.value);
const sendRegisterData =()=>{
    event.preventDefault();
    const newUserData= {
        "firstName" : fNameRef.current.value,
        "lastName" : lNameRef.current.value,
        "email" : emailRef.current.value,
        "password" : passwordRef.current.value,
        "username":  usernameRef.current.value
          }
 axios.post("http://localhost:1337/api/auth/local/register",newUserData).then((res)=>{
    navigateToLogin('/login');
    
 }).catch((err)=>{
    console.log(err);
 })


}

    const btnRegisterStyle = {
        border: "none",
        backgroundColor: "var(--bgGreen)",
        color: "var(--white)",
        padding: "5px 10px",
        borderRadius: "5px",
      }


  return (
    <div style={{backgroundColor:"var(--bgProducts)", height:"90vh"}}>
        <div className="container row justify-content-center m-auto">
        <div className="col-12 col-md-7">
        <div className=" d-flex flex-column align-items-center py-5">
            <div className='alert alert-success text-center w-100' ><h4 className='m-0'>Welcom To Our Organic Strore</h4> </div>

            <div className='registerFormDiv'>
            <form onSubmit={sendRegisterData} className='register' style={{width:"100%",margin:"auto"}}>
                <div className="row gap-2 gap-md-0 mb-2 justify-content-between"> 
                     <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="fname">First Name</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input ref={fNameRef} type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="lname">Last Name</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input ref={lNameRef} type="text" id="lname" name="lasttname" placeholder="Your name.." />
                        </div>
                    </div>
                </div>

                <div className="row gap-2 gap-md-0 justify-content-between">
                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input ref={emailRef} type="email" id="email" name="email" placeholder="Your email.." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="userName">User Name</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input ref={usernameRef} type="text" id="userName" name="userName" placeholder="Your user name.." />
                        </div>
                    </div>
                </div>
                <div className="row gap-2 gap-md-0 justify-content-between">
                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input ref={passwordRef} type="password" id="password" name="password" placeholder="Your password.." />
                        </div>
                    </div>
                </div>
                <textarea style={{width:"100%",height:"100px", margin:"10px 0px"}}></textarea><br />
                <button type='submit' style={btnRegisterStyle}>Submit</button>
            </form>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
