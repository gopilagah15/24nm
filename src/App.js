import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
  

function App() {
  const pageSize =30
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    business
entertainment
general
health
science
sports
technology
        
        <Route exact path='/business' element={<News key='business' pageSize={pageSize} category='business'country ="us"/>} /> 
        <Route exact path='/entertainment' element={<News key='entertainment' pageSize={pageSize} category='entertainment'country ="us"/>} /> 
        <Route exact path='/general' element={<News key='general' pageSize={pageSize} category='general'country ="us"/>} /> 
        <Route exact path='/health' element={<News key='health' pageSize={pageSize} category='health'country ="us"/>} /> 
        <Route exact path='/science' element={<News key='science' pageSize={pageSize} category='science'country ="us"/>} /> 
        <Route exact path='/sports' element={<News key='sports' pageSize={pageSize} category='sports'country ="us"/>} /> 
        <Route exact path='/technology' element={<News key='technology' pageSize={pageSize} category='technology'country ="us"/>} /> 
        </Routes>
  </BrowserRouter> 
  </>
  );
}

export default App;
