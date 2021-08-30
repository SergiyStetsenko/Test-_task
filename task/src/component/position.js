import React from "react";

import { usePosition } from "use-position";

const UsePositionDemo = () => {
  const { latitude, longitude } = usePosition();

  return (
    <>
      {latitude && (
        <>
          latitude: {latitude}, longitude: {longitude}
        </>
      )}
    </>
  );
};
export default UsePositionDemo;
