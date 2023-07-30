import RootLayout from "@/components/layouts/RootLayout";
import { setComponents } from "@/redux/features/components/componentSlice";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

const PCBuilderPage = ({ categories }) => {
    const { components, componentCount } = useSelector(state => state.component)
    console.log(components);

    return (
        <div className="m-20">
            <h2 className="text-2xl">Components</h2>
            <ul className="mt-2">
                {
                    components.map(component => <>
                        {
                            component?.productName
                                ?
                                <li className="my-2">
                                    <div className="bg-white p-2">
                                        <p className="m-0">{component.productName}</p>
                                        <div>
                                            <figure><img src={component?.image} alt="Shoes" /></figure>
                                        </div>
                                    </div>
                                </li>
                                :
                                <li className="my-2">
                                    <div className="flex justify-between items-center bg-white p-2">
                                        <p className="m-0">{component.name}</p>
                                        <Link href={`/pc-builder/${component._id}`}>
                                            <button className="btn btn-accent">Select</button>
                                        </Link>
                                    </div>
                                </li>
                        }
                    </>)
                }
            </ul>
            <div className="mt-8">
                <button disabled={
                    componentCount < 5
                        ?
                        true
                        :
                        false
                } className="btn btn-primary w-full">Complete Build</button>
            </div>
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
