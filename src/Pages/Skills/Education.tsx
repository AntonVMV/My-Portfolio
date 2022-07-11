import { MainTextLarge, TitleSm, MainTextSmall, TitleMid } from "../../styles";
import { useRef } from "react";
import { useIntersection } from "../../hooks/useIntersection";
import { Card } from "../../components/Card/Card";
import { certData } from "../../data/certData";
import {
  EducationContainer,
  EducationDescription,
  Sertificates,
} from "./style";

export const Education: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  const intersection = useIntersection(ref);

  return (
    <EducationContainer ref={ref}>
      <TitleMid>Education</TitleMid>
      <EducationDescription>
        <div>
          <TitleSm>University</TitleSm>
          <MainTextLarge>
            Donetsk Institute of Market and Social Politics
          </MainTextLarge>
          <MainTextSmall>Social informatics (2006 - 2011)</MainTextSmall>
        </div>
        <div>
          <TitleSm>Courses</TitleSm>
          <MainTextLarge>
            It-School 'Smart' (Frontend-basic/HTML/CSS)
          </MainTextLarge>
          <MainTextLarge>
            It-School 'Hillel' (Frontend-pro/Javascript)
          </MainTextLarge>
          <MainTextLarge>It-School 'Hillel' (Frontend-pro/React)</MainTextLarge>
        </div>
      </EducationDescription>
      <Sertificates isVisible={intersection}>
        {certData.map((item, index) => {
          return <Card key={index} cardData={item} />;
        })}

        {/* <div>
          <a
            href="https://certificate.ithillel.ua/ru/view/42685634"
            target="_blank"
            rel="noreferrer"
          >
            Check sertificate
          </a>
          <img src="./img/cert1.png" alt="certificate" />
        </div>
        <div>
          <a
            href="https://certificate.ithillel.ua/ru/view/90773957"
            target="_blank"
            rel="noreferrer"
          >
            Check sertificate
          </a>
          <img src="./img/cert2.png" alt="certificate" />
        </div> */}
      </Sertificates>
    </EducationContainer>
  );
};
