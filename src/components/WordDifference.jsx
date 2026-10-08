export default function WordDifference({ value, other }) {
  let start = 0,
    end = 0;
  while (
    start < Math.min(value.length, other.length) &&
    value[start] === other[start]
  )
    start++;
  while (
    end < Math.min(value.length, other.length) - start &&
    value.at(-1 - end) === other.at(-1 - end)
  )
    end++;
  return (
    <>
      {value.slice(0, start)}
      <mark>{value.slice(start, value.length - end) || "∅"}</mark>
      {end ? value.slice(-end) : ""}
    </>
  );
}
