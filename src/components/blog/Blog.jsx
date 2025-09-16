import React, { useState } from "react";
import "./Blog.css";
import BlogData from "./BlogData";

const Blog = () => {
  const categories = ["Global Certifications", "Certifications", "Internships", "Digital Badges"];
  const defaultCategory = "Global Certifications";
  const defaultIndex = categories.indexOf(defaultCategory);

  const [items, setItems] = useState(
    BlogData.filter((post) => post.category.includes(defaultCategory))
  );
  const [activeFilter, setActiveFilter] = useState(defaultIndex);

  const filterItems = (category) => {
    const filtered = BlogData.filter((post) =>
      post.category.includes(category)
    );
    setItems(filtered);
  };

  const handleFilterClick = (cat, index) => {
    filterItems(cat);
    setActiveFilter(index);
  };

  // Function to open PDF
  const openPdf = (pdfLink) => {
    window.open(pdfLink, "_blank"); // Opens the PDF in a new tab
  };

  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Certifications</h2>

      <div className="blog__filters">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={activeFilter === index ? "blog__item blog__item-active" : "blog__item"}
            onClick={() => handleFilterClick(cat, index)}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="blog__container grid">
        {items.map((post) => (
          <div className="blog__card" key={post.id}>
            <div className="blog__thumb">
              <a href="#">
                <span className="blog__category">{post.category.join(", ")}</span>
              </a>
              <a href="#">
                <img src={post.image} alt={post.title} className="blog__img" />
              </a>

              {/* PDF Button with onClick handler */}
              <button
                className="blog__pdf-btn"
                onClick={() => openPdf(post.pdf)} // Opens PDF in a new tab
              >
                View PDF
              </button>
            </div>
            <div className="blog__details">
              <h3 className="blog__title">{post.title}</h3>
              <div className="blog__meta">
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
