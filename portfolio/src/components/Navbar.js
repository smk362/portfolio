const tabs = [
  { id: "home", text: "Home" },
  { id: "about", text: "About Me" },
  { id: "skills", text: "Skills" },
  { id: "projects", text: "Past Projects" },
  { id: "contact", text: "Contact Me" }
];

export default function Navbar() {

  const nav = tabs.map(tab =>
    <button key={tab.id} onClick={() => scrollTo(tab.text)}>
      {tab.text}
    </button>
  );

  function scrollTo(scrollTo) {
    console.log('Scroll to ' + scrollTo);
  }

  return (
    <div>
      {nav}
    </div>
  );
}