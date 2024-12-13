import React from "react";
import "../pages/About.css";

// Components
import Chart from "../components/chart";
import Balloon from "../components/balloon.js";
import Footer from '../components/Footer.js';

const About = ({ chartItems }) => {
    return (
        <div className="about-page">
            {/* Balloon Section */}
            <Balloon />

            {/* Content Section */}
            <div className="content-wrapper">
                <div className="box text-box">
                    <p>
                    P.. conhecido também como índio, <br/>há anos trabalhando na área de vendas e como marceneiro, resolvi então unir os dois, abrindo
                    então minha própria loja. Com satisfação hoje funcionando há 20 anos e para melhor atender, hoje também trabalho na área virtual.                        
                    </p> 
                </div>
                <div className="box image-box"> 
                </div>
            </div>

            {/* Chart Section */}
            <div className="chart-section">
                <Chart items={chartItems} />
            </div>
            <Footer pageName="SOBRE"  />
        </div>
    );
};

export default About;
