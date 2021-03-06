import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PathDetail from './scenes/path/PathDetail/'
import StepEdit from './scenes/step/StepEdit/'
import ProfileDetail from './scenes/profile/ProfileDetail'
import Explore from './scenes/explore/Explore'

// HERE IS YOUR SAMPLE PATH
import Sample from './scenes/sample/Sample'
import Results from './scenes/sample/Results'

const AppRouter = () => (
  <Router>
    <div>
      <div className="navbar" onClick={() => { window.location.href = '/' } }>
        <img src="/journey.png" id="logo" />
        <h1>Learning Journey</h1>
      </div>
      <Route exact path="/explore" component={Explore} />
      <Route path="/profile/:id" component={ProfileDetail} />
      <Route exact path="/path/:pathId" component={PathDetail} />
      <Route path="/path/:pathId/step/new" component={StepEdit} />
      <Route path="/step/:stepId/edit" component={StepEdit} />

      <Route exact path="/" component={Sample} />
      <Route path="/results/:searchTerms" component={Results} />
    </div>
  </Router>
)

export default AppRouter
