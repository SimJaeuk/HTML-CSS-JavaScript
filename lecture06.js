var height = prompt("키를 입력해 주세요.");

console.log(height, typeof(height));

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

// • number는 숫자를 나타내는 데이터 타입입니다.
// • 64비트로 실수와 정수를 모두 표현할 수 있습니다.
// • "1"은 문자열이고 1은 숫자형입니다.
// • pasreInt( ) 명령은 문자열의 앞부분에서 정수 부분을 추출할 수 있습니다.
// • parseFloat( ) 명령은 문자열의 앞부분에서 실수 부분을 추출할 수 있습니다.