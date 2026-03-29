export const handleChange = (e, setForm) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const handleSubmit = (e, form) => {
  e.preventDefault();

  console.log("Form Data:", form);

  alert("Form submitted successfully!");
};