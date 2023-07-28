import Rating from "react-rating";
import productStyles from "@/styles/Product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = () => {

    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure><img src="https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-1-15ada7/ideapad-1-15ada7-04-200x200.webp" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Lenovo IdeaPad
                    <div className="badge badge-success">In Stock</div>
                </h2>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-success mr-1">BDT</span>
                        <span className="text-gray-900">75,213</span>
                    </div>
                    <div className="badge badge-outline">Others</div>
                </div>
                <div>
                    <Rating
                        initialRating={2}
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