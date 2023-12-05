/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        //your code here
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.isEmpty()) {
            return null
        }
        while (current.left != null) {
            current = current.left
        }
        return current.data
    }
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (current == null) {
            return null
        }
        if (current.left == null) {
            return current.data
        }
        return this.minRecursive(current.left)
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (this.isEmpty()) {
            return null
        }
        while (current.right != null) {
            current = current.right
        }
        return current.data
    }


    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (current == null) {
            return null
        }
        if (current.right == null) {
            return current.data
        }
        return this.maxRecursive(current.right)
    }


    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        if (this.root === null) {
            return false
        }

        if (searchVal === this.root) {
            return true
        }

        let current = this.root
        while (current !== null && current.data !== searchVal) {
            if (current.data > searchVal) {
                current = current.left
            }
            else {
                current = current.right
            }
        }
        if (current === null)
            return false
        return true
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false
        }
        if (current.data === searchVal) {
            return true
        }

        if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left)
        }
        else {
            return this.containsRecursive(searchVal, current.right)
        }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        let newNode = new BSTNode(newVal)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let current = this.root
        let previous = null
        while (true) {
            if (current.data === newVal) {
                return this
            }
            if (current.data > newVal) {
                previous = current
                current = current.left
            }
            else {
                previous = current
                current = current.right
            }
        }

        if (newVal < previous.data) {
            previous.left = newNode
        }
        else {
            previous.right = newNode
        }
        return this
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        if (this.root === null) {
            this.root = new BSTNode(newVal)
            return this
        }

        if (curr.data === newVal) {
            return this
        }

        if (newVal < curr.data) {
            if (curr.left === null) {
                curr.left = new BSTNode(newVal)
                return this
            }
            return this.insertRecursive(newVal, curr.left)
        }

        else {
            if (curr.right === null) {
                curr.right = new BSTNode(newVal)
                return this
            }
            return this.insertRecursive(newVal, curr.right)
        }

    }

}

const emptyTree = new BinarySearchTree();

const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
/* oneNode Tree
        root
        10

*/

const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const threeLevelTree = new BinarySearchTree();threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);


/* threeLevelTree
        root
        10
      /   \
    5     15
  / \    / \
2   6  13
*/

/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree.insertRecursive(25)
fullTree.insert(15)
fullTree.insert(10)
fullTree.insert(22)
fullTree.insert(4)
fullTree.insert(12)
fullTree.insert(18)
fullTree.insert(24)
fullTree.insert(50)
fullTree.insert(35)
fullTree.insert(70)
fullTree.insert(31)
fullTree.insert(44)
fullTree.insert(66)
fullTree.insert(90)

console.log(fullTree.contains(25))
console.log(fullTree.contains(99))

console.log(fullTree.containsRecursive(10))
console.log(fullTree.containsRecursive(99))
console.log("~~~~~~~~~~~~~~~~~~~~~~")

const recursiveFullTree = new BinarySearchTree();
recursiveFullTree.insertRecursive(25)
recursiveFullTree.insertRecursive(15)
recursiveFullTree.insertRecursive(10)
recursiveFullTree.insertRecursive(22)
recursiveFullTree.insertRecursive(4)
recursiveFullTree.insertRecursive(12)
recursiveFullTree.insertRecursive(18)
recursiveFullTree.insertRecursive(24)
recursiveFullTree.insertRecursive(50)
recursiveFullTree.insertRecursive(35)
recursiveFullTree.insertRecursive(70)
recursiveFullTree.insertRecursive(31)
recursiveFullTree.insertRecursive(44)
recursiveFullTree.insertRecursive(66)
recursiveFullTree.insertRecursive(90)

console.log(recursiveFullTree.contains(25))
console.log(recursiveFullTree.contains(99))

console.log(recursiveFullTree.containsRecursive(10))
console.log(recursiveFullTree.containsRecursive(99))

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90

*/

// fullTree.print();