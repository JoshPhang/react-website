// Random bible verse given daily
// a random 5 letter word will be taken out
// guess the word with wordle rules

import bible from "./bible.json";

const Versle = () => {
  function getBibleVerse(bk, chp, vs) {
    let passage = bible.find(
      (el) => el.verse === vs && el.chapter === chp && el.book_name === bk
    );
    if (passage == null) {
      return "Error: verse not found";
    } else {
      return passage["text"];
    }
  }

  return (
    <div className="versle">
      <h1>{getBibleVerse("John", 3, 16)}</h1>
    </div>
  );
};

export default Versle;
