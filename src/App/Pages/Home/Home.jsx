import React from 'react';

import EarthquakesTable from 'Components/Table/Table';
import { useEarthquakesTableData } from 'Hooks/useEarthquakesTableData.js';

import '../../styles/style.scss'

export function Home() {
  const { title, headers, rows } = useEarthquakesTableData();

  console.dir({
    title,
    headers,
    rows,
  });

  return (
    <div className="page home-page">
      <div className="page-title-header">
        <h3>{title}</h3>
      </div>
      <EarthquakesTable rows={rows} headers={headers} />
    </div>
  );
}
