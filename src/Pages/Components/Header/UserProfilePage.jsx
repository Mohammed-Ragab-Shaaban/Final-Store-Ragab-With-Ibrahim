import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
import { faCameraRetro, faClose, faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { HeaderStateContext } from "../Context"
import profileIcon from '../../../assets/profile Icon.PNG';

export default function UserProfilePage() {

    const [pruductImage , setPruductImage] = useState(null);
    const [ showModal, setShowModal] = useState(false);
    const inputRef = useRef();
    const {token,setToken,userData , setUserData,image , setImage} = useContext(HeaderStateContext);
    const producrNameRef = useRef();
    const producrCategoryRef = useRef();
    const producrPriceRef = useRef();
    const producrDescriptionRef = useRef();
    const productImageRef = useRef();
    
    

    const pruductModuleStyle = {
        height: "inherit",
        backgroundColor: "rgb(0 0 0 / 59%)",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        zIndex: "1",
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const handleSunmit = ()=>{
        inputRef.current.click();
    }
    const handleChange = (e)=>{
        setImage(e.target.files[0]);

        // const xx = URL.createObjectURL(image);
        console.log(e.target.files);
        const fd = new FormData();
              fd.append('files',image);
              console.log(fd);

        const obj = {
            ref : "plugin::users-permissions.user",
            refId : 1,
            field : "userProfilePicture",
            files : fd.files,
        };

        console.log(image);
        console.log(fd);
        
        axios.post("http://localhost:1337/api/upload",obj).then((res)=>{
            console.log(res.data.UserProfilePicture);
            console.log("done");
        }).catch((err)=>{
            console.log(err.response.data.error.message);
        })   
    }

    const sendProductToDataBase = ()=>{
         event.preventDefault();
         const NewProductObj = {
            "data":{
                "category":producrCategoryRef.current.value,
                "name": producrNameRef.current.value,
                "price": producrPriceRef.current.value,
                "Description" : producrDescriptionRef.current.value
            }
          }

         if(producrCategoryRef.current.value == "Groceries"){
             axios.post("http://localhost:1337/api/groceries-cats?populate=*",NewProductObj).then((res)=>{
                producrCategoryRef.current.value = "";
                producrNameRef.current.value = "";
                producrPriceRef.current.value = "";
                producrDescriptionRef.current.value = "";
                setPruductImage(null);
            }).catch((err)=>{
                console.log(err.response.data.error.message);
                console.log("1111111");
            })
         }else{
            axios.post("http://localhost:1337/api/juices?populate=*",NewProductObj).then((res)=>{
                console.log(res.data)
               }).catch((err)=>{
                   console.log(err.response.data.error.message);
                   console.log("1111111");
               })
         }
      


    };


    const handleSendNewProduct = ()=>{
        setShowModal(true);
        const data = new FormData();
        // data.append('files',{
        //     url: '../../../assets/Groceries/banana400.jpg',
        //     name: `banana400.jpg`,
        //     type: 'image/jpeg'
        // })
        // data.append(field,"Image")
        
        
       
    };

  return (
    <div style={{height:"90vh",position:"relative"}}>
        <div style={{height:"45vh" , backgroundColor:"black" ,position:"absolute",width:"100%",zIndex:"0"}}>
        </div>
        <div className="container position-relative" style={{top:"20%",zIndex:1}}>
                <div className="userDetails ">
                    <div className="d-flex justify-content-center" style={{height:"100px"}}>
                        
                        <div onClick={handleSunmit} className="userImage">
                            {
                                // image ? <img src={image} style={{width:"200px",cursor:"pointer"}}/> : <img src={profileIcon} style={{width:"120px",cursor:"pointer"}}/>
                                image ? <img src={URL.createObjectURL(image)} style={{width:"200px",cursor:"pointer"}}/> : <img src={profileIcon} style={{width:"120px",cursor:"pointer"}}/>
                            }
                        </div>
                         <div className="align-self-center">
                         <input ref={inputRef} style={{display:"none"}} type="file" name="files" onChange={handleChange}/>
                        </div> 
                    </div>
                    <div className="text-center">
                        <h2>Hello</h2>
                        <h3>{userData.user.firstName}</h3>          
                    </div>
                    <div>
                       <table className="table table-bordered w-75 m-auto rounded table-hover">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{userData.user.firstName}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{userData.user.lastName}</td>
                            </tr>
                            <tr>
                                <td>User Name</td>
                                <td>{userData.user.username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userData.user.email}</td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                       </table>
                    </div>
                    <div className="my-3 text-center"><button onClick={handleSendNewProduct}>Add Product</button></div>
                   
                </div>
        </div>
                <div onClick={()=>{setShowModal(false)}}  className={showModal == false? "d-none" : null} style={pruductModuleStyle}>
                    <div onClick={(e)=>{e.stopPropagation()}}  style={{width:"50%",backgroundColor:"var(--white)"}}>
                        <div style={{borderBottom:"1px solid #ddd",height:"30px",textAlign:"right"}}>
                             <span onClick={()=>{setShowModal(false)}} style={{backgroundColor:"red",color:"white",padding:"3px 14px",height:"inherit",display:"inline-block"}}> <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>  </span> 
                        </div>
                        <div>
                            <form action="" onSubmit={sendProductToDataBase} className="newProductForm p-3 d-flex flex-column gap-2">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="category">Category : </label>
                                        <select ref={producrCategoryRef} name="category" id="category" required>
                                            <option value="Groceries">Groceries</option>
                                            <option value="Juices">Juices</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="productName">Name : </label>
                                        <input ref={producrNameRef} type="text" placeholder="Product Name" required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="price">Price : </label>
                                        <input ref={producrPriceRef} type="text" placeholder="Product price" required/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label style={{verticalAlign:"top"}} htmlFor="description">Description : </label>
                                        <textarea ref={producrDescriptionRef} name="description" id="description"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="image">Image : </label>
                                        <input ref={productImageRef} onChange={(e)=>{setPruductImage(e.target.files[0])}} type="file" placeholder="Product price" required/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        Preview Image :
                                        <div style={{height:"150px",backgroundColor:"#ddd"}}>
                                            {
                                                !pruductImage ? <div className="defaultImage"><span>There Is No Image</span> </div>: <img src={URL.createObjectURL(pruductImage)} alt="" style={{width:"100%",height:"100%"}} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
    </div>
  )
}
