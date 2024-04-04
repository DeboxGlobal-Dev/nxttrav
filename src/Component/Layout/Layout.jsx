import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="page-container">
                <div className="page-content">
                    <div className="content-wrapper">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </>


    )
}

export default Layout