import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home'
import Editor from './pages/Editor'
import JournalView from './pages/JournalView'
import AboutPage from './pages/About'
import TestPage from './pages/Test'
import Page404NotFound from './pages/404NotFound'


export default function JourneyRouter(){
    return <>
        <Routes>
            <Route index element={<Homepage/>}/>
            <Route path="editor" element={<Editor/>}/>
            <Route path="read">
                <Route index element={<Page404NotFound/>}/>
                <Route path=":journalKey" element={<JournalView/>}/>
            </Route>
            <Route path="blog">
                <Route index element={<Page404NotFound/>}/>
                <Route path=":blogid" element={<Page404NotFound/>}/>
            </Route>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="testing" element={<TestPage/>}/>
            <Route path="*" element={<Page404NotFound />} />
        </Routes>
    </>
}
