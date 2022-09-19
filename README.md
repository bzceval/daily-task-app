## Pseudo Code
- BEGIN
- OUTPUT "Please Add Todo List"
- INPUT input.value </br>
    IF ( !input.value ) </br>
    OUTPUT "Please Enter A Todo Item" </br>
    ELSE </br>
    SET innerHTML += input.value </br>    

## Step by Step Coding
[x] Get Document Elements With JS </br> 
[x] Add AddButon and a listen event to it. </br> 
[x] Check if input value is entered with console log. </br> 
[ ] Create your todo list when event click. If input value is entered, create must new dom selector and get the value and add it with innerHTML with this selector else send a modal.</br> 
[ ] Add DeleteButton and a listen event to it. </br> 
[ ] Delete last added item when event click </br> 
[ ] Inject the same things on the keyboard with the enter key to insert and the spacebar to delete. </br> 

## Design
- [Figma Design](https://www.figma.com/file/Po79NBfsNv6HeDX5ov9KON/Todo-App-%7C-JS?node-id=0%3A1)