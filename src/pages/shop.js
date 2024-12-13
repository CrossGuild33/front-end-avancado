import '../pages/shop.css';
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

//components
import Balloon from '../components/balloon.js';
import Chart from '../components/chart.js';
import Footer from '../components/Footer';

const url = "http://localhost:3000/products";

const Shop = ({chartItems}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const { data: items, httpConfig, loading, error } = useFetch(url);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !price) {
            alert("Preencha todos os campos.");
            return;
        }
        const product = { name, price };
        await httpConfig(product, "POST");
        setName("");
        setPrice("");
    };

    const handleRemove = (id) => {
        httpConfig(id, "DELETE");
    };

    return (
        <div className="Shop">
            <div className='component-1'>    
                <Balloon />   
            </div>
             
            <div className='component-2'>
                <Chart items={chartItems} />
            </div>

            <h1>Loja  <br />Busque por seu produto</h1>
            {loading && <span>Loading...</span>}
            {error && <span>Error loading products!</span>}
            {!loading && !error && (
                <ul>
                    {items &&
                        items.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}
                                <button onClick={() => handleRemove(item.id)}>X</button>
                            </li>
                        ))}
                </ul>
            )}
            <div className="add-Products">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Adicionar" disabled={loading} />
                </form>
            </div>
            <Footer pageName="LOJA" />
        </div>
         
    );
};

export default Shop;
