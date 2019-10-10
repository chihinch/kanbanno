# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Demo User", email: "demo@kanbanno.com", password: "demodemo")

Board.create(title: "Cook's Assistant", description: "Help the cook make a cake for the Duke of Lumbridge's birthday", admin_id: 1)
Board.create(title: "The Knight's Sword", description: "Help Sir Vyvin's squire replace Sir Vyvin's ceremonial sword", admin_id: 1)
Board.create(title: "Dragon Slayer", description: "Slay Elvarg, the green dragon that inhabits Crandor", admin_id: 1)
Board.create(title: "Lost City", description: "The city isn't actually lost", admin_id: 1)
Board.create(title: "One Small Favour", description: "HAHAHAHA more like many small favours", admin_id: 1)
