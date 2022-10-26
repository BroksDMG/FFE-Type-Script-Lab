import { FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./componenst/Routes/Home/home";
import { Posts } from "./componenst/Routes/Posts/posts"
import { GlobalStyle } from "./componenst/style/global";
import { Layout } from "./componenst/Common/layout";
import { Nav } from "./componenst/Common/nav";

export const App: FC = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Nav/>
      <Layout>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route index element={<Home />} />
      </Routes>
      </Layout>
      <div>
        <Link to="posts">Posts</Link>
        <Link to="/">Home</Link>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
