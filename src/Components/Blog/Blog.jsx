import React from "react";
import "./Blog.css";
// import blog1 from "../../assets/img/blog1.jpg";
// import blog2 from "../../assets/img/blog2.jpg";
// import blog3 from "../../assets/img/blog3.jpg";

const blogPosts = [
  
  {
    id: 1,
    // image: blog1,
    title: "How GEESE Transformed HR for a Top Retail Chain",
    date: "July 10, 2025",
    summary:
      "A deep dive into how we improved HR efficiency and employee engagement by 40% through analytics and coaching.",
  },
  {
    id: 2,
    // image: blog2,
    title: "3 Signs Your Business Needs Strategic Coaching",
    date: "July 1, 2025",
    summary:
      "Are your team and vision misaligned? Here’s how our CEO and Leadership Coaching made the difference.",
  },
  {
    id: 3,
    // image: blog3,
    title: "From Chaos to Clarity: GEESE in Action",
    date: "June 20, 2025",
    summary:
      "A behind-the-scenes view of how we helped a manufacturing giant improve productivity with custom consulting.",
  },
];

const Blog = () => {
  return (
    <>
    <section className="blog-section">
      <h2 className="blog-heading">
         <span>GEESE DESK</span>
      </h2>
      <div className="blog-cards">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            {/* <img src={post.image} alt={post.title} className="blog-img" /> */}
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <a href="#" className="blog-readmore">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="subscribe-section">
  <h3 className="subscribe-heading">Subscribe to GEESE Desk</h3>
  <p className="subscribe-text">Get updates on our latest insights and success stories directly in your inbox.</p>
  
  <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
    <input 
      type="text" 
      placeholder="Your Name" 
      className="subscribe-input" 
      required 
    />
    <input 
      type="email" 
      placeholder="Your Email" 
      className="subscribe-input" 
      required 
    />
    <button 
      type="submit" 
      className="subscribe-button"
    >
      Subscribe
    </button>
  </form>
</div>
</>
  );
};

export default Blog;
