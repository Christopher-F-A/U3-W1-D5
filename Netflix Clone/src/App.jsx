import MyNavbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <MyNavbar />

      <div className="container-fluid px-4">
        <Gallery title="Harry Potter" searchQuery="Harry Potter" />
        <Gallery title="Lord of the Rings" searchQuery="Lord of the Rings" />
        <Gallery title="Star Wars" searchQuery="Star Wars" />

        <Footer />
      </div>
    </>
  );
};

export default App;
