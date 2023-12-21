import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';

const App = () => {
  const images = [
    './assets/busycity.jpeg',
    './assets/citypark.jpeg',
    './assets/houseparty.jpg'
  ];

  return (
    <div>
        <Header />
        <ImageCarousel images={images} />
    </div>
  );
};

export default App;