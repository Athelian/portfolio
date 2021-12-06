import Article from "Components/Article";
import "./ArticleEarth.sass"

const ArticleEarth = () => {
  return (
    <Article className="Earth">
      <h2>A Pure CSS 3D Earth</h2>
      <div>
        In this article I will explain how to make a somewhat decent 3D
        depiction of Earth using only Sass. This approach comes with some
        pretty serious drawbacks, although one major advantage is that you can
        technically mould any shape of your choosing to a rotatable sphere.
      </div>
      <h3>Creating the Sphere</h3>
      <div>
        It is literally impossible to create an actual sphere in CSS, due all elements being completely flat. What we can do
        however is change the 3D <i>position</i> of the elements. Furthermore the
        browser can perform some relatively complicated calculations with
        regards to the <i>relative</i> 3D positions of such elements.
      </div>
      <div>
        To get started let's create a simple circular div in the center of the screen, with nothing particularly special going on.
      </div>
      <div className="Article__Figure Earth--Base" />
      <div>
        Next let's add some perspective, and something rotating inside of it.
      </div>
        <div className="Article__Figure Earth--Base">
          <div className="Spherex"/>
        </div>
    </Article>
  );
};

export default ArticleEarth;
