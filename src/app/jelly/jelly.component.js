paper.install(window);
paper.setup('my_canvas');

const screenW = view.size.width;
const screenH = view.size.height;
const jellies = [];
const jellyColors = [
	{ stroke: "#1C4347", fill: "#49ACBB" },
	{ stroke: "#1b3b3a", fill: "#61cac8" },
	{ stroke: "#2d393f", fill: "#88a5b3" },
	{ stroke: "#422b3a", fill: "#b0809e" },
	{ stroke: "#5b263a", fill: "#d85c8a" },
	{ stroke: "#580c23", fill: "#ff3775" },
	{ stroke: "#681635", fill: "#EB1962" }
];

const random = (min, max, intOnly) => {
	  var num = Math.random() * (max - min) + min;
	  if (intOnly) {
		    return Math.floor(num);
	  }
	  return num;
}

//create jellies:
let counter = 0;
while (counter < 5) {
    const jelly = new Jelly({
        radius: random(50, 80), 
        resolution: random(14, 20), 
        color: jellyColors[random(0, 6, true)], 
        tentacleLength: random(3.5, 6), 
        x: random(-50, screenW + 100), 
        y: random(-50, screenH + 100)
    });
    jellies.push(jelly);
    counter++;
};

//animate jellies for each frame:
view.onFrame = (event) => {
    jellies.forEach(jelly => jelly.move(event));
};