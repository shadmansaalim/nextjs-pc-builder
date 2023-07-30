import Rating from "react-rating";
import productStyles from "@/styles/Product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductDetailsPage = ({ product }) => {
    if (!product?.data) {
        return <p>Loading....</p>
    }

    const productFeatureKeys = Object.keys(product?.data?.keyFeatures);
    console.log(productFeatureKeys);

    return (
        <div className="my-20 mx-10">
            <div className="card bg-white shadow-xl">
                <figure><img src={product?.data?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.data?.productName}
                        <div className="badge badge-success">{product?.data?.status}</div>
                    </h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-success mr-1">BDT</span>
                            <span className="text-gray-900">{product?.data?.price}</span>
                        </div>
                        <div className="badge badge-outline">{product?.data?.category}</div>
                    </div>
                    <div>
                        <Rating
                            initialRating={product?.data?.individualRating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} className={productStyles.iconColor} />}
                            readonly
                        />
                    </div>
                    <div>
                        <p>{product?.data?.description}</p>
                    </div>
                    <div>
                        <h3 classNam="text-4xl">Product Key Features</h3>
                        <ul>
                            {productFeatureKeys.map((key) => (
                                <li key={key}>
                                    <strong>{key}: </strong>
                                    {product?.data?.keyFeatures[key]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;

export const getStaticPaths = async () => {

    const res = await fetch(`https://nextjs-pc-builder-inky.vercel.app/api/products`);
    const products = await res.json();


    const paths = products.data.map((product) => ({
        params: { productId: product._id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {


    const { params } = context;
    const res = await fetch(`https://nextjs-pc-builder-inky.vercel.app/api/products?productId=${params.productId}`);
    const data = await res.json();

    return {
        props: {
            product: data
        }
    }
}