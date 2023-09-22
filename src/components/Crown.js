/** @jsx jsx */

import { jsx, useColorMode } from "theme-ui";

export default function Crown({ content, ...props }) {
  const circleText = content + " • ";
  const [mode, setMode] = useColorMode();

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 112"
      sx={{
        fill: "none",
        color: `${mode === "light" ? "secondary" : "text"}`,
        overflow: "visible",
      }}
      {...props}
    >
      <path
        id="crown"
        sx={{ transform: "rotate(0deg)", transformOrigin: "unset" }}
        stroke="currentColor"
        fill="none"
        stroke-linejoin="round"
        stroke-width="3"
        d="M45 52.847a89.03 89.03 0 0 0-3 .653c-2 .5-3.5 2-3.5 4.5 0 2 2.667 7.833 4 10.5h6M45 52.847C48.761 52.077 54.533 51 56 51m-11 1.847c-1 .551-1.4 3.953 1 7.153 2.4 3.2 2.333 6.5 2.5 8.5M56 51c-1.167 1.667-2 4.5-1 9s.833 7 1 8.5M56 51v-5m0 5c1.467 0 7.239 1.076 11 1.847M56 51c1.167 1.667 2 4.5 1 9s-.833 7-1 8.5m0 0h-7.5m7.5 0h7.5M56 42v4m0 0h-3.5m3.5 0h3.5m7.5 6.847c1.366.28 2.467.52 3 .653 2 .5 3.5 2 3.5 4.5 0 2-2.667 7.833-4 10.5h-6M67 52.847c1 .551 1.4 3.953-1 7.153-2.4 3.2-2.333 6.5-2.5 8.5"
      />
      <g
        sx={{
          willChange: "transform",
          transformOrigin: "unset",
          animation: "rotate 20s linear infinite",
          "@keyframes rotate": {
            from: {
              transform: "rotateZ(0deg)",
            },
            to: {
              transform: "rotateZ(360deg)",
            },
          },
        }}
      >
        <path
          fill="transparent"
          id="textPath"
          d="M111.5 56a55.5 55.5 0 11-111 0 55.5 55.5 0 01111 0z"
        />
        <text
          sx={{
            fill: "textSecondary",
            fontSize: 11,
            letterSpacing: ".23em",
            textTransform: "uppercase",
            textShadow: (theme) => `${"0 0 4em " + theme.colors.background}`,
          }}
        >
          <textPath alignmentBaseline="top" xlinkHref="#textPath">
            {circleText.repeat(2)}
          </textPath>
        </text>
      </g>
    </svg>
  );

  return icon;
}
