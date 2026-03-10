import { useEffect, useState } from "react";
import styles from "./product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  category: string;
};

const Kategori = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    setLoading(true);

    fetch("/api/produk")
      .then((res) => res.json())
      .then((resData) => {
        setProducts(resData.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={styles.produk__content__skeleton}>
                <div className={styles.produk__content__skeleton__image + " " + styles["animate-pulse"]}></div>
                <div className={styles.produk__content__skeleton__name + " " + styles["animate-pulse"]}></div>
                <div className={styles.produk__content__skeleton__category + " " + styles["animate-pulse"]}></div>
                <div className={styles.produk__content__skeleton__price + " " + styles["animate-pulse"]}></div>
              </div>
            ))
          : products.map((product) => (
              // Menambahkan inline width agar lebarnya sama dengan skeleton
              <div key={product.id} className={styles.produk__content__item} style={{ width: "200px" }}>
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