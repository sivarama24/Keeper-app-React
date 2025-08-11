import Header from "./components/Header";
import Notes from "./components/Notes";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    const { title, content } = newNote;
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <>
      <Header />
      <CreateArea onClicked={addNote} />
      <div className="card-container">
        {notes.map((item, index) => (
          <Notes key={index} title={item.title} content={item.content} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
