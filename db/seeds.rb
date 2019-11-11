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
  title: "Creature of Fenkenstrain", 
  description: "Dr Fenkenstrain, master and sole occupant of the castle to the north east of Canifis, needs a new servant to go on a dark errand for him. Do you have the stomach to help Fenkenstrain complete his twisted purpose?", 
  admin_id: 1
}

b4 = {
  title: "Tears of Guthix", 
  description: "Deep in the caves in the Lumbridge Swamp is an enchanted place where the tears shed by Guthix when it saw the destruction Saradomin and Zamorak had caused with their wars flow from the very walls. These tears are said to have magical properties to help players gain deeper understanding of the world. However, the cave is guarded by a loyal serpent named Juna who blocks passage from everyone. However, she has grown bored from three thousand years of sitting in the dark cave and wishes to hear stories of life above. Maybe you could come to some sort of arrangement...?", 
  admin_id: 1
}

b5 = {
  title: "One Small Favour", 
  description: "If you're new to Shilo Village after solving the mystery (or even if you did it some time ago), you may like to check out Yanni Salika's antiques shop.\n
  He's a busy chap, revamping antique items, checking out new stock from potential adventurers and maybe he'll have a small(1) favour to ask of you? Probably nothing particularly large, Yanni isn't a demanding(2) person, should hardly take you any time(3) at all really, something to do when you have a spare moment.\n
  That's assuming there aren't any complications.\n
  1: - Perception of the word 'small' may be open to interpretation.\n
  2: - In a recent vote, Yanni Salika was only voted the second most demanding person in Shilo Village.\n
  3: - As everyone knows, time is relative.",
  admin_id: 1
}

seed_boards = Board.create([b1, b2, b3, b4, b5])

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
# b1_seed_lists[0].prev_list_id = nil
# b1_seed_lists[0].next_list_id = b1_seed_lists[1].id
# b1_seed_lists[1].prev_list_id = b1_seed_lists[0].id
# b1_seed_lists[1].next_list_id = b1_seed_lists[2].id
# b1_seed_lists[2].prev_list_id = b1_seed_lists[1].id
# b1_seed_lists[2].next_list_id = nil
# b1_seed_lists.save

b2_l1 = {
  title: "Apple",
  board_id: seed_boards.second.id,
}

b2_l2 = {
  title: "Tomato",
  board_id: seed_boards.second.id,
}

b2_l3 = {
  title: "Corn",
  board_id: seed_boards.second.id,
}

b2_l4 = {
  title: "Milk",
  board_id: seed_boards.second.id,
}

b2_seed_lists = List.create([b2_l1, b2_l2, b2_l3, b2_l4])
b2_seed_lists[0].updateNeighbours(nil, b2_seed_lists[1].id)
b2_seed_lists[1].updateNeighbours(b2_seed_lists[0].id, b2_seed_lists[2].id)
b2_seed_lists[2].updateNeighbours(b2_seed_lists[1].id, b2_seed_lists[3].id)
b2_seed_lists[3].updateNeighbours(b2_seed_lists[2].id, nil)
# debugger
# b2_seed_lists[0].prev_list_id = nil
# b2_seed_lists[0].next_list_id = b2_seed_lists[1].id
# b2_seed_lists[1].prev_list_id = b2_seed_lists[0].id
# b2_seed_lists[1].next_list_id = b2_seed_lists[2].id
# b2_seed_lists[2].prev_list_id = b2_seed_lists[1].id
# b2_seed_lists[2].next_list_id = b2_seed_lists[3].id
# b2_seed_lists[3].prev_list_id = b2_seed_lists[2].id
# b2_seed_lists[3].next_list_id = nil
# b2_seed_lists.save