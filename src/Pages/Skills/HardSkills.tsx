import { MainText, TitleMid } from "../../styles";
import { HSContainer, HSLeft, HSRight } from "./style";
import { useIntersection } from "../../hooks/useIntersection";
import { useRef } from "react";

export const HardSkills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const intersection = useIntersection(ref);

  return (
    <HSContainer ref={ref}>
      <TitleMid>Hard skills</TitleMid>
      <HSLeft isVisible={intersection}>
        <MainText>HTML/SCSS (semantics, responsive layout)</MainText>
        <MainText>Javascript (primitives, object, arrays, functions)</MainText>
        <MainText>Working with DOM</MainText>
        <MainText>Ajax (fetch, axios)</MainText>
        <MainText>OOP in JS/TS</MainText>
      </HSLeft>
      <HSRight isVisible={intersection}>
        <MainText>Creating SPA with React</MainText>
        <MainText>Functional and Class Components</MainText>
        <MainText>React Hooks / lifecycle methods</MainText>
        <MainText>State managment with React-Redux/Toolkit</MainText>
        <MainText>Routing (react router)</MainText>
      </HSRight>
    </HSContainer>
  );
};
