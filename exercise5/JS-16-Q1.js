// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================


// Sometimes we don’t want the event to affect the parent elements. For example, clicking a button might also trigger a function on a div around it.
//  we can use :
//  event.stopPropagation() → stops the event from going to parent elements.
//  event.stopImmediatePropagation() → stops other listeners on the same element.
