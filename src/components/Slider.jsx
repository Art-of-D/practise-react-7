import { useState } from "react";
import { longList } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Slider = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);
  const nextSlide = () =>
    setCurrentPerson((oldPerson) => (oldPerson + 1) % people.length);

  const prevSlide = () =>
    setCurrentPerson(
      (oldPerson) => (oldPerson - 1 + people.length) % people.length
    );

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Slider;
