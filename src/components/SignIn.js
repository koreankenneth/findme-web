import React, { Component, Fragment } from 'react'
import { KAKAO_JS_KEY } from '../utils/kakao.js'
import axios from 'axios'

class SignIn extends Component {

  // {
  //   koreankenneth: {
  //     email: 'koreankenneth@gmail.com',
  //     password: '9qe8fh973qgfoiuaghe8037gfeov8gef7',
  //     name: 'Kenneth Kim',
  //     nickname: 'koreankenneth',
  //     phone: '01067755737',
  //     birthday: '1987-09-14',
  //     gender: 'male',
  //     photo: '../images/koreankenneth/photo.jpg',
  //     login_type: 'kakao'
  //     login_key: '19286401827309'
  //   }
  // }

  componentDidMount () {
    // Set JavaScript Key of current app.
    window.Kakao.init(KAKAO_JS_KEY);
    // Create Kakao Login button.
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
        axios({
              method: 'GET',
              url: '/v2/user/me',
              headers: {
                  'Authorization' : `Bearer ${authObj.access_token}`,
                  'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8'
              }
          })
          .then((res) => {
            console.log(JSON.stringify(res.data))
            // {
            //   "id":1063340828,
            //   "properties":{
            //   "nickname":"김기훈",
            //   "profile_image":"http://k.kakaocdn.net/dn/cOppEx/btquwfVYJsf/9SSmYkayklQ0lSQinnErEk/profile_640x640s.jpg",
            //   "thumbnail_image":"http://k.kakaocdn.net/dn/cOppEx/btquwfVYJsf/9SSmYkayklQ0lSQinnErEk/profile_110x110c.jpg"
            //   },
            //   "kakao_account":{
            //   "has_email":true,
            //   "email_needs_agreement":false,
            //   "is_email_valid":true,
            //   "is_email_verified":true,
            //   "email":"koreankenneth@gmail.com",
            //   "has_age_range":true,
            //   "age_range_needs_agreement":false,
            //   "age_range":"30~39",
            //   "has_birthday":true,
            //   "birthday_needs_agreement":false,
            //   "birthday":"0914",
            //   "has_gender":false,
            //   "gender_needs_agreement":false
            //   }
            // }
          })
          .catch((err) => {
            console.log(JSON.stringify(err))
          })
      },
      fail: (err) => {
        console.log(JSON.stringify(err));
      }
    });
  }

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
            <a id="kakao-login-btn"></a>
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