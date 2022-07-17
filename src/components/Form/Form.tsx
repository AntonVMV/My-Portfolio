import React from "react";
import { Button } from "../Button/Button";
import { useRef } from "react";
import { StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";

interface FormProps {
  onSubmit: (data: HTMLFormElement) => void;
}

interface IForm {
  name: string;
  email: string;
  message: string;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const form = useRef<HTMLFormElement>(null);

  const submitHandler = () => {
    if (form.current) {
      onSubmit(form.current);
      reset();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)} ref={form}>
      <h3>send an email:</h3>
      <Input
        {...register("name", {
          required: { value: true, message: "Please, enter your name" },
          minLength: {
            value: 3,
            message: "Minimum 3 characters",
          },
        })}
        placeholder="Your name"
        error={errors.name}
      />
      <Input
        {...register("email", {
          required: { value: true, message: "Please, enter your email" },
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Incorrect email",
          },
        })}
        placeholder="Your email"
        error={errors.email}
      />
      <TextArea
        {...register("message", {
          required: { value: true, message: "Please, enter message" },
        })}
        placeholder="Your message"
        error={errors.message}
      />
      <Button text="Send" type="submit" />
    </StyledForm>
  );
};
