# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seed_users = User.create([
  { name: "Demo User", email: "demo@kanbanno.com", password: "demodemo" },
  { name: "King Lathas", email: "eastardy@kanbanno.com", password: "demodemo" },
  { name: "King Tyras", email: "westardy@kanbanno.com", password: "demodemo" },
])


seed_boards = Board.create([
  {
    title: "Cook's Assistant", 
    description: "The Lumbridge Castle cook is in a mess. It is the Duke of Lumbridge's birthday and the cook is making the cake. He needs a lot of ingredients and doesn't have much time.", 
    admin_id: seed_users.first.id
  },
  {
    title: "Dragon Slayer", 
    description: "Prove yourself a true champion. Kill the mighty dragon Elvarg of Crandor and earn the right to buy and wear the Rune platebody.", 
    admin_id: seed_users.first.id
  },
  {
    title: "One Small Favour", 
    description: "If you're new to Shilo Village after solving the mystery (or even if you did it some time ago), you may like to check out Yanni Salika's antiques shop.\n
    He's a busy chap, revamping antique items, checking out new stock from potential adventurers and maybe he'll have a small(1) favour to ask of you? Probably nothing particularly large, Yanni isn't a demanding(2) person, should hardly take you any time(3) at all really, something to do when you have a spare moment.\n
    That's assuming there aren't any complications.\n
    1: - Perception of the word 'small' may be open to interpretation.\n
    2: - In a recent vote, Yanni Salika was only voted the second most demanding person in Shilo Village.\n
    3: - As everyone knows, time is relative.",
    admin_id: seed_users.first.id
  },
  {
    title: "Goblin Diplomacy", 
    description: "There's a disturbance in the Goblin Village. Help the goblins solve their dispute so the world doesn't have to worry about rioting goblins. Aim: to help the goblins decide which colour they will wear.", 
    admin_id: seed_users.first.id
  },
  {
    title: "Regicide", 
    description: "Continuing the Plague City series, the Regicide Quest takes you beyond the 'Well of Voyage' to a new realm.\n
    King Lathas will employ you once again, this time for the grim task of disposing of his brother.\n
    Upon travelling to the realm you will find yourself surrounded by new and strange plants, animals and even a new race.\n
    Once there, you will see that everything is not as serene as it first appears.", 
    admin_id: seed_users.second.id
  },
  {
    title: "Underground Pass", 
    description: "There are rumours of a secret passageway that can be used to get to the other side of the mountains west of Ardougne. Now it's just a matter of finding it.", 
    admin_id: seed_users.third.id
  }
])


seed_board_memberships = BoardMembership.create!([
  {member_id: seed_users[0].id, board_id: seed_boards[0].id},
  {member_id: seed_users[0].id, board_id: seed_boards[1].id},
  {member_id: seed_users[0].id, board_id: seed_boards[2].id},
  {member_id: seed_users[0].id, board_id: seed_boards[3].id},
  {member_id: seed_users[0].id, board_id: seed_boards[4].id}, # End of first user
  {member_id: seed_users[1].id, board_id: seed_boards[0].id},
  {member_id: seed_users[1].id, board_id: seed_boards[1].id},
  {member_id: seed_users[1].id, board_id: seed_boards[4].id}, # End of second user
  {member_id: seed_users[2].id, board_id: seed_boards[0].id},
  {member_id: seed_users[2].id, board_id: seed_boards[2].id},
  {member_id: seed_users[2].id, board_id: seed_boards[5].id},
])


b1_l1 = {
  title: "To Do",
  board_id: seed_boards.first.id,
}
b1_l2 = {
  title: "Doing",
  board_id: seed_boards.first.id,
}
b1_l3 = {
  title: "Done",
  board_id: seed_boards.first.id,
}
b1_seed_lists = List.create([b1_l1, b1_l2, b1_l3])
b1_seed_lists[0].updateNeighbours(nil, b1_seed_lists[1].id)
b1_seed_lists[1].updateNeighbours(b1_seed_lists[0].id, b1_seed_lists[2].id)
b1_seed_lists[2].updateNeighbours(b1_seed_lists[1].id, nil)


b2_l1 = {
  title: "To Do",
  board_id: seed_boards.second.id,
}
b2_l2 = {
  title: "Doing",
  board_id: seed_boards.second.id,
}
b2_l3 = {
  title: "Done",
  board_id: seed_boards.second.id,
}
b2_l4 = {
  title: "Quest Items",
  board_id: seed_boards.second.id,
}
b2_seed_lists = List.create([b2_l1, b2_l2, b2_l3, b2_l4])
b2_seed_lists[0].updateNeighbours(nil, b2_seed_lists[1].id)
b2_seed_lists[1].updateNeighbours(b2_seed_lists[0].id, b2_seed_lists[2].id)
b2_seed_lists[2].updateNeighbours(b2_seed_lists[1].id, b2_seed_lists[3].id)
b2_seed_lists[3].updateNeighbours(b2_seed_lists[2].id, nil)


b3_l1 = {
  title: "To Do",
  board_id: seed_boards.third.id,
}
b3_l2 = {
  title: "Doing",
  board_id: seed_boards.third.id,
}
b3_l3 = {
  title: "Done",
  board_id: seed_boards.third.id,
}
b3_seed_lists = List.create([b3_l1, b3_l2, b3_l3])
b3_seed_lists[0].updateNeighbours(nil, b3_seed_lists[1].id)
b3_seed_lists[1].updateNeighbours(b3_seed_lists[0].id, b3_seed_lists[2].id)
b3_seed_lists[2].updateNeighbours(b3_seed_lists[1].id, nil)


b1_l1_c1 = {
  title: "Fetch a bucket of milk",
  description: "There are dairy cows in the field across the River Lum.",
  list_id: b1_seed_lists.first.id,
  due_date: "2019-10-20"
}
b1_l1_c2 = {
  title: "Fetch an egg",
  description: "There's a chicken coop across the field with the dairy cows.",
  list_id: b1_seed_lists.first.id,
  due_date: "2019-12-25"
}
b1_l1_c3 = {
  title: "Fetch flour",
  description: "The windmill is on the way to Draynor Village.",
  list_id: b1_seed_lists.first.id,
  due_date: "2019-12-25"
}
b1_l1_lists = Card.create([b1_l1_c1, b1_l1_c2, b1_l1_c3])
b1_l1_lists[0].updateNeighbours(nil, b1_l1_lists[1].id)
b1_l1_lists[1].updateNeighbours(b1_l1_lists[0].id, b1_l1_lists[2].id)
b1_l1_lists[2].updateNeighbours(b1_l1_lists[1].id, nil)



b1_l1_c1_co1 = {
  body: "Don't forget a bucket for the milk!",
  author_id: seed_users.first.id,
  card_id: b1_l1_lists.first.id,
}
b1_l1_c1_co2 = {
  body: "Don't spill the milk!",
  author_id: seed_users.second.id,
  card_id: b1_l1_lists.first.id,
}
b1_l1_c3_co1 = {
  body: "There's a wheat field in front of the windmill.",
  author_id: seed_users.third.id,
  card_id: b1_l1_lists.third.id,
}
b1_comments = Comment.create([b1_l1_c1_co1, b1_l1_c1_co2, b1_l1_c3_co1])


b2_l1_c1 = {
  title: "Visit Oziach in Edgeville",
  description: "He has a quest worthy of a champion.",
  list_id: b2_seed_lists.first.id
}
b2_l1_c2 = {
  title: "Obtain Anti-dragon shield from the Duke of Lumbridge",
  description: "Without it you'll be burnt to a crisp by Elvarg.",
  list_id: b2_seed_lists.first.id
}
b2_l1_c3 = {
  title: "Obtain all map pieces",
  description: "There are 3 map pieces: one is in Melzar's Maze, another one is in the Dwarven Mine, and the last one is held by a goblin.",
  list_id: b2_seed_lists.first.id
}
b2_l1_c4 = {
  title: "Purchase a ship and find a captain",
  description: "Looks like there's ship for sale in Port Sarim. Maybe Ned in Draynor Village can help us sail the ship.",
  list_id: b2_seed_lists.first.id
}
b2_l1_c5 = {
  title: "Slay Elvarg and bring back the dragon head",
  description: "Bring good food!",
  list_id: b2_seed_lists.first.id
}
b2_l1_lists = Card.create([b2_l1_c1, b2_l1_c2, b2_l1_c3, b2_l1_c4, b2_l1_c5])
b2_l1_lists[0].updateNeighbours(nil, b2_l1_lists[1].id)
b2_l1_lists[1].updateNeighbours(b2_l1_lists[0].id, b2_l1_lists[2].id)
b2_l1_lists[2].updateNeighbours(b2_l1_lists[1].id, b2_l1_lists[3].id)
b2_l1_lists[3].updateNeighbours(b2_l1_lists[2].id, b2_l1_lists[4].id)
b2_l1_lists[4].updateNeighbours(b2_l1_lists[3].id, nil)


b3_l1_c1 = {
  title: "Complete Yanni Salika's favour",
  description: "He wants red mahogany logs from the forester south of Shilo Village.",
  list_id: b3_seed_lists.first.id
}
b3_l1_c2 = {
  title: "Complete the forester's favour",
  description: "He wants his axe to be brought to Captain Shanks for sharpening.",
  list_id: b3_seed_lists.first.id
}
b3_l1_c3 = {
  title: "Complete Brian's favour",
  description: "He wants us to save his friend, who is being convicted of a crime he didn't commit.",
  list_id: b3_seed_lists.first.id
}
b3_l1_c4 = {
  title: "Complete Aggie the Witch's favour",
  description: "In exchange for her testimony, Aggie wants us to find her apprentice.",
  list_id: b3_seed_lists.first.id
}
b3_l1_c5 = {
  title: "Complete Johanhus Ulsbrecht's favour",
  description: "He wants a month's supply of chickens as ransom for Aggie's apprentice.",
  list_id: b3_seed_lists.first.id
}
b3_l1_lists = Card.create([b3_l1_c1, b3_l1_c2, b3_l1_c3, b3_l1_c4, b3_l1_c5])
b3_l1_lists[0].updateNeighbours(nil, b3_l1_lists[1].id)
b3_l1_lists[1].updateNeighbours(b3_l1_lists[0].id, b3_l1_lists[2].id)
b3_l1_lists[2].updateNeighbours(b3_l1_lists[1].id, b3_l1_lists[3].id)
b3_l1_lists[3].updateNeighbours(b3_l1_lists[2].id, b3_l1_lists[4].id)
b3_l1_lists[4].updateNeighbours(b3_l1_lists[3].id, nil)