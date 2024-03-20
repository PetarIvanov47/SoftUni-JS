function addMovie(data, movies) {
    const movieName = data.slice(1).join(' ');
    movies.push({name: movieName})
}

function addDirector(data, movies) {
    const comandIndex = data.indexOf('directedBy');
    const movieName = data.slice(0, comandIndex).join(' ');
    const directorName = data.slice(comandIndex + 1).join(' ');

    const movieIndex = findMovie(movies, movieName);

    if (movieIndex >= 0) {
        movies[movieIndex]['director'] = directorName;
    }

}

function addDate(data, movies) {
    const movieName = data.slice(0, data.length - 2).join(' ');
    const date = data[data.length - 1];

    const movieIndex = findMovie(movies, movieName);

    if (movieIndex >= 0) {
        movies[movieIndex]['date'] = date;
    }
}


function findMovie(movies, movieName) {

    for (let i = 0; i < movies.length; i++) {

        if (movies[i].name === movieName) {
            return i
        }
    }
}

function solve(input) {
    let movies = [];

    for (let line of input) {
        const data = line.split(' ');

        if (data.includes('addMovie')){
            addMovie(data, movies);

        } else if (data.includes('directedBy')){
            addDirector(data, movies)

        }else if (data.includes('onDate')) {
            addDate(data, movies)
        }

    }

    movies.forEach(movie => {
        if (Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie));
        }
    })

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])