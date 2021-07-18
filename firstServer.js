const { getMean, getMedian, getMode } = require('./math')
const express = require('express');

const app = express();

app.use(express.json());




function inputToArr(numInput) {
    let nums = numInput.nums
    let numSplit = (nums.split(","))
    let numArr = numSplit.map(num => Number(num)) // convert str num to int num
    return numArr 
}



app.get('/mean', (req, res) => {
    // gets mean of num input from query
    const numInput = req.query;
    numArr = inputToArr(numInput); 
    mean = getMean(numArr);

    return res.json(`response: {operation: mean, value: ${mean}}`)
})

app.get('/median', (req, res) => {
    // gets median of num input from query
    const numInput = req.query;
    numArr = inputToArr(numInput);
    median = getMedian(numArr);

    return res.json(`response: {operation: median, value: ${median}}`)
})

app.get('/mode', (req, res) => {
    // gets mode of num input from query
    const numInput = req.query;
    numArr = inputToArr(numInput); 
    mode = getMode(numArr);
    
    return res.json(`response: {operation: mode, value: ${mode}}`)
})



// app.listen should be at bottom of the file
// port is the first argument, 3000 is pretty standard, then a callback function
app.listen(3000, () => {
    console.log('App on route 3000')
})