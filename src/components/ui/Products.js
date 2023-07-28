import React from 'react';
import Product from './Product';

const Products = () => {
    return (
        <div className="my-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default Products;