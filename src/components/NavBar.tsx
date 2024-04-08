export default function NavBar2(notificationAmount: number, userFullName: string, userRole: string) {
    return (
        <>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke="#c0a96e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{PageLink("Главная", "https://example.com")}</li>
                            <li>{PageLink("Отчеты", "https://example.com")}</li>
                            <li>{PageLink("Папка обмена", "https://example.com")}</li>
                        </ul>
                    </div>
                    <Logo />
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-3">
                            <li>{PageLink("Главная", "https://example.com")}</li>
                            <li>{PageLink("Отчеты", "https://example.com")}</li>
                            <li>{PageLink("Папка обмена", "https://example.com")}</li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <HelpIcon />
                    {NotificationIcon(notificationAmount)}
                    {WhoIAm(userFullName, userRole)}
                </div>
            </nav>
        </>
    );
}

function WhoIAm(login: string, role: string) {
    return (
        <div className="pl-8">
            <p className="text-atom-gold font-bold">{login}</p>
            <p className="text-atom-gold">{role}</p>
        </div>
    );
}

function HelpIcon() {
    return (
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#c0a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button >
    );
}

function NotificationIcon(amout: number) {
    return (
        <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19"
                        stroke="#c0a96e" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                {amout !== 0 && <span className="badge badge-xs indicator-item bg-blue-600">{amout}</span>}
            </div>
        </button>
    );
}

function Logo() {
    return <img src="/РЧГ2023.png" alt="Росатом человек года" />;
}

function PageLink(name: string, url: string) {
    return (
        <a
            href={url}
            className="text-atom-gold font-bold"
        >
            {name}
        </a>
    );
}