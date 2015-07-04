var Graph = function() {
	this.storage = {};
};

Graph.prototype = {
	addNode: function(value) {
		this.storage[value] = {edges: []};
	},
	contains: function(value) {
		return !!this.storage[value];
	},
	removeNode: function(value) {
		var nodeEdges = this.storage[value].edges;

		for (var i = 0; i < nodeEdges.length; i++) {
			this.removeEdge(value, nodeEdges[i]);
		}
		delete this.storage[value];
	},
	hasEdge: function(fromNode, toNode) {
		return this.storage[fromNode].edges.indexOf(toNode) !== -1;
	},
	addEdge: function(fromNode, toNode) {
		this.storage[fromNode].edges.push(toNode);
		this.storage[toNode].edges.push(fromNode);
	},
	removeEdge: function(fromNode, toNode) {
		var fromEdges = this.storage[fromNode].edges;
		var toEdges = this.storage[toNode].edges;

		fromEdges.splice(fromEdges.indexOf(toNode), 1);
		toEdges.splice(toEdges.indexOf(fromNode), 1);
	},
	forEachNode: function(callback) {
		for (var key in this.storage) {
			callback(key);
		}
	}
};
// var Graph = function(){
// 	this.nodes = {};
// };

// Graph.prototype.addNode = function(node){
// 	this.nodes[node] = {adjacentTo: []};
// };

// Graph.prototype.contains = function(node){
// 	return !!this.nodes[node];
// };

// Graph.prototype.removeNode = function(node){
// 	var arr = this.nodes[node].adjacentTo.slice();
// 	for(var i = 0; i< arr.length; i++){
// 		removeEdge(node, arr[i]);
// 	}
// 	delete this.nodes[node];

// };

// Graph.prototype.hasEdge = function(fromNode, toNode){
// 	return this.nodes[fromNode].adjacentTo.indexOf(toNode) !== -1;
// };

// Graph.prototype.addEdge = function(fromNode, toNode){
// 	this.nodes[fromNode].adjacentTo.push(toNode);
// 	this.nodes[toNode].adjacentTo.push(fromNode);
// };

// Graph.prototype.removeEdge = function(fromNode, toNode){
// 	var fromArr =  this.nodes[fromNode].adjacentTo;
// 	var toArr = this.nodes[toNode].adjacentTo;
	
// 	fromArr.splice(fromArr.indexOf(toNode), 1);
// 	toArr.splice(toArr.indexOf(fromNode), 1);


// };

// Graph.prototype.forEachNode = function(cb){
// 	for (var node in this.nodes) {
// 		cb(node);
// 	}
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */



