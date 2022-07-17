import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { InputContainer, StyledInput, StyledError } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

export const Input = forwardRef(
  ({ error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputContainer>
        <StyledInput {...props} ref={ref} isError={!!error} />
        {error && <StyledError>{error.message}</StyledError>}
      </InputContainer>
    );
  }
);
