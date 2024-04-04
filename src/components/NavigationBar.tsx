export default function NavigationBar() {
  return (
    <nav className="z-50 sticky top-0 flex items-center bg-atom-blue-20 h-16 justify-left p-[1rem] gap-[2rem]">
      <Logo />
      {PageLink("Главная", "https://example.com")}
      {PageLink("Отчет", "https://youtube.com")}
      {PageLink("Папки обмена", "https://www.youtube.com/watch?v=EzkUe9FzPQk")}
    </nav>
  );
}

function Logo() {
  return <img src="/РЧГ2023.png" alt="Росатом человек года" />;
}

function PageLink(name: string, url: string) {
  return (
    <div className="flex flex-row">
      <a href={url} className="items-center p-8 justify-center text-atom-gold">
        {name}
      </a>
    </div>
  );
}
