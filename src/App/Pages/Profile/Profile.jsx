import React from "react";

import { Page } from 'Components/Page/Page';
import { DataChartSection } from 'Components/DataChartSection/DataChartSection';
import { useProfile } from 'Hooks/useProfile'

import { ProfileImageSection } from './ProfileImageSection'
export function Profile() {
  const profile = useProfile();
  const {
    avatarImage: image,
    ...rest
  } = profile;

  return (
    <Page pageName={"profile-page"} title={'Profile'} containerSize="sm">
      <div className="profile-wrapper">
        <ProfileImageSection profile={profile}/>
        <DataChartSection data={rest} listClassName={'profile-list'} />
      </div>
    </Page>
  )
}
