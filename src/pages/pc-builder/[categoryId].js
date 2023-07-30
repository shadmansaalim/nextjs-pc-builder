import Product from '@/components/ui/Product';
import { addProduct, setComponents } from '@/redux/features/components/componentSlice';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const CategoryDetailsPage = ({ category, categoryProducts }) => {
    const dispatch = useDispatch();
    const { components } = useSelector(state => state.component);

    const router = useRouter();

    const handleAddToBuilder = (product) => {
        dispatch(addProduct(product));
        router.push('/pc-builder')
    }

    return (
        <div className="my-20 mx-10">
            <div className="card bg-white shadow-xl">
                < figure > <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGNhdGVnb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category?.name}
                    </h2>
                </div>
            </div>
            <div className="container mx-auto mt-4">
                <h2 className="text-4xl text-white">Products of category {category?.name}</h2>
                <div className="my-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {
                        categoryProducts.map(product => <Product
                            key={product._id}
                            product={product}
                            builderButton={true}
                            handleAddToBuilder={handleAddToBuilder}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryDetailsPage;

export const getStaticPaths = async () => {
    if (typeof window === 'undefined') {
        return { paths: [], fallback: false }
    }
    const res = await fetch(`${process.env.URL}/api/categories`);
    const categories = await res.json();


    const paths = categories.data.map((category) => ({
        params: { categoryId: category._id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {

    if (typeof window === 'undefined') {
        return {
            props: {
                category: [],
                categoryProducts: []
            }
        }
    }

    const { params } = context;
    let res = await fetch(`${process.env.URL}/api/categories?categoryId=${params.categoryId}`);
    const category = await res.json();

    res = await fetch(`${process.env.URL}/api/products?category=${category.data.name}`);
    const products = await res.json();

    return {
        props: {
            category: category.data,
            categoryProducts: products.data
        }
    }
}