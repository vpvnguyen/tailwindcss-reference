import { Helmet } from "react-helmet-async";
import { Switch, Link, Route } from "react-router-dom";
import { AuthRoute } from "Router";
import { useQuery } from "react-query";
import SideBar from "components/SideBar";
import HomePage from "pages/Home";
import EnrollmentPage from "pages/Enrollment";
import LoginPage from "pages/Login";
import DashboardPage from "pages/Dashboard";
import env from "./environment";

console.log("environment variables:", env);

const App = () => {
  const program = {}

  const isAuth = true;

  console.log("program:", program);

  return (
    <>
      <Helmet>
        {/* TODO: fetch header from program service */}
        {/* <link rel='icon' to={favicon} /> */}
        {/* <link rel='apple-touch-icon' to={favicon} /> */}
        <title>{`Site Title`}</title>
      </Helmet>
      {/* Page Layout */}
      <div className='flex w-screen h-screen border border-gray-100'>
        {/* SIDEBAR */}
        {isAuth && <SideBar />}
        {/* Page Layout */}
        <div className='flex flex-col flex-grow border border-green-800'>
          {/* AppBar */}
          <div className='flex justify-between flex-none h-16 border border-yellow-500'>
            <div>
              <Link className='border border-black' to='/'>
                Logo
              </Link>
            </div>
            <ul className='flex gap-4 p-4'>
              <li>{/* <Link to='/enroll'>Enroll</Link> */}</li>
              <li>
                {/* <Link to='/login'>Login</Link> */}
                <Link className='border border-blue-300' to='/requests'>
                  Requests
                </Link>
              </li>
              <li>
                {/* <Link to='/dashboard'>Dashboard</Link> */}
                <Link className='border border-blue-300' to='/gifts'>
                  gifts
                </Link>
              </li>{" "}
            </ul>
          </div>

          {/* Main */}
          <div className='px-12 py-6 overflow-y-scroll border border-red-500'>
            <div className='flex flex-col gap-6'>
              <h1 className='font-bold'>Page Title</h1>
              <div className='flex flex-wrap gap-4'>
                {/* router */}
                <Switch>
                  <Route exact path='/'>
                    <HomePage />
                  </Route>
                  <Route path='/enroll'>
                    <EnrollmentPage />
                  </Route>
                  <Route path='/login'>
                    <LoginPage />
                  </Route>
                  <AuthRoute path='/dashboard'>
                    <DashboardPage />
                  </AuthRoute>

                  <AuthRoute path='/requests'>
                    <div className='flex flex-col items-center gap-6 p-6 border border-yellow-500 rounded-lg'>
                      <h1>Submit request</h1>
                      <p>Image</p>
                      <Link to='/new-request'>Go to Submit request</Link>
                    </div>
                    <div className='flex flex-col items-center gap-6 p-6 border border-yellow-500 rounded-lg'>
                      <h1>request History</h1>
                      <p>Image</p>
                      <Link to='/request-history'>Go to request History</Link>
                    </div>
                  </AuthRoute>

                  <AuthRoute path='/new-request'>
                    <div>Submit request</div>
                  </AuthRoute>
                  <AuthRoute path='/request-history'>
                    <div>request History</div>
                  </AuthRoute>

                  <AuthRoute path='/gifts'>
                    <div className='flex flex-col items-center gap-6 p-6 border border-yellow-500 rounded-lg'>
                      <h1>Enter gifts</h1>
                      <p>Image</p>
                      <Link to='/get-gift'>Go to Enter gift</Link>
                    </div>
                    <div className='flex flex-col items-center gap-6 p-6 border border-yellow-500 rounded-lg'>
                      <h1>gifts-list</h1>
                      <p>Image</p>
                      <Link to='/gifts-list'>Go to gifts-list</Link>
                    </div>{" "}
                  </AuthRoute>
                  <AuthRoute path='/get-gift'>
                    <div>gifts</div>
                  </AuthRoute>
                  <AuthRoute path='/gifts-list'>
                    <div>gifts-list</div>
                  </AuthRoute>
                  <Route path='*'>
                    <HomePage />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
