import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Meetings from './pages/Meetings';
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <Layout>
      <div className="App container">
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/meetings"><Meetings/></Route>
          <Route path="/meetings"><Calendar/></Route>
        </Switch>
      </div>
      </Layout>
    </Router>
  );
}

export default App;
