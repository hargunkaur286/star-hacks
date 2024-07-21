import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/DONKI/CME?startDate=2023-06-01&endDate=2023-06-30&api_key=AWAQPdr2XXFZmH3Cuo29RNwfUmogFv0RhLPZn6Gm');
        setWeatherData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Space Weather</h1>
      <div className="space-y-4">
        {weatherData.map((event, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">CME Event: {event.activityID}</h2>
            <p><strong>Start Time:</strong> {event.startTime}</p>
            <p><strong>Source Location:</strong> {event.sourceLocation}</p>
            <p><strong>Active Region:</strong> {event.activeRegionNum}</p>
            <p><strong>Note:</strong> {event.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
