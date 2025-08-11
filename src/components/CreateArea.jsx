import { useState } from "react";

function CreateArea({ onClicked }) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onClicked(newNote);
            setNewNote(() => {
              return { title: "", content: "" };
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
