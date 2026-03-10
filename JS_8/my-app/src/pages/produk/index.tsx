import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import TampilanProduk from "../view/produk";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

//const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {

    const[products, setProducts] = useState([]);

    /*const fetchProducts = () => {
        fetch("/api/produk")
            .then((response) => response.json())
            .then((responseData) => setProducts(responseData.data))
            .catch((error) => console.error("Error fetching products:", error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);*/

    const { data, error, isLoading } = useSWR("/api/produk", fetcher);

    return (
        <TampilanProduk products={isLoading ? [] : data.data} />
    );
};

export default kategori;