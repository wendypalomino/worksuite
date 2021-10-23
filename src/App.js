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
          <Route exact path="/"><Home/></Route>
          <Route path="/meetings"><Meetings/></Route>
          <Route path="/calendar"><Calendar/></Route>
          <Route path="/upcoming-meetings"><UpcomingMeets/></Route>
          <Route path="/history"><History/></Route>
          <Route path="/rooms"><Rooms/></Route>



        </Switch>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
