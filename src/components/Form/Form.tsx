import React from "react";
import { Button } from "../Button/Button";
import { useRef } from "react";
import { StyledForm } from "./style";

interface FormProps {
  onSubmit: (data: HTMLFormElement) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const form = useRef<HTMLFormElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      onSubmit(form.current);
      form.current.reset();
    }
  };

  return (
    <StyledForm onSubmit={submitHandler} ref={form}>
      <h3>send an email:</h3>
      <input type="text" name="name" placeholder="Your name" />
      <input name="email" placeholder="Your email" />
      <textarea placeholder="Enter message" name="message" />
      <Button text="Send" type="submit" />
    </StyledForm>
  );
};
