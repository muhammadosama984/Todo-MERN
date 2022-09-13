import axios from 'axios';
import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api.js';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function LogIn({user, setUser}) {
  const navigation = useNavigate();

  const [form, setform] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user){
      navigation("/");
    }
  }, [])
  
 
  const [errors, seterrors] = useState(null);
 
  const handleChange=(e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit= async()=>{

    const result = await login(form);
    console.log("form", result);
    seterrors(null);
    

    if (result.status == 200){
     
      if (result.data.statusCode === 200){
        console.log("success here");
        localStorage.setItem("user", JSON.stringify(result.data.data));
       
        navigation("/");
        return;
      }
      if (result.data.statusCode === 201){
        seterrors(result.data.data);
        return;
      }

      if (result.data.statusCode === 202){
       toast(result.data.message);
       return;
      }
    }


  }


  return (
  <div className='container'>
    <ToastContainer/>
    <div className="row justify-content-center mt-4">
    <div className='col-lg-5 card border-primary mt-4'>
       
        <div className="card-body">
           <h4 className="card-title">LogIn Now</h4>
           <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email or Username</label>
      <input type="text" onChange={handleChange} name = "username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username"/>

      {
        errors?.username && <small id="emailHelp" class="form-text text-muted">{errors.username.msg}</small>
      }
      
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Password</label>
      <input type="password" onChange={handleChange} name = "password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password"/>
      {
        errors?.password && <small id="emailHelp" class="form-text text-muted">{errors.password.msg}</small>
      }
      
    </div>

    <button type="button" onClick={handleSubmit} class="btn btn-primary">Login</button>
        </div>

    </div>

     </div>
</div>
  )
}

export default LogIn