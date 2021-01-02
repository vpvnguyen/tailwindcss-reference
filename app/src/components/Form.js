import { useState } from "react";

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
    <form>
      <h1>Form</h1>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <p>Logo</p>
        </div>
        <div>
          <div className="text-xl font-medium text-black">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name || ""}
              onChange={handleOnChange}
            />
          </div>
          <div className="text-gray-500">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name || ""}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>

      <div>{formNotification}</div>

      <button onClick={handleSubmit} disabled={isFormInvalid(formData)}>
        Submit
      </button>
      <button onClick={clearForm}>Clear</button>
    </form>
  );
};

export default Form;
