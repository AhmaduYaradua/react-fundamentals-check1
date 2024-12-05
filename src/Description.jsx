import product from "./product";

// function to display descriptin value exported from product.js
function Description() {
  return (
    <div>
      <h1 className="font-bold text-2xl">{product.description}</h1>
    </div>
  );
}
export default Description;
