import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='border border-gray-500'>
      <h1>Home Page</h1>
      <button className='border border-blue-500'>
        <Link to='/enroll' />
        Enroll
      </button>
      <button className='border border-black'>Login</button>
    </div>
  );
};

export default HomePage;
