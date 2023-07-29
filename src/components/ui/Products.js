import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div className="my-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                />)
            }
        </div>
    );
};

export default Products;