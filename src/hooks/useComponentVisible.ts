import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible: number | boolean | string) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLInputElement>(null);

    const handleClickOutside = (event:any) => {
        if (ref.current && !ref?.current.contains(event.target)) {
            setIsComponentVisible(initialIsVisible);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}
