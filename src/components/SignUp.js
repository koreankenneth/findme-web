import React, { Component, Fragment } from 'react'

class SignUp extends Component {
  goToNext = () => {
    this.props.history.push('/signup2')
  }
  render () {
    return (
      <Fragment>
        <div className='row'>
          <div className='twelve columns'>
            <img 
              src='/images/tyler.jpg'
              alt={`Findme logo.`}
              className='logo'
            />
          </div>
        </div>
        <div className='row'>
          <div class="one-third column">계정</div>
          <div class="two-thirds column">koreankenneth@gmail.com</div>
        </div>
        <div className='row'>
          <div className='one-third column'>
            비밀번호 
          </div>
          <div class="two-thirds column">
            <input type='password' placeholder='한글, 영문, 숫자 포함 조합 6~12자리' />
          </div>
        </div>
        <div className='row'>
          <div className='one-third column'>
            비밀번호 확인
          </div>
          <div class="two-thirds column">
            <input type='password' placeholder='한글, 영문, 숫자 포함 조합 6~12자리' />
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <button onClick={this.goToNext}>다음</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SignUp