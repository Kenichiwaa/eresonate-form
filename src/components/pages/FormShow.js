import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import styled from "styled-components";
import { createForm } from "../../actions";
import imageLeft from "../../images/left-bg-image.png";
import imageRight from "../../images/right-bg-image.png";

const FormContainer = styled.div`
  max-width: 350px;
  margin: auto;
  padding-top: 40px;
  margin-bottom: 300px;

  .ui.form .field > label,
  h2 {
    color: white;
  }

  h2 {
    font-family: inherit;
    text-align: center;
    font-weight: 100;
    padding-bottom: 20px;
  }

  input[name],
  textarea[name="message"] {
    background-color: #191b1e !important;
    border-color: gray !important;
    color: white !important;
  }

  textarea[name="message"] {
    height: 100px;
  }
`;

const LeftBgImg = styled.img`
  position: fixed;
  z-index: 0;
  width: 355px;
  bottom: 192px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightBgImg = styled.img`
  position: absolute;
  z-index: 0;
  width: 334px;
  top: 80px;
  right: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledField = styled(Field)`
  &.ui.form input {
    background-color: pink;
  }
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

  renderInput = ({ input, label, meta, textarea }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        {textarea ? <textarea {...input} /> : <input {...input} />}
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createForm(formValues);
  };

  render() {
    return (
      <div>
        <LeftBgImg src={imageLeft} />
        <RightBgImg src={imageRight} />

        <FormContainer>
          <h2>Report a Problem</h2>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui form error"
          >
            <StyledField
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
              className="message"
              name="message"
              component={this.renderInput}
              label="Message"
              type="text"
              textarea="true"
            />
            <button className="ui button primary fluid">Submit</button>
          </form>
        </FormContainer>
      </div>
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
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Invalid email address";
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
