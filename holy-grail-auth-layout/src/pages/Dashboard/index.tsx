const arr = [1, 1];

const ExampleCard = () => (
  <div className='flex flex-col items-center gap-6 p-6 border border-yellow-500 rounded-lg'>
    <h1>Card title</h1>
    <p>Card Image</p>
    <a href=''>Link for this card</a>
  </div>
);

const DashboardPage = () => {
  return (
    <>
      {arr.map((item) => (
        <ExampleCard />
      ))}
    </>
  );
};

export default DashboardPage;
