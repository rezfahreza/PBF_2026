import style from '../styles/404.module.scss';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className={style.error}>
        <img src="/page-not-found.png" alt="404" className={style.error_image} />
      <h1 className={style.error_title}>404 - Halaman Tidak Ditemukan</h1>
      <p className={style.error_text}>Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link href="/" className={style.error_button}>
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
};

export default Custom404;