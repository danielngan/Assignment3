import { useState } from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        console.log("Submitting login form with data:", formData);

        try {
            const res = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                console.log('Login successful:', data);
                setSuccess(true);
                //const customerRes = await fetch(`/api/users/getCustomerByEmail?email=${encodeURIComponent(loginData.email)}`);

                // Optional: store token
                // localStorage.setItem('token', data.token);
                //localStorage.setItem('user', JSON.stringify(data.user));

                // Optional: redirect
                // navigate('/dashboard');
                //navigate('/dashboard');
            } else {
                const msg = await res.text();
                setError(msg || 'Login failed.');
                alert('Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Network error');
            alert('Login failed. Please check your credentials.');
        }
    }




        return (
            <div className="auth-page">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="email" name="email" value={formData.email}
                           onChange={handleChange}/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password}
                           onChange={handleChange}/>

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    };


export default Login;
