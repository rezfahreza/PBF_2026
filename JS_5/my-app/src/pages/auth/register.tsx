import Link from "next/link";

const HalamanRegister = () => {
    return (
        <div>
            <h1>Halaman Register</h1>
            
            <p>
                Sudah punya akun?
                <Link href="/auth/login">
                    ke Halaman Login
                </Link>
            </p>
        </div>
    );
};

export default HalamanRegister;