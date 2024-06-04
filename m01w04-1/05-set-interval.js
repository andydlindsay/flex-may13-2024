let numIntervals = 0;

const intervalReturnVal = setInterval(function() {
  numIntervals += 1;
  console.log('hello', numIntervals);

  if (numIntervals >= 5) {
    clearInterval(intervalReturnVal);
  }
}, 500);

// clearInterval(intervalReturnVal);
