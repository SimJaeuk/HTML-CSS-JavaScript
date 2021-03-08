function return_test() {
    return;
    console.log("실행되지 않는 코드");    
}

function print(msg) {
    console.log("print function in");
    console.log(msg);
    console.log("print function out");
}

function sum(arg1, arg2){
    var result = arg1 + arg2;
    return result;
}

// • 호출하여 여러 번 실행할 수 있는 코드 블록을 함수라고 합니다.
// • 함수를 사용하면 반복되는 코드를 줄일 수 있어 프로그램을 개발하거나 수정하기가 수월합니다.
// • 함수를 정의할 때는 다음과 같이 적습니다

// function 함수이름(매개변수1, 매개변수2) {
//     실행할 코드
//     return 결괏값;
// }

function sum(a,b) {
    return a+b
}