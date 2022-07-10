import { MainContainer } from "../../styles";
import {
  AboutContainer,
  ProfileInfo,
  ProfileSubTitle,
  ProfilePhoto,
  Social,
} from "./styles";
import { MainText } from "../../styles";
import { Button } from "../../components/Button/Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MainTitle, Highlighted } from "../../styles";

export const About: React.FC = () => {
  return (
    <MainContainer>
      <AboutContainer>
        <ProfileInfo>
          <ProfileSubTitle>Hello</ProfileSubTitle>
          <MainTitle>
            My name is <Highlighted>Anton</Highlighted> <br />
            and i'm junior <br />
            <Highlighted>Frontend Developer</Highlighted>
          </MainTitle>
          <MainText>
            I've been studying development for more than a year. I have
            successfully completed several courses. Now I continue to learn and
            practice my skills by reading articles and watching training videos.
            Always trying to learn something new and implement it in my
            projects. I don't have commercial experience yet, so I'm looking for
            a team in which I can grow, enjoy my work and just have fun.
          </MainText>
          <ProfilePhoto />
        </ProfileInfo>
        <a
          href="https://drive.google.com/file/d/1xQ4so1W-vgrnnJoDy8grT-lOoDghnXpA/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="download cv" />
        </a>
        <Social>
          <a
            href="https://github.com/AntonVMV"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://linkedin.com/in/антон-матвеев-421a80215"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </Social>
      </AboutContainer>
    </MainContainer>
  );
};
