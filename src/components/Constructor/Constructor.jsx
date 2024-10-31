import * as fabric from "fabric";
import React, { useRef, useState, useEffect } from "react";
import { TrashIcon } from "sebikostudio-icons";
import basketImgFront from "../../images/basket__front.png";
import basketTexture from "../../images/texture1.jpg";

export default function Constructor() {
  const frontCanvasRef = useRef();
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (frontCanvasRef.current) {
      const initFrontCanvas = new fabric.Canvas(frontCanvasRef.current, {
        width: 350,
        height: 600,
      });
      initFrontCanvas.renderAll();
      setFrontCanvas(initFrontCanvas);
      return () => {
        initFrontCanvas.dispose();
      };
    }
  }, [frontCanvasRef]);

  const handleAddText = (e) => {
    setText(e.target.value);
  };

  const handleAddTextToCanvas = () => {
    let newText = new fabric.Text(text, {
      fill: "green",
      fontSize: 20,
      fontFamily: "Times New Roman",
      fontWeight: "bold",
      textAlign: "center",
    });
    frontCanvas.add(newText);
    setText("");
  };

  const setBackgroundImg = (url, canvas) => {
    let imageUrl = url;
    let imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.onload = () => {
      let image = new fabric.Image(imgElement);
      image.lockMovementX = true;
      image.lockMovementY = true;
      image.lockScalingX = true;
      image.lockScalingY = true;
      image.selectable = false;
      image.scaleToWidth(canvas.width);
      image.scaleToHeight(canvas.height);
      canvas.add(image);
      canvas.centerObject(image);
    };
    // canvas.moveTo(imgElement, 1);
  };
  
  const setTexture = (img, canvas) => {
    let textureUrl = img;
    let imgElement = document.createElement("img");
    imgElement.src = textureUrl;
    imgElement.onload = () => {
      let texture = new fabric.Image(imgElement);
      texture.lockMovementX = true;
      texture.lockMovementY = true;
      texture.lockScalingX = true;
      texture.lockScalingY = true;
      texture.selectable = false;
      texture.scaleToWidth(canvas.width);
      texture.scaleToHeight(canvas.height);
      canvas.add(texture);
      canvas.centerObject(texture);
      console.log('canvas:', canvas); 
      if (canvas instanceof fabric.Canvas) {
        canvas.sendToBack(texture);
      } else {
        console.error('canvas is not an instance of fabric.Canvas');
      }
    };
  };

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
        frontCanvas.add(image);
        frontCanvas.centerObject(image);
        frontCanvas.setActiveObject(image);
      };
    };
  };

  const deleteImage = () => {
    frontCanvas.remove(frontCanvas.getActiveObject());
  };

  return (
    <section className="constructor">
      <div className="constructor__container">
        <div className="constructor__area">
          <div className="constructor__design">
            <canvas
              id="front-canvas"
              ref={frontCanvasRef}
              className="canvas__front"
            ></canvas>
          </div>
          <div className="constructor__tools">
            {/* Выбрать вид спорта */}
            <div className="tool-group">
              <label htmlFor="sport-select">Выберите вид спорта</label>
              <button
                className="link"
                onClick={() => {
                  setBackgroundImg(basketImgFront, frontCanvas);
                }}
              >
                Баскетбол
              </button>
            </div>
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
            {/* Добавление текста */}
            <div className="tool-group">
              <label>Добавить текст:</label>
              {/* <form className="text-form" onSubmit={handleAddTextToCanvas}> */}
              <input type="text" value={text} onChange={handleAddText} />
              <button onClick={handleAddTextToCanvas}>Добавить</button>
              {/* </form> */}
            </div>
            {/* Выбор текстуры */}
            <div className="tool-group">
              <label htmlFor="textureSelect">Текстура:</label>
              <button
                onClick={() => {
                  setTexture(basketTexture, frontCanvas);
                }}
              >
                Первый
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
