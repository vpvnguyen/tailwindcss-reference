const LoginPage = () => {
  return (
    <div>
      <form className='flex flex-col'>
        <input
          className='border border-gray-500'
          type='text'
          name='username'
          value=''
          placeholder='username'
        />
        <input
          className='border border-gray-500'
          type='password'
          name='password'
          value=''
          placeholder='password'
        />

        <button className='border border-blue-500' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
