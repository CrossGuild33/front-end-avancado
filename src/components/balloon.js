import React, { useState } from "react";
import "../components/balloon.css";

const Balloon = () => {
    // State to toggle visibility of the information
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state
    const toggleInfo = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sobre">
            <div className="balloon" onClick={toggleInfo}>
                {/* Show balloon text or full content based on state */}
                {!isOpen ? (
                    <h3>Quem Somos Nós?</h3>
                ) : (
                    <section className="sobre__painel">
                       
                            <h2>XXXXX</h2>
                            <p>
                                Com anos de experiências, agora estamos com nossa loja virtual, para melhor atendê-los. <br /> Vá em sobre para saber mais.
                            </p>
                        
                    </section>
                )}
            </div>
        </div>
    );
};

export default Balloon;
