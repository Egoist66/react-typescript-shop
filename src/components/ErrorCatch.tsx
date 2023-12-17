const ErrorCatch = ({error, children, errortext}) => {

    return (
        <>

            {error ? <h2 style={{color: "red", textAlign: "center"}}>{errortext}</h2>: children}

        </>
    )
}

export default  ErrorCatch