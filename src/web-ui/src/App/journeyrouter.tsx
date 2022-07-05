import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import JournalView from './JournalView'
import Page404NotFound from './Page404NotFound'


export default function JourneyRouter(){
    return <>
        <Routes>
            <Route index element={<Homepage/>}/>
            <Route path="read">
                <Route index element={<Page404NotFound/>}/>
                <Route path=":journalKey" element={<JournalView/>}/>
                <Route path="*" element={<Page404NotFound />} />
            </Route>
            <Route path="*" element={<Page404NotFound />} />
        </Routes>
    </>
}
