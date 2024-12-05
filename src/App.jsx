// Components imports
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";

// Card component import from ant design library
import { Card } from "antd";
// product oobject import
import product from "./product";
// react useState
import { useState } from "react";

function App() {
  // ant design default
  const { Meta } = Card;

  // variable decleration using state
  const [username, setUsername] = useState("Ahmad");
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center mt-10">
        {/* Use of ant design card component to display my components */}
        <Card
          className="grid"
          hoverable
          style={{
            width: 500,
            height: 500,
          }}
          cover={<img alt="example" src={product.imgPath} />}
        >
          <Meta title={<Name />} description={<Description />} />
          <h1 className="text-xl mt-2">{<Price />}</h1>
        </Card>
        {/* condition to view image and name if variable value is given */}
        {username.length > 0 ? (
          <div className="flex justify-center gap-5">
            <img
              className="w-32"
              alt="car"
              src="https://i.pinimg.com/originals/f8/02/4a/f8024add93c5cd4f3a6e0fd0c3c127bc.png"
            />
            <h1 className="mt-9">{`Hello ${username}`}</h1>
          </div>
        ) : (
          <h1>{`Hello there`}</h1>
        )}
      </div>
    </>
  );
}

export default App;
