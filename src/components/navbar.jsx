import close from "./img/Vector (3).png";
import msgIcon from "./img/Group 512.svg";
import "./cssFile/navbar.css";

export default function Navbar({openNav}) {
  const navItems = [
    { id: 0, item: "Home", link: "/" },
    { id: 1, item: "About", link: "/about" },
    { id: 2, item: "Donate", link: "/donate" },
    { id: 3, item: "Gallery", link: "/gallery" },
    { id: 4, item: "Projects", link: "/projects" },
    { id: 5, item: "Orphanage homes", link: "/orphanage" },
  ];

  const items = navItems.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.link}>{item.item}</a>
      </li>
    );
  });
  return (
    <nav>
      <img
        src={close}
        alt="close"
        onClick={openNav}
        className="cursor hamburger"
      />
      <ul>
        {items}
      </ul>
      <img src={msgIcon} alt="msgIcon" className="msgIcon" />
    </nav>
  );
}
