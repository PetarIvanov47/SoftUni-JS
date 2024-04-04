function lockedProfile() {
    const profileElements = Array
        .from(document.querySelectorAll('div[class=profile]'));

        profileElements
        .forEach(profile => {
            const showMoreButton = profile.querySelector('button');

            showMoreButton.addEventListener('click', (event) => {
                const chekbox = profile.querySelector('input[value=lock]');
                const moreInformationElement = profile.querySelector('div[id*="user"]');

                if (!chekbox.checked) {
                    if (showMoreButton.textContent === 'Show more'){
                        showMoreButton.textContent = 'Hide it'
                        moreInformationElement.style.display = 'block';
                        
                    }else {
                        showMoreButton.textContent = 'Show more'
                        moreInformationElement.style.display = 'none';
                    }
                }

            });
        });
}