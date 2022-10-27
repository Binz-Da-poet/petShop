import "./dogs.css";
import DogCart from "./DogCard";
function Dogs(props) {
  const { allDogs } = props;
  return (
    <>
      <section className="dogs-container">
        {allDogs.map((dog, index) => {
          return (
            <div key={dog.id}>
              <DogCart
                id={dog.id}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                price={dog.price}
                imageUrl={dog.imageUrl}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Dogs;
