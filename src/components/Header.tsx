import "./Header.css";

interface HeaderProps {
  user: string;
}

function Header({ user }: HeaderProps) {
  return (
    <div className="header">
      <h1 className="title">Ice Cream Wars</h1>
      <p>Welcome {user}</p>
    </div>
  );
}

export default Header;
