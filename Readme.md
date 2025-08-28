**Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    getElementById: It returns the first mached element by id name in a single value. Returns null if not found.

    getElementsByClassName: It returns an HTMLcollection (array like object) of all elements matched by the class. Returns empty array if not found. This updates with dom change.

    querySelector: it returns the first matched element by the provided selector. the selector can be class, id, html tags etc. selector rules same as the CSS selector rules. Returns null if not found. This does not update if the dom is changed.

    querySelectorAll: it returns Nodelist of all the matched selector. This does not update if the dom is changed.

--------------------------------------------------
Question 2: How do you create and insert a new element into the DOM?

    I create a new element by using 'document.createElement()' 
        and 
        insert it to the dom using 'parent.appendChild()'

---------------------------------------------------
Question 3: What is Event Bubbling and how does it work?

    In JavaScript when an event is triggered like click event of an element, it runs from the document upto the target element and executes the task and then bubbles up and triggers the same event on its parent if it finds a listener to it. Then repeats the same process to the parent's parent. it repeats it all the way upto the document. This process is known as the Event Bubling.

----------------------------------------------------
Question 4: What is Event Delegation in JavaScript? Why is it useful?

    The process of attaching the event listener to the parent element instead of the child element and processing the event when it bubbles up is the process of Event Delegation.

-----------------------------------------------------
Question 5: What is the difference between preventDefault() and stopPropagation() methods?

    preventDefault() stops the default behaviour of the element. Does not do any thing with the bubbling process.

    stopPropagation() stops the process of Event from bubbling up.