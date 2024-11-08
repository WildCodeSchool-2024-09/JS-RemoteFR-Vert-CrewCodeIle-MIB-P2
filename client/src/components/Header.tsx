export default function Header() {
  return (
    <header>
      <img
        src="/src/assets/images/logoMIBnews.webp"
        alt="logo MIB News"
        className="logo"
      />
      <div className="titlebtn">
        <h1>M.I.B News</h1>
        <button type="button" className="favoris">
          ❤️Favoris
        </button>
      </div>
    </header>
  );
}
