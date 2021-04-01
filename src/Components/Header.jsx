import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="yellow delivery logo" class="logo" />
    </header>
  );
}