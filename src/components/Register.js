import React, {useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [formErrors, setFormErrors] = useState([])

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault()
    let errors = []
    if(fname === undefined || fname === '' ){
      errors.push('Please enter FirstName')
    }
    if(lname === undefined || lname === ''){
      errors.push('Please enter LastName')
    }
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email === undefined || email.match(validRegex) === false ){
      errors.push('Please enter valid email address')
    }
    if(password === undefined || password.length < 8){
      errors.push("Password can't be less than 8 characters")
    }

    setFormErrors(errors)
    // console.log("errors", errors)
    if(errors.length == 0){
      sessionStorage.setItem(email, password);
      // console.log("session is stored")
      navigate("/login");
    }
    // console.log("formErrors",formErrors) 
  }
  
  return (
    <div class='container'>
      <Navbar />
      <form onSubmit={handleSubmit} className='py-4'>
      <div className='text-center text-danger'>
          {
            formErrors.map(element => (
              <div >{element}</div> 
            ))
          }
        </div>
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" value={fname} onChange={(e)=>setFname(e.target.value)} />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" value={lname} onChange={(e)=>setLname(e.target.value)} />
          </div>
        </div>  
        <div class="form-group pt-2">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group pt-2">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        
        <button type="submit" class="btn btn-primary mt-4 ">Register</button>
      </form>
      <p>Already a user? Login <a href='login'>here</a></p>
    </div>
  )
}

export default Register