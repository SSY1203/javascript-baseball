# TODO

- [ ] 상대방의 3자리 수를 정한다.
- [ ] 사용자의 서로 다른 3자리 수를 입력 받는다.
- [ ] 사용자의 수가 서로 다른 수인지 검증한다.
- [ ] 사용자의 수가 3자리 수인지 검증한다.
- [ ] 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시한다.
- [ ] 게임이 끝난 경우 재시작(1)/종료(2)를 구분하여 진행한다.
- [ ] 1 또는 2가 아닐 경우, 예외처리를 한다.

# MVC 패턴을 이용한 진행 순서

1. Model을 먼저 생각한다. 결국은 View도 모델을 보기 위한 매체이고, 컨트롤러는 View를 주기 위한 것 = Model 중심
2. View 무엇을 보여줄 지 생각해두면 어떻게 보여줄 지도 생각하기 편하다.
3. Controller로 Model을 가공하고 Model을 View에 합쳐 전달한다.

# MVC 숫자 야구 게임

## Model

#### Computer

- [x] 서로 다른 임의의 3가지 컴퓨터 수
- [x] 컴퓨터 수를 랜덤 수로 받는 기능
- [x] 재시작일 경우, 컴퓨터 수 초기화

#### User

- [x] 서로 다른 임의의 3가지 사용자 수
- [x] 스코어(볼, 스트라이크 수)
- [x] 스코어 저장 기능
- [x] 재시작일 경우, 스코어와 사용자 수 리셋

###### validation

- [x] 사용자의 수가 서로 다른 지 검증
- [x] 사용자의 수가 3자리인지 검증

## Service

- 컴퓨터와 사용자 수 비교 기능

## Controller

- [x] 컴퓨터 랜덤 수 함수 호출
- 컴퓨터 랜덤 수 저장 함수 호출
- InputView에서 받은 사용자 수, Model에서 검증 2가지 함수 호출
- InputView에서 받은 사용자 수, 저장 함수 호출
- 사용자 수 OutputView 전달
- 사용자 수와 컴퓨터 수 비교 함수 호출
- 정답이 아닐 경우, InputView 다시 호출
- 스코어 저장 함수 호출
- 스코어 OutputView 전달
- 정답일 경우, 재시작 및 종료 여부 input 함수 호출
- 재시작일 경우, 다시 컴퓨터 수 호출

##### Exception

- InputView에서 받은 재시작 및 종료 여부 값, 예외 처리

## View

##### Input

- [x] 사용자 수 입력 받는 기능
- [x] 재시작 및 종료 여부 입력 받는 기능

##### Output

- [x] 시작 문구
- [x] 스코어 출력 기능
- [x] 종료 문구

##### Error

- 사용자 예외 문구 출력(서로 다른 수, 3자리 수)
- 재시작 및 종료 여부 예외 문구 출력
