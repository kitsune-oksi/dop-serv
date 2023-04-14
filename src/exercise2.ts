//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeat = (str: string, count: number, sep: string): string => {
    let string = `${str}${sep}`;
    return string.repeat(count)
}
console.log(repeat('yo', 3, ' '))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const verificated = (str: string, substr: string): boolean => str.toLowerCase().startsWith(substr.toLowerCase())

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const cutString = (str: string, count: number): string => `${str.slice(0, count)}...`

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

const shortestWorld = (str: string): string | null => {
    if (str) {
        let arr = str.split(' ');
        return arr.reduce((a, b) => b.length < a.length ? a = b : a)
    }
    return null
}

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str: string): string => {
    let string = str.toLowerCase();
    let arrWord = string.split(' ');
    arrWord = arrWord.map(el => `${el[0].toUpperCase()}${el.slice(1, el.length)}`);
    return arrWord.join(' ')
}

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// const isIncludes = (str: string, substr: string) => {
//     let stringArr = str.toLowerCase().split('');
//     let substring = substr.toLowerCase();
//     let resultOfFor;
//     for (let i = 0; i <= substring.length; i++) {
//         resultOfFor = stringArr.indexOf(substr[i])
//     }
//     if (resultOfFor) {
//         let resultArr = resultOfFor.toString().split('');
//         let result = resultArr.find(el=>el === '-')
//         if (result) {
//             return false
//         } return  true
//     } return false
// }