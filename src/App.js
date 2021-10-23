import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Meetings from './pages/meetings/Meetings';
import Calendar from './pages/Calendar';
import UpcomingMeets from './pages/meetings/UpcomingMeets';
import History from './pages/meetings/History';
import Rooms from './pages/Rooms';



function App() {
  return (
    <Router>
      <Layout>
      <div className="App container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meetings" component={Meetings} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/upcoming-meetings" component={UpcomingMeets} />
          <Route exact path="/history" component={History} />    
          <Route exact path="/rooms" component={Rooms} />
        </Switch>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
