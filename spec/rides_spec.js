var rides = require('../lib/rides')

describe("Rides", function(){
  it('determines if child is tall enough for the ride', function(){

  expect(rides.isTallEnough()).toEqual(false);
  });
});
