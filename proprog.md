# Professional Programming

### Students
* Askel Eirik Johansson
* Thomas Østli

## Group discussion
### Chosen language

Since our bachelor thesis involved developing a React web-application we had very limited
choices with regards to programming languages we could use, which is JavaScript ES6. The exception was for the back-end
where we could choose more freely, however we decided that our entire application, both back-end and front-end, would be
written in Javascript. We treated this as a big strength already as we only needed to focus on one language and use
JSON seamlessly between the front-end and back-end.

### Coding style

Throughout the project we have decided to create all our components with JSX. This is a very intruitive way to create
components because they provide a markup identical to HTML, as opposed to manually create them with functions and tags as parameters.
We regarded this a coding style as some companies require them to be created using the latter method. We have followed
some of the coding standards that Airbnb use in React [here](https://github.com/airbnb/javascript/tree/master/react).
There is also a section about commenting styles. We would however only comment if it was really necessary with code that
was not obvious. Additionally some of the commenting styles we used were borrowed from [this link](https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/?fbclid=IwAR3Ts8OQB1l-QVf0zu2qWqOKI8ptwhcaIo56wxx2m-A8IUZB6MdIZ_agAfQ).

### Code review

Initially we used the principle of XP - pairprogramming where one would write code and the other would observe and review the code
while it was being written. This resulted in fast code with errors being caught early on. When we wrote code independently, we used
a kanban board, where the final column on the board was code review before a task was marked as completed. Here we would check
the components that were created, the props recieved to them, and their reusabillity. We also made use of a the `eslinter` to
enforce our coding standards.


## Discussion (Askel)

### Code I think is good
In the file [goodCodeAskel.js](https://github.com/DJTechnoo/professional-programming/blob/master/goodCodeAskel.js) I have pasted code I considered good. The reason I think this code is good
is because this is a component that can be reused anywhere in our React application. It can also be used
for different roles decided by the case-props passed to the component. Another good thing about this code
is that it is short and intuitive which makes it easy to read. 

### Code I think is bad
In the file [badCodeAskel.js](https://github.com/DJTechnoo/professional-programming/blob/master/badCodeAskel.js) I have pasted code I considered bad. The main reason I think this code is bad is because
of how we used React's built in statemanager "Context API". All the components that end with state are all nested in one another.
I consider this to be excessive use of global state that would be far better off to be local in other components as they need not
be accessed elsewhere. This is something I became aware of when the project was nearing completion. It was unfortunately too late to focus on and too much to fix, which is another reason this code is bad.


## Discussion (Thomas)

