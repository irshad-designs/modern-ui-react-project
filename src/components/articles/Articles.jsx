import "./article.css";

const Articles = ({ imgUrl, text, date }) => {
  return (
    <div className="gpt3__articles">
      <div className="gpt3__articles-img">
        <img src={imgUrl} alt="article-img" />
      </div>
      <div className="gpt3__articles-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read more</p>
      </div>
    </div>
  );
};

export default Articles;
