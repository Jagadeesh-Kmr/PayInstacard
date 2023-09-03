import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Membership from './components/Membership'
import Pricing from './components/Pricing'
import Schedules from './components/Schedules'
import Offers from './components/Offers'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/membership" component={Membership} />
    <Route exact path="/pricing" component={Pricing} />
    <Route exact path="/offers" component={Offers} />
    <Route exact path="/schedules" component={Schedules} />
    <Route path="/notfound" component={NotFound} />
    <Redirect to="/notfound" />
  </Switch>
)

export default App

/*
const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]
*/
