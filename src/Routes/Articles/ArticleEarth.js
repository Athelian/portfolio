import Article from "Components/Article";

const ArticleEarth = () => {
  return (
    <Article>
      <h2>A Pure CSS 3D Earth</h2>
      <div>
        In this article I will explain how to make a somewhat decent 3D
        depiction of Earth using only Sass. This approach comes with some quite
        serious drawbacks and are discussed along the way, although you can
        technically mould any shape of your choosing to a rotatable sphere.
      </div>
      <div>
        Sass allows us to generate many lines of CSS calculated from simple
        geometric formulae and this method is almost impossible without it.
      </div>
    </Article>
  );
};

export default ArticleEarth;
