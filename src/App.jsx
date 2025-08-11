import Header from "./components/Header";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import notes from "./notes";

function App() {
  return (
    <>
      <Header />
      <CreateArea />
      <div className="card-container">
        {notes.map( item => <Notes key={item.key} title={item.title} content={item.content} />)}
      </div>
      <Footer />
    </>
  );
}

export default App;
