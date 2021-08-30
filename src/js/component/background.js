import React from "react";

import StarfieldAnimation from "react-starfield-animation";

export const Background = () => {
	return (
		<StarfieldAnimation
			style={{
				position: "absolute",
				width: "100%",
				height: "100%"
			}}
		/>
	);
};
