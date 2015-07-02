

var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = {name: node, adjacentTo: []}
};

Graph.prototype.contains = function(node){
	return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node){
	delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



