const Registration = () => {
    return (
        <div className="auth-page">
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="firstName">First name:</label>
                <input type="text" id="firstName" name="firstName"/>

                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" name="lastName"/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Registration;
