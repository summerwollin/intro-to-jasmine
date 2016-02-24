var rides = require('../lib/rides')

describe("Rides", function(){
  it('determines when a child is too short', function(){
    var child1 = {
      height: 3,
      name: "Julian",
      age: 3
    };
    var ride2 = {
      minHeight: 4,
      maxHeight: 7
    };
  expect(rides.isTallEnough(child1,ride2)).toEqual(false);
  });
  it('determines when a child is tall enough', function() {
    var child2 = {
      height: 4,
      name: "Cero",
      age: 4
    };
    var ride1 = {
      minHeight: 3,
      maxHeight: 7
    };

  expect(rides.isTallEnough(child2,ride1)).toEqual(true);
  });
});
