import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api.js';

function LogIn() {

  const [form, setform] = useState({
    username: "",
    password: "",
  });

  const [errors, seterrors] = useState(null);
  const navigation = useNavigate();
  const handleChange=(e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit= async()=>{

    const result = await login(form);
    console.log("form", result);
    seterrors(null);
    

    if (result.status == 200){
      if (result.data.status === 200){
        localStorage.setItem('user', JSON.stringify(result.data.data));
        navigation("/");
        return;
      }
      if (result.data.status === 201){
        seterrors(result.data.data);
        return;
      }

      if (result.data.status === 202){
        
      }
    }


  }


  return (
  <div className='container'>
    <div className="row justify-content-center mt-4">
    <div className='col-lg-5 card border-primary mt-4'>
       
        <div className="card-body">
           <h4 className="card-title">LogIn Now</h4>
           <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email or Username</label>
      <input type="text" onChange={handleChange} name = "username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Password</label>
      <input type="password" onChange={handleChange} name = "password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <button type="button" onClick={handleSubmit} class="btn btn-primary">Login</button>
        </div>

    </div>

     </div>
</div>
  )
}

export default LogIn