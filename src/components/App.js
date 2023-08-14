import '../css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {

  const [{ user }] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? 
          (<Login />) : 
          (<>
              <Header />
              <div className='app_body'>
                  <Sidebar /> 
                  <Routes>
                      <Route exact path="/channel/:channelId" element={<Chat />} />
                  </Routes>
              </div>
            </>
        )}
      </Router>
    </div>
  );
}
export default App;