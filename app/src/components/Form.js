const Form = () => {
  return (
    <form action="">
      <h1>Form</h1>
      <div class="space-y-40">
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" placeholder="name" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" placeholder="message" />
      </div>
    </form>
  );
};

export default Form;
