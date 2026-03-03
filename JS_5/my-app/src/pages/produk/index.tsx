import TampilanProduk from "../view/produk";

const produk = () => {
    /*const [isLogin, setIsLogin] = useState(false);
    const {push} = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);*/
    return (
        <div>
            <TampilanProduk />
        </div>
    );
};

export default produk;