// import './App.css';
// import './Components/Header';
// import './Components/MovieGallery';
// import './Components/TVGallery';

const login = () => {
    return (
        <>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default login;
