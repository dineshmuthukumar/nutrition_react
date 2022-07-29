import { useState, useLayoutEffect } from 'react';
import throttle from 'lodash.throttle';

const isBrowser = typeof window !== 'undefined';

export const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  
  const [state, setState] = useState( {
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight
  } );

  useLayoutEffect( () => {
    if ( !isBrowser ) return;

    const handler = throttle( () => {
      setState( {
        width: window.innerWidth,
        height: window.innerHeight
      } );
    }, 200 );

    window.addEventListener( 'resize', handler );

    return () => {
      window.removeEventListener( 'resize', handler );
    };
  }, [] );

  return state;
};