import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import TampilanProduk from "../../view/produk";
import { ProductType } from "@/type/product.type";

const Kategori = () => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) {
    return <p>Gagal mengambil data</p>;
  }

  return (
    <TampilanProduk products={isLoading ? [] : data.data} />
  );
};

export default Kategori;