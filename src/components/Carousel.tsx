import React from 'react';
import './Carousel.scss';
import { useState } from 'react';

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  step = 3,
  frameSize,
  itemWidth,
  animationDuration,
  // infinite = false,
}) => {
  const [width, setWidth] = useState(itemWidth);
  const [frame, setFrames] = useState(frameSize);
  const [steps, setSteps] = useState(step);
  const [duration, setDuration] = useState(animationDuration);

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  // const prevHandler = () => {

  // };

  // const nextHandler = () => {

  // };

  return (
    <div className="Carousel">
      <form onSubmit={formHandler}>
        {/* <input type="text" value={} onChange={}/> */}
        <label>
          Image size:
          <input
            type="number"
            value={width}
            onChange={event => setWidth(+event.target.value)}
          />
        </label>

        <label>
          Number of frames:
          <input
            type="number"
            value={frame}
            onChange={event => setFrames(+event.target.value)}
          />
        </label>

        <label>
          Number of steps:
          <input
            type="number"
            value={steps}
            onChange={event => setSteps(+event.target.value)}
          />
        </label>

        <label>
          Set animation duration:
          <input
            type="number"
            value={duration}
            onChange={event => setDuration(+event.target.value)}
          />
        </label>
      </form>
      <ul className="Carousel__list">
        {[...images].map(image => (
          <li key={image}>
            <img src={image} alt="1" />
          </li>
        ))}
      </ul>

      {/* <button type="button" onClick={prevHandler}>Prev</button>
    <button type="button" onClick={nextHandler}>Next</button> */}
    </div>
  );
};

export default Carousel;
