import Product from '@/components/ui/Product';
import React from 'react';

const CategoryDetailsPage = ({ category, categoryProducts }) => {
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
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryDetailsPage;

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/categories");
    const categories = await res.json();


    const paths = categories.data.map((category) => ({
        params: { categoryId: category._id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    let res = await fetch(`http://localhost:3000/api/categories?categoryId=${params.categoryId}`);
    const category = await res.json();

    res = await fetch(`http://localhost:3000/api/products?category=${category.data.name}`);
    const products = await res.json();

    return {
        props: {
            category: category.data,
            categoryProducts: products.data
        }
    }
}