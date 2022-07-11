import './index.scss'


export default function TestPage(){
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    return <div className='testing'>
        {darkMode ? 'yes' : 'no'}
    </div>
}
