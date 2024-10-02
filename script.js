const quizData = [
    {
        question: "Qual o tipo de dado do valor 'true' em JavaScript?",
        alternatives: ["String", "Boolean", "Number", "Undefined", "Object"],
        correct: 1
    },
    {
        question: "Qual método é usado para transformar uma string em maiúsculas?",
        alternatives: [".split()", ".toUpperCase()", ".slice()", ".join()", ".reverse()"],
        correct: 1
    },
    {
        question: "Como você escreve um comentário em JavaScript?",
        alternatives: ["<!-- comentário -->", "// comentário", "/* comentário */", "** comentário **", "# comentário"],
        correct: 1
    },
    {
        question: "Qual a função usada para exibir mensagens no console?",
        alternatives: ["console.log()", "print()", "message()", "console.show()", "display()"],
        correct: 0
    },
    {
        question: "Como você cria uma função em JavaScript?",
        alternatives: ["def minhaFuncao()", "function minhaFuncao()", "create minhaFuncao()", "fun minhaFuncao()", "newFunction()"],
        correct: 1
    },
    {
        question: "Quais dessas tecnologias são consideradas linguagens de programação?",
        alternatives: ["Javascript", "HTML", "CSS", "VS Code", "Bootstrap"],
        correct: 0
    },
    {
        question: "Qual o atributo do input que define o seu tipo?",
        alternatives: ["id", "class", "type", "placeholder", "number"],
        correct: 2
    }
];

let score = 0;
let currentQuestion = 0;

const startQuiz = document.querySelector('.start-button');
startQuiz.addEventListener('click', function loadQuestion() {
    startQuiz.style.display = 'none';
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    const quizQuestions = document.createElement('div');
    quizQuestions.className = 'quiz-question';
    quizQuestions.innerHTML = quizData[currentQuestion].question;
    quizContainer.appendChild(quizQuestions);

    const ul = document.createElement('ul');
    ul.className = 'quiz-alternatives';
    quizData[currentQuestion].alternatives.forEach((alternatives, index) => {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;
        li.appendChild(radio);

        const label = document.createElement('label');
        label.innerHTML = alternatives;

        li.appendChild(label);
        ul.appendChild(li);
    });
    quizContainer.appendChild(ul);

    const nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.innerText = 'Next';
    quizContainer.appendChild(nextButton);
    nextButton.addEventListener('click', nextQuestion);

    function nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            const answer = parseInt(selectedAnswer.value);
            if (answer === quizData[currentQuestion].correct) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showScore();
            }
        } else {
            alert("Por favor, selecione uma resposta.");
        }
    }

    function showScore() {
        const quizContainer = document.getElementById('quiz-container');
        const scoreDiv = document.getElementById('score');
        quizContainer.style.display = 'none';
        scoreDiv.style.display = 'block';
        scoreDiv.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
    }

});