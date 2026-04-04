import useSWR from "swr";
import styles from "./product.module.scss";
import fetcher from "../utils/swr/fetcher";
import TampilanProduk from "../view/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  category: string;
};

const Kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  const products: ProductType[] = data?.data || [];

  if (error) {
    return <p>Gagal mengambil data</p>;
  }

  return (
    <TampilanProduk products={products} />
  );
};

export default Kategori;