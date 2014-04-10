//Setup the Node calss with left, right, and value public variables
/*function BinarySearchNode (value) {
    this.left = null;
    this.right = null;
    this.value = value || null;    
};


BinarySearchNode.prototype.insert = function (value ) {
    if(!this.value)
        this.value = value;
        if(value)
};

function BinarySearchTree () {
    var root
};
*/

 
 
function Node(val) {
 this.value = val || null;
 this.right = null;
 this.left = null;
};

Node.prototype.insert = function(value) {
 if(!this.value) this.value = value; // check for the root value and set it if it's null
  if(value > this.value) { // check to see if the given value is greater than current node value
   if(this.right) { // check to see if the node has a 'right' property
    this.right.insert(value); // use recursion to insert again but using this.right as the new root
   } else if(!this.right) {
      this.right = new Node(value); 
   }
 } else if (value < this.value) {
  if(this.left) {
   this.left.insert(value);
  } else if(!this.left) {
     this.left = new Node(value);
  }
 }
};

function BinarySearchTree(){
    var hieght = 0;
};

BinarySearchTree.prototype.insert = function (value) {
    var length = 0
};

var tree = new Node();

var data = [5,3,4,2,12,22,55,66,15,28,9];
for (var i=0;i<data.length;i++) {
    tree.insert(data[i]);
};

console.log(tree)