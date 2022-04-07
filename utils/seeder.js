const mongoose = require('mongoose');
const Room = require('../models/room');
const dbConnect = require('../config/dbConnect');
const rooms = require('../data/rooms');

mongoose.connect(
  'mongodb+srv://udemy123:udemy123@nextmongocluster.6q8ck.mongodb.net/BookIt?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const seedRooms = async (req, res) => {
  try {
    await Room.deleteMany();
    console.log('Rooms are deleted');
    await Room.insertMany(rooms);
    console.log('All rooms are added');
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
