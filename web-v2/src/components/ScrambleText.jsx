import React, { useEffect, useState } from "react";

const ScrambleText = ({ Color, textSize, text, speed = 50 }) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    let frame = 0;
    let isComponentMounted = true;

    const scramble = () => {
      if (!isComponentMounted) return;

      setLetters(
        text.split("").map((char, i) => {
          // If it's a space, always reveal it.
          if (char === " ") {
            return { char, revealed: true };
          }
          // Reveal character if its index is before the current frame.
          if (i < frame) {
            return { char, revealed: true };
          } else {
            return {
              char: characters[Math.floor(Math.random() * characters.length)],
              revealed: false,
            };
          }
        })
      );

      frame++;
      if (frame <= text.length) {
        setTimeout(scramble, speed);
      }
    };

    scramble();
    return () => {
      isComponentMounted = false;
    };
  }, [text, speed, characters]);

  return (
    <div className="inline-flex" style={{ whiteSpace: "pre" }}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className={`transition duration-500 ease-in-out ${textSize}`}
          style={{
            opacity: letter.revealed ? 1 : 0.2,
            transitionDelay: `${i * 10}ms`,
            color: letter.revealed ? Color : "#aaa",
          }}
        >
          {letter.char === " " ? "\u00A0" : letter.char}
        </span>
      ))}
    </div>
  );
};

export default ScrambleText;
