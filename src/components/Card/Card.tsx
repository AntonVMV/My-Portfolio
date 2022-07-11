import { CardContainer, CardDesription } from "./style";
import { ICardData } from "../types";

interface CardProps {
  cardData: ICardData;
}

export const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <CardContainer img={cardData.image}>
      <img src={`${cardData.image}`} alt="card backgroud" />
      <CardDesription>
        <p>{cardData.description}</p>
        <div>
          {cardData.linkGh && (
            <a href={cardData.linkGh} target="_blank" rel="noreferrer">
              Github code
            </a>
          )}
          {cardData.linkBuild && (
            <a href={cardData.linkBuild} target="_blank" rel="noreferrer">
              Watch build
            </a>
          )}
          {cardData.checkSert && (
            <a href={cardData.checkSert} target="_blank" rel="noreferrer">
              Check cerfificate
            </a>
          )}
        </div>
      </CardDesription>
    </CardContainer>
  );
};
