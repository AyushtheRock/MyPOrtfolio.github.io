import React from 'react';
import Navbar from './sections/navbar/Navbar.jsx';
import Header from './sections/header/Header.jsx';
import About from './sections/about/About.jsx';
import Services from './sections/services/Services.jsx';
import Portfolio from './sections/portfolio/Portfolio.jsx';
import Footer from './sections/footer/Footer.jsx';
import Contact from './sections/contact/Contact.jsx';
import Theme from './theme/Theme.jsx';
import { useThemeContext } from './context/theme-context.js';


function App() {
  const {themeState} = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Theme />
    </main>
  )
}

export default App;