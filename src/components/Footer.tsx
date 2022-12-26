import React from 'react'
import logo from "../assets/chef.png"

export default function Footer() {
  return (
    <div>
        <footer className="footer-distributed">
            <div className="footer-left">
                <img src={logo} alt="logo" height="50px" width="50px"></img>
                <h1>Yummy</h1>
                <p className="footer-links">
                    <a href="/">Home</a>
                    <a href="/recipes">Recipes</a>
                    <a href="/favorites">Favorites</a>
                    <a href="/contact">Contact</a>
                </p>
                <p className="footer-company-name">&copy; The Yummy Company - 2022</p>
            </div>
            <div className="footer-center">
            <div>
            <i className="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            </div>
            <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
            </div>
            <div>
            <i className="fa fa-envelope"></i>
            <p><a href="#">support@yummycompany.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
            <span>About the company</span>
            The Yummy Company shares with you its best recipes fetched around the different cuisines in the world. Enjoy!
            </p>
        </div>
        </footer>
    </div>
    )
}
