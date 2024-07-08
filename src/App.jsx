import Navbar from './componentsJSX/navbar';
import Header from './componentsJSX/header';
import Pricing from './componentsJSX/pricing';
import About from './componentsJSX/about';
import Contact from './componentsJSX/contact';
import Footer from './componentsJSX/footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Navbar />
        <Element name='Home'>
          <Header/>
        </Element>
        <Element name='Pricing'>
          <Pricing/>
        </Element>
        <Element name='AboutUs'>
          <About/>
        </Element>
        <Element name='ContactUs'>
          <Contact/>
        </Element>
      <Footer />
    </>
  );
}

export default App;
