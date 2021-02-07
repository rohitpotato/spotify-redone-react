import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Slider.css";

const Slider = ({ min, max, step, value, onChange }) => {
  const inputRef = useRef();
  const [isChanging, setIsChanging] = useState(false);

  const getPercent = () => {
    return (
      ((inputRef.current.value - inputRef.current.min) /
        (inputRef.current.max - inputRef.current.min)) *
      100
    );
  };

  const handleMove = useCallback(() => {
    if (!isChanging) return;

    const percent = getPercent();
    inputRef.current.style.setProperty(
      "--webkitProgressPercent",
      `${percent}%`
    );
  }, [isChanging]);

  const handleClick = () => {
    const percent = getPercent();
    inputRef.current.style.setProperty(
      "--webkitProgressPercent",
      `${percent}%`
    );
  };

  const handleUpAndLeave = () => setIsChanging(false);
  const handleDown = () => setIsChanging(true);

  useEffect(() => {
    setIsChanging(true);
    handleMove();
  }, [value, handleMove]);

  return (
    <div>
      <input
        className="range"
        type="range"
        ref={inputRef}
        min={min}
        max={max}
        step={step}
        onMouseMove={handleMove}
        onClick={handleClick}
        onMouseDown={handleDown}
        onMouseUp={handleUpAndLeave}
        onMouseLeave={handleUpAndLeave}
        value={value}
        onChange={(e) => {
          onChange(Number(e.currentTarget.value));
        }}
      />
    </div>
  );
};

Slider.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  value: 0,
  onChange: () => {},
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Slider;
