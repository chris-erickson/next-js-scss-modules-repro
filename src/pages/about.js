import { green, red } from "./index.module.scss";

const IndexPage = () => {
  return (
    <div>
      <h1 className={green}>Welcome to Next.js!</h1>
      <p className={red}>This is the about page.</p>
    </div>
  );
};

export default IndexPage;
