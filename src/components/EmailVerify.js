import React, { Component, Fragment } from 'react'

class EmailVerify extends Component {
  render () {
    return (
      <Fragment>
        <div className='row'>
          <div>
            회원가입이 완료되었습니다.
            <br />
            사용자 인증을 위한 이메일을 발송하였습니다.
            <br />
            이메일 인증이 완료되면 서비스를 이용하실 수 있습니다.
          </div>
        </div>
        <div className='row'>
          <div className='one-half column'>
            <button>재전송</button>
          </div>
          <div className='one-half column'>
            <button>닫기</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default EmailVerify