import { useState, useEffect } from 'react';

interface IState<T> {
    data: T | undefined,
    isLoading: boolean,
    hasError: string | null,
}

export function useFetch<T> (url = ''){

    const [ state, setState ] = useState<IState<T>>({
        data: undefined,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });

    }

    useEffect(() => {
        getFetch();
    }, []);
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
