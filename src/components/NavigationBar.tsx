export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-start gap-8 bg-atom-blue-20 p-4 m-2">
      <Logo />
      {PageLink("Главная", "https://example.com")}
      {PageLink("Отчеты", "https://youtube.com")}
      {PageLink("Папки обмена", "https://www.youtube.com/watch?v=EzkUe9FzPQk")}
      <div />
      <div className="flex flex-row"></div>
    </nav>
  );
}

function Logo() {
  return <img src="/РЧГ2023.png" alt="Росатом человек года" />;
}

function PageLink(name: string, url: string) {
  return (
    <div className="flex flex-row">
      <a
        href={url}
        className="items-center justify-center p-2 text-atom-gold font-bold"
      >
        {name}
      </a>
    </div>
  );
}
