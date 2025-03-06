// src/components/Footer.js
import React from "react";
import facebook from "download.jpeg";
import instagram from "instagram.jpeg"
import twitter from "twitter.png"

const myFooter = () => {

    return (
        <footer>
            <p>
                <a href="www.facebook.com">
                    <img src={facebook} alt="Facebook Logo"/>
                </a>

                <a href = "www.instagram.com">
                    <img src={instagram}/>
                </a>

                <a href = "www.twitter.com">
                    <img src={twitter}/>
                </a>

            </p>
        </footer>
    );
};

// const styles = {
//     footer: {
//         backgroundColor: "#222",
//         color: "#fff",
//         textAlign: "center",
//         padding: "10px 0",
//         position: "fixed",
//         bottom: "0",
//         width: "100%",
//     },
//     link: {
//         color: "#4CAF50",
//         textDecoration: "none",
//         marginLeft: "10px",
//     },
//};

export default myFooter();
