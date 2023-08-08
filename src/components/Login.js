import React, {useState} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [formErrors, setFormErrors] = useState([])
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault()
    let errors = []
    if(email === undefined || email === ''){
      errors.push('Please enter email address')
    }
    if(password === undefined || password.length < 8){
      errors.push("Password can't be less than 8 characters")
    }
    setFormErrors(errors)
    if(errors.length == 0){
      var user = sessionStorage.getItem(email);
      if(user == password){
        sessionStorage.setItem('token', email)
        navigate('/')
      }
      else{
        errors.push("Incorrect credentials")
      }
    }

    // console.log('sessionStorage', sessionStorage)
  }
  
  return (
    <div class='container'>
      <Navbar />
      <form onSubmit={handleSubmit} >
        <div class="form-group pt-4">
          
        <div className='text-center text-danger'>
          {
            formErrors.map(element => (
              <div >{element}</div> 
            ))
          }
        </div>

          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group pt-2">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div class="form-check pt-2">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
        </div>
        <button type="submit" class="btn btn-primary mt-4">Log In</button>
      </form>

      <p>Not resistered? Register <a href='register'>here</a></p>
    </div>
  )
}

export default Login