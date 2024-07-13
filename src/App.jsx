import Navbar from './componentsJSX/navbar';
import Header from './componentsJSX/header';
import Pricing from './componentsJSX/pricing';
import About from './componentsJSX/about';
import Contact from './componentsJSX/contact';
import Footer from './componentsJSX/footer';
import Counter from './componentsJSX/counter'
import BMI from './componentsJSX/bmi'
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      {/* For Navbar */}
      <Navbar />
      
        {/* For Home */}
        <Element name='Home'>
          <Header/>
        </Element>

        {/* For Pricing */}
        <Element name='Pricing'>
          <Pricing/>
        </Element>
        
        {/* For Customer Counter */}
        <Counter/>
      
        {/* For Contact-Us */}
        <Element name='ContactUs'>
          <Contact/>
        </Element>

        {/* For BMI Calculator */}
        <BMI/>

        {/* For About-Us */}
        <Element name='AboutUs'>
          <About/>
        </Element>
      
      {/* For Footer */}
      <Footer />
    </>
  );
}

export default App;
