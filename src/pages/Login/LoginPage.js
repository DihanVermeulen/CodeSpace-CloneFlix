import './LoginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const [isLoginPage, setIsLoginPage] = useState(true);

  const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    let users = JSON.parse(localStorage.getItem('users'));

    const handleSubmit = (event) => {
      event.preventDefault();
      let usernameRegex = /^[A-Za-z]+$/;
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

      if (email.match(emailRegex) && password.match(passwordRegex) && username.match(usernameRegex)) {
        console.log('matches');
        let emailAlreadyExists = false;
        users.map(user => {
          console.log('mapping users');
          if (user.email === email) {
            emailAlreadyExists = true;
          }
          else {
            emailAlreadyExists = false;
          }
        });
        console.log(emailAlreadyExists)
        if (!emailAlreadyExists) {
          console.log()
          let userId = users.length;
          users.push({
            'id': userId,
            'username': username,
            'email': email,
            'password': password,
            'watchlist': []
          });
          localStorage.setItem('users', JSON.stringify(users));
          console.log('set users')
          localStorage.setItem('SignedIn', true);
          navigate('/');
          console.log(email);
          console.log(password);
        }
        else {
          console.log('email already exists');
          document.querySelector('#emailSignup .login-page_card--error_message').style.display = 'block';
        }
      }
    }

    return (
      <section className='login-page_card'>
        <form onSubmit={handleSubmit}>
          <h1 className='login-page_card--title'>Sign Up</h1>

          <div id='usernameSignup' className='login-page_card--group'>
            <input className='login-page_card--group_input' required value={username} type='text' onChange={(e) => setUsername(e.target.value)}></input>
            <label className='login-page_card--group_label'>Username</label>
            <div className='login-page_card--message'>Username must only contain letters</div>
          </div>

          <div id='emailSignup' className='login-page_card--group'>
            <input className='login-page_card--group_input' required value={email} type='email' onChange={(e) => setEmail(e.target.value)}></input>
            <label className='login-page_card--group_label'>Email</label>
            <p className='login-page_card--error_message'>Email is already registered</p>
          </div>

          <div id='passwordSignup' className='login-page_card--group'>
            <input className='login-page_card--group_input' required value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
            <label className='login-page_card--group_label'>Password</label>
            <p className='login-page_card--message'>Password must contain uppercase and lowercase letters, as well as a number and special symbol</p>
          </div>

          <button className='login-page_card--group_signin' type='submit'>Sign Up</button>

        </form>
      </section>
    )
  }

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (email.match(emailRegex) && password.match(passwordRegex)) {
        console.log('matches')
        localStorage.setItem('SignedIn', true);
        navigate('/');
      }
      console.log(email);
      console.log(password);
    }

    return (
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
            <p className='login-page_card--error_message'>Incorrect password</p>
          </div>

          <button className='login-page_card--group_signin' type='submit'>Sign in</button>
          <div className='login-page_card--help'>
            <a onClick={() => setIsLoginPage(false)}>Sign Up</a>
            <a>Forgot Password</a>
          </div>

        </form>
      </section>
    )
  }

  return (
    <div className="login-page">

      {isLoginPage && <Login />}
      {!isLoginPage && <Signup />}
    </div>
  )
}
