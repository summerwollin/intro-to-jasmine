module.exports = {
  isTallEnough: function(child, ride) {
    return child.height - ride.minHeight >= 0;
  }
};
