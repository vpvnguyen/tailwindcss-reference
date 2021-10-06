import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className='flex flex-col items-center flex-none w-48 gap-4 border border-blue-500'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-2 py-4 justfy-center'>
          <img
            className='w-20'
            src='https://cdn-icons-png.flaticon.com/512/61/61205.png'
            alt='avatar'
          />
          <div className='flex flex-col items-center gap-1'>
            <p>Name</p>
            <p>Title</p>
            <p>ID</p>
          </div>
        </div>

        <div className='text-center text-gray-500'>_____________</div>
        <div>
          <Link className='font-bold' to='/requests'>
            requests
          </Link>

          <ul>
            <li>
              <Link to='/new-request'>New request</Link>
            </li>
            <li>
              <Link to='/request-history'>request History</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link className='font-bold' to='/gifts'>
            Prize
          </Link>
          <ul>
            <li>
              <Link to='/get-gift'>Get Gift</Link>
            </li>
            <li>
              <Link to='/giffs-list'>Gifts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
