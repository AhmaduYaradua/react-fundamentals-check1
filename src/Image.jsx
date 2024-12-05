import product from "./product";

// function to display image value exported from product.js
function Image() {
  return (
    <div>
      <img src={product.imgPath} />
    </div>
  );
}
export default Image;
