function lockedProfile() {
    const profileElements = Array
        .from(document.querySelectorAll('.profile'));

    profileElements
        .forEach(profile => {
            const showMoreButton = profile.querySelector('button');

            showMoreButton.addEventListener('click', (event) => {
                const lockRadioElement = profile.querySelector('input[value=lock]');
                const moreInformationElement = profile.querySelector('div[id*="user"]');

                if (lockRadioElement.checked) {
                    return
                }

                if (showMoreButton.textContent === 'Show more') {
                    showMoreButton.textContent = 'Hide it'
                    moreInformationElement.style.display = 'block';

                } else {
                    showMoreButton.textContent = 'Show more'
                    moreInformationElement.style.display = 'none';
                }

            });
        });
}