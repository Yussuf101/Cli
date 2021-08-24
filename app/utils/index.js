const { Movie } = require("./models.js");
const { users } = require("./users.js");
require('./mongodb.js');
 
//mongodb functions
const createMovie = async (name, year, director) => {
    const newMovie = new Movie({name, year, director});
    await newMovie.save();
    console.log(newMovie);
  };

const findAll = async () => {
  const movieFindAll = await Movie.find({});
  console.log(movieFindAll);
}
const updateMovie = async (updateName, newName) => {
    const movieUpdate = await Movie.updateOne({name: updateName}, {$set:{name: newName}});
    console.log(movieUpdate);    
  }
const deleteMovie = async (name) => {
  await Movie.deleteOne({name: name});
  console.log(`${name} has been removed`);
} 
// SQL functions

const addFilm = async (name, movieId) => {
    console.log('film has been added')
    const film = film.build({
      name: name,
      movie_id: movieId
    });
  
    await film.save();
    console.log(`Added: ${users.name}.`)
    
  }
  
  const updatefilm = async (name, newName) => {
    const film = await film.update(
      {name: newName},
      {where: {name: name}}
    );
  
    console.log(`Updated ${name} to ${newName}`)
  }
  
  const findfilm= async (name) => {
    const film = await film.findAll(
      {where: {name: name}}
    );
  
    for (let cust of customer) {
      console.log(`Customer: ${cust.name}`)
    }
  }
  
  const deleteFilm= async (name) => {
    const film = await film.destroy(
      {where: {name}}
    );
  
    console.log(`Customer ${name} removed from database`);
  }

module.exports = {
    createMovie,
    findAll,
    updateMovie,
    deleteMovie,
    addFilm,
    updatefilm,
    findfilm,
    deleteFilm
  }