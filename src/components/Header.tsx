export default function Header({ title }: { title: string }) {
  return (
    <div className="header">
      <span className="material-symbols-outlined">menu</span>
      <div className="title">{title}</div>
      <span className="material-symbols-outlined">more_vert</span>
    </div>
  );
}
