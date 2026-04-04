import Link from "next/link";
import { useRouter } from "next/router";
import style from "./register.module.css";

const TampilanRegister = () => {
    const router = useRouter();
    const handleLogin = () => {
        // Login logic here
        router.push("/produk");
    };
    return (
        <div className={style.register}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Register</h1>
            <button onClick={handleLogin}>Login</button>
            <h1 style={{color:'red',border:'1px solid red',borderRadius:'5px',padding:'5px'}}>Belum punya akun?</h1>
            <Link href="/auth/login">Ke Halaman Login</Link>
        </div>
    );
};

export default TampilanRegister;