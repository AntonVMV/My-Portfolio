import { StyledTechnologies, TechList, OtherTech } from "./style";
import { TitleMid, MainTitle, MainText, Highlighted } from "../../styles";
import { techologies, otherTech } from "../../data/skillsData";
import { Tools } from "./Tools";

export const Technologies: React.FC = () => {
  return (
    <StyledTechnologies>
      <MainTitle>
        Let me tell you a little about my knowledge level of development{" "}
        <Highlighted>tools</Highlighted>
      </MainTitle>

      <Tools data={techologies} />

      <TitleMid>
        . . . some other tools I used in <Highlighted>projects</Highlighted>
      </TitleMid>

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
