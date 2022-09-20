## Pseudo Code
- BEGIN
- OUTPUT "Please Add Todo List"
- INPUT input.value </br>
    IF ( !input.value ) </br>
    OUTPUT "Please Enter A Todo Item" </br>
    ELSE </br>
    SET innerHTML += input.value </br>    

## Step by Step Coding
[ ] update todos array with data from localStorage
[ ] If there is no item named todos in localStrge, assign an empty array.
[x] Get Document Elements With JS </br> 
[x] Add AddButon and a listen event to it. </br> 
[x] Check if input value is entered with console log. </br> 
[x] Create your todo list when event click. Send mod if no input value. Else create a new dataset, call the function that creates the new li element, it should push the data from the li function with the parameter to the parsed array for DOM, set data for localStorage. And empty the input.</br> 
[ ] Create a function to create the li element.</br>
[ ] Create a new li element and assign it the object's id and the completed class.</br>
[ ] Create control icon and connect to li</br>
[ ] Create a p element for the description and task, connect it to the li element by creating a text node.</br>
[ ] Create delete icon and connect to li</br>
[ ] Assign the resulting li element to the ul element as a child </br>
[ ] If an event comes from any of the children of the ul, detect it and take action with addEventListener. (Capturing)</br>
[ ] If the event came from a delete button, delete the parent of the delete button from the DOM.</br>
[ ] Delete related element of array</br>
[ ] Store the final version of the set array in localStorage</br>
[ ] If the event came from an okey button, if it has a class named checked in the relevant li element, delete it, otherwise add it (DOM)</br>
[ ] Adding is possible with the enter key</br>
[ ] Let the input be active at the start</br>
[ ] Add DeleteButton and a listen event to it. </br> 
[ ] Delete last added item when event click </br> 
[ ] Inject the same things on the keyboard with the enter key to insert and the spacebar to delete. </br> 

## Design
- [Figma Design](https://www.figma.com/file/Po79NBfsNv6HeDX5ov9KON/Todo-App-%7C-JS?node-id=0%3A1)