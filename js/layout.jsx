/* =============================================================================
 * layout.jsx — Navbar（固定、響應式、漢堡選單）＋ Footer（含版權）
 * Navbar (sticky, responsive, hamburger) + Footer (with copyright). on window.JL
 * ========================================================================== */
window.JL = window.JL || {};

(function () {
  const { useState, useEffect } = React;
  const cx = JL.cx;
  const Icon = JL.Icon;
  const Button = JL.Button;
  const LanguageToggle = JL.LanguageToggle;
  const navigate = JL.navigate;

  function Logo(props) {
    const ctx = JL.useLang();
    const site = window.DATA.site;
    return (
      <button type="button" onClick={function () { navigate("/"); }}
        className="flex items-center gap-3 group" aria-label="Jack Lab home">
        <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-navy text-white font-extrabold text-lg shadow-md shadow-brand-600/30 group-hover:scale-105 transition-transform">
          JL
        </span>
        <span className="text-left leading-tight">
          <span className="block font-extrabold text-navy tracking-tight">{ctx.t(site.brand.short)}</span>
          <span className={cx("block text-slate-400", props.compact ? "text-[10px]" : "text-[11px]")}>{ctx.t(site.brand.orgShort)}</span>
        </span>
      </button>
    );
  }

  function Navbar() {
    const ctx = JL.useLang();
    const route = JL.useRoute();
    const site = window.DATA.site;
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(function () {
      function onScroll() { setScrolled(window.scrollY > 8); }
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return function () { window.removeEventListener("scroll", onScroll); };
    }, []);

    // 路由改變時關閉手機選單 / close mobile menu on route change
    useEffect(function () { setOpen(false); }, [route.path]);

    const activeId = route.section === "tools" ? "research" : route.section;

    function go(path) { navigate(path); setOpen(false); }

    return (
      <header className={cx("sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white/70 backdrop-blur-sm border-b border-transparent")}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-3">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {site.nav.map(function (item) {
                const active = item.id === activeId;
                return (
                  <button key={item.id} type="button" onClick={function () { go(item.path); }}
                    className={cx("relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      active ? "text-brand-700" : "text-slate-600 hover:text-brand-700 hover:bg-brand-50/60")}>
                    {ctx.t(item.label)}
                    {active ? <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500" /> : null}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageToggle />
              <button type="button" onClick={function () { setOpen(!open); }}
                className="lg:hidden grid place-items-center h-10 w-10 rounded-lg text-slate-600 hover:bg-slate-100"
                aria-label="Menu" aria-expanded={open}>
                <Icon name={open ? "close" : "menu"} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={cx("lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0 pointer-events-none")}>
          <nav className="mx-auto max-w-7xl px-4 py-3 grid gap-1">
            {site.nav.map(function (item) {
              const active = item.id === activeId;
              return (
                <button key={item.id} type="button" onClick={function () { go(item.path); }}
                  className={cx("flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors",
                    active ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50")}>
                  {ctx.t(item.label)}
                  <Icon name="chevronRight" size={18} className={active ? "text-brand-500" : "text-slate-300"} />
                </button>
              );
            })}
          </nav>
        </div>
      </header>
    );
  }

  function Footer() {
    const ctx = JL.useLang();
    const site = window.DATA.site;
    const year = new Date().getFullYear();
    return (
      <footer className="mt-20 bg-navy text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/10 text-white font-extrabold">JL</span>
              <div className="leading-tight">
                <div className="font-bold text-white">{ctx.t(site.brand.short)}</div>
                <div className="text-xs text-slate-400">{ctx.t(site.brand.org)}</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{ctx.t(site.footer.note)}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{ctx.t(site.footer.quickLinksTitle)}</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-sm">
              {site.nav.map(function (item) {
                return (
                  <li key={item.id}>
                    <button type="button" onClick={function () { navigate(item.path); }}
                      className="text-slate-400 hover:text-white transition-colors">{ctx.t(item.label)}</button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{ctx.t(site.footer.contactTitle)}</h3>
            <p className="text-sm text-slate-400 leading-relaxed flex items-start gap-2">
              <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-slate-500" />
              <span>{ctx.t(site.footer.address)}</span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <span>{ctx.t(site.footer.copyright)}</span>
            <span className="text-slate-500">© {year} Jack Lab · NSYSU</span>
          </div>
        </div>
      </footer>
    );
  }

  JL.Navbar = Navbar;
  JL.Footer = Footer;
  JL.Logo = Logo;
})();
