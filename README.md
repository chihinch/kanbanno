# Kanbanno Documentation

## Visit the Live App!

[Click me to try Kanbanno](https://kanbanno.herokuapp.com "Kanbanno")
![Kanbanno splash page](/screenshots/splash.png)

## Welcome to Kanbanno!

Kanbanno is a single page appplication modelled after [Trello](https://trello.com "Trello"). It implements the [kanban](https://en.wikipedia.org/wiki/Kanban "Kanban") system developed by engineers at Toyota, which presents an intuitive, board-based interface for teams to stay informed on the progression of their projects and quickly update the status of tasks.

## Technologies

* Backend: Ruby on Rails, PostgreSQL
* Frontend: React.js, Redux
* Hosting: Heroku
* Other libraries: 
  * [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) for drag-and-drop capability
  * [react-onclickoutside](https://github.com/Pomax/react-onclickoutside) for user interaction with menus
  * [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) for icons

## Features

### User Authentication

Visitors go through a simple, no-nonsense, yet visually appealing signup process designed to get them started with Kanbanno as soon as possible. 

User passwords are secured with bcrypt. Sessions are tracked by storing randomly generated session tokens in cookies.

### Boards, Lists, and Cards

#### Main Interface

![Kanbanno board](/screenshots/board.png)

Selection of a board leads to the main interface. Users are free to create cards representing tasks and group them into lists. Cards can also be given due dates, which are colour-coded based on proximity to the current day: yellow indicates an approaching deadline, while red indicates a task that is past due.

#### Card Interface

Clicking a card reveals more details. Users can change due dates, add descriptions, or submit comments.

### Drag-and-Drop

![Kanbanno dnd](/screenshots/dnd_demo.gif)

For maximum flexibility, users can rearrange their boards any way they want by dragging and dropping lists and cards thanks to Trello's react-beautiful-dnd library.

When an item is repositioned, up to 4 other entities may be affected: its current neighbours and its new neighbours. 

In the backend, the updateNeighbours function accepts up to two arguments, the ID the new neighbours. Their default value is nil, implying that the item will become the first or last in the group of lists/cards.

First, the current and new neighbours are identified. 
```ruby
def updateNeighbours(prev_list_id = nil, next_list_id = nil)
    old_prev_list = self.prev_list
    old_next_list = self.next_list

    new_prev_list = List.find_by(id: prev_list_id)
    new_next_list = List.find_by(id: next_list_id)
```

Then the item is introduced to its new neighbours. If new_prev_list or new_next_list is nil, then our item is now the first or last list/card.
```ruby
    new_prev_list.next_list_id = self.id unless new_prev_list.nil?
    new_next_list.prev_list_id = self.id unless new_next_list.nil?

    self.prev_list_id = prev_list_id
    self.next_list_id = next_list_id
```

And finally, the item's current neighbours are introduced to their new neighbours. 

Essentially, the control flow from the item's point of view is as follows:

* Was there something before said item?
    * Yes
        * Was there something after said item?
            * Yes
                * The items before and after become neighbours.
            * No
                * The item before will have nothing after it.
    * No
        * Was there something after said item?
            * Yes
                * The item after will not have something before it.
            * No
                * (Nothing should happen, as presumably the item was initially alone)
```ruby
    if !old_prev_list.nil? 
      if !old_next_list.nil?
        old_prev_list.next_list_id = old_next_list.id
        old_next_list.prev_list_id = old_prev_list.id
      else
        old_prev_list.next_list_id = nil
      end
    else
      if !old_next_list.nil?
        old_next_list.prev_list_id = nil
      end
    end
```

### Sharing

![Kanbanno sharing](/screenshots/sharing.png)

Kanbanno is all about collaboration, so it's easy to invite other Kanbanno users to join a board, who will then see the board on their dashboard. Board administrators also have the capability to remove members from the board.

## Future Updates

Kanbanno will eventually be able to do the following:

* Archive and close/delete boards, lists, and cards
* Star favourite boards
* Search for boards
* Store attachments uploaded by users to cards
* Duplicate lists and cards