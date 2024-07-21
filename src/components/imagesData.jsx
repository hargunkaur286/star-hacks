import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ImagesData = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://images-api.nasa.gov/search?q=space');
        setImages(response.data.collection.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  const displayedImages = images.slice(0, 4); // Display only the first 3-4 images

  return (
    <div className=" text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">NASA Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedImages.map((image, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={image.links[0].href} alt={image.data[0].title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold">{image.data[0].title}</h2>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/images" className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          See More
        </Link>
      </div>
    </div>
  );
};

export default ImagesData;
