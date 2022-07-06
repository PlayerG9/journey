interface loaderProps {
    size?: string
}


export default function Loader(props: loaderProps){
    const size = getSize(props)
    return <div className='loader-container'>
        <div className="loader" style={{width: size, height: size}} />
    </div>
}


function getSize(props: loaderProps){
    switch(props.size){
        case 'smaller':
            return 20
        case 'small':
            return 40
        //case 'normal':  // equal to default
        //    return 60
        case 'big':
            return 80
        case 'bigger':
            return 100
        default:
            return 60
    }
}