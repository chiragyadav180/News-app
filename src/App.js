
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>  {
  const pageSize=5;
  
  const [progress, setProgress] = useState(0)
  

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={2}
        color='#f11946'
        progress={progress}
       
      />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress}  key="general" pageSIze={pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress}  key="business" pageSIze={pageSize} country="in" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSIze={pageSize} country="in" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress}  key="general" pageSIze={pageSize} country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress}  key="health" pageSIze={pageSize} country="in" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress}  key="science" pageSIze={pageSize} country="in" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress}  key="sports" pageSIze={pageSize} country="in" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress}  key="technology" pageSIze={pageSize} country="in" category="technology" />} />

          </Routes>
        </Router>
      </div>
    )
  
}
export default App;
