import * as fabric from "fabric";
import React, { useRef, useState, useEffect } from "react";
import { PlusIcon, TrashIcon } from "sebikostudio-icons";
import basketImgFront from "../../images/basket__front.png";
import basketTexture from "../../images/texture1.jpg";

export default function Constructor() {
  const frontCanvasRef = useRef();
  const [frontCanvas, setFrontCanvas] = useState(null);
  const [text, setText] = useState("");
  const [textMenuVisible, setTextMenuVisible] = useState(false);
  const [activeObject, setActiveObject] = useState(null);

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
      console.log("canvas:", canvas);
      // if (canvas instanceof fabric.Canvas) {
      //   canvas.sendToBack(texture);
      // } else {
      //   console.error('canvas is not an instance of fabric.Canvas');
      // }
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

  const handleAddTextToCanvas = () => {
    const text = new fabric.Text("Введите текст", {
      left: 100,
      top: 100,
      fontSize: 24,
      fontFamily: "Arial",
      fill: "#000",
    });

    frontCanvas.add(text);
    frontCanvas.setActiveObject(text);
    setActiveObject(text);
    setTextMenuVisible(true);

    text.on("selected", () => {
      console.log("Текстовый объект кликнут!");
      setTextMenuVisible(true);
    });

    text.on("deselected", () => {
      console.log("Текстовый объект отпущен!");
      setTextMenuVisible(false);
    });
  };

  const handleTextMenuChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (activeObject) {
      activeObject.set(property, value);
      frontCanvas.renderAll();
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (activeObject && activeObject.type === "text") {
      activeObject.set("text", newText);
      frontCanvas.renderAll();
    }
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
              <button
                className="tool-group__add-text-button link"
                onClick={handleAddTextToCanvas}
              >
                <PlusIcon className="plus-icon" />
                ТЕКСТ
              </button>
              {textMenuVisible && (
                <div id="text-menu-container">
                  <input
                    type="text"
                    value={text} // TODO при добавлении новых тектоввых объектов значение должно обнуляться
                    onChange={handleTextChange}
                    placeholder="Введите текст"
                  />
                  <input
                    type="color"
                    name="fill"
                    value={activeObject ? activeObject.fill : "#000"}
                    onChange={handleTextMenuChange}
                  />
                  <select
                    name="fontSize"
                    value={activeObject ? activeObject.fontSize : ""}
                    onChange={handleTextMenuChange}
                  >
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                  </select>
                  <select
                    name="fontFamily"
                    value={activeObject ? activeObject.fontFamily : "Arial"}
                    onChange={handleTextMenuChange}
                  >
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                  </select>
                </div>
              )}
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
            {/* Выбор цвета */}
            <div className="tool-group">
              <label htmlFor="colorPicker">Цвет:</label>
              <input type="color" id="colorPicker" value="#000000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
