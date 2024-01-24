//Task1
const ranks = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

function  generateCard() {

    let rank = ranks[Math.floor(Math.random()*ranks.length)];
    let suit = suits[Math.floor(Math.random()*suits.length)];

    return { 
        suit: suit,
        rank:rank,
        toString: function(){
            return `suit: ${this.suit}, rank: ${this.rank}`;
        }
    };
}

console.log(generateCard().toString());
console.log(generateCard().toString());
console.log(generateCard().toString());
console.log(generateCard().toString());


//Task2
function  showDetails(obj) {

    if(obj === undefined || obj === null){
        console.log(obj);
        return;
    }

    Object.entries(obj).forEach(([key, value]) => {
        console.log(`key: ${key}\ntype: ${typeof value}\nvalue: ${value}`);
    });

}


showDetails(generateCard());
showDetails(ranks);
showDetails(suits);
//Task3

function morseCodeDecoder(code) {
    const morseMap = {
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '...---...': 'SOS', 
    };
  
    const words = code.split('   '); 
    const decodedMessage = words
      .map(word =>
        word
          .split(' ')
          .map(char => morseMap[char] || char)
          .join('')
      )
      .join(' ');
  
    return decodedMessage;
  }
  

  const morseCode = '.... . -.--   .--- ..- -.. .';
  const decodedMessage = morseCodeDecoder(morseCode);
  console.log(decodedMessage); 