export function generateLetterGrid() {
  const letterGrid = [];
  let keyCount = 0;

  for (let i = 0; i < 5; i++) {
    const letterRow = [];
    for (let j = 0; j < 15; j++) {
      keyCount += 1;
      letterRow[j] = { key: keyCount.toString(), data: generateLetter() };
    }
    letterGrid[i] = letterRow;
  }

  return letterGrid;
}

export function generateLetter() {
  const r = Math.floor(Math.random() * 150);
  let c;
  if (r < 19) {
    c = 'E';
  } else if (r < 32) {
    c = 'T';
  } else if (r < 56) {
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        c = 'A';
        break;
      default:
        c = 'R';
        break;
    }
  } else if (r < 89) {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        c = 'I';
        break;
      case 1:
        c = 'N';
        break;
      default:
        c = 'O';
        break;
    }
  } else if (r < 98) {
    c = 'S';
  } else if (r < 104) {
    c = 'D';
  } else if (r < 119) {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        c = 'C';
        break;
      case 1:
        c = 'H';
        break;
      default:
        c = 'L';
        break;
    }
  } else if (r < 135) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        c = 'F';
        break;
      case 1:
        c = 'M';
        break;
      case 2:
        c = 'P';
        break;
      default:
        c = 'U';
        break;
    }
  } else if (r < 141) {
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        c = 'G';
        break;
      default:
        c = 'Y';
        break;
    }
  } else if (r < 143) {
    c = 'W';
  } else {
    switch (Math.floor(Math.random() * 7)) {
      case 0:
        c = 'B';
        break;
      case 1:
        c = 'J';
        break;
      case 2:
        c = 'K';
        break;
      case 3:
        c = 'Qu';
        break;
      case 4:
        c = 'V';
        break;
      case 5:
        c = 'X';
        break;
      default:
        c = 'Z';
        break;
    }
  }
  return c;
}
