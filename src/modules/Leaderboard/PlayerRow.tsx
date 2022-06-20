import { forwardRef } from 'react';
import PlayerAvatar from 'modules/Leaderboard/PlayerAvatar';
import Player from 'domains/Leaderboard/Player/type';
import styled from 'styled-components';

const ScoreRow = styled.div`
	display: flex;
	max-width: 24rem;
	height: 4rem;
	margin: auto;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
`;

const ScoreLeft = styled.div`
	display: flex;
`;

const PlayerPlacement = styled.div`
	width: 1rem;
	text-align: center;
	margin: auto;
	margin-right: 1rem;
`;

const PlayerName = styled.div`
	border-color: #7d725d;
	margin: auto;
`;

const PlayerScore = styled.div`
	-webkit-box-flex: 1;
	flex-grow: 1;
	text-align: right;
`;

type Props = Player & {
	placement: number;
};

const PlayerRow = forwardRef<HTMLDivElement, Props>(
	({ placement, displayName, picture, score }, ref) => {
		return (
			<ScoreRow ref={ref}>
				<ScoreLeft>
					<PlayerPlacement>{placement}</PlayerPlacement>
					<PlayerAvatar pictureUrl={picture} />
					<PlayerName>{displayName}</PlayerName>
				</ScoreLeft>
				<PlayerScore>{score}pt</PlayerScore>
			</ScoreRow>
		);
	}
);

export default PlayerRow;
