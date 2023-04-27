import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      />
    </div>
  );
}

export default App;
