//Question: Odd Even Linked List

const oddEvenList = (head) => {
    if (head && head.next && head.next.next) {
        let odds = head;
        let evens = head.next;
        let evensHead = head.next;

        while (evens && evens.next) {
            odds = odds.next = evens.next;
            evens = evens.next = evens.next.next;
        }

        odds.next = evensHead;
    }

    return head;
};