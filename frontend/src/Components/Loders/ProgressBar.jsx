import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';

function ProgressBar({ children }) {
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsRouteChanging(true);
  }, [location]);

  return (
    <>
      <Transition
        show={isRouteChanging}
        enter="transition-all ease-out duration-300"
        enterFrom="w-0"
        enterTo="w-full"
        leave="transition-all ease-in duration-300"
        leaveFrom="w-full"
        leaveTo="w-0"
        onEntered={() => setIsRouteChanging(false)}
        onExited={() => setIsRouteChanging(false)}
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
      />
      {children}
    </>
  );
}

export default ProgressBar;
