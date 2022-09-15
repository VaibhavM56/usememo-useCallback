import React from "react";

const Title = () => {
  console.log("rendering the title component");
  return <div>Title</div>;
};

export default React.memo(Title);

//memo method from react will male components pure which means
//this particular component will be re-rendered only if there is any prop change or stae change in this component
