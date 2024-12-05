import product from "./product";

// function to display price value exported from product.js
function Price() {
  return (
    <div>
      <h1>{product.price}</h1>
    </div>
  );
}
export default Price;
