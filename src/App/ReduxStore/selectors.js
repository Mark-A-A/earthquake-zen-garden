import { parseDateTime } from "Utils/parseDateTime"

export const getEarthquakesList = (state) => state?.earthquakes?.data?.features

export const getHomePageHeader = (state) => state?.earthquakes?.data?.metadata?.title

export const getSelectedEarthquakeDetails = (state) => (id) => {
  const list = getEarthquakesList(state)
  const earthquake = list.find((earthquake) => {
    return earthquake.id === id
  })

  const {
    properties: {
      title,
      mag: magnitude,
      time,
      tsunami,
      status,
      type
    }
  } = earthquake;

  const details = {
    title,
    magnitude,
    time: parseDateTime(time),
    status,
    tsunami,
    type,
  };

  return {
    details
  }
}

export const getUserProfile = (state) => state?.user?.profile;