/* =============================================================================
 * core.jsx — 全站核心：語言切換、雜湊路由、共用 hooks
 * Core: i18n (zh/en) context, hash router, shared hooks. Exposed on window.JL.
 * ========================================================================== */
window.JL = window.JL || {};

(function () {
  const { createContext, useContext, useState, useEffect, useCallback } = React;

  /* ----------------------------- 語言 / i18n ----------------------------- */
  const LangContext = createContext({ lang: "zh", setLang: function () {} });

  function LangProvider(props) {
    const [lang, setLangState] = useState(function () {
      try { return localStorage.getItem("jacklab_lang") || "zh"; } catch (e) { return "zh"; }
    });
    const setLang = useCallback(function (l) {
      setLangState(l);
      try { localStorage.setItem("jacklab_lang", l); } catch (e) {}
      document.documentElement.lang = l === "zh" ? "zh-Hant" : "en";
    }, []);
    useEffect(function () {
      document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    }, [lang]);
    return <LangContext.Provider value={{ lang: lang, setLang: setLang }}>{props.children}</LangContext.Provider>;
  }

  // useLang() → { lang, setLang, t }
  // t(obj) 取出目前語言字串；傳入字串則原樣回傳；缺漏時回退另一語言。
  function useLang() {
    const ctx = useContext(LangContext);
    const lang = ctx.lang;
    const t = useCallback(function (obj) {
      if (obj == null) return "";
      if (typeof obj === "string") return obj;
      if (obj[lang] != null) return obj[lang];
      if (obj.zh != null) return obj.zh;
      if (obj.en != null) return obj.en;
      return "";
    }, [lang]);
    return { lang: lang, setLang: ctx.setLang, t: t };
  }

  /* ---------------------------- 路由 / Router ---------------------------- */
  function parseHash() {
    let h = window.location.hash || "#/";
    if (h.charAt(0) === "#") h = h.slice(1);
    if (h.charAt(0) !== "/") h = "/" + h;
    const pathPart = h.split("?")[0];
    const parts = pathPart.split("/").filter(Boolean); // ['research','neuro']
    return { path: pathPart, parts: parts, section: parts[0] || "home", sub: parts[1] || null };
  }

  function useRoute() {
    const [route, setRoute] = useState(parseHash);
    useEffect(function () {
      function onHash() {
        setRoute(parseHash());
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      window.addEventListener("hashchange", onHash);
      return function () { window.removeEventListener("hashchange", onHash); };
    }, []);
    return route;
  }

  function navigate(to) {
    if (!to) to = "/";
    if (to.charAt(0) !== "#") to = "#" + (to.charAt(0) === "/" ? to : "/" + to);
    if (window.location.hash === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = to;
    }
  }

  /* ------------------------- 進場動畫 / Reveal hook ----------------------- */
  // 回傳 [ref, shown]；元素進入視窗時 shown=true。Returns [ref, shown].
  function useReveal(options) {
    const { useRef } = React;
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(function () {
      const el = ref.current;
      if (!el) return;
      if (!("IntersectionObserver" in window)) { setShown(true); return; }
      const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { setShown(true); obs.unobserve(entry.target); }
        });
      }, options || { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      obs.observe(el);
      return function () { obs.disconnect(); };
    }, []);
    return [ref, shown];
  }

  /* ------------------------------ 小工具 / utils ------------------------- */
  function cx() {
    return Array.prototype.slice.call(arguments).filter(Boolean).join(" ");
  }

  JL.LangContext = LangContext;
  JL.LangProvider = LangProvider;
  JL.useLang = useLang;
  JL.useRoute = useRoute;
  JL.navigate = navigate;
  JL.useReveal = useReveal;
  JL.cx = cx;
})();
