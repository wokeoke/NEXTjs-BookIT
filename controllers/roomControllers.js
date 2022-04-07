import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from '../middleware/catchAsyncErrors';
import APIFeatures from '../utils/apiFeatures';

// All rooms || GET /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  // const rooms = await Room.find();
  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// Create new room || POST /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({ success: true, room });
});

// Get room detail || GET /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found with this ID', 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update room || PUT /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found', 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ success: true, room });
});

// Delete room || DELETE /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room not found', 404));
  }

  await room.remove();

  res.status(200).json({ success: true, message: 'Room is deleted' });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
