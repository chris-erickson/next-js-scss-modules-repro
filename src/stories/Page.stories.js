import About from "../pages/about";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Page/About",
  component: About,
};

export const LoggedOut = () => <About />;
