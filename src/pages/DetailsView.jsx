import styled from "styled-components";
import "./App.css";

const DetailView = () => {
  return (
    <div>
      <header>
        <div className="flexcontainer">
          <div>Arrow</div>
          <div>Toogle</div>
        </div>
        <div>
          <div>Play button</div>
          <p>Play Trailer</p>
        </div>
      </header>
      <main>
        <div className="flexcontainer">
          <h3>Spiderman: No Way Home</h3>
          <div>Bookmark</div>
        </div>
        <section>
          <div>icon</div>
          <p>9.1/10IMDb</p>
        </section>
        <section>
          <p>Action</p>
          <p>Adventure</p>
          <p>fantasy</p>
        </section>
        <section>
          <div>
            <p>Length</p>
            <p>2h 28min</p>
          </div>
          <div>
            <p>Language</p>
            <p>English</p>
          </div>
          <div>
            <p>Rating</p>
            <p>PG-13</p>
          </div>
        </section>
        <article>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            cumque, molestias error quisquam maiores asperiores provident
            assumenda? Voluptates eius, voluptatibus dolorem corporis eos
            obcaecati reprehenderit vero velit impedit modi iste harum inventore
            libero accusantium magni quae dolores iusto. Minus, ad. Quae, eum
            ipsum dolorum eligendi fugiat nesciunt molestias quibusdam enim
            veritatis! Temporibus tempora dolor debitis? Maiores ullam quisquam
            quis dicta ducimus enim, quidem officiis natus consequatur ipsum,
            sit dolor aliquid, corporis fugiat iste vero tempora culpa ea id
            itaque maxime. Officiis placeat totam a illo laudantium deleniti
            possimus sed aliquid, expedita quisquam et quo nihil omnis laborum
            vero accusantium optio?
          </p>
        </article>
        <section>
          <div>
            <h2>Cast</h2>
            <button></button>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailView;
