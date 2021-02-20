import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { UseQueryResult } from "react-query";
import DefaultLoader from "../../components/Loader/LoadingComponent";

/**
 * Wrapper Component to handle query states
 * @param {object} props Component props
 * @param {UseQueryResult} props.query Query object returned from react-query's useQuery
 * @param {JSX.Element} props.LoadingComponent Shows a loading component if the query state is in loading state
 * @param {JSX.Element} props.ErrorComponent Shows a error component if the query state is in error state
 */

const Wrapper = ({ query, LoadingComponent, ErrorComponent, children }) => {
  if (query.isLoading || query.isIdle) {
    const toRender = LoadingComponent || <DefaultLoader />;
    return <div className="grid place-items-center">{toRender}</div>;
  }

  if (query.isError) {
    const toRender = ErrorComponent ? (
      <ErrorComponent />
    ) : (
      <div className="dark:text-white">Failed to Load</div>
    );
    return <div className="grid place-items-center">{toRender}</div>;
  }

  if (query.isSuccess) {
    return React.Children.only(children(query));
  }
  return null;
};

Wrapper.defaultProps = {
  query: {},
  LoadingComponent: null,
  ErrorComponent: null,
  children: null,
};

Wrapper.propTypes = {
  query: PropTypes.object,
  LoadingComponent: PropTypes.node,
  ErrorComponent: PropTypes.node,
  children: PropTypes.node,
};

export default Wrapper;
