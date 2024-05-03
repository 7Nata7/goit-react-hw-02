export default function Options({
  updateFeedback,
  totalFeedback,
  handleReset,
}) {
  return (
    <div>
      <h2>Options</h2>

      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
