import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/mainComponent/Dashboard';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/filters' element={<Dashboard/>}/>
              <Route path='/subscription' element={<Dashboard/>}/>
              <Route path='/consumers' element={<Dashboard/>}/>
              <Route path='/advertisements' element={<Dashboard/>}/>
              <Route path='/printlabels' element={<Dashboard/>}/>
              <Route path='/payments' element={<Dashboard/>}/>
              <Route path='/plans' element={<Dashboard/>}/>
              <Route path='/magazines' element={<Dashboard/>}/>
            </Route>


          </Routes>
        </Router>
    </div>
  );
}

export default App;
