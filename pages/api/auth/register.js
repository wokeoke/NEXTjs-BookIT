import nextConnect from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { registerUser } from '../../../controllers/authControllers';
import onError from '../../../middleware/errors';

const handler = nextConnect({ onError });

dbConnect();

handler.post(registerUser);

export default handler;
