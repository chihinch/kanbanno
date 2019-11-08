json.board do
  json.partial! '/api/boards/board', board: @board
end

json.lists do
  json.array! @board.lists.each do |list|
    json.partial! '/api/lists/list', list: list
  end
end