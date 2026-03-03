import { useRouter } from "next/router";
import { useEffect,useState } from "react";

const UserSettingPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const {push} = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <div>
            User Setting Page
        </div>
    );
};

export default UserSettingPage;