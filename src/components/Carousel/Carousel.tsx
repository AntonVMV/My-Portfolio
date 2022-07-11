import { Card } from "../Card/Card";
import {
  CarouselContainer,
  SlideContainer,
  CarouselBg,
  CarouselControls,
} from "./style";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface CarouselProps {
  cardsDataArr: { image: string }[];
}

// Pass an array of length at least 3 !!
export const Carousel: React.FC<CarouselProps> = ({ cardsDataArr }) => {
  const [items] = useState([...cardsDataArr].concat(...cardsDataArr));
  const [keys, setKeys] = useState(Object.keys(items));
  const [isMoving, setIsMoving] = useState<boolean>(false);

  useEffect(() => {
    if (isMoving) {
      new Promise((resolve) => {
        setTimeout(resolve, 800);
      }).then(() => {
        setIsMoving(false);
      });
    }
  }, [isMoving]);

  const moveLeft = () => {
    if (!isMoving) {
      setIsMoving(true);
      setKeys((prev) => {
        return prev.map((_, i) => prev[(i + 1) % items.length]);
      });
    }
  };

  const moveRight = () => {
    if (!isMoving) {
      setIsMoving(true);
      setKeys((prev) => {
        return prev.map((_, i) => prev[(i - 1 + items.length) % items.length]);
      });
    }
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
    <>
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
      <CarouselControls>
        <FaArrowLeft onClick={moveLeft} />
        <FaArrowRight onClick={moveRight} />
      </CarouselControls>
    </>
  );
};
