import {useEffect, useState} from "react";
import {useErrorBoundary} from "./ErrorBoundary.ts";
import axios from "axios";
import {IProduct} from "../models.ts";

const useProductEngine = () => {
    const Error = useErrorBoundary(false)

    const [state, setState] = useState ({
        data: [],
        loading: true,
        error: Error.error,
        loadCount: 1



    })

    const {data, loading, error, loadCount} = state


    const handleData = async (url: string) => {
        try {

            const request = await axios.get<IProduct[]> (url);
            const {data} = request;

            // @ts-ignore
            setState((state) => {
                return {
                    ...state,
                    data: [...data],
                    loading: false,
                    error: Error.componentResetError()

                }
            })

        }
        catch (e : unknown){
            console.log(e)


            setState((state) => {
                return {
                    ...state,
                    loading: false,
                    error: Error.componentCatchError()

                }
            })
        }

    }

    const LoadProductByCount = () => {
        setState((state) => {
            return {
                ...state,
                loading: true,
                loadCount: loadCount + 1
            }
        })
    }



    useEffect(() => {

        handleData(`https://fakestoreapi.com/products?limit=${loadCount}`)

    }, [loadCount])


    return {
        data,
        loading,
        error,
        LoadProductByCount
    }
}

export {useProductEngine}