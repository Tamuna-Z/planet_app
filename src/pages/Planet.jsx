import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data.json';

function Planet() {
  const params=useParams();
  const planetInfo=data.find((item)=>item.name.toLowerCase()==params.planet)
  console.log(planetInfo);
  return (
    <div>
      {data.map((item) => (
        // <li>{item.name}</li>
        <li>{item.name}</li>
      ))}
    </div>
  )
}

export default Planet