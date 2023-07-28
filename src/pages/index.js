import RootLayout from "@/components/layouts/RootLayout";
import Products from "@/components/ui/Products";


const HomePage = () => {
  return (
    <div>
      <h1 className="text-center text-6xl mt-4">Featured Products</h1>
      <div className="container mx-auto">
        <Products />
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};