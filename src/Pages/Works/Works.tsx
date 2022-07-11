import { MainContainer, MainTitle } from "../../styles";
import { Carousel } from "../../components/Carousel/Carousel";
import { data } from "../../data/carouselData";
import { WorksContainer } from "./style";
import { Highlighted } from "../../styles";

export const Works: React.FC = () => {
  return (
    <WorksContainer>
      <MainContainer>
        <MainTitle>
          Some <Highlighted>projects</Highlighted> <br />
          that I completed during
          <Highlighted> studies</Highlighted>
        </MainTitle>
      </MainContainer>
      <Carousel cardsDataArr={data} />
    </WorksContainer>
  );
};
