import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";
// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Return List with no animation Below.
// return (
//   <div className="feedback-list">
//     {feedback.map((item) => (
//       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//     ))}
//   </div>
// );

// No Need for prop types after using ContextAPI
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
