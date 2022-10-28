import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signIn, signInGoogle,signInGit} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [error,setError] = useState(null);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length<6) {
            setError('Password is too short!')
            return ;
        }

        signIn(email,password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true});
        })
        .catch(error => console.error(error));
        
    }

    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(err => console.error(err));
    }
    const handleGitSignIn = () =>{
        signInGit()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(err => console.error(err));
    }
    return (
        <div className='form-conatiner'>
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handleSubmit} action="">
            
            
        </form>
        <p>New here?<Link to='/register'>Create New Account!</Link></p>
        <button className='btn-primary' onClick={handleGoogleSignIn} type="submit">Google</button>
        <button className='btn-primary' onClick={handleGitSignIn} type="submit">Github</button>

    </div>
    );
};

export default Login;