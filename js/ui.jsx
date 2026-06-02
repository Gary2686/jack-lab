/* =============================================================================
 * ui.jsx — 可重複使用的視覺元件 / Reusable UI components (on window.JL)
 * Icon, Avatar, Card, SectionHeading, Pill, Tag, Button, Badge,
 * LanguageToggle, BackToTop, Reveal, ImagePlaceholder, TOOL_COLORS
 * ========================================================================== */
window.JL = window.JL || {};

(function () {
  const { useState, useEffect, useRef } = React;
  const cx = JL.cx;
  const useLang = JL.useLang;
  const navigate = JL.navigate;

  /* ------------------------------- Icons ------------------------------- */
  const ICONS = {
    home: '<path d="M3 9.5 12 3l9 6.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    users: '<path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"/><circle cx="9" cy="8" r="3.2"/><path d="M22 19v-1a4 4 0 0 0-3-3.8"/><path d="M15.5 4.3A3.2 3.2 0 0 1 16 11"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    flask: '<path d="M9 3h6"/><path d="M10 3v6l-5.2 9A1.6 1.6 0 0 0 6.2 21h11.6a1.6 1.6 0 0 0 1.4-3l-5.2-9V3"/><path d="M7.3 15h9.4"/>',
    doc: '<path d="M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/>',
    award: '<circle cx="12" cy="9" r="5"/><path d="M9 13.4 8 21l4-2 4 2-1-7.6"/>',
    news: '<rect x="3" y="5" width="14" height="15" rx="1.6"/><path d="M17 8h2.5A1.5 1.5 0 0 1 21 9.5V18a2 2 0 0 1-2 2"/><path d="M6 9h7"/><path d="M6 13h7"/><path d="M6 17h4"/>',
    activity: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="1.6"/><rect x="9.5" y="9.5" width="5" height="5" rx=".6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
    brain: '<path d="M9.5 5A3 3 0 0 0 7 9.3 3 3 0 0 0 6 15a3 3 0 0 0 3.5 3.8"/><path d="M14.5 5A3 3 0 0 1 17 9.3 3 3 0 0 1 18 15a3 3 0 0 1-3.5 3.8"/><path d="M12 4.5v15"/>',
    shield: '<path d="M12 3 20 6v5.5c0 4.6-3.2 8.1-8 9.5-4.8-1.4-8-4.9-8-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
    bot: '<rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 7V4"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="12" r="1.4"/><circle cx="15" cy="12" r="1.4"/><path d="M10 16h4"/><path d="M3 11h2M19 11h2"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="1.6"/><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"/><path d="M3 12h18"/>',
    diagram: '<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M7.7 7.7 10.7 15.8M16.3 7.7 13.3 15.8M8.4 6h7.2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    scholar: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11.2V16c0 1.1 2.7 2.6 6 2.6s6-1.5 6-2.6v-4.8"/><path d="M22 9v5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 3.9 5.8 3.9 9S14.6 18.4 12 21c-2.6-2.6-3.9-5.8-3.9-9S9.4 5.6 12 3z"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4 10.5 13.5"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    close: '<path d="M6 6 18 18M18 6 6 18"/>',
    arrowUp: '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
    download: '<path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    chevronRight: '<path d="m9 6 6 6-6 6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    tag: '<path d="M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-7.5 7.5z"/><circle cx="7.3" cy="7.3" r="1.2"/>',
    pin: '<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    sparkles: '<path d="M12 3l1.7 4.5L18 9l-4.3 1.5L12 15l-1.7-4.5L6 9l4.3-1.5z"/><path d="M18 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    link: '<path d="M10 13a4 4 0 0 0 5.7.4l3-3a4 4 0 0 0-5.7-5.7L11 6"/><path d="M14 11a4 4 0 0 0-5.7-.4l-3 3a4 4 0 0 0 5.7 5.7L13 18"/>',
    share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.9 7.6-3.7M8.2 13.1l7.6 3.7"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 3v4M16 3v4"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    trendingUp: '<path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/>',
    barChart: '<path d="M3 21h18"/><rect x="5" y="11" width="3" height="7" rx=".4"/><rect x="10.5" y="6" width="3" height="12" rx=".4"/><rect x="16" y="13" width="3" height="5" rx=".4"/>',
    scale: '<path d="M12 3v18"/><path d="M6 7h12"/><path d="M6 7 3 13a3 3 0 0 0 6 0z"/><path d="M18 7l-3 6a3 3 0 0 0 6 0z"/><path d="M8 21h8"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    dot: '<circle cx="12" cy="12" r="3"/>',
    quote: '<path d="M7 7h4v6a4 4 0 0 1-4 4"/><path d="M14 7h4v6a4 4 0 0 1-4 4"/>',
  };

  function Icon(props) {
    const inner = ICONS[props.name] || ICONS.dot;
    const s = props.size || 24;
    return (
      <svg className={props.className} width={s} height={s} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={props.strokeWidth || 1.8} strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: inner }} />
    );
  }

  /* --------------------- 分類顏色 / Category colors -------------------- */
  // 完整字面 class，確保 Tailwind 正確產生 / explicit classes for the CDN JIT.
  const TOOL_COLORS = {
    blue:   { soft: "bg-blue-50",   text: "text-blue-700",   ring: "ring-blue-200",   dot: "bg-blue-500",   chip: "bg-blue-50 text-blue-700",   icon: "bg-blue-100 text-blue-700" },
    indigo: { soft: "bg-indigo-50", text: "text-indigo-700", ring: "ring-indigo-200", dot: "bg-indigo-500", chip: "bg-indigo-50 text-indigo-700", icon: "bg-indigo-100 text-indigo-700" },
    sky:    { soft: "bg-sky-50",    text: "text-sky-700",    ring: "ring-sky-200",    dot: "bg-sky-500",    chip: "bg-sky-50 text-sky-700",    icon: "bg-sky-100 text-sky-700" },
    emerald:{ soft: "bg-emerald-50",text: "text-emerald-700",ring: "ring-emerald-200",dot: "bg-emerald-500",chip: "bg-emerald-50 text-emerald-700",icon: "bg-emerald-100 text-emerald-700" },
    teal:   { soft: "bg-teal-50",   text: "text-teal-700",   ring: "ring-teal-200",   dot: "bg-teal-500",   chip: "bg-teal-50 text-teal-700",   icon: "bg-teal-100 text-teal-700" },
    amber:  { soft: "bg-amber-50",  text: "text-amber-700",  ring: "ring-amber-200",  dot: "bg-amber-500",  chip: "bg-amber-50 text-amber-700",  icon: "bg-amber-100 text-amber-700" },
    violet: { soft: "bg-violet-50", text: "text-violet-700", ring: "ring-violet-200", dot: "bg-violet-500", chip: "bg-violet-50 text-violet-700", icon: "bg-violet-100 text-violet-700" },
  };
  function toolColor(key) { return TOOL_COLORS[key] || TOOL_COLORS.blue; }

  /* ------------------------------ Avatar ------------------------------- */
  // 支援 position prop：未指定 → 預設 center（瀏覽器原生行為）；
  // "top"/"bottom"/"<N>%"/"<N>% <N>%" → 設定 object-position，讓肖像照不會切到頭
  function Avatar(props) {
    const size = props.size || 96;
    const style = { width: size, height: size };
    if (props.position) {
      const p = props.position;
      style.objectPosition = p === "top" ? "50% 0%"
                           : p === "bottom" ? "50% 100%"
                           : p === "center" ? "50% 50%"
                           : typeof p === "string" && /^\d+%$/.test(p) ? "50% " + p
                           : p;
    }
    if (props.photo) {
      return <img src={props.photo} alt={props.name || ""} style={style}
        className={cx("shrink-0 rounded-full object-cover ring-4 ring-white shadow-md", props.className)} />;
    }
    return (
      <div style={style}
        className={cx("shrink-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400 grid place-items-center ring-4 ring-white shadow-md", props.className)}
        aria-label={props.name || "placeholder"}>
        <Icon name="user" size={Math.round(size * 0.5)} strokeWidth={1.5} />
      </div>
    );
  }

  /* ------------------------------- Card -------------------------------- */
  function Card(props) {
    const { children, className, onClick, hover, ...rest } = props;
    const clickable = !!onClick;
    return (
      <div {...rest} onClick={onClick}
        className={cx(
          "bg-white rounded-2xl border border-slate-100 shadow-sm",
          (hover !== false) && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          clickable && "cursor-pointer",
          className
        )}>
        {children}
      </div>
    );
  }

  /* --------------------------- SectionHeading -------------------------- */
  function SectionHeading(props) {
    return (
      <div className={cx(props.center ? "text-center mx-auto" : "", "max-w-2xl mb-10", props.center && "mx-auto")}>
        {props.eyebrow ? (
          <div className={cx("inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-brand-600 mb-3", props.center && "justify-center")}>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />{props.eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">{props.title}</h2>
        {props.subtitle ? <p className="mt-3 text-slate-500 leading-relaxed">{props.subtitle}</p> : null}
      </div>
    );
  }

  /* ----------------------------- Pill / Tag ---------------------------- */
  function Pill(props) {
    return (
      <span className={cx("inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium",
        props.className || "bg-brand-50 text-brand-700")}>
        {props.children}
      </span>
    );
  }

  function Tag(props) {
    return (
      <button type={props.onClick ? "button" : undefined} onClick={props.onClick}
        className={cx("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors",
          props.active ? "bg-brand-600 text-white shadow-sm"
                       : "bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-700",
          props.onClick && "cursor-pointer")}>
        {props.children}
      </button>
    );
  }

  /* ------------------------------ Button ------------------------------- */
  function Button(props) {
    const variants = {
      primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20",
      secondary: "bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:bg-brand-50",
      ghost: "text-brand-700 hover:bg-brand-50",
      navy: "bg-navy text-white hover:bg-navy/90",
    };
    const cls = cx(
      "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
      variants[props.variant || "primary"], props.className
    );
    const content = (
      <React.Fragment>
        {props.icon ? <Icon name={props.icon} size={18} /> : null}
        {props.children}
        {props.iconRight ? <Icon name={props.iconRight} size={18} /> : null}
      </React.Fragment>
    );
    if (props.href) {
      return <a href={props.href} target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined} className={cls}>{content}</a>;
    }
    if (props.to) {
      return <button type="button" className={cls} onClick={function () { navigate(props.to); }}>{content}</button>;
    }
    return <button type="button" className={cls} onClick={props.onClick}>{content}</button>;
  }

  /* ------------------------ LanguageToggle ----------------------------- */
  function LanguageToggle(props) {
    const ctx = useLang();
    const next = ctx.lang === "zh" ? "en" : "zh";
    const label = ctx.lang === "zh" ? "EN" : "中";
    return (
      <button type="button" onClick={function () { ctx.setLang(next); }}
        className={cx("inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-600 hover:border-brand-300 hover:text-brand-700 transition-colors", props.className)}
        aria-label="Switch language">
        <Icon name="globe" size={16} />
        <span>{label}</span>
      </button>
    );
  }

  /* ------------------------------ Reveal ------------------------------- */
  function Reveal(props) {
    const r = JL.useReveal();
    const ref = r[0], shown = r[1];
    const Tag = props.as || "div";
    const style = props.delay ? { transitionDelay: props.delay + "ms" } : undefined;
    return <Tag ref={ref} style={style}
      className={cx("reveal", shown && "reveal-in", props.className)}>{props.children}</Tag>;
  }

  /* --------------------------- BackToTop ------------------------------- */
  function BackToTop() {
    const ctx = useLang();
    const site = window.DATA.site;
    const [show, setShow] = useState(false);
    useEffect(function () {
      function onScroll() { setShow(window.scrollY > 500); }
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return function () { window.removeEventListener("scroll", onScroll); };
    }, []);
    return (
      <button type="button" onClick={function () { window.scrollTo({ top: 0, behavior: "smooth" }); }}
        aria-label={ctx.t(site.ui.backToTop)} title={ctx.t(site.ui.backToTop)}
        className={cx("fixed bottom-6 right-6 z-40 grid place-items-center h-11 w-11 rounded-full bg-navy text-white shadow-lg transition-all duration-300 hover:bg-brand-600",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none")}>
        <Icon name="arrowUp" size={20} />
      </button>
    );
  }

  /* ------------------------- ImagePlaceholder -------------------------- */
  function ImagePlaceholder(props) {
    const ctx = useLang();
    const site = window.DATA.site;
    // 無圖且有 kind 時，渲染主題化 CategoryBanner，取代灰底
    if (!props.src && props.kind) {
      return <CategoryBanner kind={props.kind} label={props.label} className={cx("relative overflow-hidden", props.className)} />;
    }
    return (
      <div className={cx("relative grid place-items-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 overflow-hidden", props.className)}>
        {props.src ? (
          <img src={props.src} alt={props.alt || ""} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 py-8">
            <Icon name={props.icon || "sparkles"} size={28} strokeWidth={1.4} />
            <span className="text-xs">{props.label || ctx.t(site.ui.placeholderPhoto)}</span>
          </div>
        )}
      </div>
    );
  }

  /* -------- CategoryBanner（依分類產生統一風格的彩色橫幅，取代灰底 / themed SVG banner per category） -------- */
  const BANNER_VARIANTS = {
    // News categories
    labNews:  { from: "#3b76c0", to: "#1f3556", accent: "#bfe3ff", icon: "sparkles",    pattern: "dots",    label: "LAB NEWS" },
    trends:   { from: "#5a93d4", to: "#272555", accent: "#88b4e3", icon: "trendingUp", pattern: "wave",    label: "TRENDS" },
    events:   { from: "#2f5ea3", to: "#1f3556", accent: "#88b4e3", icon: "calendar",   pattern: "grid",    label: "EVENTS" },
    media:    { from: "#272555", to: "#3b76c0", accent: "#bfe3ff", icon: "news",       pattern: "scan",    label: "MEDIA" },
    // Activities / generic
    activity: { from: "#5a93d4", to: "#272555", accent: "#bfe3ff", icon: "activity",   pattern: "network", label: "ACTIVITY" },
    // Lab feature kinds
    ai:       { from: "#3b76c0", to: "#1f3556", accent: "#bfe3ff", icon: "cpu",        pattern: "grid",    label: "AI" },
    neuro:    { from: "#5a93d4", to: "#1f3556", accent: "#bfe3ff", icon: "brain",      pattern: "network", label: "NEURO" },
    hci:      { from: "#5a93d4", to: "#284e84", accent: "#bfe3ff", icon: "eye",        pattern: "dots",    label: "HCI" },
    security: { from: "#2f5ea3", to: "#1f3556", accent: "#bfe3ff", icon: "shield",     pattern: "grid",    label: "SECURITY" },
    ecom:     { from: "#5a93d4", to: "#2f5ea3", accent: "#bfe3ff", icon: "globe",      pattern: "dots",    label: "DIGITAL" },
    consult:  { from: "#284e84", to: "#1f3556", accent: "#bfe3ff", icon: "briefcase",  pattern: "wave",    label: "ADVISORY" },
  };

  function CategoryBanner(props) {
    const reduce = prefersReduced();
    const v = BANNER_VARIANTS[props.kind] || BANNER_VARIANTS.labNews;
    const uid = (props.kind || "labNews") + "_" + Math.random().toString(36).slice(2, 7);
    const gradId = "jlGrd_" + uid;
    const patId = "jlPat_" + uid;
    return (
      <div className={cx("relative overflow-hidden", props.className)} aria-hidden="true">
        <svg viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={v.from} />
              <stop offset="1" stopColor={v.to} />
            </linearGradient>
            {v.pattern === "dots" ? (
              <pattern id={patId} width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.22)" />
              </pattern>
            ) : null}
            {v.pattern === "grid" ? (
              <pattern id={patId} width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
              </pattern>
            ) : null}
            {v.pattern === "network" ? (
              <pattern id={patId} width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="1.4" fill="rgba(255,255,255,0.28)" />
                <circle cx="32" cy="14" r="1.2" fill="rgba(255,255,255,0.22)" />
                <circle cx="18" cy="30" r="1" fill="rgba(255,255,255,0.18)" />
                <line x1="6" y1="6" x2="32" y2="14" stroke="rgba(255,255,255,0.16)" strokeWidth="0.4" />
                <line x1="32" y1="14" x2="18" y2="30" stroke="rgba(255,255,255,0.16)" strokeWidth="0.4" />
              </pattern>
            ) : null}
            {v.pattern === "wave" ? (
              <pattern id={patId} width="80" height="30" patternUnits="userSpaceOnUse">
                <path d="M0 15 Q20 5 40 15 T80 15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
              </pattern>
            ) : null}
            {v.pattern === "scan" ? (
              <pattern id={patId} width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M0 0 L6 6" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" />
              </pattern>
            ) : null}
          </defs>
          <rect width="320" height="160" fill={"url(#" + gradId + ")"} />
          <rect width="320" height="160" fill={"url(#" + patId + ")"} />
          {/* 底部漸層襯 */}
          <path d="M0 110 Q80 90 160 110 T320 110 V160 H0 Z" fill={v.accent} opacity="0.12" />
          {/* 動態掃描光帶 */}
          {reduce ? null : (
            <rect x="-60" y="0" width="60" height="160" fill="rgba(255,255,255,0.10)">
              <animate attributeName="x" values="-60;380" dur="6s" repeatCount="indefinite" />
            </rect>
          )}
          {/* 微亮點脈衝 */}
          {reduce ? null : (
            <g>
              <circle cx="50" cy="40" r="2.5" fill="rgba(255,255,255,0.85)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="270" cy="55" r="2" fill="rgba(255,255,255,0.7)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="3.1s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="240" cy="125" r="2.4" fill="rgba(255,255,255,0.75)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="2.8s" begin="1.1s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>
        <div className="relative h-full">
          {/* 右上角分類小標 */}
          <div className="absolute right-3 top-3 text-[10px] font-bold tracking-[0.18em] text-white/80">
            {props.label || v.label}
          </div>
          {/* 左下角 JACK LAB 浮水印 */}
          <div className="absolute left-3 bottom-3 text-[10px] font-bold tracking-[0.2em] text-white/70">
            JACK LAB
          </div>
          {/* 中央 icon */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              {reduce ? null : (
                <span className="absolute inset-0 rounded-2xl bg-white/20 jl-ping" />
              )}
              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30 text-white shadow-lg">
                <Icon name={v.icon} size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* -------- LabFeatureRibbon（眼動/腦波/AI/資安/數位轉型/顧問/fsQCA 互動小卡） -------- */
  function LabFeatureRibbon(props) {
    const ctx = useLang();
    const items = [
      { icon: "eye",         label: { zh: "眼動",     en: "Eye Tracking" },    tone: "emerald", to: "/research/neuro" },
      { icon: "brain",       label: { zh: "腦波 EEG", en: "EEG" },             tone: "indigo",  to: "/research/neuro" },
      { icon: "cpu",         label: { zh: "AI",       en: "AI" },              tone: "blue",    to: "/research/ai" },
      { icon: "shield",      label: { zh: "資訊安全", en: "Security" },        tone: "violet",  to: "/research/security" },
      { icon: "trendingUp",  label: { zh: "數位轉型", en: "Digital Transform" },tone: "sky",     to: "/research/ai" },
      { icon: "briefcase",   label: { zh: "學術與顧問服務", en: "Academic & Advisory" }, tone: "teal", to: "/consulting" },
      { icon: "diagram",     label: { zh: "fsQCA",    en: "fsQCA" },           tone: "amber",   to: "/research/fsqca" },
    ];
    return (
      <div className={cx("relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-white via-brand-50/40 to-white", props.className)}>
        <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent jl-scan-x" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 relative">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {items.map(function (it, i) {
              const c = toolColor(it.tone);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={function () { if (it.to) navigate(it.to); }}
                  className={cx(
                    "group flex items-center gap-2 rounded-full px-3 py-1.5 ring-1 ring-slate-100 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300",
                    "hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-200",
                    c.text
                  )}
                  title={ctx.t(it.label)}
                >
                  <span className={cx("relative grid h-7 w-7 place-items-center rounded-lg", c.icon)}>
                    <Icon name={it.icon} size={15} />
                    <span className={cx("absolute inset-0 rounded-lg jl-ping", c.soft)} style={{ animationDelay: (i * 0.35) + "s" }} />
                  </span>
                  <span className="text-xs font-semibold whitespace-nowrap">{ctx.t(it.label)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  JL.CategoryBanner = CategoryBanner;
  JL.LabFeatureRibbon = LabFeatureRibbon;

  /* -------- PetGarden（每位成員專屬 AI 寵物，互相拜訪後回家） -------- */
  // 每種寵物使用獨立漸層 id 與專屬色系
  function petGrad(id, c1, c2) {
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs>';
  }

  const PET_SVG = {
    // 機器人 — 藍 / navy
    bot: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_bot", "#5a93d4", "#2f5ea3") +
      '<line x1="22" y1="6" x2="22" y2="12" stroke="#272555" stroke-width="2"/>' +
      '<circle cx="22" cy="5" r="2.5" fill="#3b76c0"><animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/></circle>' +
      '<rect x="10" y="12" width="24" height="22" rx="6" fill="url(#petG_bot)" stroke="#1f3556" stroke-width="1.5"/>' +
      '<rect x="14" y="18" width="6" height="6" rx="1.5" fill="#bfe3ff"/>' +
      '<rect x="24" y="18" width="6" height="6" rx="1.5" fill="#bfe3ff"/>' +
      '<rect x="16" y="28" width="12" height="2.5" rx="1" fill="#bfe3ff" opacity="0.8"/>' +
      '<rect x="8" y="20" width="3" height="6" rx="1.5" fill="#88b4e3"/>' +
      '<rect x="33" y="20" width="3" height="6" rx="1.5" fill="#88b4e3"/></svg>',

    // 貓 — 焦糖橘 / 焦糖咖啡
    cat: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_cat", "#f6a85b", "#b66b1a") +
      '<path d="M10 14 L13 6 L17 12 Z" fill="#b66b1a"/>' +
      '<path d="M11 12 L13 8 L15 12 Z" fill="#fbcfac"/>' +
      '<path d="M34 14 L31 6 L27 12 Z" fill="#b66b1a"/>' +
      '<path d="M33 12 L31 8 L29 12 Z" fill="#fbcfac"/>' +
      '<circle cx="22" cy="24" r="13" fill="url(#petG_cat)" stroke="#5a3a14" stroke-width="1.5"/>' +
      '<circle cx="17" cy="22" r="1.8" fill="#1f3556"/>' +
      '<circle cx="27" cy="22" r="1.8" fill="#1f3556"/>' +
      '<path d="M22 26 L20 27 L24 27 Z" fill="#5a3a14"/>' +
      '<path d="M22 27 L20 29 M22 27 L24 29" stroke="#5a3a14" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
      '<path d="M6 23 L13 23 M6 26 L13 25" stroke="#5a3a14" stroke-width="0.8" opacity="0.55"/>' +
      '<path d="M38 23 L31 23 M38 26 L31 25" stroke="#5a3a14" stroke-width="0.8" opacity="0.55"/></svg>',

    // 狐狸 — 鏽橘 / 暗紅
    fox: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_fox", "#ee7a3a", "#b13d10") +
      '<path d="M22 38 Q9 36 8 22 Q8 12 14 9 L18 14 Q22 12 26 14 L30 9 Q36 12 36 22 Q35 36 22 38 Z" fill="url(#petG_fox)" stroke="#7d2a08" stroke-width="1.5"/>' +
      '<path d="M22 24 L17 30 L27 30 Z" fill="#ffffff" opacity="0.85"/>' +
      '<circle cx="17" cy="22" r="2" fill="#1f3556"/>' +
      '<circle cx="27" cy="22" r="2" fill="#1f3556"/>' +
      '<circle cx="17.4" cy="21.5" r="0.6" fill="#fff"/>' +
      '<circle cx="27.4" cy="21.5" r="0.6" fill="#fff"/>' +
      '<ellipse cx="22" cy="29" rx="1.8" ry="1.2" fill="#1f3556"/></svg>',

    // 貓頭鷹 — 棕色 / 奶白胸毛
    owl: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_owl", "#a17a3e", "#4f3a17") +
      '<ellipse cx="22" cy="25" rx="14" ry="14" fill="url(#petG_owl)" stroke="#3a2a10" stroke-width="1.5"/>' +
      '<ellipse cx="22" cy="29" rx="8" ry="9" fill="#fff5d6" opacity="0.85"/>' +
      '<circle cx="16" cy="22" r="5" fill="#fff5d6"/>' +
      '<circle cx="28" cy="22" r="5" fill="#fff5d6"/>' +
      '<circle cx="16" cy="22" r="2.2" fill="#1f3556"/>' +
      '<circle cx="28" cy="22" r="2.2" fill="#1f3556"/>' +
      '<path d="M22 26 L19 29 L25 29 Z" fill="#f59e0b" stroke="#a06b00" stroke-width="0.4"/>' +
      '<path d="M9 13 L13 17 M35 13 L31 17" stroke="#3a2a10" stroke-width="1.5"/></svg>',

    // 青蛙 — 草綠 / 深綠
    frog: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_frog", "#7fd47a", "#2f7f3a") +
      '<ellipse cx="22" cy="27" rx="15" ry="11" fill="url(#petG_frog)" stroke="#1f5c25" stroke-width="1.5"/>' +
      '<ellipse cx="22" cy="30" rx="10" ry="6" fill="#d5f0d2" opacity="0.85"/>' +
      '<circle cx="14" cy="14" r="5" fill="#7fd47a" stroke="#1f5c25" stroke-width="1.2"/>' +
      '<circle cx="30" cy="14" r="5" fill="#7fd47a" stroke="#1f5c25" stroke-width="1.2"/>' +
      '<circle cx="14" cy="13" r="3" fill="#ffffff"/>' +
      '<circle cx="30" cy="13" r="3" fill="#ffffff"/>' +
      '<circle cx="14" cy="14" r="1.8" fill="#1f3556"/>' +
      '<circle cx="30" cy="14" r="1.8" fill="#1f3556"/>' +
      '<path d="M14 28 Q22 34 30 28" stroke="#1f5c25" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',

    // 小鳥 — 天藍 / 黃喙
    bird: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_bird", "#7cc5ec", "#1a6b9a") +
      '<ellipse cx="23" cy="26" rx="13" ry="9" fill="url(#petG_bird)" stroke="#0d4d70" stroke-width="1.5"/>' +
      '<ellipse cx="23" cy="28" rx="6" ry="5" fill="#ffffff" opacity="0.45"/>' +
      '<circle cx="22" cy="15" r="7" fill="#7cc5ec" stroke="#0d4d70" stroke-width="1.5"/>' +
      '<circle cx="20" cy="14" r="1.6" fill="#1f3556"/>' +
      '<circle cx="20.4" cy="13.6" r="0.55" fill="#fff"/>' +
      '<path d="M27 14 L32 15 L27 16 Z" fill="#ffd45e" stroke="#a06d00" stroke-width="0.5"/>' +
      '<path d="M10 25 Q14 19 18 25" stroke="#0d4d70" stroke-width="1.4" fill="#5aaad6"><animate attributeName="d" values="M10 25 Q14 19 18 25;M10 25 Q14 22 18 25;M10 25 Q14 19 18 25" dur="0.9s" repeatCount="indefinite"/></path></svg>',

    // 魚 — 青綠 / 橘尾
    fish: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_fish", "#5fd0d4", "#1d6e72") +
      '<ellipse cx="20" cy="22" rx="14" ry="8" fill="url(#petG_fish)" stroke="#0d4a4c" stroke-width="1.5"/>' +
      '<path d="M34 22 L40 14 L40 30 Z" fill="#ffa850" stroke="#a8600e" stroke-width="1.2"/>' +
      '<path d="M16 14 L20 8 L24 14 Z" fill="#ffa850" stroke="#a8600e" stroke-width="0.8"/>' +
      '<ellipse cx="20" cy="25" rx="9" ry="3" fill="#ffffff" opacity="0.4"/>' +
      '<circle cx="14" cy="20" r="1.8" fill="#1f3556"/>' +
      '<circle cx="14.4" cy="19.6" r="0.7" fill="#fff"/>' +
      '<path d="M22 18 Q26 14 30 18" stroke="#0d4a4c" stroke-width="0.8" fill="none" opacity="0.6"/>' +
      '<circle cx="6" cy="14" r="1" fill="#bfe3ff"><animate attributeName="cy" values="14;10;14" dur="2.4s" repeatCount="indefinite"/></circle></svg>',

    // 幽靈 — 淡紫 / 深紫
    ghost: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">' + petGrad("petG_ghost", "#c9b6ed", "#6d50ac") +
      '<path d="M22 6 Q35 6 35 22 L35 36 L31 32 L27 36 L23 32 L19 36 L15 32 L9 36 L9 22 Q9 6 22 6 Z" fill="url(#petG_ghost)" stroke="#4a2f8a" stroke-width="1.5"/>' +
      '<circle cx="17" cy="20" r="2.4" fill="#1f3556"/>' +
      '<circle cx="27" cy="20" r="2.4" fill="#1f3556"/>' +
      '<circle cx="17" cy="19" r="0.8" fill="#ffffff"/>' +
      '<circle cx="27" cy="19" r="0.8" fill="#ffffff"/>' +
      '<ellipse cx="22" cy="25" rx="2.5" ry="1.5" fill="#1f3556" opacity="0.55"/></svg>',
  };

  const PET_KINDS = ["bot", "cat", "fox", "owl", "frog", "bird", "fish", "ghost"];
  function hashStr(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  function defaultPetFor(id) { return PET_KINDS[hashStr(id) % PET_KINDS.length]; }
  JL.PET_KINDS = PET_KINDS;
  JL.defaultPetFor = defaultPetFor;

  function PetGarden(props) {
    const ref = useRef(null);
    useEffect(function () {
      const reduce = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const container = ref.current;
      if (!container || !props.members || !props.members.length) return;
      let raf = null, ro = null, mo = null, setupTimer = null, retries = 0;
      let entities = [];
      let cleanup = function () {};

      function findCards() {
        return props.members.map(function (m) { return document.querySelector('[data-member-id="' + m.id + '"]'); });
      }
      function tryInit() {
        const cards = findCards();
        if (cards.every(Boolean)) { clearInterval(setupTimer); init(cards); }
        else if (retries++ > 30) { clearInterval(setupTimer); }
      }
      setupTimer = setInterval(tryInit, 120);
      tryInit();

      function init(cards) {
        const containerRect = container.getBoundingClientRect();
        entities = props.members.map(function (m, i) {
          const r = cards[i].getBoundingClientRect();
          const ax = r.left - containerRect.left + r.width - 24;
          const ay = r.top - containerRect.top - 6;
          const el = document.createElement("div");
          el.style.position = "absolute";
          el.style.width = "44px"; el.style.height = "44px";
          el.style.pointerEvents = "none"; el.style.willChange = "transform";
          el.style.filter = "drop-shadow(0 4px 8px rgba(31,53,86,0.18))";
          el.setAttribute("aria-hidden", "true");
          el.innerHTML = PET_SVG[m.pet || defaultPetFor(m.id)] || PET_SVG.bot;
          container.appendChild(el);
          return {
            el: el, name: m.name && m.name.zh ? m.name.zh : m.id,
            anchor: { x: ax, y: ay },
            pos: { x: ax + (Math.random() - 0.5) * 30, y: ay + (Math.random() - 0.5) * 20 },
            vel: { x: 0, y: 0 },
            mode: "wander", target: null, t0: 0,
            phase: Math.random() * Math.PI * 2,
            spark: null,
          };
        });
        if (reduce) { entities.forEach(function (e) { e.el.style.transform = "translate3d(" + e.anchor.x + "px," + e.anchor.y + "px,0)"; }); return; }

        let lastT = 0, lastVisit = 0;
        function tick(t) {
          if (!lastT) lastT = t;
          lastT = t;
          if (t - lastVisit > 7000 && Math.random() < 0.7) {
            const idle = entities.filter(function (e) { return e.mode === "wander"; });
            if (idle.length >= 2) {
              const a = idle[Math.floor(Math.random() * idle.length)];
              let b = idle[Math.floor(Math.random() * idle.length)];
              if (b === a) b = idle[(idle.indexOf(a) + 1) % idle.length];
              if (b !== a) {
                a.mode = "visit"; a.target = b; a.t0 = t;
                b.mode = "visit"; b.target = a; b.t0 = t;
                lastVisit = t;
              }
            }
          }
          entities.forEach(function (e) { step(e, t); });
          raf = requestAnimationFrame(tick);
        }
        raf = requestAnimationFrame(tick);

        function reanchor() {
          const cRect = container.getBoundingClientRect();
          const fresh = findCards();
          entities.forEach(function (e, i) {
            const cd = fresh[i]; if (!cd) return;
            const r = cd.getBoundingClientRect();
            e.anchor.x = r.left - cRect.left + r.width - 24;
            e.anchor.y = r.top - cRect.top - 6;
          });
        }
        ro = new ResizeObserver(reanchor); ro.observe(container);
        mo = new MutationObserver(reanchor); mo.observe(container.parentElement || document.body, { childList: true, subtree: true });
        window.addEventListener("resize", reanchor);
        document.addEventListener("scroll", reanchor, { passive: true });
        cleanup = function () {
          if (raf) cancelAnimationFrame(raf);
          if (ro) ro.disconnect();
          if (mo) mo.disconnect();
          window.removeEventListener("resize", reanchor);
          document.removeEventListener("scroll", reanchor);
          entities.forEach(function (e) { if (e.el && e.el.parentNode) e.el.parentNode.removeChild(e.el); });
        };
      }

      function step(e, t) {
        let tx, ty;
        if (e.mode === "wander") {
          tx = e.anchor.x + Math.sin(t / 1000 + e.phase) * 22;
          ty = e.anchor.y + Math.cos(t / 1400 + e.phase) * 14;
        } else if (e.mode === "visit" && e.target) {
          tx = e.target.anchor.x; ty = e.target.anchor.y;
          const dx = e.pos.x - tx, dy = e.pos.y - ty;
          if (Math.hypot(dx, dy) < 50 || t - e.t0 > 3500) { e.mode = "return"; e.t0 = t; }
        } else {
          tx = e.anchor.x; ty = e.anchor.y;
          if (Math.hypot(e.pos.x - tx, e.pos.y - ty) < 6 || t - e.t0 > 3500) { e.mode = "wander"; e.target = null; }
        }
        const ax = (tx - e.pos.x) * 0.055;
        const ay = (ty - e.pos.y) * 0.055;
        e.vel.x = e.vel.x * 0.85 + ax;
        e.vel.y = e.vel.y * 0.85 + ay;
        e.pos.x += e.vel.x; e.pos.y += e.vel.y;
        const bob = e.mode === "wander" ? Math.sin(t / 300 + e.phase) * 2 : 0;
        const flip = e.vel.x < -0.2 ? " scaleX(-1)" : "";
        e.el.style.transform = "translate3d(" + Math.round(e.pos.x) + "px," + Math.round(e.pos.y + bob) + "px,0)" + flip;
      }

      return function () { if (setupTimer) clearInterval(setupTimer); cleanup(); };
    }, [props.members && props.members.map(function (m) { return m.id; }).join(",")]);
    return <div ref={ref} className="pointer-events-none absolute inset-0 z-20 overflow-visible" aria-hidden="true" />;
  }

  JL.PetGarden = PetGarden;

  /* --------------------- TechMotif（神經網絡動圖）-------------------- */
  function prefersReduced() {
    return typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function TechMotif(props) {
    const reduce = prefersReduced();
    const nodes = [[60, 80], [150, 52], [250, 88], [332, 60], [108, 168], [210, 178], [300, 200], [158, 278], [262, 288]];
    const edges = [[0, 1], [1, 2], [2, 3], [0, 4], [1, 4], [1, 5], [2, 5], [2, 6], [3, 6], [4, 5], [5, 6], [4, 7], [5, 7], [5, 8], [6, 8], [7, 8]];
    const sig = [[0, 4, 7], [3, 6, 8]];
    return (
      <svg viewBox="0 0 392 340" className={cx("h-auto w-full", props.className)} aria-hidden="true">
        <g stroke="#88b4e3" strokeWidth="1.2" opacity="0.55">
          {edges.map(function (e, i) {
            const a = nodes[e[0]], b = nodes[e[1]];
            return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className={reduce ? undefined : "jl-flow"} style={reduce ? undefined : { animationDelay: (i * 0.12) + "s" }} />;
          })}
        </g>
        {nodes.map(function (n, i) {
          return (
            <g key={i}>
              {reduce ? null : (
                <circle cx={n[0]} cy={n[1]} r="5" fill="#3b76c0" opacity="0.5">
                  <animate attributeName="r" values="5;15;5" dur="3.4s" begin={(i * 0.33) + "s"} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.45;0;0.45" dur="3.4s" begin={(i * 0.33) + "s"} repeatCount="indefinite" />
                </circle>
              )}
              <circle cx={n[0]} cy={n[1]} r="4.5" fill="#2f5ea3" />
            </g>
          );
        })}
        {reduce ? null : sig.map(function (p, i) {
          const d = "M" + nodes[p[0]][0] + "," + nodes[p[0]][1] + " L" + nodes[p[1]][0] + "," + nodes[p[1]][1] + " L" + nodes[p[2]][0] + "," + nodes[p[2]][1];
          return <circle key={i} r="3.4" fill="#1f3556"><animateMotion dur={(2.8 + i) + "s"} begin={(i * 0.7) + "s"} repeatCount="indefinite" path={d} /></circle>;
        })}
      </svg>
    );
  }

  /* ------------------------ Waveform（腦波動圖）---------------------- */
  function Waveform(props) {
    const reduce = prefersReduced();
    const pts = [[0, 20], [10, 20], [14, 8], [18, 32], [22, 20], [40, 20], [44, 14], [48, 26], [52, 20], [70, 20], [76, 6], [82, 34], [88, 20], [110, 20], [116, 16], [122, 24], [128, 20], [150, 20], [158, 10], [166, 30], [174, 20], [200, 20]];
    function toD(off) { return "M" + pts.map(function (p) { return (p[0] + off) + "," + p[1]; }).join(" L"); }
    const d = toD(0) + " " + toD(200);
    return (
      <svg viewBox="0 0 200 40" preserveAspectRatio="none" className={cx("w-full", props.className)} style={{ height: props.height || "34px" }} aria-hidden="true">
        <g>
          {reduce ? null : <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-200 0" dur="7s" repeatCount="indefinite" />}
          <path d={d} fill="none" stroke={props.color || "#5a93d4"} strokeWidth={props.strokeWidth || 2} strokeLinejoin="round" strokeLinecap="round" opacity={props.opacity != null ? props.opacity : 0.7} vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    );
  }

  /* ----------- ParticleField（互動式神經網絡背景 / cursor-reactive） ---------- */
  function ParticleField(props) {
    const canvasRef = useRef(null);
    useEffect(function () {
      const canvas = canvasRef.current; if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const reduce = prefersReduced();
      const host = canvas.parentElement;
      let w = 0, h = 0, raf = null;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      let parts = [];
      const mouse = { x: -9999, y: -9999 };
      const LINK = 124, NEAR = 168;

      function build() {
        const rect = canvas.getBoundingClientRect();
        w = rect.width; h = rect.height;
        canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.max(22, Math.min(68, Math.floor(w / 24)));
        parts = [];
        for (let i = 0; i < n; i++) parts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32 });
      }
      function frame(move) {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          if (move) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            const mx = mouse.x - p.x, my = mouse.y - p.y, md = Math.hypot(mx, my);
            if (md < NEAR && md > 0.5) { p.x += (mx / md) * 0.45; p.y += (my / md) * 0.45; }
          }
          ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 6.2832); ctx.fillStyle = "rgba(47,94,163,0.55)"; ctx.fill();
          for (let j = i + 1; j < parts.length; j++) {
            const q = parts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
            if (d < LINK) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.strokeStyle = "rgba(59,118,192," + (0.16 * (1 - d / LINK)) + ")"; ctx.lineWidth = 1; ctx.stroke(); }
          }
          const mdx = mouse.x - p.x, mdy = mouse.y - p.y, mdd = Math.hypot(mdx, mdy);
          if (mdd < NEAR) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.strokeStyle = "rgba(59,118,192," + (0.26 * (1 - mdd / NEAR)) + ")"; ctx.lineWidth = 1; ctx.stroke(); }
        }
      }
      function loop() { frame(true); raf = requestAnimationFrame(loop); }
      function onMove(e) { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; }
      function onLeave() { mouse.x = -9999; mouse.y = -9999; }
      function onResize() { build(); if (reduce) frame(false); }

      build();
      window.addEventListener("resize", onResize);
      if (host) { host.addEventListener("mousemove", onMove); host.addEventListener("mouseleave", onLeave); }

      let io = null;
      if (reduce) {
        frame(false);
      } else {
        io = new IntersectionObserver(function (ents) {
          ents.forEach(function (en) {
            if (en.isIntersecting) { if (!raf) loop(); }
            else if (raf) { cancelAnimationFrame(raf); raf = null; }
          });
        });
        io.observe(canvas);
      }
      return function () {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        if (host) { host.removeEventListener("mousemove", onMove); host.removeEventListener("mouseleave", onLeave); }
        if (io) io.disconnect();
      };
    }, []);
    return <canvas ref={canvasRef} className={cx("absolute inset-0 h-full w-full", props.className)} aria-hidden="true" />;
  }

  /* --------------- RobotMascot（眼睛跟著游標 / eyes follow cursor） -------------- */
  function RobotMascot(props) {
    const reduce = prefersReduced();
    const rootRef = useRef(null), lp = useRef(null), rp = useRef(null);
    useEffect(function () {
      function onMove(e) {
        const el = rootRef.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const cx0 = r.left + r.width / 2, cy0 = r.top + r.height * 0.42;
        const ang = Math.atan2(e.clientY - cy0, e.clientX - cx0);
        const dist = Math.min(3.4, Math.hypot(e.clientX - cx0, e.clientY - cy0) / 45);
        const tf = "translate(" + (Math.cos(ang) * dist).toFixed(2) + "," + (Math.sin(ang) * dist).toFixed(2) + ")";
        if (lp.current) lp.current.setAttribute("transform", tf);
        if (rp.current) rp.current.setAttribute("transform", tf);
      }
      window.addEventListener("mousemove", onMove);
      return function () { window.removeEventListener("mousemove", onMove); };
    }, []);
    return (
      <svg ref={rootRef} viewBox="0 0 240 244" className={cx("h-auto w-full", !reduce && "animate-floaty", props.className)} aria-hidden="true">
        <defs>
          <linearGradient id="jlRobEdge" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5a93d4" /><stop offset="1" stopColor="#2f5ea3" /></linearGradient>
        </defs>
        <line x1="120" y1="46" x2="120" y2="24" stroke="#2f5ea3" strokeWidth="3" strokeLinecap="round" />
        <circle cx="120" cy="17" r="6" fill="#3b76c0">{reduce ? null : <animate attributeName="opacity" values="1;0.3;1" dur="1.7s" repeatCount="indefinite" />}</circle>
        <rect x="38" y="92" width="12" height="34" rx="6" fill="#88b4e3" />
        <rect x="190" y="92" width="12" height="34" rx="6" fill="#88b4e3" />
        <rect x="50" y="46" width="140" height="120" rx="30" fill="#ffffff" stroke="url(#jlRobEdge)" strokeWidth="3.5" />
        <rect x="66" y="66" width="108" height="74" rx="22" fill="#272555" />
        {reduce ? null : <rect x="70" y="70" width="100" height="6" rx="3" fill="#5a93d4" opacity="0.35"><animate attributeName="y" values="71;130;71" dur="3.6s" repeatCount="indefinite" /></rect>}
        <circle cx="100" cy="103" r="15" fill="#bfe3ff" />
        <circle cx="140" cy="103" r="15" fill="#bfe3ff" />
        <g ref={lp}><circle cx="100" cy="103" r="6.5" fill="#1f3556" /></g>
        <g ref={rp}><circle cx="140" cy="103" r="6.5" fill="#1f3556" /></g>
        <rect x="106" y="148" width="28" height="6" rx="3" fill="#3b76c0" />
        <rect x="106" y="166" width="28" height="12" fill="#b6d2ef" />
        <rect x="78" y="178" width="84" height="26" rx="13" fill="#d8e8f7" />
      </svg>
    );
  }

  /* ------------------ CountUp（數字捲動 / count-up on scroll） ------------------ */
  function CountUp(props) {
    const r = JL.useReveal();
    const ref = r[0], shown = r[1];
    const [val, setVal] = useState(0);
    useEffect(function () {
      if (!shown) return;
      const target = props.to || 0;
      if (prefersReduced()) { setVal(target); return; }
      const dur = props.duration || 1300;
      const start = performance.now();
      let raf, fb;
      function tick(now) {
        const t = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(target * e));
        if (t < 1) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
      // 後備：rAF 未運作時仍顯示最終數字 / ensure final value shows even if rAF is dormant
      fb = setTimeout(function () { setVal(target); }, dur + 200);
      return function () { if (raf) cancelAnimationFrame(raf); clearTimeout(fb); };
    }, [shown]);
    return <span ref={ref} className={props.className}>{val}{props.suffix || ""}</span>;
  }

  /* ---------- SignalPanel（各分頁 Hero 的動態科技視覺） ---------- */
  function SignalPanel(props) {
    const ctx = useLang();
    const mode = props.mode || "ai";
    const copy = {
      ai: { icon: "cpu", title: "AI", bits: ["data", "model", "insight"] },
      robot: { icon: "bot", title: "Robot", bits: ["sense", "learn", "act"] },
      mind: { icon: "brain", title: ctx.lang === "zh" ? "思考" : "Think", bits: ["cognition", "decision", "feeling"] },
      paper: { icon: "doc", title: ctx.lang === "zh" ? "知識" : "Knowledge", bits: ["paper", "evidence", "impact"] },
      award: { icon: "award", title: ctx.lang === "zh" ? "成果" : "Impact", bits: ["honor", "team", "growth"] },
      news: { icon: "activity", title: ctx.lang === "zh" ? "動態" : "Signal", bits: ["trend", "event", "idea"] },
    }[mode] || { icon: "sparkles", title: "Signal", bits: ["sense", "think", "feel"] };
    return (
      <div className={cx("jl-signal-card group relative overflow-hidden rounded-2xl border border-white/70 bg-white/75 p-4 shadow-lg shadow-brand-900/5 backdrop-blur", props.className)}>
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-brand-200/60 blur-2xl" />
        <div className="relative">
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-white shadow-sm"><Icon name={copy.icon} size={20} /></span>
            <div>
              <div className="text-sm font-extrabold text-navy">{copy.title}</div>
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100"><span className="block h-full w-1/2 rounded-full bg-brand-500 jl-scan-line" /></div>
            </div>
          </div>
          <div className="relative mx-auto aspect-square max-w-[210px]">
            <TechMotif className="absolute inset-0 opacity-85" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-700 shadow-md ring-1 ring-brand-100">
                <Icon name={copy.icon} size={28} />
              </div>
            </div>
            {copy.bits.map(function (b, i) {
              const pos = [
                "left-1 top-9",
                "right-0 top-24",
                "left-1/2 bottom-2 -translate-x-1/2",
              ][i];
              return <span key={b} className={cx("absolute rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-500 shadow-sm ring-1 ring-slate-100 jl-orbit-chip", pos)} style={{ animationDelay: (i * 0.4) + "s" }}>{b}</span>;
            })}
          </div>
          <Waveform color="#3b76c0" opacity={0.45} height="20px" />
        </div>
      </div>
    );
  }

  /* --------- InteractiveFlow（頁內的小型互動流程視覺）--------- */
  function InteractiveFlow(props) {
    const ctx = useLang();
    const labels = props.labels || (ctx.lang === "zh"
      ? ["感知", "分析", "決策", "應用"]
      : ["Sense", "Analyze", "Decide", "Apply"]);
    const icons = props.icons || ["eye", "brain", "diagram", "sparkles"];
    return (
      <div className={cx("jl-flow-panel relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm", props.className)}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent jl-scan-x" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
          {labels.map(function (label, i) {
            return (
              <div key={label} className="group rounded-xl bg-slate-50/80 p-3 text-center ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-50 hover:ring-brand-200">
                <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-white text-brand-700 shadow-sm ring-1 ring-brand-100 group-hover:scale-110 transition-transform">
                  <Icon name={icons[i] || "sparkles"} size={18} />
                </div>
                <div className="text-xs font-semibold text-navy">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* -------- IconConstellation（漂浮 AI/腦/眼/機器人 icon 星座 / floating tech icons） -------- */
  function IconConstellation(props) {
    const reduce = prefersReduced();
    // 每個 icon 的相對位置 (vw / %)、尺寸、動畫延遲與類別
    const items = props.items || [
      { name: "cpu",     top: "8%",  left: "4%",   size: 18, delay: 0,   tone: "bg-blue-100 text-blue-700" },
      { name: "brain",   top: "22%", left: "16%",  size: 22, delay: 0.6, tone: "bg-indigo-100 text-indigo-700" },
      { name: "eye",     top: "62%", left: "8%",   size: 18, delay: 1.1, tone: "bg-emerald-100 text-emerald-700" },
      { name: "bot",     top: "12%", right: "10%", size: 22, delay: 0.3, tone: "bg-sky-100 text-sky-700" },
      { name: "shield",  top: "70%", right: "14%", size: 18, delay: 0.9, tone: "bg-violet-100 text-violet-700" },
      { name: "diagram", top: "44%", right: "4%",  size: 18, delay: 1.4, tone: "bg-amber-100 text-amber-700" },
      { name: "activity",top: "82%", left: "44%",  size: 16, delay: 0.5, tone: "bg-teal-100 text-teal-700" },
    ];
    return (
      <div className={cx("pointer-events-none absolute inset-0 overflow-hidden", props.className)} aria-hidden="true">
        {items.map(function (it, i) {
          const style = { top: it.top, left: it.left, right: it.right, animationDelay: (it.delay || 0) + "s" };
          return (
            <span
              key={i}
              style={style}
              className={cx(
                "absolute grid place-items-center rounded-2xl shadow-sm ring-1 ring-white/70 backdrop-blur-sm bg-white/70",
                it.tone,
                !reduce && "animate-floaty"
              )}
            >
              <span className="grid place-items-center p-2">
                <Icon name={it.name} size={it.size} />
              </span>
              {reduce ? null : (
                <span className={cx("absolute inset-0 rounded-2xl jl-ping", it.tone)} />
              )}
            </span>
          );
        })}
      </div>
    );
  }

  /* -------- GazeHeatmap（眼動熱區圖；脈衝小點，模擬 fixation） -------- */
  function GazeHeatmap(props) {
    const reduce = prefersReduced();
    const pts = props.points || [
      { x: 24, y: 30, r: 14, delay: 0 },
      { x: 60, y: 22, r: 10, delay: 0.4 },
      { x: 82, y: 48, r: 16, delay: 0.9 },
      { x: 46, y: 60, r: 12, delay: 1.4 },
      { x: 18, y: 72, r: 9,  delay: 1.9 },
      { x: 70, y: 80, r: 11, delay: 2.4 },
    ];
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={cx("h-full w-full", props.className)} aria-hidden="true">
        <defs>
          <radialGradient id="jlGaze" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b76c0" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#88b4e3" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#88b4e3" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* 注視軌跡（虛線） */}
        <path
          d={"M" + pts.map(function (p) { return p.x + "," + p.y; }).join(" L")}
          fill="none" stroke="#5a93d4" strokeWidth="0.6" strokeDasharray="1.6 2.4" opacity="0.5"
          className={reduce ? undefined : "jl-flow"}
        />
        {pts.map(function (p, i) {
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={p.r} fill="url(#jlGaze)" />
              <circle cx={p.x} cy={p.y} r="1.4" fill="#1f3556">
                {reduce ? null : (
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" begin={(p.delay || 0) + "s"} repeatCount="indefinite" />
                )}
              </circle>
            </g>
          );
        })}
      </svg>
    );
  }

  JL.IconConstellation = IconConstellation;
  JL.GazeHeatmap = GazeHeatmap;
  JL.TechMotif = TechMotif;
  JL.Waveform = Waveform;
  JL.ParticleField = ParticleField;
  JL.RobotMascot = RobotMascot;
  JL.CountUp = CountUp;
  JL.SignalPanel = SignalPanel;
  JL.InteractiveFlow = InteractiveFlow;
  JL.Icon = Icon;
  JL.Avatar = Avatar;
  JL.Card = Card;
  JL.SectionHeading = SectionHeading;
  JL.Pill = Pill;
  JL.Tag = Tag;
  JL.Button = Button;
  JL.LanguageToggle = LanguageToggle;
  JL.Reveal = Reveal;
  JL.BackToTop = BackToTop;
  JL.ImagePlaceholder = ImagePlaceholder;
  JL.TOOL_COLORS = TOOL_COLORS;
  JL.toolColor = toolColor;
})();
