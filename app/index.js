  
const fs = require('fs')
const command = process.argv[2];
const input = process.argv[3];
const updateInput = process.argv[4];
const { add, deleteMovie, updateMovie } = require('./utils');

const app = () => {
    let movieListArr
    try {
        movieListArr = JSON.parse(fs.readFileSync('./netflix.json'));
    } catch (error) {
        movieListArr = [];
    }
    if (command === 'add') {
        add(movieListArr, input);
    } else if (command === 'list') {
        console.log(movieListArr)
    } else if (command === 'delete') {
        deleteMovie(movieListArr, input)
    } else if (command === 'update') {
        updateMovie(movieListArr, input, updateInput)
        // update entry in JSON identified by input (movie)
    }
}

app();