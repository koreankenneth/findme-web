import React, { Component, Fragment } from 'react'

class NickName extends Component {
  goToNext = () => {
    this.props.history.push('/signup3')
  }
  render () {
    return (
      <Fragment>
        <div className='row'>
          <div>
            김기훈 회원님, FINDME 서비스에 오신걸 환영해요! :) 
            <br />
            서비스에서 사용하실 닉네임을 써주세요.
          </div>
        </div>
        <div className='row'>
          <div className='two columns'>
            닉네임 
          </div>
          <div class="eight columns">
            <input type='text' placeholder='한글, 영문, 숫자 조합 최대 10자리' />
          </div>
          <div className='two columns'>
            <button>중복확인</button>
          </div>
        </div>
        <div className='row'>
          <div className='twelve column'>
            <button onClick={this.goToNext}>다음</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NickName