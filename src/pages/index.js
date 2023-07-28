import RootLayout from "@/components/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};