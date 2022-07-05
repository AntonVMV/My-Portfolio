import { Card } from "../Card/Card";
import { CarouselContainer, SlideContainer, CarouselBg } from "./style";
import { useState } from "react";

interface CarouselProps {
  cardsDataArr: { image: string }[];
}

// Pass an array of length at least 3 !!

export const Carousel: React.FC<CarouselProps> = ({ cardsDataArr }) => {
  const [items] = useState([...cardsDataArr].concat(...cardsDataArr));
  const [keys, setKeys] = useState(Object.keys(items));

  const moveLeft = () => {
    setKeys((prev) => {
      return prev.map((_, i) => prev[(i + 1) % items.length]);
    });
  };

  const moveRight = () => {
    setKeys((prev) => {
      return prev.map((_, i) => prev[(i - 1 + items.length) % items.length]);
    });
  };

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>, pos: string) => {
    if (parseInt(pos) === 2) return;

    if (parseInt(pos) < 2) {
      moveLeft();
    } else {
      moveRight();
    }
    e.preventDefault();
  };

  return (
    <CarouselBg>
      <CarouselContainer>
        {keys.map((pos, index) => {
          return (
            <SlideContainer
              position={parseInt(pos)}
              key={index}
              onClick={(e) => clickHandler(e, pos)}
            >
              <Card cardData={items[index]} />
            </SlideContainer>
          );
        })}
      </CarouselContainer>
    </CarouselBg>
  );
};
