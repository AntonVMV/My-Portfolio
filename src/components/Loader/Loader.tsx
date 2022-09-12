import { LoaderContainer } from "./styles";

export interface LoaderProps {
  size?: "s" | "m";
}

export const Loader: React.FC<LoaderProps> = ({ size = "m" }) => {
  return (
    <LoaderContainer className="loader" size={size}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </LoaderContainer>
  );
};
