import React from "react";

// RECOMMENDED  if we are going to have HOC that is going to handle logic of the app (send analitics ,error messages ,etc...)
const withClass = (WrappedComponent, className) => {
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withClass;
