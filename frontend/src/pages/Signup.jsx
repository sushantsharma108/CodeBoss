import { useState } from 'react';
import regImg from '../assets/front-image.svg';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
    <section>
      <main>
        <div className="registration">
          <div className="container grid grid-two-cols">

            <div className="registration-image">
              <img src={regImg} alt="girl doing registration" width={760} height={600} />
            </div>

            <div className="registration-form">
              <h2>Sign up</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" name='username' placeholder="Name" value={user.username} onChange={handleInput} autoComplete='off' required/>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" name='email' placeholder="Email" value={user.email} onChange={handleInput} autoComplete='off' required/>
                <label htmlFor="phone">Phone</label>
                <input id='phone' type="number" name='phone' placeholder="Phone" value={user.phone} onChange={handleInput} autoComplete='off' required/>
                <label htmlFor="password">Password</label>
                <input id='password' type="password" name='password' placeholder="Password" value={user.password} onChange={handleInput} autoComplete='off' required/>
                <br />
                <button type="submit" className='btn btn-submit'>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Signup
