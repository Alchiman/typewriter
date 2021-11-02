const sentence = "hello there from lighthouse labs";
const charPrint = function (character, index) {
  setTimeout(() => {
    process.stdout.write(character);
  }, index * 50);
};
const typeWriter = function (string) {
  const characters = string.split("");
  characters.forEach((char, i) => charPrint(char, i));
};

// const typeWriter = function (string) {
//   const characters = string.split("");
//   characters.forEach((char, i) => {
//     setTimeout(() => {
//       process.stdout.write(char);
//     }, i * 50);
//   });
// };

typeWriter(sentence);
