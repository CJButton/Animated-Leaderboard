import styled from 'styled-components';

type Props = {
	pictureUrl: string;
};

const PlayerAvatarStyle = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 4rem;
	border: 2px solid rgb(255, 255, 255);
`;

const PlayerAvatar = ({ pictureUrl }: Props) => {
	return (
		<PlayerAvatarStyle
			className="player-avatar"
			src={pictureUrl}
			alt="Player Avatar"
		/>
	);
};

export default PlayerAvatar;
