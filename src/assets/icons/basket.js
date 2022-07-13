import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

const BasketIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 256 256"
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <G
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.964 1.964) scale(2.8008)"
      >
        <Path
          d="M72.975 58.994h-41.12a3.5 3.5 0 0 1-3.347-2.477L15.199 13.006H3.5a3.5 3.5 0 1 1 0-7h14.289a3.5 3.5 0 0 1 3.347 2.476l13.309 43.512h36.204l10.585-25.191H45a3.5 3.5 0 1 1 0-7h41.5a3.5 3.5 0 0 1 3.227 4.856L76.201 56.85a3.5 3.5 0 0 1-3.226 2.144z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#000",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
        <Circle
          cx={28.88}
          cy={74.33}
          r={6.16}
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#000",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
        <Circle
          cx={74.59}
          cy={74.33}
          r={6.16}
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "#000",
            fillRule: "nonzero",
            opacity: 1,
          }}
        />
      </G>
    </G>
  </Svg>
)

export default BasketIcon;
