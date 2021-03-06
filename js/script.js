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

const playerNameSubmitBtn = document.getElementsByID('submit-button')

playerNameSubmitBtn.addEventListener('click', runAnimation)

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})

const htmlButton = document.getElementsByID('html-btn')
htmlButton.addEventListener('click', startGame)
function startGame() {
    console.log ('Yay!')
}

function nextQuestion() {

}

function selectAnswer() {

}



const quizData = [
    {
        question: "What does DOM stand for?",
        a: "Domain Object Model",
        b: "Domain Object Markup",
        c: "Document Object Manipulation",
        d: "Document Object Model",
        correct: "d",
    },
    {
        question: "Which tag creates a numbered list?",
        a: "<ul>",
        b: "<li>",
        c: "<nl>",
        d: "<list>",
        correct: "b",
    },
    {
        question: "Which tag will place the text “Kabootleg” at the top of the browser?",
        a: "<html>",
        b: "<head>",
        c: "<title>",
        d: "<body>",
        correct: "c"
    },
    {
        question: "The link to your CSS file belong in which section?",
        a: "<html>",
        b: "<head>",
        c: "<title>",
        d: "<body>",
        correct: "b"
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