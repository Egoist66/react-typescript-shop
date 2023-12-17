import React, {useState} from "react";
import axios from "axios";
import {IProduct} from "../models.ts";

const useFormEngine = (productData, onCreate) => {

    const [state, setState] = useState({
        value: '',
        InputError: false,
        ajaxError: false,
        loading: false,
    })

    const {value, InputError, ajaxError, loading} = state


    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setState({...state, InputError: false})



        if(value.trim().length === 0){
            setState({...state, InputError: true})

            setTimeout(() => {
                setState({...state, InputError: false})
            }, 2000)

            return
        }

        productData.title = value
        try {
            setState({...state, loading: true})
            const request = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
            const {data} = request

            console.log(data)
            onCreate()

            setState({...state, value: ''})
        }
        catch (e){
            console.log(e)
            setState({...state, ajaxError: true})
        }
    }

    const valueChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // @ts-ignore
        setState({...state, value: event.target.value})
    }

    return {
        valueChange,
        submitHandler,
        InputError,
        ajaxError,
        loading,
        value
    }

}

export {useFormEngine}




