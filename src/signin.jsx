
import { useNavigate } from 'react-router-dom';
import './signin.css'
import { useState } from 'react';
function SignIn(){
    const navigate = useNavigate();
    const [error, setError] = useState('');
  
    const handleClick = (event) => {
      event.preventDefault(); 
      const isValid = validateForm();
      if (isValid) {
        navigate('/userVishwa'); 
      }
    };
  
    const validateForm = () => {
      
      const emailMobileInput = document.getElementById('emailMobileInput');
      const passwordInput = document.getElementById('passwordInput');
      const checkboxx=document.getElementById('hooola');
      const checkboxx1=document.getElementById('hooola1');
  
      if (!emailMobileInput.value || !passwordInput.value || !checkboxx.checked || !checkboxx1.checked) {
        setError('Please fill in all fields.'); 
        return false;
      }
  
      setError(''); 
      return true; 
    };
  

   return (
    <html>
        <div className='bor'>
            <img src="https://img.poorvika.com//login-img.jpeg" className='signin-img'></img>
            <a className='SignIn-a'>Register</a>

        <br></br>
            <br></br>
            <h2 className="reghead">Sign Up</h2>
            <br></br>
            <form>
        <label className="signin-label">Email/Mobile Number</label>
        <br /><br />
        <input id="emailMobileInput" className="signin-input" type='text' size={40} placeholder='Email/Mobile Number' required />
        <br /><br /><br />
        <label className="signin-label">Password_manan</label>
        <br /><br />
        <input id="passwordInput" type='password' className="signin-input" size={40} placeholder='Password' required />
        <a id="for">Forgot Password</a>
        <br /><br /><br />
        <input type='checkbox' className='signin-input' id="hooola1" required />
        <label id='no'>I agree to the terms and conditions_23bce0930</label>
        <br />
        <input type='checkbox' className='signin-input' id="hooola" required />
        <label id='no'>I am not a Robot_23bce0930</label>
        <br /><br /><br />

        {error && <div style={{ color: 'red', textAlign:'center'}}>{error}</div>} 
        <button className='signin-button' onClick={handleClick}>LOGIN</button>

        <br /><br />
      </form>
        </div>
    </html>
   )
}

export default SignIn;