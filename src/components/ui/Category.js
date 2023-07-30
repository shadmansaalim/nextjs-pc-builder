import Link from 'next/link';
import React from 'react';

const Category = ({ category }) => {
    return (
        <Link href={`/categories/${category?._id}`}>
            <div className="card w-96 bg-white shadow-xl" style={{
                cursor: "pointer"
            }}>
                < figure > <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGNhdGVnb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category?.name}
                    </h2>
                </div>
            </div >
        </Link>
    );
};

export default Category;