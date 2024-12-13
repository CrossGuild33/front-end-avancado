import React, { useState, useEffect } from "react";
import "./chart.css";

const Chart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "http://localhost:3000/products";

    // Fetch data from db.json
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Toggle chart visibility
    const toggleChart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chart">
            <button className="chart-toggle" onClick={toggleChart}>
                {isOpen ? "X" : "Chart"}
            </button>

            {isOpen && (
                <div className="chart-content">
                    <h2>Chart</h2>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && (
                        <>
                            {items.length > 0 ? (
                                <ul>
                                    {items.map((item) => (
                                        <li key={item.id}>
                                            {item.name} - ${item.price}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Vazio.</p>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Chart;
