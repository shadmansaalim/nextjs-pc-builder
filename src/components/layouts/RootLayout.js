import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;