/** alert("Hello ODC !") */
let htmlSection = document.querySelector("#html > h2 > span")
function greenIt() {
    htmlSection.style.color = "green"
    // 1 != '1' => !true
    if (htmlSection.style.color !== "green") {
        htmlSection.style.color = "green"
    }
}
console.log(htmlSection)
const toggleGreen = () => {
    htmlSection.style.color !== "green" ? htmlSection.style.color = "green" : ''
}
const colorIt = (color) => {
    htmlSection.style.color !== color ? htmlSection.style.color = color : ''
    console.log("Done")
}
/*
 const func = () => {
     console.log('inside func')
     return 'hello'
    }
    
    */
const func = function () {
    console.log('inside func')
    return 'hello'
}

setTimeout(() => colorIt("salmon"), 3000)

var i = 10
var message = "We the best !"
let message2 = null
const message3 = "We the best 3!"
function updateValues() {
    let i = 2
    message2 = message3 + 'for var'
    console.log(i)
}
updateValues()

console.log(i)
console.error("# var, let & const")
console.log(message)
console.log(message2)
console.log(message3)

// Strings
// https://www.w3schools.com/js/js_string_methods.asp
