# Ask()

[Ask() live][heroku]

[heroku]: https://the-ask-app.herokuapp.com

Ask() is a full-stack web application inspired by Quora that allows users to ask and answer questions. The stack consists of Ruby on Rails (backend), PostgreSQL (database), and React.js and Redux (frontend).

## Features and Implementation

The following documentation highlights the main features implemented in Ask(). Each entity (questions, answers, comments, topics, upvotes), are stored in their own table in the backend, each with timestamp columns named `created_at` and `updated_at`.

The app conditionally renders the entry/login page or the home page at the root URL depending on whether there is a currentUser in state, which obsoletes separate paths for login and signup.

### Questions

Questions are the backbone feature of Ask(). They are stored with `id`, `body`, and `asker_id` columns. After login, the app makes a `GET` request the  to fetch all data for the `QuestionIndex` home page component, which itself consists of `QuestionIndexItem` and `Answer` components. All the relevant data regarding all entities used on the page are returned in an index jbuilder response, bundling all AJAX requests into one and minimizing the number of asynchronous actions necessary to render the page. The same is done for a `QuestionDetail` page that shows a `Question` and an `AnswerIndex` showing all answers for that particularly question.

![image of Home][home]

[home]: https://github.com/tigerwins/AskApp/docs/screen-clippings/home.png "Home"

The UI was made to match Quora's design for a clean, minimalistic style.

Question writing is handled in a modal that is opened up through the Ask Question button in the header or the `QuestionPrompt` component on the home page. Questions can also be edited on their individual show pages, accessed by clicking on a question title in a `QuestionIndex`. Mouse and key bindings prevent typical mousewheel scrolling while the modal is open and allows the user to exit the modal by pressing `Esc` or clicking outside the box.

![image of QuestionModal][modal]

[modal]: https://github.com/tigerwins/AskApp/docs/screen-clippings/modal.png "Question Modal"

### Answers and Comments

All answers to questions can be viewed on a question's show page. Rich text editing is handled by `react-quill`, which is implemented in the `Editor` component, customized differently to handle both answering and commenting.

Answers are stored with `id`, `body`, `author_id`, and `question_id` columns, and comments are stored with `id`, `body`, `user_id`, and `answer_id`.

### Question Search

The search function uses the `pg_search` gem, which PostgreSQL's full text search to make a trigram search against the questions table's `body` field with a given query string. Ask() uses `react-autosuggest` on the frontend in order to display the options that `pg_search` has returned from the backend.

![image of SearchBar and auto-suggestions][search]

[search]: https://github.com/tigerwins/AskApp/docs/screen-clippings/search.png

### Topics

Each question can be given topic tags at the top of each question's individual show page. Topics are stored in a table with `id` and `name` columns and are combined with the answers through a join table `question_topics` that has an `id`, `topic_id`, and `answer_id`.

The `QuestionTopicsConstroller` in the backend handles dynamic instantiation of topics (using Rails' `find_or_create_by` method) and subsequent linking with a question whenever a user inputs a new topic tag.

## Development

To run this app locally, you must clone the repository, navigate to the AskApp directory, and run the following commands:

```
bundle install
npm install
bundle exec rake db:setup
npm run webpack
rails server
```

After both `webpack` and `rails server` are up and running, you should be able to access the application at localhost:3000 in your web browser.

## Future Features

There are several other features that I would like to add on to the app. Below I outline a few paths to pursue:

### Omniauth with Facebook and Google

Being able to log in using your Facebook or Google account is a fairly ubiquitous feature at this point, and adding the ability to login through existing accounts would reduce the barrier to entry for accessing the app.

### Loading Screens and Infinite Scrolling

Setting a loading slice of state and inserting loading images would help smooth over transitions between pages while the app is querying the backend for the data for the new page. Additionally, it would reduce initial resource use to only display the first ten or so questions or answers on an index page and then loading more if the user scrolls close to the bottom.

### Recursive Commenting

Being able to comment on comments would give dialogue regarding an answer a lot more clarity by isolating conversations to separate branches as opposed to all comments being displayed in a line.
