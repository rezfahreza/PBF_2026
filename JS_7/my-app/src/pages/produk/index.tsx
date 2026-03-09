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

    const fetchProducts = () => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responseData) => setProducts(responseData.data))
            .catch((error) => console.error("Error fetching products:", error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-5 hover:bg-blue-600 transition" onClick={fetchProducts}>
                Refresh Data
            </button>
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