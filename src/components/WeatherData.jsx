import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WeatherData = () => {
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
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  const displayedEvents = weatherData.slice(0, 2); // Display only the first two events

  return (
    <div className=" text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Space Weather Data</h1>
      <div className="space-y-4">
        {displayedEvents.map((event, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">CME Event: {event.activityID}</h2>
            <p><strong>Start Time:</strong> {event.startTime}</p>
            <p><strong>Source Location:</strong> {event.sourceLocation}</p>
            <p><strong>Active Region:</strong> {event.activeRegionNum}</p>
            <p><strong>Note:</strong> {event.note}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/weather" className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          See More
        </Link>
      </div>
    </div>
  );
};

export default WeatherData;
