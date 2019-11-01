import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// HOC -  a higher-order component is a function that takes
// a component and returns a new component / transforms a component into another component.
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
