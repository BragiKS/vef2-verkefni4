import './List.css';

type Props = {
  children: React.ReactNode;
};

export function List({ children }: Props) {
  return <ul className="list">{children}</ul>;
}
