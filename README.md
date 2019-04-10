### 회원 가입 플로우
- 카카오 가입/로그인 버튼 클릭
- [카카오] 아이디 비번 입력
- (카카오에서 준 엑세스토큰으로) 사용자 정보 조회(카카오api)
- [백엔드] 카카오로 부터 받은 이메일 기존 가입여부 검사
- 필수정보들 입력받음
- [백엔드] 회원 가입 양식 백엔드에 저장 -> 백엔드에서 고객에게 인증 메일 발송
- 메일인증 -> 회원가입 완료


###회원가입 data

!*아이디(이메일 형식) email (카카오)
*비밀번호 password
*이름 name
!*닉네임 nickname 
!*핸드폰번호 phone
생년월일 birthday (카카오)
성별 gender (카카오)
프로필사진 photo (카카오)

! = 유니크
* = 필수입력
(카카오) = 연동으로 받아오는 정보


### JSON Structure
//이메일 체크
{email: 'koreankenneth@gmail.com'}

//회원가입
//키값(koreankenneth)은 닉네임과 일치
{
  koreankenneth: {
    email: 'koreankenneth@gmail.com',
    password: '9qe8fh973qgfoiuaghe8037gfeov8gef7',
    name: 'Kenneth Kim',
    nickname: 'koreankenneth',
    phone: '01067755737',
    birthday: '1987-09-14',
    gender: 'male',
    photo: '../images/koreankenneth/photo.jpg',
    login_type: 'kakao'
    login_key: '19286401827309'
  }
}