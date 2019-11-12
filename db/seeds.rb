# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Demo User", email: "demo@kanbanno.com", password: "demodemo")

b1 = {
  title: "Cook's Assistant", 
  description: "The Lumbridge Castle cook is in a mess. It is the Duke of Lumbridge's birthday and the cook is making the cake. He needs a lot of ingredients and doesn't have much time.", 
  admin_id: 1
}

b2 = {
  title: "Dragon Slayer", 
  description: "Prove yourself a true champion. Kill the mighty dragon Elvarg of Crandor and earn the right to buy and wear the Rune platebody.", 
  admin_id: 1
}

b3 = {
  title: "One Small Favour", 
  description: "If you're new to Shilo Village after solving the mystery (or even if you did it some time ago), you may like to check out Yanni Salika's antiques shop.\n
  He's a busy chap, revamping antique items, checking out new stock from potential adventurers and maybe he'll have a small(1) favour to ask of you? Probably nothing particularly large, Yanni isn't a demanding(2) person, should hardly take you any time(3) at all really, something to do when you have a spare moment.\n
  That's assuming there aren't any complications.\n
  1: - Perception of the word 'small' may be open to interpretation.\n
  2: - In a recent vote, Yanni Salika was only voted the second most demanding person in Shilo Village.\n
  3: - As everyone knows, time is relative.",
  admin_id: 1
}

seed_boards = Board.create([b1, b2, b3])

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