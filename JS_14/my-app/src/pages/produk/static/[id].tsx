import DetailProduct from "@/view/DetailProduct";
import { ProductType } from "@/type/product.type";

const HalamanProdukStatic = ({data} : { data: ProductType }) => {
    
    return (
        <div>
            <h1>Detail Produk-SSG</h1>
            <DetailProduct products={data} />
        </div>
    )
}

export default HalamanProdukStatic;

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/produk");
    const responses : { data: ProductType[] } = await res.json();

    const paths = responses.data.map((product: ProductType) => ({
        params: { id: product.id }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
    const data : { data: ProductType[] } = await res.json();

    return {
        props: {
            data : data.data
        }
    };
}