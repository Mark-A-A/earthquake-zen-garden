import React from "react";

export const ProfileImageSection = ({ profile }) => {
  const { avatarImage: imageURL } = profile;
  return (
    <section className="image-section">
      <img src={imageURL} />
    </section>
  )
}
