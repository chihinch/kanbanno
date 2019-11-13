# Kanbanno Documentation

## Visit the Live App!

[View Kanbanno Here](https://kanbanno.herokuapp.com "Kanbanno")

## Welcome to Kanbanno!

Kanbanno is a single page appplication modelled after [Trello](https://trello.com "Trello"). It applies the [kanban](https://en.wikipedia.org/wiki/Kanban "Kanban") system developed by engineers at Toyota, which presents an intuitive, board-based interface for teams to stay informed on the progression of their projects and quickly update the status of tasks.

## Technologies

* Backend: Ruby on Rails / PostgreSQL
* Frontend: React.js / Redux
* Hosting: Heroku
* Other libraries: 
  * [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for drag-and-drop capability
  * [react-onclickoutside](https://github.com/Pomax/react-onclickoutside) for user interaction with menus
  * [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) for icons

## Features

### User Authentication

Visitors go through a simple, no-nonsense, yet visually appealing signup process designed to get them set up with Kanbanno and let them focus on what matters more: getting their projects in shape.

Alternatively, visitors can feel free to demo the app to see if Kanbanno is the right fit for them.

### Boards, Lists*, and Cards*
\*Features under construction

The foundation of the app. Users can create boards for their projects and group the project's tasks (cards) in lists. Most often, users may want to group cards by their tasks' status (e.g. planning, not started, in progress, done).

Users will also be able to add details, such as descriptions and due dates, to cards to describe a task.

### Drag-and-Drop*

\* Feature under construction

Users will be able to rearrange their lists and cards around a board by simply dragging them around, just like an actual bulletin board.

### Sharing*

\* Feature under construction

Boards can be shared with a team so everyone can stay informed about the progression of their project. Team members can interact with lists and cards just like the board's owner.

## Future Updates

* Boards
  * Users can star boards to see them at the top of their dashboard
  * Boards can be archived and reopened
* Lists and Cards
  * Lists can be added to cards, and cards can be added to lists
  * Utilisation of Atlassian's react-beautiful-dnd library to implement drag-and-drop capability to lists and cards
  * Lists and cards and be archived
* Sharing
  * Users can share boards with other Kanbanno users
  * Board members can all edit the board, lists, and cards
* Comments and Due Dates
  * Users can comment and add due dates to cards
  * Due dates can display a status based on proximity to deadlines


## Acknowledgements

Special thanks to the authors of Trello as well as Atlassian Corporation plc for creating a wonderful app for making project management pain-free.