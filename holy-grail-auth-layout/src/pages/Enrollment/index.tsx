const EnrollmentPage = () => {
  return (
    <div>
      <form className='flex flex-col'>
        <input
          className='border border-gray-500'
          type='text'
          name='location'
          value=''
          placeholder='location'
        />

        <button className='border border-blue-500' type='submit'>
          Next
        </button>
      </form>
    </div>
  );
};

export default EnrollmentPage;
