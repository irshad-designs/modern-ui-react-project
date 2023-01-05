import { Articles } from "../../components";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";

import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Articles
            imgUrl={blog1}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Articles
            imgUrl={blog2}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
          />
          <Articles
            imgUrl={blog3}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
          />
          <Articles
            imgUrl={blog4}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
          />
          <Articles
            imgUrl={blog5}
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
