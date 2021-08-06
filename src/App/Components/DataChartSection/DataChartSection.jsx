import React from "react";
import { DataItem } from './DataItem';


import './chartStyle.scss'

export function DataChartSection(props) {
  const { data, listClassName, id = ""} = props
  console.dir(data)
  return (
    <section className="data-chart-section">
      <ul className={listClassName}>
        {
          Object.entries(data).map((detail, i) => {
            const [key, value] = detail;
            const chars = key.split("")
            chars[0] = chars[0].toUpperCase()
            const propertyName = chars.join("");
            return (
              <DataItem key={`${id}_${i}`} propertyName={propertyName} value={value} />
            )
          })
        }
      </ul>
    </section>
  )
}

