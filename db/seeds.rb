# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "King Black Dragon", email: "kbd@kanbanno.com", password: "KBDRawr")
User.create(name: "Wise Old Man", email: "wiseoldman@kanbanno.com", password: "DionysiusDraynorVillage")

Board.create(title: "Find New Home", description: "My cave in the Wilderness is too remote - I can't find enough adventurers to eat", admin_id: 1)
Board.create(title: "Apologise to Queen Black Dragon", description: "I should make up to the QBD for upsetting her - I should gift her something special.", admin_id: 1)
Board.create(title: "Infiltrate the Wizard's Tower", description: "Find a way to harness the power of rune essence for my future plans", admin_id: 2)
