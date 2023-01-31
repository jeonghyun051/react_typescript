import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
