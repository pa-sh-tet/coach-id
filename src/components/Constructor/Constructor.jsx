import * as fabric from "fabric";
import React, { useRef, useState, useEffect } from "react";
import { TrashIcon } from "sebikostudio-icons";
import basketImgFront from '../../images/basket__front.png';

export default function Constructor() {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState(null);
  const [currentSide, setCurrentSide] = useState("front"); // Начальная сторона - лицевая

  useEffect(() => {
    // if (canvasRef.current) {
    //   const newCanvas = new fabric.Canvas(canvasRef.current);
    //   setCanvas(newCanvas);

    //   // Загрузка фонового изображения
    //   fabric.Image.fromURL(basketImgFront, (img) => {
    //     newCanvas.setBackgroundImage(img, newCanvas.renderAll.bind(newCanvas), {
    //       scaleX: newCanvas.width / img.width,
    //       scaleY: newCanvas.height / img.height
    //     });
    //   });

    //   return () => {
    //     newCanvas.dispose();
    //   };
    // }
    if (canvasRef.current) {
      const initCanvas = new fabric.Canvas(canvasRef.current, {
        width: 313,
        height: 575,
      });

      fabric.Image.fromURL('https://images.unsplash.com/photo-1662226708407-6ae3feaf1c9d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', (img) => {
        console.log("Изображение  загружено!");
        // Масштабируем изображение до нужного размера
        img.scaleToWidth(313);
        img.scaleToHeight(575);

        // Добавляем изображение как фон
        // initCanvas.backgroundColor = "red";
        initCanvas.backgroundImage = img;
        initCanvas.renderAll();
      });

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  // const setBackgroundImage = (url, canvas) => {
  //   fabric.Image.fromURL(url, (img) => {
  //     // Масштабируем изображение до нужного размера
  //     img.scaleToWidth(600);
  //     img.scaleToHeight(700);

  //     // Устанавливаем фон Canvas
  //     canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
  //       originX: 'center',
  //       originY: 'center'
  //     });
  //   });
  // };

  const handleImageUpload = (e) => {
    let imgObj = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imgObj);
    reader.onload = (e) => {
      let imageUrl = e.target.result;
      let imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.onload = () => {
        let image = new fabric.Image(imgElement);
        image.scaleToWidth(50); // Масштабируем по ширине до 50
        image.scaleToHeight(50); // Масштабируем по высоте до 50
        canvas.add(image);
        canvas.centerObject(image);
        canvas.setActiveObject(image);
      };
    };
  };

  const deleteImage = () => {
    canvas.remove(canvas.getActiveObject());
  };

  return (
    <section className="constructor">
      <div className="constructor__container">
        <div className="constructor__area">
          <div className="constructor__design">
            <canvas
              id="canvas"
              ref={canvasRef}
              className="canvas__front"
              width={500}
              height={500}
            ></canvas>
          </div>
          <div className="constructor__tools">
            {/* Добавить картинку */}
            <div className="tool-group">
              <label>Добавить картинку:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <TrashIcon className="trash-icon link" onClick={deleteImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Constructor() {
//   const canvasRef = useRef(null);
//   const [currentSide, setCurrentSide] = useState("front"); // Начальная сторона - лицевая

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Инициализация Canvas
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     function renderFront() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистка canvas
//       ctx.fillStyle = "lightblue"; // Заливка фона
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Рисуем лицевую сторону планшета
//       ctx.fillStyle = "black"; // Цвет рамки
//       ctx.fillRect(50, 50, 400, 300); // Рисуем прямоугольник - рамку

//       // Добавьте здесь другие элементы лицевой стороны, например, текст
//       ctx.font = "20px Arial";
//       ctx.fillText("Лицевая сторона", 150, 150);
//     }

//     // Функция для рендеринга задней стороны
//     function renderBack() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистка canvas
//       ctx.fillStyle = "lightgreen"; // Заливка фона
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Рисуем заднюю сторону планшета
//       ctx.fillStyle = "black"; // Цвет рамки
//       ctx.fillRect(50, 50, 400, 300); // Рисуем прямоугольник - рамку

//       // Добавьте здесь другие элементы задней стороны
//       ctx.font = "20px Arial";
//       ctx.fillText("Задняя сторона", 150, 150);
//     }

//     // Рендерим соответствующую сторону
//     if (currentSide === "front") {
//       renderFront();
//     } else {
//       renderBack();
//     }
//   }, [currentSide]); // Перерендериваем при изменении `currentSide`

//   const handleSideChange = () => {
//     if (currentSide === "front") {
//       setCurrentSide("back");
//     } else {
//       setCurrentSide("front");
//     }
//   };

//   return (
//     <section className="constructor">
//       <div className="constructor__container">
//         <div className="constructor__area">
//           <div className="constructor__design">
//             <button
//               className="constructor__button constructor__button_left link"
//               onClick={() => handleSideChange()}
//             ></button>
//             <canvas ref={canvasRef} width={500} height={700} />
//             <button
//               className="constructor__button link"
//               onClick={() => handleSideChange()}
//             ></button>
//           </div>
//           <div className="constructor__tools">
//             {/* Выбор вида спорта */}
//             <div className="tool-group">
//               <label htmlFor="sportSelect">Вид спорта:</label>
//               <select id="sportSelect">
//                 <option value="basketball">Баскетбол</option>
//                 <option value="football">Футбол</option>
//                 <option value="tennis">Теннис</option>
//               </select>
//             </div>

//             {/* Выбор цвета */}
//             <div className="tool-group">
//               <label htmlFor="colorPicker">Основной цвет:</label>
//               <input type="color" id="colorPicker" value="#000000" />
//             </div>

//             {/* Выбор цвета */}
//             <div className="tool-group">
//               <label htmlFor="colorPicker">Второстепенный цвет:</label>
//               <input type="color" id="colorPicker" value="#000000" />
//             </div>

//             {/* Добавление текста */}
//             <div className="tool-group">
//               <label>Добавить текст:</label>
//               <button>ТЕКСТ</button>
//             </div>

//             {/* Добавление изображения */}
//             <div className="tool-group">
//               <button>Добавить изображение</button>
//               <input type="file" accept="image/*" />
//             </div>

//             {/* Выбор текстуры */}
//             <div className="tool-group">
//               <label htmlFor="textureSelect">Текстура:</label>
//               <select id="textureSelect">
//                 <option value="wood">Дерево</option>
//                 <option value="grass">Трава</option>
//                 <option value="stone">Камень</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
