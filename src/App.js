import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MoviesPage from "./Components/MoviesPage";
import TVShowsPage from "./Components/TVShowsPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/tv-shows" element={<TVShowsPage />} />
                <Route path="/details/:type/:id" element={<MovieDetailsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
