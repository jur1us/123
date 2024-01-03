// Catalog.js
import React from "react";
import "./Catalog.css";
import oneImage from "../../Images/one-600x750.jpg";
import twoImage from "../../Images/two-600x750.jpg";
import threeImage from "../../Images/three-600x750.jpg";
import fourImage from "../../Images/four-600x750.jpg";
import fiveImage from "../../Images/five-600x750.jpg";
import sixImage from "../../Images/six-600x750.jpg";
import sevenImage from "../../Images/seven-600x750.jpg";
import eightImage from "../../Images/eight-600x750.jpg";
import nineImage from "../../Images/nine-600x750.jpg";

const products = [
  { id: 1, name: "Куртки", image: oneImage },
  { id: 2, name: "Худі & Світшоти", image: twoImage },
  { id: 3, name: "Головні убори", image: threeImage },
  { id: 4, name: "Аксесуари", image: fourImage },
  { id: 5, name: "Футболки", image: fiveImage },
  { id: 6, name: "Джинси", image: sixImage },
  { id: 7, name: "Сорочки", image: sevenImage },
  { id: 8, name: "Шорти", image: eightImage },
  { id: 9, name: "Сумки & Рюкзаки", image: nineImage },
];

export default Catalog;