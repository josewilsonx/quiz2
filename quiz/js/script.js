document.getElementById('submit').addEventListener('click', function() {
    const answers = ['James Cameron', 'Jack Dawson', 'Rose DeWitt Bukater', 'I\'m the king of the world!', 'Rose estava prestes a pular do navio.', 'Nova Iorque', '15 de abril de 1912', 'Thomas Andrews', 'Iceberg', 'My Heart Will Go On'];
    let score = 0;

    document.querySelectorAll('.question').forEach((questionEl, index) => {
        const selectedOption = questionEl.querySelector('input[type="radio"]:checked');
        const correctAnswer = answers[index];
        
       
        questionEl.querySelectorAll('li').forEach(li => {
            li.classList.remove('correct', 'incorrect');
        });

        if (selectedOption) {
            const isCorrect = selectedOption.value === correctAnswer;

            if (isCorrect) {
                selectedOption.parentElement.classList.add('correct');
                score++;
            } else {
                
                selectedOption.parentElement.classList.add('incorrect');
              
                questionEl.querySelector(`input[value="${correctAnswer}"]`).parentElement.classList.add('correct');
            }
        } else {
           
            questionEl.querySelector(`input[value="${correctAnswer}"]`).parentElement.classList.add('correct');
        }
    });

    document.getElementById('results').innerText = `Você marcou ${score} de 10`;
});
