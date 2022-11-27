import { useEffect, useRef } from 'react';

export const useOuterClick = (callback) => {
    const callbackRef = useRef();
    const innerRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
        function handleClick(event) {
            if (innerRef.current && callbackRef.current && !innerRef.current.contains(event.target)) {
                callbackRef.current(event);
            }
        }
    }, []);

    return innerRef;
};
