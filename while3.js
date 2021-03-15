// Math.random() 함수에 10을 곱해서 0 ~ 10 사이의 실수를 만들고,
// Math.ceil() 함수를 이용해 0 ~ 10 사이의 정수를 생성합니다.
var a = Math.ceil(Math.random() * 10);
var b = Math.ceil(Math.random() * 10);
var solution = a * b;
var ans;
ans = parseInt(prompt(a + "*" + b + "=?")); // 사용자에게 정답을 입력받기
if (ans == solution) {                     // if 조건문을 이용해 정답을 비교
    console.log("맞았습니다.");
}
else {
    console.log("틀렸습니다.");
}

// 반복문은 조건에 따라 프로그램의 일정 코드를 반복해서 수행할 수 있는 구문입니다.
// while 반복문은 조건을 만족하는 동안에는 반복 실행할 코드를 계속 실행합니다.
// while 반복문은 continue 키워드를 만나면 뒤에 있는 코드를 모두 건너뜁니다.
// while 반복문은 break 키워드를 만나면 반복문에서 즉시 탈출합니다.