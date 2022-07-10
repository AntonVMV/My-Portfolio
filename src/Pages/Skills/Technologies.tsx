import {
  TechnologiesContainer,
  TechnologyItem,
  StyledTechnologies,
  TechList,
} from "./style";
import {
  TitleMid,
  MainText,
  TitleSm,
  Highlighted,
  MainContainer,
} from "../../styles";

interface TechnologiesProps {
  data: {
    name: string;
    image: string;
  }[];
  otherTech: string[];
}

export const Technologies: React.FC<TechnologiesProps> = ({
  data,
  otherTech,
}) => {
  return (
    <StyledTechnologies>
      <TitleMid>
        <Highlighted>Technologies</Highlighted> I work with
      </TitleMid>
      <TechnologiesContainer>
        {data.map((item, index) => {
          return (
            <TechnologyItem key={index} index={index}>
              <img src={item.image} alt="techology" />
              <MainText>{item.name}</MainText>
            </TechnologyItem>
          );
        })}
      </TechnologiesContainer>
      <TitleSm>
        ... and others that I used in <Highlighted>projects</Highlighted>
      </TitleSm>
      <TechList>
        {otherTech.map((item, index) => {
          return (
            <li key={index}>
              <MainText>{item}</MainText>
            </li>
          );
        })}
      </TechList>
    </StyledTechnologies>
  );
};
