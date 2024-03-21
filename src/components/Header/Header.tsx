import './Header.css';

export function Header({ children }: { children: React.ReactNode }) {
  return <ul className="header">{children}</ul>;
}
