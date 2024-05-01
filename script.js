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

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);

    const median = getMedian(numbers);

    document.querySelector('#median').textContent = median;
    document.querySelector("#mean").textContent = mean;
}