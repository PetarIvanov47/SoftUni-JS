function solve() {
    const sectionElements = Array.from(document.querySelectorAll('section'));

    const rightAnswers = {
        'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
        'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
        'Question #3: What is DOM?': 'A programming API for HTML and XML documents',
    };

    let rightAnswersCount = 0;

    sectionElements
        .forEach(section => {
            const question = section.querySelector('.question h2').textContent;
            const answerElements = Array.from(section.querySelectorAll('p'));

            answerElements
                .forEach(answerEl => {
                    answerEl.addEventListener('click', (event) => {
                        const answer = event.target.textContent;

                        if (rightAnswers[question] === answer) {
                            rightAnswersCount++;
                        }

                        section.setAttribute('class', 'hidden');
                        section.style.display = 'none';

                        const nextSection = section.nextElementSibling;
                        nextSection.removeAttribute('class', 'hidden');
                        nextSection.style.display = 'block';

                        if (nextSection.tagName === 'UL') {
                            const resultTextElement = nextSection.querySelector('h1');
                            let resultTextMessage = '';

                            if (rightAnswersCount === 3) {
                                resultTextMessage = 'You are recognized as top JavaScript fan!';
                            } else {
                                resultTextMessage = `You have ${rightAnswersCount} right answers`
                            }

                            resultTextElement.textContent = resultTextMessage;

                        }
                    });
                });

        });

}
