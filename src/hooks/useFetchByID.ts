import { useEffect, useState } from "react";
import { ProductId } from '../interfaces/ProductId';

interface IState {
    data: ProductId,
    isLoading: boolean,
    hasError: string | null,
}

export const useFetchByID = (url = '') => {

    const [ state, setState ] = useState<IState>({
        data: {},
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
