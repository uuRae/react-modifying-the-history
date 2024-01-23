import React from "react";
import { useHistory } from "react-router-dom";

function GoJump() {
  const history = useHistory();
  return (
    // go back two pages
    <button type="button" onClick={() => history.go(-2)}>
      Go Back
    </button>
  );
}

export default GoJump