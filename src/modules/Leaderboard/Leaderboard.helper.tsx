import { PLAYER_SCORE } from 'domains/Leaderboard/Player/constants';
import Player from 'domains/Leaderboard/Player/type';

export const sortByPlayerScore = (players: Player[]) => {
	return players.sort(
		(playerA, playerB) => playerB[PLAYER_SCORE] - playerA[PLAYER_SCORE]
	);
};

export const scoreRandomizer = (players: Player[]) => {
	const playerIDX = Math.floor(Math.random() * players.length);
	const additionalScore = Math.floor(Math.random() * 100 + 5000);

	return { playerIDX, additionalScore };
};
