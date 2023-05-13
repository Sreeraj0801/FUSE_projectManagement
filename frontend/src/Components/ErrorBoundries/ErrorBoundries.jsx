/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import SomethingWrongPage from '../../Pages/Users/SomethingWrongPage';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <SomethingWrongPage/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
