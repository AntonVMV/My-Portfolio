import { MainContainer, MainTitle } from "../../styles";
import { Carousel } from "../../components/Carousel/Carousel";

export const mockCards = [
  {
    image: "./img/blog.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure deserunt placeat ipsa impedit, dolore, explicabo ad nemo assumenda ratione sunt doloribus cum, accusamus eveniet. Dolor facere porro eum eius. Dolorem.",
    linkBuild: "/",
    linkGh: "/",
  },
  {
    image: "./img/movies.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure deserunt placeat ipsa impedit, dolore, explicabo ad nemo assumenda ratione sunt doloribus cum, accusamus eveniet. Dolor facere porro eum eius. Dolorem.",
    linkBuild: "/",
    linkGh: "/",
  },
  {
    image: "./img/test.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure deserunt placeat ipsa impedit, dolore, explicabo ad nemo assumenda ratione sunt doloribus cum, accusamus eveniet. Dolor facere porro eum eius. Dolorem.",
    linkBuild: "/",
    linkGh: "/",
  },
  {
    image: "./img/layout.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure deserunt placeat ipsa impedit, dolore, explicabo ad nemo assumenda ratione sunt doloribus cum, accusamus eveniet. Dolor facere porro eum eius. Dolorem.",
    linkBuild: "/",
    linkGh: "/",
  },
  {
    image: "./img/tetris.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure deserunt placeat ipsa impedit, dolore, explicabo ad nemo assumenda ratione sunt doloribus cum, accusamus eveniet. Dolor facere porro eum eius. Dolorem.",
    linkBuild: "/",
    linkGh: "/",
  },
];

export const Works: React.FC = () => {
  return (
    <>
      <MainContainer>
        <MainTitle style={{ paddingTop: "100px" }}>Here some works</MainTitle>
      </MainContainer>
      <Carousel cardsDataArr={mockCards} />
    </>
  );
};
