import React from 'react';
import Category from './Category';

const Categories = () => {
    return (
        <div className="my-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
    );
};

export default Categories;