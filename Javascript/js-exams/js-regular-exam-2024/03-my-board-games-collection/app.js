function attachEvents() {
    const gamesUrl = 'http://localhost:3030/jsonstore/games';
    const loadGamesButton = document.getElementById('load-games');
    const gamesListelement = document.getElementById('games-list');
    const addGameButton = document.getElementById('add-game');
    const nameInputElement = document.getElementById('g-name');
    const typeInputElement = document.getElementById('type');
    const maxPlayersInputElement = document.getElementById('players');

    loadGamesButton.addEventListener('click', loadGames);

    addGameButton.addEventListener('click', addGame);

    async function addGame() {
        const name = nameInputElement.value;
        const type = typeInputElement.value;
        const players = maxPlayersInputElement.value;

        if (!name || !type || !players) {
            return
        }

        const gameObj = {
            name,
            type,
            players,
        };

        await fetch(`${gamesUrl}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gameObj)
        });

        nameInputElement.value = '';
        typeInputElement.value = '';
        maxPlayersInputElement.value = '';

        loadGames();

    }

    async function loadGames() {
        gamesListelement.innerHTML = '';
        const gamesResponse = await fetch(`${gamesUrl}`);
        const allGames = await gamesResponse.json();

        Object
            .values(allGames)
            .forEach(game => {
                const gameElement = createGameElement(game);
                gamesListelement.appendChild(gameElement)
            });
    };

    function createGameElement(gameData) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';
        changeButtonElement.addEventListener('click', change);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.addEventListener('click', deleteGame);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        buttonsContainer.appendChild(changeButtonElement);
        buttonsContainer.appendChild(deleteButtonElement);

        const pPlayersElement = document.createElement('p');
        pPlayersElement.textContent = gameData.players;

        const typePElement = document.createElement('p');
        typePElement.textContent = gameData.type;

        const namePElement = document.createElement('p');
        namePElement.textContent = gameData.name;

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');

        contentContainer.appendChild(namePElement);
        contentContainer.appendChild(typePElement);
        contentContainer.appendChild(pPlayersElement);

        const gameConteiner = document.createElement('div');
        gameConteiner.classList.add('board-game');

        gameConteiner.appendChild(contentContainer);
        gameConteiner.appendChild(buttonsContainer);

        function change() {
            nameInputElement.value = gameData.name;
            typeInputElement.value = gameData.type;
            maxPlayersInputElement.value = gameData.players;

            const editButtonElement = document.getElementById('edit-game');
            editButtonElement.disabled = false;
            addGameButton.disabled = true;

            editButtonElement.addEventListener('click', async () => {
                const newName = nameInputElement.value;
                const newType = typeInputElement.value;
                const newMaxPlayers = maxPlayersInputElement.value;

                const editedGame = {
                    name: newName,
                    type: newType,
                    players: newMaxPlayers,
                };

                await fetch(`${gamesUrl}/${gameData._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(editedGame)
                });

                editButtonElement.disabled = true;
                addGameButton.disabled = false;

                nameInputElement.value = '';
                typeInputElement.value = '';
                maxPlayersInputElement.value = '';
                loadGames();

            });


        };

        async function deleteGame(){
            try {
                await fetch(`${gamesUrl}/${gameData._id}`, {
                    method: 'DELETE'
                });
            } catch (error) {
                console.log(error.message);
            }
            

            loadGames();
        };

        return gameConteiner

    };

    loadGames()
}

attachEvents();
