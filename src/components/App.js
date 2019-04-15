import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import FindMe from './FindMe'
import SignIn from './SignIn'
import SignUp from './SignUp'
import NickName from './NickName'
import EmailVerify from './EmailVerify'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <div className='container'>
              <Nav />
              <div className='center'>
                <img
                  src='/images/findme_square.jpg'
                  alt='FindMe Logo'
                  className='logo'
                />
              </div>
              <Route path='/' exact component={FindMe} />
              <Route path='/signin' exact component={SignIn} />
              <Route path='/signup1' exact component={SignUp} />
              <Route path='/signup2' exact component={NickName} />
              <Route path='/signup3' exact component={EmailVerify} />
            </div>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;