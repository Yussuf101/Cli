require('dotenv').config();
const mongoose = require('mongoose');

const fs = require('fs');
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { findMovie } = require('./utils');
const argv = yargs(hideBin(process.argv)).argv;

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection

connection.once("open", () => {
    console.log("Welcome to Netflix App")
})

const movies = new mongoose.model(
    'movies',
    {
        title: {
            type: String,
            required: true
        },
        genre: {
            type: String
        },
        language: {
            type: String
        },
        year: {
            type: Number
        },
        director: {
            type: String
    }
    })


  const main = ()=> {
    let movieListArr
    try {
        movieListArr = JSON.parse(fs.readFileSync('./netflix.json'));
    } catch (error) {
        movieListArr = [];
    }

    if (argv.add){
        add(movieListArr, argv.add);
    }else if(argv.deleteMovie){
        deleteMovie(movieListArr, argv.deleteMovie);
    }else if(argv.findMovie){
        findMovie(movieListArr, argv.findMovie);
    }else if(argv.updateMovie){
        updateMovie(movieListArr, argv.updateMovie);
        }else{
        console.log(" Invalid Option");
    }
  }
  main();


  

