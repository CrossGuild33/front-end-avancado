import React from "react";
import "../pages/home.css";

// Components
import Balloon from "../components/balloon"; // Quem Somos Nós
import Chart from "../components/chart"; // Chart button
import Footer from "../components/Footer"

const Home = ({ chartItems }) => {
    return (
        <div className="home">
            {/*  Balão à esquerda (Quem Somos Nós?) */}
            
                <Balloon />
           

            {/* Carrinho (chart) a direita do Header */}
          
                <Chart items={chartItems} />
            

            {/* Main Content Section */}
            <section className="main-content">
                <div className="content-container">
                    <div className="text-box">
                        <p>Vendemos móveis de todos os tipos:</p>
                        <ul>
                            <li>Armários</li>
                            <li>Estantes</li>
                            <li>Cômodas</li>
                            <li>Etc...</li>
                        </ul>
                    </div>
                    <div className="image"></div>
                </div>
            </section>
            <Footer pageName="HOME" />
        </div>
    );
};

export default Home;
