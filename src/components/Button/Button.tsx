import './Button.css';

type Props = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
};

export function Button({ children, className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
