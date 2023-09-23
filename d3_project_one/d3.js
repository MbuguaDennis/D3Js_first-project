d3.select("body")
.append("ul")
.append("li")
.text("List Items")

d3.select("body")
.append("h1")
.text("Learning D3")

// lesson 2 //select a group of elements
d3.selectAll("li")
.text("list item")
// lesson 3

// Work with data in d3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body").selectAll("h2")
.data(dataset)
.enter()
.append("h2")
.text((d) => d + " Kenya Shillings") // take a callback function
.style("color", "blue") //take a style method
.style("font-family","verdana")
.style("text-transform", "uppercase")
.style("font-size","16px")
.style("color", (d) =>{
    if(d<20){
        return "green"
    }
    return "red"

})
d3.select("body").selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar")
.style("height", (d) =>{
    return d*10 +"px";
})

// work with dynamic data in D3
// change style based on data

// Add Classes with d3


// LEARN ABOUT SVG IN D3
// SVG stands for Scalable Vector Graphics.

// Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.

// SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML svg tag.

// CSS can be scalable when styles use relative units (such as vh, vw, or percentages), but using SVG is more flexible to build data visualizations.


 const w = 500;
const h = 100;

// CREATE  AND APPEND THE SVG TO BODY
const svg = d3.select("body")
.append("svg")
.style("width",w)
.style("height", h)
// Display Shapes with SVG


// create svg  for each data
svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", (d,i) =>{
    return i*30
})
.attr("height", (d, i) => {
    return d*3
})
.attr("y", (d,i) =>{
    return (h- 3*d)

})
.attr("width", 25)
.attr("fill" , "navy")
.attr("class","bar")
// add a tool tip for the bar
.append("title")
.text((d) =>d)



// label bars
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.attr("x", (d, i) => i*30)
.attr("y", (d, i) => h - 3 *  d-3)
.text((d,i) => {
    return d
})
.style("font-size", 25)
.style("fill", "red")










