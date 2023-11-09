const input = {
    "cols": 30,
    "sine": [
        "-0.93", "-0.60", "-0.33", "-0.13", "0.00",
        "0.00", "-0.13", "-0.33", "-0.60", "-0.93"
    ],
    "parts": ["💻", "💖"]
};

const center = input.cols / 2;

// Function to calculate the position for each emoji
const calculatePosition = (el, index) =>
    index === 0
        ? Math.floor(center / 2 - Math.round(center / 2 * (+el)))
        : center + Math.ceil(center / 2 + Math.round(center / 2 * (+el)));

// Main loop to generate the DNA double helix model
for (let i = 0; i < 2; i++) {
    input.sine.forEach(el => {
        const lineArr = Array(input.cols).fill(" ");
        [0, 1].forEach((j, index) => lineArr[calculatePosition(el, index)] = input.parts[j]);
        console.log(lineArr.join(''));
    });
    input.parts.reverse();
}
