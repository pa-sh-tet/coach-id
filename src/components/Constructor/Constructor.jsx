import React, { useRef, useState, useEffect } from "react";

export default function Constructor() {
  const canvasRef = useRef(null);
  const [currentSide, setCurrentSide] = useState("front"); // Начальная сторона - лицевая

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Инициализация Canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Функция для рендеринга лицевой стороны
    function renderFront() {
      // Рисуем лицевую сторону планшета
      // ...
    }

    // Функция для рендеринга задней стороны
    function renderBack() {
      // Рисуем заднюю сторону планшета
      // ...
    }

    // Рендерим соответствующую сторону
    if (currentSide === "front") {
      renderFront();
    } else {
      renderBack();
    }
  }, [currentSide]); // Перерендериваем при изменении `currentSide`

  const handleSideChange = (newSide) => {
    setCurrentSide(newSide);
  };

  return (
    <section className="constructor">
      <div className="constructor__container">
        <div className="constructor__area">
          <canvas ref={canvasRef} width={500} height={500} />
          <button
            className="constructor__button-"
            onClick={() => handleSideChange("front")}
          >
            Лицевая
          </button>
          <button
            className="constructor__button"
            onClick={() => handleSideChange("back")}
          >
            Задняя
          </button>
        </div>
        <div className="constructor__tools"></div>
      </div>
    </section>
  );
}
