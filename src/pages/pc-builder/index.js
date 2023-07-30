import RootLayout from "@/components/layouts/RootLayout";
import Link from "next/link";

const PCBuilderPage = ({ categories }) => {
    return (
        <div className="m-20">
            <h2>Categories</h2>
            <ul className="mt-2">
                {
                    categories.map(category => <li className="my-2">
                        <div className="flex justify-between items-center bg-white p-2">
                            <p className="m-0">{category.name}</p>
                            <Link href={`/pc-builder/${category._id}`}>
                                <button className="btn btn-accent">Select</button>
                            </Link>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/categories")
    const categories = await res.json();

    return {
        props: {
            categories: categories.data
        }
    };
}
