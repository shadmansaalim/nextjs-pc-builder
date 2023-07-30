import RootLayout from "@/components/layouts/RootLayout";
import Categories from "@/components/ui/Categories";
import Products from "@/components/ui/Products";


const HomePage = ({ products, categories }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-20">
          <h1 className="text-center text-6xl">Featured Products</h1>
          <Products products={products} />
        </div>
        <div className="my-20">
          <h1 className="text-center text-6xl mt-4">Featured Categories</h1>
          <Categories categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {

  if (typeof window === 'undefined') {
    return {
      props: {
        products: [],
        categories: []
      },
    };
  }

  // Requirement says to fetch random 6 products
  const limit = 6;

  let res = await fetch(`${process.env.URL}/api/products?limit=${limit}`)
  const products = await res.json();

  res = await fetch(`${process.env.URL}/api/categories`);
  const categories = await res.json();

  return {
    props: {
      products: products.data,
      categories: categories.data
    },
    revalidate: 10
  };
}

