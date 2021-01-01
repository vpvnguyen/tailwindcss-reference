import { useState } from "react";

const initialFormState = {
  name: "",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  const clearForm = (event) => {
    event.preventDefault();
    setFormData(initialFormState);
  };

  return (
    <form>
      <h1>Form</h1>
      <div class="space-y-40">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleOnChange}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={clearForm}>Clear</button>
    </form>
  );
};

export default Form;
