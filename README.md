# ClearCalc-CodingChallenge
Hi there! Thank you for taking the time to look at my code, below is some brief documentation.

### How it works:
The entire idea revolves around a singlar function which is used to generate a <dialog> component and all it's children. How the dialog looks and functions is determined by the input parameters.

| Parameter | Description | Example |
| ----- | ----- | ----- |
| btn | The object (Button in this case) the function is being called from | this |
| message | This is the text you would like displayed on the dialog modal | 'hello world!' |
| onConfirm | The function you would like executed when the **confirmation** button is clicked | A predefined function (i.e 'someFunction()') or raw javascript (i.e 'console.log('hello!')')  |
| onCancel | The function you would like executed when the **cancellation** button is clicked  | Same as above |


### Pros
- Since it's just a function, you could apply the logic to anything that can be clicked.
- It would be relatively easy to apply styling to the popups (as shown in code)
### Cons / Limitations
- The HTML elements defined in the function are in a relatively rigid structure. Unless you wanted a function which takes a lot of parameters to determine unique styling (which would be very messy) all popups will have the same structure (i.e one <p> tag, two buttons).
	- You could however, pass through a unique class name and generate the popup based on some predefined templates. 

### Requirements
1. You should only use vanilla javascript and html and css to write the confirmation dialog
component without using any library. :white_check_mark:
2. The confirmation dialog component should be reusable. In other words, you should be able to
put multiple buttons on the main page and when you click them you can show the confirmation
dialog with different messages. There shouldn’t be any conflicts between your component
instances. :white_check_mark:
3. As a component, the confirmation dialog should be able to accept a message as a parameter
from the consumer to display in the modal. It also should return the result (e.g. confirmed or not)
to the consumer after the user clicks the buttons. :white_check_mark:
4. As a consumer, the main page should be able to get the result of the component and do
whatever actions accordingly (in this case is to display the according message on the page, but
in the real world it can be anything like delete a record, update data etc.) :white_check_mark:
5. The component and the consumer should be loose coupled. For example, don’t hard code
the logic in the confirmation dialog component to change the text of the main page. :white_check_mark:
6. When the confirmation dialog shows, it should cover the entire main page. All other elements
on the main page shouldn’t be clickable when the dialog displays. :white_check_mark:
7. Create a git repo in either Github, Gitlab, Bitbucket etc. Commit & push as you would
normally. :white_check_mark:
