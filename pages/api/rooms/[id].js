import nextConnect from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from '../../../controllers/roomControllers';
import onError from '../../../middleware/errors';

const handler = nextConnect({ onError });
dbConnect();
handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
