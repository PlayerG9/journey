import './index.scss'
import { useParams } from 'react-router-dom'


export default function KeywordPage(){
    const params = useParams()
    if(!params.keyword){
        return null
    }
    const keyword: string = params.keyword

    return <>
        <p>{keyword}</p>
    </>
}
