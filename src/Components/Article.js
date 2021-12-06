import "./Article.sass";
import Header from "Components/Header"
import Links from "./Links";

const Article = (props) => {
  const { children } = props;
  return (
    <div className="Article">
      <Header />
      <div className="Article__Body">{children}</div>
      <Links/>
    </div>
  );
};

export default Article;
