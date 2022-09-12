import "./categories.style.scss";
const categories = [
  {
    id: 1,
    title: "Hats",
  },
  {
    id: 2,
    title: "Jackets",
  },
  {
    id: 3,
    title: "Sneakers",
  },
  {
    id: 4,
    title: "Womens",
  },
  {
    id: 5,
    title: "Mens",
  },
];

function App() {
  return (
    <div className="container">
      <div className="container--categories grid grid--3-cols">
        {categories.map((el) => (
          <div className="container--category">
            <div className="background-image" />
            <div className="container--category-body">
              <h2>{el.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
