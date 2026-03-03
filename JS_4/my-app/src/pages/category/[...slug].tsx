import { useRouter } from "next/router";

const CategoryPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Halaman Category</h1>

            <h3>Daftar Parameter URL:</h3>

            <ul>
                {Array.isArray(slug) ? (
                    slug.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                ) : (
                    <li>Tidak ada parameter</li>
                )}
            </ul>
        </div>
    );
};

export default CategoryPage;