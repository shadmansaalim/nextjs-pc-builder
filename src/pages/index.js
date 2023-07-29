import RootLayout from "@/components/layouts/RootLayout";
import Categories from "@/components/ui/Categories";
import Products from "@/components/ui/Products";


const HomePage = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-20">
          <h1 className="text-center text-6xl">Featured Products</h1>
          <Products products={products} />
        </div>
        <div className="my-20">
          <h1 className="text-center text-6xl mt-4">Featured Categories</h1>
          <Categories />
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
  // Requirement says to fetch random 6 products
  const limit = 6;
  const res = await fetch(`http://localhost:3000/api/products?limit=${limit}`)
  const data = await res.json();

  return {
    props: {
      products: data.data
    },
    revalidate: 10
  };
}