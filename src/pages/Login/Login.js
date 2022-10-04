import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(email.match(emailRegex) && password.match(passwordRegex)){
      console.log('matches')
      localStorage.setItem('SignedIn', true);
      routeToHome();
    }
    console.log(email);
    console.log(password);
  }

  const routeToHome = () => {
    navigate('/');
  }

  return (
    <div className="login-page">
      <section className='login-page_card'>
        <form onSubmit={handleSubmit}>
          <h1 className='login-page_card--title'>Sign in</h1>

          <div className='login-page_card--group'>
            <input className='login-page_card--group_input' required value={email} type='email' onChange={(e) => setEmail(e.target.value)}></input>
            <label className='login-page_card--group_label'>Email</label>
          </div>

          <div className='login-page_card--group'>
            <input className='login-page_card--group_input' required value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
            <label className='login-page_card--group_label'>Password</label>
          </div>

          <button className='login-page_card--group_signin' type='submit'>Sign in</button>

        </form>
      </section>
    </div>
  )
}
