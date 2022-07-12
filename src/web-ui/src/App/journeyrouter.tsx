import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home'
import Editor from './pages/Editor'
import ReadJournalPage from './pages/ReadJournal'
import AboutPage from './pages/About'
import KeywordPage from './pages/keyword'
import TestPage from './pages/Test'
import Page404NotFound from './pages/404NotFound'


export default function JourneyRouter(){
    return <>
        <Routes>
            <Route index element={<Homepage/>}/>
            <Route path="editor" element={<Editor/>}/>
            <Route path="read/:journalKey" element={<ReadJournalPage/>}/>
            <Route path="blog/:blogid" element={<Page404NotFound/>}/>
            <Route path="keyword/:keyword" element={<KeywordPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="testing" element={<TestPage/>}/>
            <Route path="*" element={<Page404NotFound />} />
        </Routes>
    </>
}
