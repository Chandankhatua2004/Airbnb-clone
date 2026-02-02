import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import FeaturedProperties from './component/FeaturedProperties';
import MobileBottomNav from './component/MobileBottomNav';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App pt-60">
      <Navbar />
      <FeaturedProperties />
      <MobileBottomNav />
      <Footer />
    </div>
  );
}

export default App;
