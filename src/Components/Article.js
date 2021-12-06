import "./Article.sass";
import Header from "Components/Header"

const Article = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="Article">{children}</div>
    </>
  );
};

export default Article;
