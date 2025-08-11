function Notes( { title, content } ) {
  return (
    <div className="notes">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Notes;
