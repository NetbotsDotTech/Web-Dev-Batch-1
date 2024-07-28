import React from 'react';
import Typography from '@mui/material/Typography';
import ImageCard from './ImageCard';

const ImageCategory = ({ category }) => {
  // Replace with actual image data
  const images = [
    { src: 'image1.jpg' },
    { src: 'image2.jpg' },
    // ...
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        {category}
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} />
        ))}
      </div>
    </div>
  );
};

export default ImageCategory;
