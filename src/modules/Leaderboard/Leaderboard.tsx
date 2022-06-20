import { useState, useEffect, createRef } from 'react';
import baseBoard from 'services/Leaderboard/getLeaderboard';
import { PLAYER_ID, PLAYER_SCORE } from 'domains/Leaderboard/Player/constants';
import { scoreRandomizer, sortByPlayerScore } from './Leaderboard.helper';
import PlayerRow from 'modules/Leaderboard/PlayerRow';
import AnimateLeaderBoard from 'modules/Leaderboard/AnimateLeaderboard';
import styled from 'styled-components';

const Wrapper = styled.div`
	font-size: 16px;
	font-size: larger;
	font-weight: 500;
`;

// TODO: Realistically this would likely use a websocket, so at least should be able to pass in URL as prop
const Leaderboard = () => {
	const [leaderboard, setLeaderboard] = useState(
		sortByPlayerScore(baseBoard)
	);

	useEffect(() => {
		const interval = setInterval(() => {
			const { playerIDX, additionalScore } = scoreRandomizer(leaderboard);

			const updatedLeaderboard = [...leaderboard];

			updatedLeaderboard[playerIDX][PLAYER_SCORE] =
				updatedLeaderboard[playerIDX][PLAYER_SCORE] + additionalScore;

			setLeaderboard(sortByPlayerScore(updatedLeaderboard));
		}, 500);

		return () => clearInterval(interval);
	}, [leaderboard]);

	return (
		<Wrapper>
			<AnimateLeaderBoard>
				{leaderboard.map((player, idx) => {
					return (
						<PlayerRow
							key={player[PLAYER_ID]}
							ref={createRef()}
							placement={idx + 1}
							{...player}
						/>
					);
				})}
			</AnimateLeaderBoard>
		</Wrapper>
	);
};

export default Leaderboard;
