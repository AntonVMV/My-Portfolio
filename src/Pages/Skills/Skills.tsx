import { MainContainer } from "../../styles";
import { Technologies } from "./Technologies";
import { techologies, otherTech } from "../../data/skillsData";
import { HardSkills } from "./HardSkills";
import { Education } from "./Education";
import { SkillsBg } from "./style";

export const Skills: React.FC = () => {
  return (
    <SkillsBg>
      <MainContainer>
        <Technologies data={techologies} otherTech={otherTech} />
        <HardSkills />
        <Education />
      </MainContainer>
    </SkillsBg>
  );
};
