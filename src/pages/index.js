import RootLayout from "@/components/layouts/RootLayout";
import Categories from "@/components/ui/Categories";
import Products from "@/components/ui/Products";


const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-20">
          <h1 className="text-center text-6xl">Featured Products</h1>
          <Products />
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