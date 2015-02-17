var width = 960, height = 600;

var svg = d3.select("#game").append("svg")
        .attr("width", width)
        .attr("height", height);

d3.json("json/1.json", function (data) {
    svg.selectAll(".elements")
            .data(data.elements)
            .enter().append("rect")
            .attr("x", function (d) {
                return 30 * d.x;
            })
            .attr("y", function (d) {
                return 30 * d.y;
            })
            .attr("height", 30)
            .attr("width", 30)
            .attr("fill", function (d) {
                if (d.type === "r")
                    return "#456";
            });
});

