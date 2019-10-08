# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "RuneScape Player", email: "rp@kanbanno.com", password: "l337pl4yer")

Board.create(title: "Cook's Assistant", description: "Help the cook make a cake for the Duke of Lumbridge's birthday", admin_id: 1)
Board.create(title: "The Knight's Sword", description: "Help Sir Vyvin's squire replace Sir Vyvin's ceremonial sword", admin_id: 1)
Board.create(title: "Drayon Slayer", description: "Slay Elvarg, the green dragon that inhabits Crandor", admin_id: 1)
