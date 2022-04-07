import nextConnect from 'next-connect';
import dbConnect from '../../config/dbConnect';
import { isAuthenticatedUser } from '../../middleware/auth';
import { currentUserProfile } from '../../controllers/authControllers';
import onError from '../../middleware/errors';

const handler = nextConnect({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile);

export default handler;
