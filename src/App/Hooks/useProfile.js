import React from "react";
import { useSelector } from "react-redux";

import { getUserProfile } from 'ReduxStore/selectors'

export const useProfile = () => {
  const profile = useSelector(getUserProfile) || {};

  const {
    firstName,
    lastName,
    avatarImage,
    phone,
    email,
    bio,
  } = profile

  return {
    firstName,
    lastName,
    avatarImage,
    phone,
    email,
    bio,
  }
}