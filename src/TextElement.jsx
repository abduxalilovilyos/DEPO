import React from "react";

const TextElement = ({name,count}) => {
  return (
    <div className="textelement">
      <h1>{name}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default TextElement;
