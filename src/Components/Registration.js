import { useState } from 'react';


    const Registration = () => {
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await fetch('/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('User registered:', data);
                    alert('Registration successful!');
                    // Optional: redirect or show success message
                } else {
                    const error = await response.text();
                    console.error('Error registering user:', error);
                }
            } catch (err) {
                console.error('Network error:', err);
            }
        };

        return (
            <div className="auth-page">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName}
                           onChange={handleChange}/>

                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName}
                           onChange={handleChange}/>

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={formData.email}
                           onChange={handleChange}/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password}
                           onChange={handleChange}/>

                    <button type="submit">Sign up</button>
                </form>
            </div>
        );


}

export default Registration;
