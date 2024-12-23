import React from "react";
import './Footer.css'

const Footer = () =>{
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                
                <div className="flexColStart f-left">
                    <img src="./newCity.png" alt="" width={120} />

                    <span className="secondaryText">
                        Our Vision is to make all people <br/>
                        the best place to live for them.
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">No.145,Main Street,Colombo04</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer