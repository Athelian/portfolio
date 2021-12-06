import Article from "Components/Article";
import "./ArticleEarth.sass";

const ArticleEarth = () => {
  return (
    <Article className="Earth">
      <h2>A Pure CSS 3D Earth</h2>
      <div>
        In this article I will explain how to make a somewhat decent 3D
        depiction of Earth using only Sass. This approach comes with some pretty
        serious drawbacks, although one major advantage is that you can
        technically mould any shape of your choosing to a rotatable sphere.
      </div>
      <h3>Creating the Sphere</h3>
      <div>
        It is literally impossible to create an actual sphere in CSS, due to all
        elements being completely flat. What we can do however is change the 3D{" "}
        <i>position</i> of the elements. Furthermore the browser can perform
        some relatively complicated calculations with regards to the{" "}
        <i>relative</i> 3D positions of such elements.
      </div>
      <div>
        To get started let's create a simple circular div in the center of the
        screen, with nothing particularly special going on.
      </div>
      <div className="Article__Figure earth" />
      <div>
        Now lets insert a rotating layer. It's shaded for clarity, but will later be made completely
        transparent.
      </div>
      <div className="Article__Figure earth">
        <div className="sphere" />
      </div>
      <div>
        Let's add some perspective, the aim is to position elements around this rotating layer in
        3-dimensional space, where they will gradually go behind/in-front of the
        circular background we have created. We can view this effect by informing the browser to preserve 3d-transformations within our .earth div.
      </div>
      <div className="Article__Figure earth earth--perspective">
        <div className="sphere" />
      </div>
    </Article>
  );
};

export default ArticleEarth;
