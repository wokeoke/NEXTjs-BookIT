import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearError } from '../redux/actions/roomActions';
import RoomItem from './room/RoomItem';

const Home = () => {
  const dispatch = useDispatch();
  const { rooms, error } = useSelector((state) => state.allRooms);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms && rooms.length === 0 ? (
          <div className="alert alert-danger">
            <b>No Rooms Found</b>
          </div>
        ) : (
          rooms.map((room) => <RoomItem key={room._id} room={room} />)
        )}
      </div>
    </section>
  );
};
export default Home;
