import React from "react";
import { useParams } from 'react-router-dom';

import { useEarthquakeDetail } from 'Hooks/useEarthquakeDetail';
import { Page } from 'Components/Page/Page';

export function Detail() {
  const { id } = useParams();
  const details = useEarthquakeDetail({ id });

  return (
    <Page pageName={"details-page"} title={details.title} containerSize="sm">
      <section>
        <ul className='details-list'>
          {
            Object.entries(details).map((detail, i) => {
              const [key, value] = detail;
              const chars = key.split("")
              chars[0] = chars[0].toUpperCase()
              const propertyName = chars.join("");
              return (
                <ListItem key={`${id}_${i}`} propertyName={propertyName} value={value}/>
              )
            })
          }
        </ul>
      </section>
    </Page>
  )
}

export const ListItem = ({propertyName, value}) => {
  return (
    <>
      <li className="detail-item detail-property">
        <span >{propertyName}</span>
      </li>
      <li className="detail-item detail-value">
        <span >{value}</span>
      </li>
    </>
  )
}
