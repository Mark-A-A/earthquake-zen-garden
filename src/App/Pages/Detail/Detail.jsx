import React from "react";
import { useParams } from 'react-router-dom';

import { useEarthquakeDetail } from 'Hooks/useEarthquakeDetail';
import { Page } from 'Components/Page/Page';
import { DataChartSection } from 'Components/DataChartSection/DataChartSection';

export function Detail() {
  const { id } = useParams();
  const details = useEarthquakeDetail({ id });

  return (
    <Page pageName={"details-page"} title={details.title} containerSize="sm">
      <DataChartSection id={id} data={details} listClassName={'details-list'}/>
    </Page>
  )
}
