import React, { useState } from 'react'
import "./App.css"
import "./Mycomponents/App.css"
import Mynavbar from './Mycomponents/Mynavbar'
import News from './Mycomponents/News'
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const [pagesize, setPagesize] = useState(10)
  const [Progress, setProgress] = useState(0)
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    transitionDuration: '1s',
    color: "black",
  })
  const darktheme = (value) => {
    if (value === true) {

      setTheme({
        backgroundColor: "#1e272e",
        color: "white",
        transitionDuration: '1s'
      })

    } else {

      setTheme({
        backgroundColor: "white",
        color: "black",
        transitionDuration: '1s'
      })

    }
  }
  return (
    <div className="App" style={theme}>
      <Router>
        <Mynavbar site="Forzup" about="Contact Us" darktheme={darktheme} />
        <LoadingBar
          color='#f11946'
          progress={Progress}
          height={3}
          transitionTime={100}
          loaderSpeed={400}
          onLoaderFinished={() => setProgress(0)}
        />
         
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pagesize={pagesize} category="general" /></Route>
          <Route exact path="/Business"><News setProgress={setProgress} key="business" pagesize={pagesize} category="business" /></Route>
          <Route exact path="/Entertainment"><News setProgress={setProgress} key="entertainment" pagesize={pagesize} category="entertainment" /></Route>
          <Route exact path="/Science"><News setProgress={setProgress} key="science" pagesize={pagesize} category="science" /></Route>
          <Route exact path="/Politics"><News setProgress={setProgress} key="politics" pagesize={pagesize} category="politics" /></Route>
          <Route exact path="/Health"><News setProgress={setProgress} key="health" pagesize={pagesize} category="health" /></Route>
          <Route exact path="/features"><h2>this is about us</h2></Route>

        </Switch>
      </Router>


    </div>
  )
}

export default App
