import { Bell, CircleHelp } from "lucide-react";
import { Button } from "./ui/button";

export default function NavBar(userFullName: string, userRole: string) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Logo />
            </a>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              {PageLink("Главная", "/")}
              {PageLink("Заявки", "/requests")}
              {PageLink("Номинанты", "/")}
              {PageLink("Номинации", "/nominations")}
              {PageLink("Критерии", "/")}
              {PageLink("Справка", "/")}
              {PageLink("Папка обмена", "/")}
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <HelpIcon />
              <NotificationIcon />
              {WhoIAm(userFullName, userRole)}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

function WhoIAm(login: string, role: string) {
  return (
    <div className="pl-8">
      <p className="font-bold text-foreground">{login}</p>
      <p className="text-foreground">{role}</p>
    </div>
  );
}

function HelpIcon() {
  return (
    <Button className="rounded-full" variant="ghost" size="icon">
      <CircleHelp />
    </Button>
  );
}

function NotificationIcon() {
  return (
    <Button className="rounded-full" variant="ghost" size="icon">
      <Bell />
    </Button>
  );
}

function Logo() {
  return <img src="/header-logo.svg" alt="Росатом человек года" />;
}

function PageLink(name: string, url: string) {
  return (
    <a
      className="font-bold text-foreground transition-colors hover:text-foreground/80"
      href={url}
    >
      {name}
    </a>
  );
}
