import { FRUITS } from "./data.js";

export const getSuggestion = async (keyword) => {
    let result = FRUITS.filter(
        (i) => i.substr(0, keyword.length).toLowerCase() === keyword.toLowerCase()
    );


    const modifiedResult = result.map((item) => highlight(item.toLowerCase(), keyword));

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(modifiedResult);
        }, 500);
    });
};

export const debounce = (fn, delay = 500) => {
    let timeoutID;

    return function(...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const highlight = (str, word) => {
    let modifiedString = str;
    const indexInStr = modifiedString.indexOf(word[0]);
    const getTheWord = modifiedString.slice(indexInStr, indexInStr + word.length);
  
    if (getTheWord === word) {
      let splitted = modifiedString.split("");
      let newStr = splitted.splice(indexInStr, word.length)
      newStr.push('</strong>')
      newStr.unshift('<strong style="color:blue;background:yellow">')
      splitted.splice(indexInStr, 0, newStr.join(""));
      modifiedString = splitted.join("");
      return modifiedString
    }
  }