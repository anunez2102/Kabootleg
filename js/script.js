const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

const quizData = [
    {
        question: "What does DOM stand for?",
        a: "Domain Object Model",
        b: "Domain Object Markup",
        c: "Document Object Manipulation",
        d: "Document Object Model",
        correct: "",
    },
];

const quiz = document.getElementsByID('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElement = document.getElementsByID('question')
const a_text = document.getSelection('a_text')
const b_text = document.getSelection('b_text')
const c_text = document.getSelection('c_text')
const d_text = document.getSelection('d_text')
const submitBtn = document.getElementsByID('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionElement.innerText = currentQuizData.questionElement
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerElements.forEach(answerElement => answerElement.checked = false)
}

function getSelection() {
    let answer

    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelection()
})