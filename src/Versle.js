// Random bible verse given daily
// a random 5 letter word will be taken out
// guess the word with wordle rules

import bible from "./bible.json";
import Draggable from "react-draggable";

const Versle = () => {
  var votd = {
    book: "Jeremiah",
    chapter: 29,
    verse1: 11,
    verse2: undefined, //or undefined
  };

  function getVerseTitle(votd) {
    if (votd.verse2 === undefined) {
      return votd.book + " " + votd.chapter + ":" + votd.verse1;
    } else {
      return (
        votd.book + " " + votd.chapter + ":" + votd.verse1 + "-" + votd.verse2
      );
    }
  }

  function getBibleVerse(votd) {
    if (typeof votd.verse2 !== "undefined") {
      let passage = bible.filter(
        (el) =>
          el.verse >= votd.verse1 &&
          el.verse <= votd.verse2 &&
          el.chapter === votd.chapter &&
          el.book_name === votd.book
      );
      if (passage == null) {
        return "Error: verse not found";
      }
      let verses = "";
      for (let i = 0; i < passage.length; i++) {
        verses += " " + passage[i]["text"];
      }
      return verses;
    } else {
      let passage = bible.find(
        (el) =>
          el.verse === votd.verse1 &&
          el.chapter === votd.chapter &&
          el.book_name === votd.book
      );
      return passage["text"];
    }
  }

  return (
    <div className="versle">
      <h1>{getVerseTitle(votd)}</h1>
      <p>{getBibleVerse(votd)}</p>
    </div>
  );
};

export default Versle;
