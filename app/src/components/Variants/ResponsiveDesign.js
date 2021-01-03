const Width = () => {
  return (
    // <!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
    <div className="w-16 md:w-32 lg:w-48">SM 16, MD 32, LG 48</div>
  );
};

const SideToStack = () => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <div className="h-48 w-full object-cover md:w-48">Logo</div>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Case study
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          Finding customers for your new business
        </a>
        <p className="mt-2 text-gray-500">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  </div>
);

const ResponsiveDesign = () => {
  return (
    <>
      <h1 className="text-xl">Width</h1>
      <Width />
      <h1 className="text-xl">SideToStack</h1>
      <SideToStack />
    </>
  );
};

export default ResponsiveDesign;
