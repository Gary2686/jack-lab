/* =============================================================================
 * app.jsx — 路由切換與掛載 / Router switch and mount
 * 新增頁面：在 site.js 的 nav 增加項目，並在 pages.jsx 的 JL.pages 加入對應元件。
 * Add a page: add a nav entry in site.js and a component in JL.pages (pages.jsx).
 * ========================================================================== */
(function () {
  function App() {
    const route = JL.useRoute();
    const pages = JL.pages;
    const section = route.section || "home";
    const Page = pages[section] || pages.notFound;
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <JL.Navbar />
        <main className="flex-1">
          <Page route={route} />
        </main>
        <JL.Footer />
        <JL.BackToTop />
      </div>
    );
  }

  const mount = document.getElementById("root");
  const root = ReactDOM.createRoot(mount);
  root.render(
    <JL.LangProvider>
      <App />
    </JL.LangProvider>
  );
})();
