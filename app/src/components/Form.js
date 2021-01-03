import { useState } from "react";

const FormLayout = () => {
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label
                  for="company_website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                for="about"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const initialFormState = {
  name: "",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formNotification, setFormNotification] = useState("");

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isFormInvalid = (formData) => {
    const { name, message } = formData;
    const MIN_NAME_LENGTH = 3;
    const MIN_MESSAGE_LENGTH = 5;
    if (!formData || !name || !message) return true;
    if (name.length < MIN_NAME_LENGTH || message.length < MIN_MESSAGE_LENGTH)
      return true;
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormInvalid(formData)) return setFormNotification("Invalid Form");
    alert(JSON.stringify(formData));
    setFormData(initialFormState);
    setFormNotification("Successfully submitted form.");
  };

  const clearForm = (event) => {
    event.preventDefault();
    setFormData(initialFormState);
  };

  return (
    // <form>
    //   <h1>Form</h1>

    //   <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    //     <div className="flex-shrink-0">
    //       <p>Logo</p>
    //     </div>
    //     <div>
    //       <div className="text-xl font-medium text-black">
    //         <label htmlFor="name">Full Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="name"
    //           value={formData.name || ""}
    //           onChange={handleOnChange}
    //         />
    //       </div>
    //       <div className="text-gray-500">
    //         <label htmlFor="name">Full Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="name"
    //           value={formData.name || ""}
    //           onChange={handleOnChange}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div>{formNotification}</div>

    //   <button onClick={handleSubmit} disabled={isFormInvalid(formData)}>
    //     Submit
    //   </button>
    //   <button onClick={clearForm}>Clear</button>
    // </form>
    <>
      <h1 className="text-4xl font-bold text-center border-8 border-gray-500 bg-gray-200">
        FORM
      </h1>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formData.name || ""}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <input
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                  type="text"
                  name="message"
                  placeholder="message"
                  value={formData.message || ""}
                  onChange={handleOnChange}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
