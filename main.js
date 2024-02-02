function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardsspock', 'spockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock', 'rockscissors']
    window.addEventListener('load', () => {
        let userChoice = '';
    
        document.querySelectorAll('.user-chioce .game-card').forEach(card => {
            card.addEventListener('click', (ev) => {
                userChoice = getUserChoice(ev.target);
                startGame();
            })
        })
    
    })
    
    function startGame() {
    
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
            console.log('Tie');
        } else if () {

        } else if () {

        }
    }
}