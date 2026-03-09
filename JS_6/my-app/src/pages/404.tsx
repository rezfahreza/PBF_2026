import style from '../styles/404.module.scss';

const Custom404 = () => {
  return (
    <div className={style.error}>
        <img src="/page-not-found.png" alt="404" className={style.error_image} />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

export default Custom404;