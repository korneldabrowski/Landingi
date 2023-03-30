export function CustomTick(props) {
  const { x, y, payload } = props;
  const words = payload.value.split(' ');
  const maxCharsPerLine = 10;
  const lines = [];

  let line = '';
  for (let i = 0; i < words.length; i++) {
    if ((line + words[i]).length > maxCharsPerLine) {
      lines.push(line);
      line = '';
    }
    line += words[i] + ' ';
  }
  lines.push(line);

  return (
    <g transform={`translate(${x},${y + 10})`}>
      {lines.map((line, index) => (
        <text
          key={index}
          x={-10}
          y={index * 20}
          dy={16}
          textAnchor="middle"
          fill="#666"
          // transform="rotate(-35)"
        >
          <tspan x={-10} dy={16}>
            {line.trim()}
          </tspan>
        </text>
      ))}
    </g>
  );
}
