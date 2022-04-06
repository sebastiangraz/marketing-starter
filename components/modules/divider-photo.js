import React from "react";

import Photo from "../../components/photo";

const DividerPhoto = ({ data = {} }) => {
  const { photo } = data;

  if (!photo) return null;

  return (
    <section sx={{ position: "relative" }}>
      <Photo
        photo={photo}
        width={1600}
        srcSizes={[800, 1000, 1200, 1600]}
        sizes="100vw"
      />
    </section>
  );
};

export default DividerPhoto;
