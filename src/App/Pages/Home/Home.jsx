import React from 'react';

import EarthquakesTable from 'Components/Table/Table';
import { Page } from 'Components/Page/Page';
import { useEarthquakesTableData } from 'Hooks/useEarthquakesTableData.js';

import '../../styles/style.scss'

export function Home() {
  const { title, headers, rows } = useEarthquakesTableData();


  return (
    <Page pageName='home-page' title={title}>
      <EarthquakesTable rows={rows} headers={headers} />
    </Page>
  );
}
