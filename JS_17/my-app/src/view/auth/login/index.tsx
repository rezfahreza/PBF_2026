import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./login.module.scss";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";

    const handleSubmit = async (event: any,) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            });

            if (res?.error) {
                setIsLoading(false);
                setError(res?.error || "Login failed");
            } else {
                setIsLoading(false);
                push(callbackUrl);
            }
        } catch (error) {
            setIsLoading(false);
            setError("wrong email or password");
        }

    };
    return (
        <>
        <div className={style.login}>
            <h1 className={style.login__title}>Halaman Login</h1>
            <div className={style.login__form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.login__form__item}>
                        <label
                            htmlFor="email"
                            className={style.login__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={style.login__form__item__input}
                        />
                    </div>
                    <div className={style.login__form__item}>
                        <label
                            htmlFor="password"
                            className={style.login__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            className={style.login__form__item__input}
                        />
                    </div>
                    {error && <p className={style.login__error}>{error}</p>}
                    <button
                        type="submit"
                        className={style.login__form__item__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                    <br /><br />
                    <button
                        onClick={() => signIn("google", {callbackUrl, redirect: false})}
                        className={style.login__form__item__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "sign in with google"}
                    </button>
                </form>
                <br />
                <p className={style.login__form__item__text}>
                    belum punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
                </p>
            </div>
        </div>
        </>
    );
};

export default TampilanLogin;