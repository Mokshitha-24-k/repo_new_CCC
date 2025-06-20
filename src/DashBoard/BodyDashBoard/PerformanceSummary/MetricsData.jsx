import {
    FaChalkboardTeacher,
    FaClipboardCheck,
    FaBook,
    FaHourglassHalf,
    FaCertificate,
    FaLaptopCode,
  } from "react-icons/fa";
  
  export const metricsCard1 = [
    {
      title: "Total enroll courses",
      value: 5,
      text: "5",
      icon: <FaCertificate />, 
      color: "#00C49F",
      bgColor: "#E0F7F4",
    },
    {
      title: "Course completed",
      value: 1,
      text: "1",
      icon: <FaLaptopCode />, 
      color: "#00B0FF",
      bgColor: "#E0F3FF",
    },
    {
      title: "Hours spent",
      value: 112,
      text: "112h",
      icon: <FaHourglassHalf />, 
      color: "#FF4081",
      bgColor: "#FFEAF2",
    },
  ];
  
  export const metricsCard2 = [
    {
      title: "Live class attended",
      value: 70,
      text: "70%",
      icon: <FaChalkboardTeacher />, 
      color: "#FF6D60",
      bgColor: "#FFE5E0",
    },
    {
      title: "Quiz practiced",
      value: 20,
      maxValue: 30,
      text: "20/30",
      icon: <FaBook />, 
      color: "#9C6ADE",
      bgColor: "#EFE4FD",
    },
    {
      title: "Assignment done",
      value: 10,
      maxValue: 15,
      text: "10/15",
      icon: <FaClipboardCheck />, 
      color: "#4285F4",
      bgColor: "#E3EEFD",
    },
  ];
