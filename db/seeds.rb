# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Demo User", email: "demo@kanbanno.com", password: "demodemo")

b1 = Board.create(
  title: "Cook's Assistant", 
  description: "The Lumbridge Castle cook is in a mess. It is the Duke of Lumbridge's birthday and the cook is making the cake. He needs a lot of ingredients and doesn't have much time.", 
  admin_id: 1
)

b2 = Board.create(
  title: "Dragon Slayer", 
  description: "Prove yourself a true champion. Kill the mighty dragon Elvarg of Crandor and earn the right to buy and wear the Rune platebody.", 
  admin_id: 1
)

b3 = Board.create(
  title: "Creature of Fenkenstrain", 
  description: "Dr Fenkenstrain, master and sole occupant of the castle to the north east of Canifis, needs a new servant to go on a dark errand for him. Do you have the stomach to help Fenkenstrain complete his twisted purpose?", 
  admin_id: 1)

b4 = Board.create(
  title: "Tears of Guthix", 
  description: "Deep in the caves in the Lumbridge Swamp is an enchanted place where the tears shed by Guthix when it saw the destruction Saradomin and Zamorak had caused with their wars flow from the very walls. These tears are said to have magical properties to help players gain deeper understanding of the world. However, the cave is guarded by a loyal serpent named Juna who blocks passage from everyone. However, she has grown bored from three thousand years of sitting in the dark cave and wishes to hear stories of life above. Maybe you could come to some sort of arrangement...?", 
  admin_id: 1)

b5 = Board.create(
  title: "One Small Favour", 
  description: "If you're new to Shilo Village after solving the mystery (or even if you did it some time ago), you may like to check out Yanni Salika's antiques shop.\n
  He's a busy chap, revamping antique items, checking out new stock from potential adventurers and maybe he'll have a small(1) favour to ask of you? Probably nothing particularly large, Yanni isn't a demanding(2) person, should hardly take you any time(3) at all really, something to do when you have a spare moment.\n
  That's assuming there aren't any complications.\n
  1: - Perception of the word 'small' may be open to interpretation.\n
  2: - In a recent vote, Yanni Salika was only voted the second most demanding person in Shilo Village.\n
  3: - As everyone knows, time is relative.",
  admin_id: 1
)

b1_l1 = List.create(
  title: "To Do",
  board_id: b1.id,
  prev_list_id: nil,
  next_list_id: 2,
)

b1_l2 = List.create(
  title: "Doing",
  board_id: b1.id,
  prev_list_id: 1,
  next_list_id: 3,
)

b1_l3 = List.create(
  title: "Done",
  board_id: b1.id,
  prev_list_id: 2,
  next_list_id: nil,
)

b1_l1_c1 = Card.create(
  title: "Obtain egg",
  description: "There's a chicken farm across the River Lum where you can find eggs",
  list_id: b1_l1.id,
  prev_card_id: nil,
  next_card_id: nil
)