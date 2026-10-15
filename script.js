const words = [
  { word: "sonder", category: "NOUN", definition: "the realisation that every passerby has a life as vivid and complex as your own" },
  { word: "petrichor", category: "NOUN", definition: "the earthy scent after rain; the smell of a world beginning again" },
  { word: "limerence", category: "NOUN", definition: "an intense, almost dizzying longing for another person" },
  { word: "susurrus", category: "NOUN", definition: "a soft whispering or rustling sound, like leaves sharing a secret" },
  { word: "mellifluous", category: "ADJECTIVE", definition: "pleasantly smooth and musical to hear" },
  { word: "apricity", category: "NOUN", definition: "the warmth of sunlight on a cold winter day" },
  { word: "efflorescence", category: "NOUN", definition: "a blossoming or flowering; a moment of beautiful growth" },
  { word: "halcyon", category: "ADJECTIVE", definition: "calm, peaceful, and happy — especially in a remembered time" }
];

const wordDisplay = document.querySelector("#wordDisplay");
const definitionDisplay = document.querySelector("#definitionDisplay");
const categoryDisplay = document.querySelector("#wordCategory");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const statusMessage = document.querySelector("#statusMessage");
let currentWord = words[0];

function showWord(nextWord) {
  currentWord = nextWord;
  wordDisplay.style.animation = "none";
  void wordDisplay.offsetWidth;
  wordDisplay.style.animation = "pop .45s ease both";
  wordDisplay.textContent = nextWord.word;
  categoryDisplay.textContent = nextWord.category;
  definitionDisplay.textContent = nextWord.definition;
  statusMessage.textContent = "";
}

generateButton.addEventListener("click", () => {
  const choices = words.filter((item) => item.word !== currentWord.word);
  showWord(choices[Math.floor(Math.random() * choices.length)]);
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentWord.word);
    statusMessage.textContent = `“${currentWord.word}” copied to your clipboard`;
  } catch {
    statusMessage.textContent = "Select the word to save it for later";
  }
});
