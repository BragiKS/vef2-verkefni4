import './List.css';

type Props = {
  children: React.ReactNode;
  key: React.Key;
};

export function List({ children, key }: Props) {
  return (
    <li className="list" key={key}>
      {children}
    </li>
  );
}
