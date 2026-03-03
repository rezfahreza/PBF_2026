import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const TampilanProduk = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const { push } = useRouter();
    
    // useEffect(() => {
    //     if (!isLogin) {
    //         push('/auth/login');
    //     }
    // }, []);

    return (
        <div>
            <HeroSection />
            <MainSection />
        </div>
    );
};

export default TampilanProduk;