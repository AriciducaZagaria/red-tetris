const formatPlayer = (socketID, type) => ({
  tile: 0,
  score: 0,
  penalty: 0,
  winner: false,
  id: socketID,
  type,
});

export default formatPlayer;