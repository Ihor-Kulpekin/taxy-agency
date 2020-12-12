import { useEffect, useState } from 'react';

export const isClient = typeof window === 'object';

const useMediaBase = (query: string, defaultState: boolean = false) => {
    const [state, setState] = useState(
        isClient ? () => window.matchMedia(query).matches : defaultState
    );

    useEffect(() => {
        let mounted = true;
        const mql = window.matchMedia(query);
        const onChange = () => {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };

        mql.addListener(onChange);
        setState(mql.matches);

        return () => {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);

    return state;
};

const breakpoints = [945, 1180];

const useMedia = () => ({
    mobile: useMediaBase(`(max-width: ${breakpoints[0] - 1}px)`),
    tablet: useMediaBase(
        `(min-width: ${breakpoints[0]}px) and (max-width: ${breakpoints[1] - 1}px)`
    ),
    desktop: useMediaBase(`(min-width: ${breakpoints[1]}px)`)
});

export default useMedia;
