import { useRef, useEffect, Children } from 'react';

export const calculateBoundingBoxes = (children: any) => {
	const boundingBoxes: { [key: string]: DOMRect } = {};

	Children.forEach(children, (child) => {
		const domNode = child.ref.current;
		const nodeBoundingBox = domNode.getBoundingClientRect();

		boundingBoxes[child.key] = nodeBoundingBox;
	});

	return boundingBoxes;
};

export const usePrevious = (value: any) => {
	const previousChildRef = useRef();

	useEffect(() => {
		previousChildRef.current = value;
	}, [value]);

	return previousChildRef.current;
};
