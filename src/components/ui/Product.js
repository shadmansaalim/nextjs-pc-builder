import Rating from "react-rating";
import productStyles from "@/styles/Product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product }) => {
    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure><img src={product?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product?.productName}
                    <div className="badge badge-success">{product?.status}</div>
                </h2>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-success mr-1">BDT</span>
                        <span className="text-gray-900">{product?.price}</span>
                    </div>
                    <div className="badge badge-outline">{product?.category}</div>
                </div>
                <div>
                    <Rating
                        initialRating={product?.individualRating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon icon={faStar} className={productStyles.iconColor} />}
                        readonly
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;