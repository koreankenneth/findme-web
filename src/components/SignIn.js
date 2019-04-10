import React, { Component, Fragment } from 'react'

class SignIn extends Component {

  startWithNaver = () => {
    this.props.history.push('/signup1')
  }
  startWithKakao = () => {
    this.props.history.push('/signup1')
  }
  
  render () {
    return (
      <Fragment>
        <div className='row'>
          <div className='twelve columns'>
            <img 
              src='/images/findme.png'
              alt={`Findme logo.`}
              className='logo'
            />
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <button onClick={this.startWithNaver}>Start with Naver</button>
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <button onClick={this.startWithKakao}>Start with Kakao</button>
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
        회원 가입 시 <a href='#'>약관 동의</a> 및 <a href='#'>개인정보 처리 방침</a>, <a href='#'>위치 정보 제공</a>에 동의합니다.
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SignIn