import { useEffect, useState } from 'react';

const App = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);

  const clearForm = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit) {
      console.log("Email e password:", form.email, form.password);
    }
  }, [submit, form.email, form.password,]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onInput={handleInput}
            value={form.email}
            id="email"
            name="email"
            placeholder="inserire email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onInput={handleInput}
            value={form.password}
            id="password"
            name="password"
            placeholder="inserire password"
            required
          />
        </div>
        <div>
          <button type="submit">Registrati</button>
        </div>
      </form>
      {submit && (
        <div>
          <p>Email: {form.email}</p>
          <p>Password: {form.password}</p>
        </div>
      )}

    </>
  );
};

export default App;
