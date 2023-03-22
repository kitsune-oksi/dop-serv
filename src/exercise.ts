type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}

type StudensType = StudentType[]

type UserType = {
    name: string
    age: number
    isMarried: boolean
    friends: string[]
}

const students: StudensType = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user: UserType = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Поверхностная копия student
const copyStudent = [...students]

//2. Полная (глубокая) копия student
const deepCopyStudents = students.map(el => ({...el}))

//3. Поверхностная копия user
const copyUser = {...user}

//4*. Полная (глубокая) копия user
const deepCopyUser = {...user, friends: [...user.friends]}

//Далее все преобразования выполняем не модифицируя исходный массив students
//5. Отсортируйте студентов по успеваемости (лучший идёт первым)
const bestsList = deepCopyStudents.sort((a, b) => b.scores - a.scores)

//5a. Отсортируйте студентов по алфавиту
const abcStudents = deepCopyStudents.sort((a, b) => a.name <= b.name ? -1 : 1)

//6. Сформируйте массив студентов, у которых 100 и более баллов
const aStudents = deepCopyStudents.filter(el => el.scores >= 100)

//6a.Сформируйте массив из трёх лучших студентов
const threeBestStudents = aStudents.sort((a, b) => b.scores - a.scores).splice(0, 3)

//6b. Объедините массивы deepCopyStudents и threeBestStudents так,
// чтоб сохранился порядок сортировки
const newDeepCopyStudents = [...threeBestStudents, ...deepCopyStudents];

//7. Сформируйте массив холостых студентов
const unmarriedStudents = students.filter(el=>!el.isMarried)

//8. Сформируйте массив имён студентов
const studentsNames = students.map(el=>el.name)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой
const nameWithSpace = studentsNames.join(' ')
const nameWithComma = studentsNames.join('')

//9. Добавьте всем студентам свойство "isStudent" со значением true
const studentsIsStudents = students.map(el=>({...el, isStudent: true}))

//10. Nick женился. Выполните преобразование массива students
const marriedNick = students.filter(el=>el.name === "Nick" ? {...el, isMarried: true} : el)

//11. Найдите Студентку по имени Ann
const findAnn = students.find(el=> el.name === "Ann")

//12. Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, st) => {
    return acc.scores > st.scores ? acc : st;
});

//12a. Найдите 2 студента с самым высоким баллом
let bestStudent1 = students[0];
let bestStudent2 = students[1];
for (let i=1; i < students.length; i++) {
    if (bestStudent.scores > bestStudent2.scores) {
        if (students[i].scores > bestStudent2.scores) {
            bestStudent2 = students[i];
        }
    }  else {
        if (students[i].scores > bestStudent.scores) {
            bestStudent1 = students[i];
        }
    }

}

//13. Найдите сумму баллов всех студентов
const scoresSum = students.reduce((acc, st) => acc + st.scores, 0);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students: StudensType) => {
    return students.map(el=>({...el, friends: students.map(st=>st.name).filter(name=>name !== el.name)}))
}