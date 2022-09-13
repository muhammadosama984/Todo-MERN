import React from 'react'

function LogIn() {
  return (
  <div className='container'>
    <div className="row justify-content-center mt-4">
    <div className='col-lg-5 card border-primary mt-4'>
       
        <div className="card-body">
           <h4 className="card-title">LogIn Now</h4>
           <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email or Username</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email or username"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <button type="button" class="btn btn-primary">Login</button>
        </div>

    </div>

     </div>
</div>
  )
}

export default LogIn