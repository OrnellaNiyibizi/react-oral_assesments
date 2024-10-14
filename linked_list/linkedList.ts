class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    // Method to add a node to the end of the list
    add(value: T): void {
        const newNode = new ListNode(value);

        if (!this.head) {
            // If list is empty, set the new node as the head
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;  // Attach new node at the end
        }
    }

    // Method to remove the first occurrence of a value
    remove(value: T): boolean {
        if (!this.head) return false;

        // If the value is at the head, move head to the next node
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        // If the value was found, unlink it
        if (current.next && current.next.value === value) {
            current.next = current.next.next;
            return true;
        }

        return false;  // Value not found
    }

    // Method to find a node with a specific value
    find(value: T): ListNode<T> | null {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null;  // Value not found
    }

   
    printList(): void {
        let current = this.head;
        const elements: T[] = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}

//Example Usage
const list = new LinkedList<number>();

// Add elements
list.add(1);
list.add(2);
list.add(3);
list.printList();  // Output: 1 -> 2 -> 3

// Find an element
console.log(list.find(2));  // Output: ListNode { value: 2, next: ListNode { value: 3, next: null } }

// Remove an element
list.remove(2);
list.printList();  // Output: 1 -> 3
