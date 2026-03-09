import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
};

const kategori = () => {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/produk")
            .then((responses) => responses.json())
            .then((responsesdata) => setProducts(responsesdata.data))
            .catch((error) => console.error("Error fetching products: ", error));
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            {products.map((products: ProductType) => (
                <div key={products.id}>
                    <h2>{products.name}</h2>
                    <p>Kategori: {products.category}</p>
                    <p>Harga: Rp {products.price}</p>
                    <p>Ukuran: {products.size}</p>
                </div>
            ))}
        </div>
    );
};

export default kategori;