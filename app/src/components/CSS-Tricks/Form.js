const Container = ({ children, className, ...props }) => (
  <div className={`flex items-center h-screen w-full ${className}`} {...props}>
    {children}
  </div>
);

const Label = ({ children, inputId, className, ...props }) => (
  <label
    className={`uppercase font-bold text-lg text-gray-darkest ${className}`}
    for={inputId}
    {...props}
  >
    {children}
  </label>
);

const Input = ({ type, name, id, className, ...props }) => (
  <input
    className={`border py-2 px-3 text-gray-darkest ${className}`}
    type={type}
    name={name}
    id={id}
    {...props}
  />
);

const CSSTricksForm = () => {
  return (
    <Container className="bg-gray-500">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="block w-full text-center text-gray-darkest mb-6">
          Sign Up
        </h1>
        <form
          className="mb-4 md:flex md:flex-wrap md:justify-between"
          action="/"
          method="post"
        >
          <div className="flex flex-col mb-4 md:w-1/2">
            <Label inputId="first_name" className="mb-2 md:mr-2">
              First Name
            </Label>
            <Input
              className="md:mr-2"
              type="text"
              name="first_name"
              id="first_name"
            />
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <Label inputId="last_name" className="mb-2 md:ml-2">
              Last Name
            </Label>
            <Input
              className="md:ml-2"
              type="text"
              name="last_name"
              id="last_name"
            />
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <Label inputId="email" className="mb-2">
              Email
            </Label>
            <Input type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <Label inputId="password" className="mb-2">
              Password
            </Label>
            <Input type="password" name="password" id="password" />
          </div>
          <button
            className="block text-black uppercase text-lg p-4 rounded bg-green-200 mx-auto"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <a
          className="block no-underline text-sm text-gray-dark w-full text-center"
          href="/login"
        >
          Already have an account?
        </a>
      </div>
    </Container>
  );
};

export default CSSTricksForm;
