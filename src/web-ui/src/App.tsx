import './App.css'
import { Routes, Route, Link } from 'react-router-dom'


export default function App() {
  return <>
    <h1>Hello World</h1>
    <JourneyRouter />
  </>
}


function JourneyRouter(){
  return <>
    <Routes>
      <Route index element={<>
        <p>Nah</p>
        <Link to="/test">ToGo</Link>
      </>}/>
      <Route path="/test" element={<TestPage/>}/>
    </Routes>
  </>
}


function TestPage(){
  return <h3>Success</h3>
}
