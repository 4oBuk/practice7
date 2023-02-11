import React, { useState } from "react";
import Illustration from "./illustration/Illustration";
import IllustrationForm from "./illustration/IllustrationForm";

const Illustrations = () => {
  const illustrations = [
    { id: 2, name: "ill2", aiGenerated: false },
    { id: 3, name: "ill3", aiGenerated: false },
    { id: 4, name: "ill4", aiGenerated: false },
    {
      id: 5,
      name: "ill5",
    },
  ];
  return (
    <>
      <h2>list</h2>
      {illustrations.map((i) => (
        <Illustration illustration={i} />
      ))}
    </>
  );
};

export default Illustrations;
