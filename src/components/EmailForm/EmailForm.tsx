import React from "react";
import { Button } from "../Button/Button";
import { StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { IForm } from "../types";
import { Loader } from "../Loader/Loader";

interface EmailFormProps {
  submitHnd: (data: IForm) => void;
  isLoading: boolean;
}

export const EmailForm: React.FC<EmailFormProps> = ({
  submitHnd,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const submitHandler = async (data: IForm) => {
    submitHnd(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
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
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            Sending... <Loader size="s" />
          </>
        ) : (
          <>Send</>
        )}
      </Button>
    </StyledForm>
  );
};
