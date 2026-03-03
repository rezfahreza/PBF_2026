import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const {push} = useRouter();
    const handleLogin = () => {
        // Login logic here
        push("/produk");
    };
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => push('/produk')}>Login</button>
            <button onClick={() => handleLogin()}>Login</button>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default HalamanLogin;