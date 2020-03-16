import { Fragment } from "react";

const Home = () => (
  <Fragment>
    <main>
      <div className="copy">
        <h1>49 FRIENDS</h1>

        <p>We are 49 (+1) friends.</p>

        <p>
          A collaborative party of creatives working to bring the future to you
          one friend at a time.
        </p>

        <p>
          We're bettering ourselves and each other for the good of the planet{" "}
          <span className="globe" /> and our communities.
        </p>

        <p>Join in:</p>

        <p>
          <a href="mailto:doorbell@49friends.party?subject=🚪🛎">
            doorbell@49friends.party
          </a>
        </p>

        <p>
          Find us on <a href="https://www.are.na/49friends-party">Are.na</a>.
        </p>
      </div>
    </main>

    <footer>
      <p>© 2020</p>
    </footer>
  </Fragment>
);

export default Home;
