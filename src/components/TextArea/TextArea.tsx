import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { TextAreaContainer, StyledTextArea } from "./styles";
import { StyledError } from "../Input/styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
}

export const TextArea = forwardRef(
  (
    { error, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <TextAreaContainer>
        <StyledTextArea {...props} ref={ref} isError={!!error} />
        {error && <StyledError>{error.message}</StyledError>}
      </TextAreaContainer>
    );
  }
);
