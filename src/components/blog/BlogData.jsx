// src/components/Blog/BlogData.js

import Image1 from "../../assets/c1.png";
import Image2 from "../../assets/c2.png";
import Image3 from "../../assets/c3.png";
import Image4 from "../../assets/c4.png";
import Image5 from "../../assets/c5.png";
import Npt1 from "../../assets/n1.png";
import Redhat from "../../assets/r1.png"
import Int from "../../assets/i2.png"
import bad from "../../assets/b1.png"

//pdfs
import node from "../../assets/infoNoDEJS.pdf";
import java from "../../assets/java.pdf";
import cc from "../../assets/CC.pdf"
import py from "../../assets/pythonIT.pdf"
import RH from "../../assets/Red_Hat.pdf"
import py1 from "../../assets/python.pdf"
import c from "../../assets/C lang.pdf"
import intern from "../../assets/intern.pdf"





const BlogData = [
  {
    id: 1,
    category: ["Global Certifications"],
    image: Image2,
    title: "Python Certifaction",
    date: "10 Jan, 2023",
    pdf: py
  },
  {
    id: 2,
    category: ["Global Certifications"],
    image: Image3,
    title: "Java Certification",
    date: "10 Jan, 2024",
    pdf: java
  },
  {
    id: 3,
    category: ["Global Certifications"],
    image: Redhat,
    title: "RHCSA",
    date: "June, 2024",
    pdf: RH
  },
  {
    id: 4,
    category: ["Global Certifications"],
    image: Npt1,
    title: "Cloud Computing Certification",
    date: "10 Jan, 2023",
    pdf: cc
  },
  {
    id: 5,
    category: ["Internships"],
    image: Int,
    title: "Frontend Internship",
    date: "12 Feb, 2024",
    pdf: intern
  },
  {
    id: 6,
    category: ["Digital Badges"],
    image: bad,
    title: "Live Project Badge",
    date: "Feb, 2025",
    pdf: bad
  },
  {
    id: 7,
    category: ["Certifications"],
    image: Image5,
    title: "Python Certification",
    date: "5 Apr, 2024",
    pdf: py1
  },
  {
    id: 8,
    category: ["Certifications"],
    image: Image4,
    title: "Node.JS Certification",
    date: "5 Apr, 2023",
    pdf: node
  },
   {
    id: 9,
    category: ["Certifications"],
    image: Image1,
    title: "C Certification",
    date: "5 Apr, 2024",
    author: "Tom",
    pdf: c
  },
];

export default BlogData;
