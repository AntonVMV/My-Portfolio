import {
  TechnologiesContainer,
  TechnologyItem,
  StyledTechnologies,
  TechnologyIcon,
  TechList,
  OtherTech,
} from "./style";
import { TitleMid, MainText, TitleSm, Highlighted } from "../../styles";
import { useThemeContext } from "../../Context/context";

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
  const { type } = useThemeContext();

  return (
    <StyledTechnologies>
      <TitleMid>
        <Highlighted>Tools</Highlighted> I work with
      </TitleMid>
      <TechnologiesContainer>
        {data.map((item, index) => {
          return (
            <TechnologyItem key={index} index={index}>
              <TechnologyIcon
                src={item.image}
                alt="techology"
                isDark={type === "dark"}
              />
              <MainText>{item.name}</MainText>
            </TechnologyItem>
          );
        })}
      </TechnologiesContainer>
      <TitleSm>
        ... and others that I used in <Highlighted>projects</Highlighted>
      </TitleSm>

      <OtherTech>
        <TechList>
          {otherTech.map((item, index) => {
            return (
              <li key={index}>
                <MainText>{item}</MainText>
              </li>
            );
          })}
        </TechList>
      </OtherTech>
    </StyledTechnologies>
  );
};
