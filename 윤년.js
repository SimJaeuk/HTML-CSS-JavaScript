var year = parseInt(prompt("확인하고 싶은 연도를 입력하세요"));
console.log(year+"년은",isLeapYear(year));

function isLeapYear(year) {
    if ( year % 4 == 0){
        return "윤년입니다";
}   else{
        return "윤년이 아닙니다.";
    }
}