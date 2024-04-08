function create(words) {
	const contentElement = document.getElementById('content');

	words
		.forEach(text => {
			const paragraphElement = document.createElement('p');
			paragraphElement.textContent = text;
			paragraphElement.style.display = 'none';

			const containerElement = document.createElement('div');
			containerElement.appendChild(paragraphElement);
			contentElement.appendChild(containerElement);


			containerElement.addEventListener('click', () => {
				paragraphElement.style.display = 'block';
			});

		});
}