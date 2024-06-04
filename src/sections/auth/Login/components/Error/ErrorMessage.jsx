import React from "react";
import PropTypes from "prop-types";

function ErrorMessage({ errorMessage }) {
  return (
    <span style={{ padding: 5, color: "red" }}>
      {errorMessage && errorMessage}
    </span>
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorMessage;
