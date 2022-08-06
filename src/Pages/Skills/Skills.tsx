import { MainContainer } from "../../styles";
import { Technologies } from "./Technologies";
import { HardSkills } from "./HardSkills";
import { Education } from "./Education";
import { SkillsBg } from "./style";

export const Skills: React.FC = () => {
  return (
    <SkillsBg>
      <MainContainer>
        <Technologies />
        <HardSkills />
        <Education />
      </MainContainer>
    </SkillsBg>
  );
};
