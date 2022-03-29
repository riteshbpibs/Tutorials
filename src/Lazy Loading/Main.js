import React, { lazy, Suspense, useState } from "react";

const LazyLoad = lazy(() => import("./LazyLoad"));

function Main() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>Post 1</h3>
      <h3>Post 2</h3>
      <h3>Post 3</h3>
      <div className="">
        <button onClick={() => setShow(!show)}>Toggle Component</button>
      </div>

      <Suspense fallback={<h3>Loading....</h3>}>
        {show && <LazyLoad />}
      </Suspense>
    </div>
  );
}

export default Main;
