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