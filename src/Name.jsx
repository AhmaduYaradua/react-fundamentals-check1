import product from "./product";

// function to display name value exported from product.js
function Name() {
  return (
    <div className="text-gray-400 text-5xl">
      <h1>{product.name}</h1>
    </div>
  );
}
export default Name;
