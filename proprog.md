# Professional Programming

### Students and project
* Askel Eirik Johansson
* Thomas Østli

Main repo: https://github.com/DJTechnoo/kompi-server

## Group discussion
### Chosen language

Since our bachelor thesis involved developing a React web-application we had very limited
choices with regards to programming languages we could use, which is JavaScript ES6. The exception was for the back-end
where we could choose more freely, however we decided that our entire application, both back-end and front-end, would be
written in Javascript. We treated this as a big strength already as we only needed to focus on one language and use
JSON seamlessly between the front-end and back-end. Generally it is used for most web-applications.

Some strengths of Javascript are it's a very untuitive and straight forward language to work with. It is also popular which means that there are a lot of learning resources online such as stackoverflow. The downside of working with Javascript is that the sourcecode is visible to anyone from the browser in developer-tools. This is something that can have vulnerabilities or disclose data that should not be. For this reason, the code must be graced with extra care. Another downside is that different browsers do not interpret Javascript in the same way. Code that works in one browser is not guaranteed to work in the same way in a different browser.


### Coding style

Throughout the project we have decided to create all our components with JSX. This is a very intuitive way to create
components because they provide a markup identical to HTML, as opposed to manually create them with functions and tags as parameters.
We regarded this a coding style as some companies require them to be created using the latter method. We have followed
some of the coding standards that Airbnb use in React [here](https://github.com/airbnb/javascript/tree/master/react).
There is also a section about commenting styles. We would however only comment if it was really necessary with code that
was not obvious. Additionally some of the commenting styles we used were borrowed from [this link](https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/?fbclid=IwAR3Ts8OQB1l-QVf0zu2qWqOKI8ptwhcaIo56wxx2m-A8IUZB6MdIZ_agAfQ).

### Integrating libraries

When working with React and Node in general there are tons of great libraries available at ones disposal. We, however, only used a handful, and not a library for every single task or feature we implemented. We only used libraries when it was either a part of
making it easier to write server-side code, such as Express and Mongoose. Whenever a third party library was needed, it was mostly to
be able to, for example, quickly set up a graph or a chart for visual representation in React. Doing so was very straightforward as libraries for React are mostly React components that are simply imported.

### Code review

Initially we used the principle of XP - pairprogramming where one would write code and the other would observe and review the code
while it was being written. This resulted in fast code with errors being caught early on. When we wrote code independently, we used
a kanban board, where the final column on the board was code review before a task was marked as completed. Here we would check
the components that were created, the props recieved to them, and their reusabillity. We also made use of the `eslinter` to
enforce our coding standards.

### Communication

We have had communication with several parties during our project. They are the supervisor, our client, and teammates (us).
Especially during the COVID-19 pandemic we had to continuously use tools for distant communication. 
Every three weekds we used Teams to communicate
with our client for discussions, progress reports and show our designs on screensharing. 
Every monday at 9:00 we used skype to have group meetings with our supervisor. 
As for us in the group, we primarily used social media to initiate contact and used Skype with screensharing to show code for review and suggestions. For managing features, issues and tracking backlog we used Trello. We had different with cards as is normal in kanban. The descriptions would be short, with a description in the form of a hybrid between descriptive text and pseudocode. This helped remembering
the ideas and steps needed to complete the cards.
It was very challenging at first to work while our campus was closed, but we quickly got used to working in the way we did. We recognize the fact that it is not all too uncommon for developers to work like this, so it was good to be exposed to this kind of experience.

### Version control

We used git for our version control and github to host our code. 
It was considered to use branching but since there were only the two of us, and we felt the workflow was as good
as it could be, we figured we would be well off wihout branching and simply make direct commits to the master branch.
Another reason for us doing so was because we pair programmed a lot of the time.
Commits were done very often with small portions of code. To avoid merge conflicts we worked on separate components at all times, and made sure that the cards in our Trello board prevented potential merge conflicts.
We had a policy to always push code that was worked on, and finished, before leaving campus. Anything can happen to a laptop
at anytime, but the code would be safe.


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

### Code before refactoring
In the file [beforeRefactoringAskel.js](./beforeRefactoringAskel.js) 

### Code after refactoring
In the file [afterRefactoringAskel.js](./afterRefactoringAskel.js) 


## Discussion (Thomas)

### Code I think is good
In the file [goodCodeThomas.js]
Pretty straight forward request, finds one profile and populates it with the user's name and the tasks assigned to the user. Avoiding having to use multiple requests.

### Code I think is bad
In the file [badCodeThomas.js]
To update the status of a task, the user must enter a text. I think the placement of the submit-form and the related code is a bit off, a bit messy, and ideally would've been moved to a different place, it's own file perhaps. 

### Refactoring
Small refactoring I did was after finishing writing the front-end and back-end part for the "update task status" function, I realized an ID I needed for the HTTP request, that I'd been sending as a prop all the way through the program, was already available for use in the back-end through "auth". Thus making parts of the code written quite unnecessary, I then removed it promptly.

Regarding professionalism in programming I ultimately feel I have some ways to go. I've definitely realized it is an important pursuit as to become a good, valuable programmer and employee in the future, so it's something make sure to dedicate more time to. 
