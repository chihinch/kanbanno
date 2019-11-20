json.extract! board, :id, :title, :description, :admin_id, :archived
json.members board.members.map {|member| member.id }