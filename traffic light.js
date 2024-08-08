const text = document.getElementById("txt");
const stop = document.querySelector(".red");
const ready = document.querySelector(".yellow");
const go = document.querySelector(".green");
const nulll = document.querySelector (".light")
const button = document.getElementById("btn");

let lightIndex = 0;
const lights = ['red', 'yellow', 'green', 'white'];

button.addEventListener('click', () => {
    // Reset all lights to white
    stop.style.backgroundColor = 'white';
    ready.style.backgroundColor = 'white';
    go.style.backgroundColor = 'white';

    // Get the next light color from the array
    const nextLight = lights[lightIndex];

    // Set the corresponding light to its color
    if (nextLight === 'red') {
        stop.style.backgroundColor = 'red';
        stop.style.boxShadow = '0 0 50px red';
        // go.style.boxShadow = '0 0 0px green';
        text.innerText = 'GET';
    } else if (nextLight === 'yellow') {
        ready.style.backgroundColor = 'yellow';
        ready.style.boxShadow = '0 0 50px yellow';
        stop.style.boxShadow = '0 0 0px red';
        go.style.boxShadow = '0 0 0px green';

        text.innerText = 'SET';
    } else if (nextLight === 'green') {
        go.style.backgroundColor = 'green';
        go.style.boxShadow = '0 0 50px green';
        stop.style.boxShadow = '0 0 0px red';
        ready.style.boxShadow = '0 0 0px yellow';

        text.innerText = 'GO';
    } else if (nextLight === 'white') {
        nulll.style.backgroundColor = 'white';
        nulll.style.boxShadow = '0 0 0px white';
        go.style.boxShadow = '0 0 0px green';
        text.innerText = '';
    }

    // Increment the light index (loop back to 0 if it exceeds the array length)
    lightIndex = (lightIndex + 1) % lights.length;
});

// const text = document.getElementById ("txt")
// const stop = document.querySelector (".red")
// const ready = document.querySelector (".yellow")
// const go = document.querySelector (".green")
// const button = document.getElementById ("btn")

// let styleIndex = 0;
// const styles = ['#ff0000', '#ffff00', '#00ff00'];

// button.addEventListener('click', () => {
//     // Get the next style from the array
//     const nextStyle = styles[styleIndex];

//     // Apply the style to each div
//     stop.style.backgroundColor = nextStyle;
//     ready.style.backgroundColor = nextStyle;
//     go.style.backgroundColor = nextStyle;

//     // Increment the style index (loop back to 0 if it exceeds the array length)
//     styleIndex = (styleIndex + 1) % styles.length;
// });

// let colors = ['red', 'yellow', 'green']

// let colors = ['red', 'yellow', 'green'] 
// let color2 = y 
// let color3 = g

// button.addEventListener ("click", function () {

//    if (colors === r) {
//     stop.style.backgroundColor = "red"
//     ready.style.backgroundColor = "white"
//     go.style.backgroundColor = "white"
//     colors = y
//     color2 = g
//    }
//    else if (color2 === y) {
//     stop.style.backgroundColor = "white"
//     ready.style.backgroundColor = "yellow"
//     go.style.backgroundColor = "white"
//     color2 = g
//     color3 = r
//    }
//    else {
//     stop.style.backgroundColor = "white"
//     ready.style.backgroundColor = "white"
//     go.style.backgroundColor = "green"
//     color3 = r
//     color1 = y
//    }

// })