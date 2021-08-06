import React from "react";
import { useSelector } from "react-redux";

import { getSelectedEarthquakeDetails, getEarthquakePathID } from 'ReduxStore/selectors'

export const useEarthquakeDetail = ({ id }) => {
  const { details } = useSelector(getSelectedEarthquakeDetails)(id);

  const {
    title,
    magnitude,
    time,
    status,
    tsunami,
    type,
  } = details

  return {
    title,
    magnitude,
    time,
    status,
    tsunami,
    type,
  }
}