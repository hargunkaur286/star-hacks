import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PictureDay = () => {
  const [pictureData, setPictureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPicture = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=AWAQPdr2XXFZmH3Cuo29RNwfUmogFv0RhLPZn6Gm');
        setPictureData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPicture();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className='flex items-center justify-center'>
      <h1 className="text-4xl font-bold mb-8">Picture of the Day</h1>
      </div>
      <div className="flex bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-7xl">
        {pictureData && (
          <>
            <img
              src={pictureData.url}
              alt={pictureData.title}
              className="w-1/3 object-cover"
            />
            <div className="p-6 w-2/3 text-white">
              <h2 className="text-3xl font-bold mb-2">{pictureData.title}</h2>
              <p className="text-sm mb-2">{pictureData.date}</p>
              <p className="text-lg mb-4">{pictureData.explanation}</p>
              {pictureData.copyright && (
                <p className="text-sm text-gray-400">© {pictureData.copyright}</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PictureDay;
