import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import NickName from './NickName'
import EmailVerify from './EmailVerify'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className='window center'>
            <div className='container'>
              <div className='row'>
                <div className='one columns'>
                X
                </div>
                <div className='ten columns'>
                  시작하기
                </div>
                <div className='one columns'>
                X
                </div>
              </div>
              <Route path='/' exact component={SignIn} />
              <Route path='/signup1' exact component={SignUp} />
              <Route path='/signup2' exact component={NickName} />
              <Route path='/signup3' exact component={EmailVerify} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;