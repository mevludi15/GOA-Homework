class Shape {
  constructor(length, width, color, coordinates) {
    this.length = length;
    this.width = width;
    this.color = color;
    this.coordinates = coordinates; // [x, y]
  }

  // სიგრძის შეცვლის მეთოდი 
  changeLength(newLength) {
    if (typeof newLength === "number" && newLength > 0) {
      this.length = newLength;
    } else {
      console.log("სიგრძე აუცილებლად უნდა იყოს დადებითი რიცხვი");
    }
  }

  // სიგანის შეცვლის მეთოდი 
  changeWidth(newWidth) {
    if (typeof newWidth === "number" && newWidth > 0) {
      this.width = newWidth;
    } else {
      console.log("სიგანე აუცილებლად უნდა იყოს დადებითი რიცხვი");
    }
  }

  // ფერის შეცვლის მეთოდი 
  changeColor(newColor) {
    if (typeof newColor === "string") {
      this.color = newColor;
    } else {
      console.log("ფერი უნდა იყოს ტექსტის სახით");
    }
  }

  // კოორდინატების შეცვლის მეთოდი
  changeCoordinates(newCoordinates) {
    if (typeof newCoordinates[0] === "number" && typeof newCoordinates[1] === "number"
    ) {
      this.coordinates = newCoordinates;
    } else {
      console.log("კოორდინატები უნდა იყოს რიცხვების სახით");
    }
  }

  // ფიგურის დახატვის მეთოდი
  draw() {
    console.log(
      `კოორდინატებზე - [${this.coordinates}] იხატება ფიგურა, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია ${this.color}.`
    );
  }
}