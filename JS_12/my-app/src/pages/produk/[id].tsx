import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import DetailProduct from "@/view/DetailProduct";
import { ProductType } from "@/type/product.type";

const HalamanProduk = () => {

    const {query} = useRouter();
    const productParam = query.id;
    const productId = Array.isArray(productParam) ? productParam[0] : productParam;

    const { data, error, isLoading } = useSWR<{ data: ProductType }>(
        productId ? `/api/produk/${productId}` : null,
        fetcher,
    );

    if (!productId) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Gagal memuat data produk.</div>;
    }

    if (!data || isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <DetailProduct products={data.data} />
    )
}

export default HalamanProduk;