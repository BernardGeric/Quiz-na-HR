const questions = [
    {
        question: "Koji je glavni grad Hrvatske?",
        answers: ["Zagreb", "Split", "Dubrovnik", "Osijek"],
        correct: 0
    },
    {
        question: "Koji je najveći planet u Sunčevom sustavu?",
        answers: ["Zemlja", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },
    {
        question: "Koji element ima kemijski simbol O?",
        answers: ["Zlato", "Kisik", "Ugljik", "Helij"],
        correct: 1
    },
    {
        question: "Koliko kontinenata postoji na Zemlji?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Tko je napisao 'Rat i mir'?",
        answers: ["Lev Tolstoj", "Fjodor Dostojevski", "Charles Dickens", "Victor Hugo"],
        correct: 0
    },
    {
        question: "Koji je najveći ocean na svijetu?",
        answers: ["Atlantski ocean", "Indijski ocean", "Tihi ocean", "Arktički ocean"],
        correct: 2
    },
    {
        question: "Koliko je trajao Stogodišnji rat?",
        answers: ["100 godina", "116 godina", "90 godina", "120 godina"],
        correct: 1
    },
    {
        question: "Koja je država poznata po piramidama?",
        answers: ["Indija", "Egipat", "Grčka", "Meksiko"],
        correct: 1
    },
    {
        question: "Koji je najduži riječni sustav na svijetu?",
        answers: ["Amazon", "Nil", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "Tko je izumio žarulju?",
        answers: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
        correct: 0
    },
    {
        question: "Koji je glavni grad Francuske?",
        answers: ["Pariz", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Koji planet je poznat kao 'Crveni planet'?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: 0
    },
    {
        question: "Tko je slikao 'Mona Lisu'?",
        answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correct: 0
    },
    {
        question: "Koji se metal koristi za izradu nakita?",
        answers: ["Željezo", "Bakar", "Zlato", "Olovo"],
        correct: 2
    },
    {
        question: "Koji kontinent ima najviše država?",
        answers: ["Afrika", "Azija", "Europa", "Sjeverna Amerika"],
        correct: 0
    },
    {
        question: "Koje godine je sagrađen Eiffelov toranj?",
        answers: ["1887.", "1889.", "1901.", "1912."],
        correct: 1
    },
    {
        question: "Koji je najveći kopneni sisavac?",
        answers: ["Nosorog", "Slon", "Tigar", "Medvjed"],
        correct: 1
    },
    {
        question: "Koji je najbrži sisavac na svijetu?",
        answers: ["Gepard", "Lav", "Sokol", "Konj"],
        correct: 0
    },
    {
        question: "Koja je najviša planina na svijetu?",
        answers: ["K2", "Kilimanjaro", "Everest", "Mont Blanc"],
        correct: 2
    },
    {
        question: "Koliko je planeta u Sunčevom sustavu?",
        answers: ["7", "8", "9", "10"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    
    const answerBtns = document.querySelectorAll(".answer-btn");
    answerBtns.forEach((btn, index) => {
        btn.innerText = question.answers[index];
        btn.disabled = false;  // Omogućite ponovno klikanje odgovora
        btn.classList.remove("correct", "incorrect");
    });

    // Sakrij dugme za sljedeće pitanje dok korisnik ne odabere odgovor
    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(index) {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    const answerBtns = document.querySelectorAll(".answer-btn");
    
    // Oznaka točnog odgovora
    answerBtns.forEach((btn, i) => {
        if (i === correctAnswerIndex) {
            btn.classList.add("correct");  // Dodavanje zelene za točan odgovor
        } else {
            btn.classList.add("incorrect");  // Dodavanje crvene za netočan odgovor
        }
        btn.disabled = true;  // Onemogućite daljnje klikove na odgovore
    });
    
    // Prikazivanje dugmeta za sljedeće pitanje
    document.getElementById("next-btn").style.display = "block";
    
    if (index === correctAnswerIndex) {
        score++;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").innerText = `Vaš rezultat je: ${score} / ${questions.length}`;

    let trophyImage = '';
    let trophyText = '';
    
    if (score === questions.length) {
        trophyImage = './assets/gold.png';
        trophyText = 'Čestitamo, osvojili ste prvo mjesto!';
    } else if (score >= questions.length * 0.7) {
        trophyImage = './assets//silver.png';
        trophyText = 'Odlično, osvojili ste drugo mjesto!';
    } else {
        trophyImage = './assets//bronze.png';
        trophyText = 'Dobro, osvojili ste treće mjesto!';
    }

    document.getElementById("trophy").src = trophyImage;
    document.getElementById("trophy-text").innerText = trophyText;
}
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("start-container").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
}

