import DetailProduct from "@/view/DetailProduct";
import { ProductType } from "@/type/product.type";

const HalamanProdukServer = ({data} : { data: ProductType }) => {
    
    return (
        <div>
            <h1>Detail Produk-SSR</h1>
            <DetailProduct products={data} />
        </div>
    )
}

export default HalamanProdukServer;

export async function getServerSideProps( context: { params: { id: string } }) {
    const { params } = context;
    const id = params?.id;
    const res = await fetch(`http://localhost:3000/api/produk/${id}`);
    const json = await res.json();
    
    return { props: {data: json.data } };
}