import './ListItem.css';

type Props = {
  children: React.ReactNode;
  key: React.Key;
};

export function ListItem({ children, key }: Props) {
  return (
    <li className="listitem" key={key}>
      {children}
    </li>
  );
}
