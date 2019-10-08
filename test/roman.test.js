var assert = require('assert');

function romanDigitToNumber(letter) {
    if (letter == 'I') return 1;
    if (letter == 'V') return 5;
    if (letter == 'X') return 10;
    if (letter == 'L') return 50;
    if (letter == 'C') return 100;
    if (letter == 'D') return 500;
    if (letter == 'M') return 1000;
}

describe('romsn numbers', function() {
    it('letter I should be 1', function() {

        // given
        var letter = 'I';

        //when
        var number = romanNumber(letter);

        // then
      assert.equal(number, 1);
    });

    it('letter V should be 5', function() {

        // given
        var letter = 'V';

        //when
        var number = romanNumber(letter);

        // then
      assert.equal(number, 5);
    });

    it('letter X should be 10', function() {

      // given
      var letter = 'X';

      //when
      var number = romanNumber(letter);

      // then
    assert.equal(number, 10);
  });

  it('letter L should be 50', function() {

    // given
    var letter = 'L';

    //when
    var number = romanNumber(letter);

    // then
  assert.equal(number, 50);
});

it('letter C should be 100', function() {

  // given
  var letter = 'C';

  //when
  var number = romanNumber(letter);

  // then
assert.equal(number, 100);
});

it('letter D should be 500', function() {

  // given
  var letter = 'D';

  //when
  var number = romanNumber(letter);

  // then
assert.equal(number, 500);
});

it('letter M should be 1000', function() {

  // given
  var letter = 'M';

  //when
  var number = romanNumber(letter);

  // then
assert.equal(number, 1000);
});
});

function romanNumber(str) {
  var result = 0;

  //gehe über jeden buchstaben
  for (var i=0; i<str.length; i++) {

  //konvertiere aktuellen Buchstaben zu einer Zahl
  var currentLetter =str[i];
  var currentNumber = romanDigitToNumber(currentLetter);
  
  //wenn es einen nachfolger gibt
  var nextPos = i + 1;
  if (nextPos < str.length) {
    var nextLetter = str[nextPos];
    var nextNumber = romanDigitToNumber(nextLetter);

    // und dieser größer ist, dann wird die aktuelle zahl negativ
    if (nextNumber > currentNumber) {
      currentNumber = -1 * currentNumber;
    }
  }
  
    result += currentNumber;
  }
  return result;
}

it('symbol followed by bigger number becomes negative', function() {

  // given
  var letter = 'CMLXXXII';

  //when
  var number = romanNumber(letter);

  // then
assert.equal(number, 982);
});
