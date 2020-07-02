import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import styled from "styled-components";
import { createForm } from "../../actions";

const FormContainer = styled.div`
  max-width: 350px;
  margin: auto;
`;

class FormShow extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    console.log(meta.touched);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createForm(formValues);
  };
  render() {
    return (
      <FormContainer>
        <h2>Report a Problem</h2>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="name"
            component={this.renderInput}
            label="Your Name"
            type="text"
          />
          <Field
            name="number"
            component={this.renderInput}
            label="Phone Number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <Field
            name="email"
            component={this.renderInput}
            label="Email"
            type="email"
          />
          <Field
            name="message"
            component={this.renderInput}
            label="Message"
            type="text"
          />
          <button className="ui button primary fluid">Submit</button>
        </form>
      </FormContainer>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "You must enter a valid name";
  }

  if (!formValues.number) {
    errors.number = "You must enter a valid phone number";
  }

  if (!formValues.email) {
    errors.email = "You must enter a valid email";
  }

  if (!formValues.message) {
    errors.message = "You must write a message";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "FormShow",
  validate,
})(FormShow);

export default connect(null, { createForm })(formWrapped);
