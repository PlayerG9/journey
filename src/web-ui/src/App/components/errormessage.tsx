interface errorProps {
    error?: Error | any,
    errors?: Error[] | any
}


export default function ErrorMessage(props: errorProps){
    const errors = extractErrors(props)

    if(errors.length === 0){
        return null
    }

    return <div className='error-message'>
        <h1>{errors.length === 1 ? "An Error" : "Multiple Errors"} occured</h1>
        {errors.map((error, key) => 
            <div key={key}>
                <p><b>{error.name}:</b> {error.message}</p>
            </div>
        )}
    </div>
}


function extractErrors(props: errorProps){
    const errors = []
    if(props.error)
        errors.push(props.error)
    if(props.errors)
        errors.push(...props.errors)
    return errors.filter((error) => error instanceof Error)  // filter not Error values out
}
