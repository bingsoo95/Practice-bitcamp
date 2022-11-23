

var a = prompt('숫자를 입력하세요.')

var b = prompt('두번째 숫자를 입력하세요')

var i = 1

a = Number(a)
b = Number(b)
i = Number(i)

while(i <= b)
{
    document.write(a + '*' + i + '=' + (a*i) + '<br/>')
    i++
}