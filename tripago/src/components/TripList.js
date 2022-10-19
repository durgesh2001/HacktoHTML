import React, { useState } from 'react';
import {useFetch} from '../hooks/useFetch'
import './TripList.css'
const TripList = () => {
    const [url,setUrl] = useState('http://localhost:3000/trips')
    const {data : trips , isPending , error} = useFetch(url);
  return (
    <div className='trip-list'>
        <h1>Trip List</h1>
        {isPending && <div>Loading trips..</div>}
        {error && <div>{error}</div>}
        <ul>
        {trips && trips.map((trip) => (
            <li key={trip.id} className="trip">
                <div className='text'>
                    <h1>{trip.title}</h1>
                    <p>Price - {trip.price}</p>
                </div>
                <img src={trip.image} alt="img"/>
            </li>
            ))}
        </ul>
        <div className='filters'>
            <button onClick={() => setUrl('http://localhost:3000/trips?location=europe')}>
                European Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>
                All trips
            </button>
        </div>
    </div>
  )


}

export default TripList