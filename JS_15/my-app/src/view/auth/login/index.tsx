import Link from "next/link";
import { useRouter } from "next/router";
//import style from "./login.module.css";
import style from "./login.module.scss";

const TampilanLogin = () => {
    const router = useRouter();
    const handleLogin = () => {
        // Login logic here
        router.push("../produk");
    };
    return (
        <div className={style.login}>
            <img src="/login_images.png" alt="Login" className={style.login_image} />
            <p>Ini Halaman Login</p>
            
            <div className={style.login_card}>
                <h3 className={style.login_title}>Login Pages</h3>
                <div className={style.login_form}>
                    <input type="text" placeholder="login" className={style.login_input} />
                </div>
                <div className={style.login_form}>
                    <input type="password" placeholder="password" className={style.login_input} />
                </div>
                <button onClick={handleLogin} className={style.login_button}>
                    LOG IN
                </button>
                <hr />
                <p className={style.login_register}>
                    <Link href="/auth/register">Belum punya akun? Register di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;