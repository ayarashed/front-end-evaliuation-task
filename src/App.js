import React , {Component} from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import PostLeaveRequest from './pages/postleaverequest/PostLeaveRequest';
import ManageLeaveRequest from './pages/manageleaverequest/ManageLeaveRequest';
import Nav from './component/navs/Navs';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={PostLeaveRequest} />
        <Route path="/manageleaverequest" component={ManageLeaveRequest} />
      </div>
    </BrowserRouter>
  );
}
}
export default App;
