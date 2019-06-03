import { FlashCard } from './../src/flashcard.js';

describe ('Flashcard', function(){
let flashcard  = new FlashCard("Js");

  beforeEach(function(){
    jasmine.clock().install();
    flashcard.setTime();
});

afterEach(function(){
jasmine.clock().uninstall();
});

it('should test whether the name is correct', function(){
  let flashcard = new FlashCard("JS");
  expect(flashcard.name).toEqual("JS");
});

it('should test if the timer works', function(){
  jasmine.clock().tick(2001);
  expect(flashcard.time).toEqual(28);

});

});
