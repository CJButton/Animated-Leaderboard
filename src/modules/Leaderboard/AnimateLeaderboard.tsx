import { Children, useLayoutEffect, useEffect, useState } from 'react';
import {
	calculateBoundingBoxes,
	usePrevious,
} from './AnimateLeaderboard.helper';

const AnimateLeaderBoard = ({ children }: { children: any }) => {
	const [boundingBox, setBoundingBox] = useState<{ [key: string]: DOMRect }>(
		{}
	);
	const [previousBoundingBox, setPreviousBoundingBox] = useState<{
		[key: string]: DOMRect;
	}>({});
	const previousChildren = usePrevious(children);

	useLayoutEffect(() => {
		const newBoundingBox = calculateBoundingBoxes(children);
		setBoundingBox(newBoundingBox);
	}, [children]);

	useLayoutEffect(() => {
		const previousBoundingBox = calculateBoundingBoxes(previousChildren);
		setPreviousBoundingBox(previousBoundingBox);
	}, [previousChildren]);

	useEffect(() => {
		const hasPreviousBoundingBox = Object.keys(previousBoundingBox).length;

		if (hasPreviousBoundingBox) {
			Children.forEach(children, (child) => {
				const domNode = child.ref.current as HTMLDivElement;
				const firstBox = previousBoundingBox[child.key];
				const lastBox = boundingBox[child.key];
				const changeInY = firstBox.top - lastBox.top;

				if (changeInY) {
					requestAnimationFrame(() => {
						domNode.style.transform = `translateY(${changeInY}px)`;
						domNode.style.transition = 'transform 0s';

						requestAnimationFrame(() => {
							domNode.style.transform = '';
							domNode.style.transition = 'transform 500ms';
						});
					});
				}
			});
		}
	}, [boundingBox, previousBoundingBox, children]);

	return children;
};

export default AnimateLeaderBoard;
