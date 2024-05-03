export default function Feedback({ state, positiveFeedback }) {
  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {state.good + state.neutral + state.bad}</p>
      <p>Total positive: {positiveFeedback}%</p>
    </div>
  );
}
