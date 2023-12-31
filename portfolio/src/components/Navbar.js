import '../style.css'

const tabs = [
  { id: "home", text: "Home" },
  { id: "about", text: "About Me" },
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Past Projects" }
];

export default function Navbar() {

  const nav = tabs.map(tab =>
    <button key={tab.id} onClick={() => scrollTo(tab.id)}>
      {tab.text}
    </button>
  );

  function scrollTo(scrollTo) {
    var element = document.getElementById(scrollTo);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="nav"
      style={{
        position: "sticky",
        top: 0,
      }}
    >
      {nav}
    </div>
  );
}