

function getMean(arr) {
    // get mean value of list of nums
    let sum = arr.reduce(function(a, b){
        return a + b; // need to convert string nums to ints
    }, 0);

    let len = arr.length

    mean = sum / (len)
    return mean
}

function getMedian(arr) {
    // get median of nums, if odd number of nums, take mid point. if even, avg the two middle nums
    let sortedNums = arr.sort()
    let len = arr.length
    
    if (len%2 == 0) {
        // get two middle nums
        midNum1 = sortedNums[Math.floor(len/2)-1] // get first num
        midNum2 = sortedNums[Math.floor(len/2)] // get second num
        avgMid = Number(((midNum1 + midNum2)/2).toFixed(1))// avg with one decimal
        return avgMid
    }
    else {
        // get the middle num
        midNum = sortedNums[Math.floor(len/2)]
        return midNum
    }
}

function getMode(arr) {
    // get the mode (number that occurs most frequently)
    
    var mode = a => {
        a.sort((x, y) => x - y);
      
        var bestStreak = 1;
        var bestElem = a[0];
        var currentStreak = 1;
        var currentElem = a[0];
      
        for (let i = 1; i < a.length; i++) {
          if (a[i-1] !== a[i]) {
            if (currentStreak > bestStreak) {
              bestStreak = currentStreak;
              bestElem = currentElem;
            }
            currentStreak = 0;
            currentElem = a[i];
          }      
          currentStreak++;
        }      
        return currentStreak > bestStreak ? currentElem : bestElem;
      };
      
    return mode(arr)
}



module.exports = { getMean, getMedian, getMode }