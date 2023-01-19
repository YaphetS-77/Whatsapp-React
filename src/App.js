import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Chats from './screens/chats';
import Status from './screens/status';
import Calls from './screens/calls';
import Setting from './screens/setting';
import 'bootstrap/dist/css/bootstrap.css'
import Account from './screens/account';
import Schat from './screens/schat';
import Homechat from './screens/homechat';
import Profile from './screens/profile';


function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Chats/>}/>
              <Route path='/status' element={<Status/>}/>
              <Route path='/calls' element={<Calls/>}/>
              <Route path='/setting' element={<Setting/>}/>
              <Route path='/account' element={<Account/>}/>
              <Route path='/schat' element={<Schat/>}/>
              <Route path='/homechat' element={<Homechat/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
