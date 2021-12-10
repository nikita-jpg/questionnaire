function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

const easeOut = makeEaseOut((timeFraction) => timeFraction);

export default easeOut;
