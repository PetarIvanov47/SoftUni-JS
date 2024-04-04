function create(words) {
	const contentElement = document.getElementById('content');

	words
		.forEach(text => {
			const containerElement = document.createElement('div');
			containerElement.addEventListener('click', () => {
				containerElement.querySelector('p').style.display = 'block';
			});

			const paragraphElement = document.createElement('p');
			paragraphElement.textContent = text;
			paragraphElement.style.display = 'none';
			containerElement.appendChild(paragraphElement);

			contentElement.appendChild(containerElement);
		})
}