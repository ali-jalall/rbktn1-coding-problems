/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, 
the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/

// Tree 1
// var t1 = new TreeNode(1)
// t1.right = 2
// var left1 = new TreeNode(3)
// t1.left = left1;
// var left2 = new TreeNode(5)
// t1.left.left = left2

// Tree 2
// var t2 = new TreeNode(2)
// var right1 = new TreeNode(3)
// t2.right = right1;
// var right2 = new TreeNode(7)
// t2.right.right = right2;
// var leftR = new TreeNode(1)
// t2.left = leftR;
// var leftR2 = new TreeNode(4)
// t2.left.right = leftR2;


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergedTree = new TreeNode();

// I know even if i explain my code you wouldn't get it
// it's not working though

var mergeTrees = function(t1, t2) {
    if (!t1.left && !t1.right && !t2.left && !t2.right) {
		// Which means our trees Ends
		return mergedTree; // Something i will figure it out
	}

if(t1 && t2 !== null) {
    mergedTree.val = t1.val + t2.val;

    mergedTree.left = t1.left + t2.left;

    mergedTree.right = t1.right + t2.right;
}
	

	if ( t1.left ) {
		mergeTrees(t1.left, t2.left);
	}

	if ( t1.right ) {
		mergeTrees(t1.right, t2.right);
	}

};

