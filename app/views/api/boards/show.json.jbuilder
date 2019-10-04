json.board do
  json.partial! '/api/boards/board', board: @board
  # json.memberIds
end