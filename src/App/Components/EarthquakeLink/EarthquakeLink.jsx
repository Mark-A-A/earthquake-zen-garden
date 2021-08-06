import React from 'react';
import { Link } from 'react-router-dom'

export const EarthquakeLink = (props) => {
  const { name, id } = props;

  const path = `/detail/${id}`
  return (
    <div className="earhquake-detail-link">
      <Link to={path} >
        {name}
      </Link >
    </div>
  )
}