// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, curVal) => acc + curVal)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return ""
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let arr = Array.from(String(number), Number);
    return arr.reduce((acc, curVal) => acc + curVal)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenArr = arr.filter((_, index) => index % 2 == 0);
    let unevenArr = arr.filter((_, index) => index % 2 != 0);
    let sumEvenArr = evenArr.reduce((acc, curVal) => acc + curVal);
    let sumUnevenArr = unevenArr.reduce((acc, curVal) => acc + curVal);
    return sumEvenArr > sumUnevenArr
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let newArr = array.filter(num => num > 0 && Number.isInteger(num));
    return newArr.map(num => Math.pow(num, 2))
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно

export function sumFirstNumbers(N: number): number {
    let result = 0
    for (let i = 0; i <= N; i++) {
        result += i
    }
    return result
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result: Array<number> = [];
    let balance = amountOfMoney;

    if (balance > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            while (balance - banknotes[i] >= 0) {
                balance = balance - banknotes[i];
                result = [...result, banknotes[i]]
            }
        }
    }

    return result
}