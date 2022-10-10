## Project About
*Actually, when starting the project, I didn't want it to progress by keeping the data in localStorage. But but when I designed it in **Figma**  my muses came and asked me to do this. I hope you like it. Oh, by the way, I added the steps I followed below and of course my `Step By Step Coding`. Thanks* 🤸‍♀️

## Use Technologies
I used **HTML** in my index page and applied the **JavaScript** language to give it dynamism. And of course **CSS** is indispensable to make it look beautiful on the eye.

## Design
- [Figma Design](https://www.figma.com/file/Po79NBfsNv6HeDX5ov9KON/Todo-App-%7C-JS?node-id=0%3A1)

## Demo
</br>
- ![Animation](https://user-images.githubusercontent.com/100320309/194820640-fd4b09d7-3575-441c-ac5a-67247576350a.gif)

## Step by Step Javascript Coding
- [x] Get document elements with JS </br> 
- [x] Add AddButon and a listen event to it. </br> 
- [x] Check if task item input value is entered with console log but you shouldn't take a space as a task.</br> 
- [x] Check if task description input value is entered with console log but you shouldn't take a space as a task.</br> 
- [x] Else create a new dataset.</br>
- [x] Call the function that creates the new li element for task input item data.</br>
- [x] Call the function that creates the new li element for description input data.</br>
- [x] And empty the of both input.</br>
- [x] Empty the input if no task item input value and task descripton input value.</br>
*Finish this function for now. Because I will add localStorage after finishing Dom activities.*</br>
- [x] Create a function that takes a dynamic data parameter that the li element element for task input item will be in. </br>
- [x] Create a new li element and assign it the object's id and the completed class.</br>
- [x] Create control icon and connect to li</br>
- [x] Create edit icon and connect to li</br>
- [x] Create a p element for the description and task, connect it to the li element by creating a text node.</br>
- [x] Create delete icon and connect to li</br>
- [x] The same steps are done in the annotation function.</br>
- [x] Assign the resulting li elements to the ul element as a child. </br>
- [x] If an event comes from any of the children of the ul, detect it and take action with addEventListener (Capturing)</br>
- [x] If the event came from a delete button, delete the parent of the delete button from the DOM.</br>
- [x] Let the input be active at the start</br>
- [x] Inject the same things on the keyboard with the enter key to insert and the spacebar to delete. </br> 
*Clicking the event will create your to-do list.</br>*
- [x] Store the final version of the set array in localStorage</br>
- [x] Update todos array with data from localStorage </br>
- [x] Set localStorage for delete button. </br>
- [x] Checked function created and edited style </br>
- [x] Added modal when window load </br>
- [x] Added error box function </br>
- [x] Added edit function and event</br>
