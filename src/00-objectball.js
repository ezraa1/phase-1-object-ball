const playerStats = (playerName) => {
const gameObj = gameObject();
let playerStatsObj = {};
for (const key in gameObj) {
  for (const player in gameObj[key].players) {
    if (player === playerName) {
      playerStatsObj = gameObj[key].players[player];
    }
  }
}
return playerStatsObj;
};
const mostPointsScored = () => {
    const gameObj = gameObject();
    let playerWithHighestPoints = {};
    let highestPoints = 0;
    for (const key in gameObj) {
      for (const player in gameObj[key].players) {
        if (gameObj[key].players[player].points > highestPoints) {
          highestPoints = gameObj[key].players[player].points;
          playerWithHighestPoints = {};
          playerWithHighestPoints[player] = gameObj[key].players[player];
        }
      }
    }
  
    return playerWithHighestPoints;
  };