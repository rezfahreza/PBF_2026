import useSWR from "swr";
import styles from "./product.module.scss";
import fetcher from "../utils/swr/fetcher";

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
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={styles.produk__content__skeleton}>
                <div className={styles.produk__content__skeleton__image + " " + styles["animate-pulse"]}></div>
                <div className={styles.produk__content__skeleton__name + " " + styles["animate-pulse"]}></div>
                <div className={styles.produk__content__skeleton__category + " " + styles["animate-pulse"]}></div>
                <div className={styles.produk__content__skeleton__price + " " + styles["animate-pulse"]}></div>
              </div>
            ))
          : products.map((product) => (
              <div
                key={product.id}
                className={styles.produk__content__item}
                style={{ width: "200px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.produk__content__item__image}
                />
                <h2 className={styles.produk__content__item__name}>
                  {product.name}
                </h2>
                <p className={styles.produk__content__item__category}>
                  {product.category}
                </p>
                <p className={styles.produk__content__item__price}>
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Kategori;