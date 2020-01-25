
jQuery(document).ready(function($){
	// Rectangle
	var draw = SVG('drawing').size(400, 400);
	var rect = draw.rect(300, 200).attr({ 
		fill: '#239B56', 
		stroke: '#196F3D',
		'stroke-width': '5px'
	});
	rect.x(10);
	rect.y(10);
	rect.radius(40);

	// Lines
	draw = SVG('lines').size(400,400);
	var line = draw.line([[40,40],[400,400]]).stroke({width: 10, color: '#D35400'});
	var polyline = draw.polyline([[40,36.5],[25,125],[200,400],[400,400]]).stroke({width: 10, color: '#EB984E'}).fill
	('none');

	// Polygons
	draw = SVG('polygon').size(400,500);
	var polygon = draw.polygon([[50,50],[150,200],[250,300],[200,450]]).fill('none').stroke({width: 2});

	// Path
	draw = SVG('path').size(500,500);
	var path = draw.path('M100,200 C100,100 400,100 400,200 H 500 V 400 Z').stroke({width: 5, color: '#f23'}).fill('orange');

	// Animation
	draw = SVG('animation').size(500,500);
	rect = draw.rect(100,50);

	rect.animate().opacity(0.4);
	rect.animate().move(100,400);
	rect.animate().opacity(1);
	rect.animate().move(0,0);
	rect.animate().attr({fill: '#0f8'});

	// Linear Gradient
	draw = SVG('linear_gradient').size(500,500);
	var ellipse = draw.ellipse(400,300);
	var lgradient = draw.gradient('linear', function(limitsx){
			limitsx.at(0, '#f23');
			limitsx.at(1, '#434');
	});
	lgradient.from(0,1).to(1,0);
	ellipse.fill(lgradient);

	// Radial Gradient
	draw = SVG('radial_gradient').size(500,500);
	rect = draw.rect(400,300);
	var radialgrad = draw.gradient('radial', function(radlimitsx){
			radlimitsx.at(0, '#576');
			radlimitsx.at(0.5, '#345');
			radlimitsx.at(1, '#f40');
	});
	
	rect.fill(radialgrad);
	radialgrad.radius(0.8);

	// Placement
	draw = SVG('placement').size(500,500);
	var rect1 = draw.rect(200,100).fill('#f03');
	var rect2 = draw.rect(100,200).fill('#0f5');
	var rect3 = draw.rect(200,100).fill('#4af').y(100);

	rect2.before(rect3);

});



