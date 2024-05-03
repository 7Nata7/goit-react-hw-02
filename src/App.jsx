import { useState, useEffect } from "react";
import Description from "./Components/Description/Descriptions";
import Options from "./Components/Options/Options";
import Feedback from "./Components/Feedback/Feedback";
import Notification from "./Components/Notification/Notification";

export default function App() {
  const initialCounts = JSON.parse(localStorage.getItem("feedbackCounts")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackCounts, setFeedbackCounts] = useState(initialCounts);

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positiveFeedback = Math.round(
    (feedbackCounts.good / totalFeedback) * 100
  );

  const handleReset = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 && (
        <Feedback state={feedbackCounts} positiveFeedback={positiveFeedback} />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}
