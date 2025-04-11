import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MoviesPage from "./Components/MoviesPage";
import TVShowsPage from "./Components/TVShowsPage";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import Footer from "./Components/Footer";
import Login from "./Components/Login"
import Registration from "./Components/Registration"
import ContentSection from "./Components/ContentSection";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Dashboard from './Components/Dashboard';

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/tv-shows" element={<TVShowsPage />} />
                <Route path="/details/:id" element={<MovieDetailsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="/search" element={<SearchBar />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <ContentSection />
            <Footer />
        </Router>
    );
}

export default App;
