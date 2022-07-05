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
          Several <Highlighted>projects</Highlighted> that I completed during
          <Highlighted> studies</Highlighted>. I hope this list will{" "}
          <Highlighted>grow</Highlighted>.
        </MainTitle>
      </MainContainer>
      <Carousel cardsDataArr={data} />
    </WorksContainer>
  );
};
