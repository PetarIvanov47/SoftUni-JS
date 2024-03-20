function solve(input) {

    class Song {
        constructor(name, time) {
            this.name = name
            this.time = time
        }
    }

    const playlistColection = {};
    const numberOfSongs = input.shift();
    const allSongs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        const [listType, songName, time] = input.shift().split('_');

        if (!playlistColection[listType]) {
            playlistColection[listType] = [];
        }

        const song = new Song(songName, time);
        playlistColection[listType].push(song);
        allSongs.push(song)
    }

    const playList = input.shift();

    if (playList === 'all') {
        allSongs.forEach(song => console.log(song.name));
        // Object.values(playlistColection).flat(1).forEach(song => console.log(song.name));
    } else {
        playlistColection[playList].forEach(song => console.log(song.name));
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])