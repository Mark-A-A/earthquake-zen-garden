import React from "react";
import moment from 'moment';
import { useSelector } from "react-redux";

import {
  getEarthquakesList,
  getHomePageHeader
} from 'ReduxStore/selectors'

export const getQuakeData = (earthquake) => {

  const { id } = earthquake;
  const {
    mag: magnitude,
    place,
    time,
  } = earthquake?.properties || {};

  const timeParsed = moment(time).format('MMM Do, YYYY, h:mm:ss A');
  return {
    place,
    magnitude,
    time: timeParsed,
    id,
  }
}

const headers = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Title'},
  { id: 'magnitude', numeric: true, disablePadding: false, label: 'Magnitude'},
  { id: 'time', numeric: false, disablePadding: false, label: 'Time'},
];

export const useEarthquakesTableData = () => {
  const title = useSelector(getHomePageHeader);
  const listOfEarthQuakes = useSelector(getEarthquakesList);
  const rows = listOfEarthQuakes.map(quake => {
    const {
      id,
      place,
      magnitude,
      time,
    } = getQuakeData(quake);

    return {
      id,
      title: place,
      magnitude,
      time,
    }
  });

  return {
    title,
    headers: headers,
    rows
  }
}