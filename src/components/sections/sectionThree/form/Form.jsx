import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Form.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzeqerk");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <form className="container-form" onSubmit={handleSubmit}>
        <input
          id="email"
          placeholder="Ingresa tu email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
