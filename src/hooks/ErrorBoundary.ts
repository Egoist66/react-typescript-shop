import {useState} from "react";

const useErrorBoundary = (value: boolean) => {
    const [error, setError] = useState(value)

    const componentCatchError = () => {
        setError(error => error = true)

        return true
    }

    const componentResetError = () => {
        setError(error => error = false)

        return false
    }

    return {
        error,
        componentCatchError,
        componentResetError
    }
}

export {useErrorBoundary}