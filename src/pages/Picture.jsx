import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Picture = () => {
  const [pictureData, setPictureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPicture = async () => {
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=AWAQPdr2XXFZmH3Cuo29RNwfUmogFv0RhLPZn6Gm`);
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
    <div className="flex items-center justify-center ">
      <div className="content-container max-w-lg w-full text-white">
        {pictureData && (
          <>
            <img
              src={pictureData.url}
              alt={pictureData.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{pictureData.title}</h2>
              <p className="text-sm mb-4">{pictureData.date}</p>
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

export default Picture;
