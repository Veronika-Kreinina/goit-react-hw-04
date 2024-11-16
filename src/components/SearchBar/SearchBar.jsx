import { Field, Form, Formik } from "formik";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = { query: "" };
  const handleSubmit = (values, options) => {
    console.log(values);
    onChangeQuery(values.query);
    options.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
