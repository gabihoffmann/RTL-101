interface ButtonProps {
  children?: React.ReactNode;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export function Button({ label, onClick }: Readonly<ButtonProps>) {
  return (
    <button onClick={onClick}>
      <strong>{label}</strong>
    </button>
  );
}
