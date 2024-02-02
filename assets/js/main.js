function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardsspock', 'spockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock', 'rockscissors']
    let userChoice = '';
    let computerChoice = '';
    const userChoiceElement = document.querySelector('.user-choice');
    const pickedElement = document.querySelector('.picked');
    const userPickElement = document.querySelector('.user-pick');
    const pcPickElement = document.querySelector('.pc-pick');
    const resultElement = document.querySelector('.result');
    const resultTitleElement = resultElement.querySelector('.title');
    const scoreCountElement = document.querySelector('.score-count');
    let currentScore = 0;

    window.addEventListener('load', () => {
        
    
        document.querySelectorAll('.user-chioce .game-card').forEach(card => {
            card.addEventListener('click', (event) => {
                userChoice = getUserChoice(event.target);
                computerChoice = getComputerChoice();
                startGame();
            })
        });

        resultElement.querySelector('button').addEventListener('click', tryAgain);
    
    })
    
    function startGame() {
        calculateWinner(userChoice, computerChoice);
        userChoiceElement.classList.add('hidden');
        pickedElement.classList.remove('hidden');
        clearResultBeforeAppend();
        buildChoiceElement(true, userChoice);
        buildChoiceElement(false, computerChoice);
    }
    
    function getUserChoice(target) {
        if (target.nodeName === 'IMG') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }
    
    function getComputerChoice() {
        return actions[Math.floor(Math.random()*5)];
        
    }

    function calculateWinner(user, computer) {
        if (user === computer) {
            resultTitleElement.innerText = 'Tie';
        } else if (getUserWinsStatus(user + computer)) {
            resultTitleElement.innerText = 'You Win!';
            calculateScore(1);
        } else {
            resultTitleElement.innerText = 'You Lose!';
            calculateScore(-1);
        }
    }
    function getUserWinsStatus(result) {
        return userWinResults.some(winStr => winStr ===  result)
    }

    function buildChoiceElement(isItUserElement, className) {
        const element = document.createElement('div');
        element.classList = [`game-card ${className}`];
        element.innerHTML = `<img src="assets/images/icon-${className}.svg" alt="${className}">`;
        if (isItUserElement) {
            userPickElement.append(element);
        } else {
            pcPickElement.append(element);
        }
    }

    function tryAgain() {
        userChoiceElement.classList.remove('hidden');
        pickedElement.classList.add('hidden');
    }

    function clearResultBeforeAppend() {
        userPickElement.innerHTML = '';
        pickedElement.innerHTML = '';
    }

    function retrieveScoreFromLocalStorage() {
        const score = +window.localStorage.getItem('gameScore') || 0;
        currentScore = score;
        updateScoreBoard();
    }

    function updateScoreBoard() {
        scoreCountElement.innerText = currentScore;
        window.localStorage.setItem('gameScore', currentScore);
    }

    //work with modal
    const rulesBtn = document.querySelector('.rules-btn');
    const modalBg = document.querySelector('.modal-bg');
    const modal = document.querySelector('.modal');

    rulesBtn.addEventListener('click', () => {
        modal.classList.add('active');
        modalBg.classList.add('active');
    });

    modalBg.addEventListener('click', (event) => {
        if (event.target === modalBg) {
            hideModal();
        }
    });

    document.querySelector('.close').addEventListener('click', hideModal);

    function hideModal() {
        modal.classList.remove('active');
        modalBg.classList.remove('active');  
    }
}

game();