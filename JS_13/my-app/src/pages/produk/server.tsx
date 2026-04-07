import TampilanProduk from "../../view/produk";
import { ProductType } from "../../type/product.type";

const halamanProdukServer = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Server</h1>
            <TampilanProduk products={products} />
        </div>
    );
};
export default halamanProdukServer;

export async function getServerSideProps() {
    // Simulate an API call to fetch products
    const res = await fetch('http://localhost:3000/api/produk');
    const response = await res.json();

    return {
        props: {
            products: response.data, // Pass the products data to the page component
        }
    };
}