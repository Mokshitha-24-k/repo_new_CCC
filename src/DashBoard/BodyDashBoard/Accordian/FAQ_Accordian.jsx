import React, { useState, useContext } from "react";
import { ThemeContext } from '../../../ThemeContext';

const faqData = [
  {
    question: "What is React?",
    answer: "React is a front-end JavaScript library for building user interfaces.",
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in React.",
  },
  {
    question: "What is state?",
    answer: "State is an object that determines how a component renders and behaves.",
  },
];

const AccordionLayout = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { theme } = useContext(ThemeContext);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // toggle on/off
  };

  const containerStyle = {
    display: "flex",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "all 0.3s ease",
    backgroundColor: theme === "dark" ? "#121212" : "#f9f9f9",
  };

  const leftPanelStyle = {
    width: activeIndex === null ? "100%" : "30%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: activeIndex === null ? "center" : "flex-start",
    justifyContent: activeIndex === null ? "center" : "flex-start",
    textAlign: activeIndex === null ? "center" : "left",
    transition: "width 0.3s ease",
    borderRight: activeIndex !== null ? "1px solid #ddd" : "none",
  };

  const questionStyle = (isActive) => ({
    width: activeIndex === null ? "80%" : "100%",
    padding: "12px 16px",
    marginBottom: "12px",
    cursor: "pointer",
    backgroundColor: isActive
      ? theme === "dark"
        ? "#444"
        : "#c6c6c6"
      : theme === "dark"
      ? "#333"
      : "#fff",
    borderRadius: "6px",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    color: theme === "dark" ? "#fff" : "#000",
  });

  const rightPanelStyle = {
    width: "70%",
    padding: "40px",
    backgroundColor: theme === "dark" ? "#1e1e1e" : "#ECECEC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "width 0.3s ease",
  };

  const answerTextStyle = {
    fontSize: "1.1rem",
    marginTop: "15px",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <div style={containerStyle}>
      {/* Left Panel */}
      <div style={leftPanelStyle}>
        <h3 style={{ marginBottom: "20px", color: theme === "dark" ? "#fff" : "#000" }}>FAQs</h3>
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={questionStyle(activeIndex === index)}
          >
            {item.question}
          </div>
        ))}
      </div>

      {/* Right Panel - Answer */}
      {activeIndex !== null && (
        <div style={rightPanelStyle}>
          <div style={{ maxWidth: "600px" }}>
            <p style={answerTextStyle}>{faqData[activeIndex].answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionLayout;
