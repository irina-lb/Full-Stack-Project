function Layout({ title, text, img }) {
  return (
    <div className="container">
      <div className="description">
        <div className="descriptionText">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <img src={img} alt="Ups.." />
      </div>
    </div>
  );
}

export default Layout;
