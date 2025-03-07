// src/components/Footer.js
import React from "react";


const MyFooter = () => {
    return (
        <footer class="footer">
            <p>
                <a href="https://www.facebook.com">
                    <img src={"facebook.jpeg"} alt="Facebook Logo"/>
                </a>

                <a href="https://www.instagram.com">
                    <img src={"twitter.png"} alt="Instagram Logo"/>
                </a>

                <a href="https://www.twitter.com">
                    <img src={"instagram.jpeg"} alt="Twitter Logo"/>
                </a>
            </p>
            <h2>Help</h2>
            <ol>
                <li>About US</li>
                <li>Device</li>
                <li>Help</li>
                <li>Forum</li>
                <li>Career</li>
            </ol>
            <h1></h1>
        </footer>
    );
};


// const styles = {
//     footer: {
//        position: fixed; /* Sticks the footer */
//     bottom: 0; /* Moves it to the bottom of the screen */
//     left: 0; /* Ensures it starts from the left */
//     width: 100%; /* Spans the full width of the page */
//     background-color: #222;
//     color: white;
//     text-align: center;
//     padding: 10px;
//     },
// //     link: {
// //         color: "#4CAF50",
// //         textDecoration: "none",
// //         marginLeft: "10px",
// //     },
// };

export default MyFooter;
