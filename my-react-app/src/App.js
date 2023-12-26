import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Sectionlucky from "./components/Section_lucky/Section_lucky";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Header />

      <Section />

      <Sectionlucky/>

      <Catalog />

      <Footer/>

    </>
  );
}

export default App;
