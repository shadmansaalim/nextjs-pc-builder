import React from 'react';
import Category from './Category';

const Categories = ({ categories }) => {
    console.log(categories);
    return (
        <div className="my-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {
                categories?.map(category => <Category
                    category={category}
                    key={category._id}
                />)
            }
        </div>
    );
};

export default Categories;