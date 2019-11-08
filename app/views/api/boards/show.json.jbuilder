json.board do
  json.partial! '/api/boards/board', board: @board
end

json.lists do
  @board.lists.each do |list|
    json.set! list.id do
      json.partial! '/api/lists/list', list: list
    end
  end
end