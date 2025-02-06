//auth Example of HOC

import { ComponentType } from "react";

const withAuth = (Component: ComponentType) => {
  const isAuthenticated = false;
  interface WithAuthProps {
    // Define any additional props if needed
  }

  return function (props: WithAuthProps) {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <h1>Not Authenticated</h1>;
    }
  };
};

export default withAuth;
