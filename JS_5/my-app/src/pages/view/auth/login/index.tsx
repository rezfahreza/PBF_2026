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
        <div className="min-h-screen flex bg-gray-200">
            
            <div className="m-auto shadow-lg bg-white text-center">
                <h3>Login Pages</h3>
                <div>
                    <input type="text" placeholder="login" />
                </div>
                <div>
                    <input type="password" placeholder="password" />
                </div>
                <button onClick={handleLogin}>
                    LOG IN
                </button>
                <hr />
                <p>
                    <Link href="/auth/register">Belum punya akun? Register di sini</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;