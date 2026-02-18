// Real Dom - if any change in element of html then whole page needs to reload

//Directly Manipulates On-Screen Elements: Any changes made to the Real DOM immediately reflect on the user interface.
// Slow Updates for Large Trees: When updating an element, the entire DOM tree needs to be re-rendered, which can be time-consuming, especially for complex applications.
// Full Tree Re-Renders: Even minor changes require traversing the entire DOM tree, which affects performance.



//virtual dom - it creates copy of real dom , if change in h1, then it compares 
// with real dom what are the changes then only change the affected part instead of whole part

//Virtual DOM Creation: When the application state changes, the Virtual DOM creates a new virtual tree.
// Diffing Algorithm: The new Virtual DOM tree is compared with the previous version, and the differences (known as "diffs") are calculated.
// Batch Updates: Instead of updating the entire Real DOM, only the nodes that have changed are updated, leading to faster rendering.