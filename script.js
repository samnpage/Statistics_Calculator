const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.sort((a, b) => {
        return a - b
    });

    if (sorted.length % 2 === 0) {
        return getMean([sorted[sorted.length / 2], sorted[(sorted.length /2) - 1]]);
    } else {
        return sorted[Math.floor(sorted.length / 2)]
    }
}

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        if (counts[el]) {
            return counts[el]++
        } else {
            return counts[el] = 1
        }
    })

    if (new Set(Object.values(counts)).size === 1){
        return null
    }

    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);

    return mode.join(', ')
}

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);


    document.querySelector("#mean").textContent = mean;
    document.querySelector('#median').textContent = median;
    document.querySelector('#mode').textContent = mode;
    document.querySelector('#range').textContent = range;
}