import "./Article.sass";
import Header from "Components/Header"
import Links from "./Links";

const Article = (props) => {
  const { children, className } = props;
  return (
    <div className={`Article Article__${className}`}>
      <Header />
      <div className="Article__Body">{children}</div>
      <Links/>
    </div>
  );
};

export default Article;
