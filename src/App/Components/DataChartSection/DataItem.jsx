import React from "react";

export const DataItem = ({ propertyName, value }) => {
  console.dir({
    propertyName,
    value
  })
  
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
