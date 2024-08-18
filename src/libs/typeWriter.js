import {words} from "../utils/words"
const textElement = document.getElementById('text');

let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const deletingSpeed = 100; 
const wordPause = 2000; 
const deletePause = 2000; 

function typeWriter() {
  if (charIndex < words[wordIndex].length) {
      textElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
  } else {
      setTimeout(deleteWord, wordPause);
  }
}
function deleteWord() {
  if (charIndex > 0) {
      textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteWord, deletingSpeed);
  } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeWriter, deletePause);
  }
}
setTimeout(typeWriter, 1000); 