/* =============================================================================
 * ui.jsx — 可重複使用的視覺元件 / Reusable UI components (on window.JL)
 * Icon, Avatar, Card, SectionHeading, Pill, Tag, Button, Badge,
 * LanguageToggle, BackToTop, Reveal, ImagePlaceholder, TOOL_COLORS
 * ========================================================================== */
window.JL = window.JL || {};

(function () {
  const { useState, useEffect } = React;
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
    teal:   { soft: "bg-teal-50",   text: "text-teal-700",   ring: "ring-teal-200",   dot: "bg-teal-500",   chip: "bg-teal-50 text-teal-700",   icon: "bg-teal-100 text-teal-700" },
    amber:  { soft: "bg-amber-50",  text: "text-amber-700",  ring: "ring-amber-200",  dot: "bg-amber-500",  chip: "bg-amber-50 text-amber-700",  icon: "bg-amber-100 text-amber-700" },
    violet: { soft: "bg-violet-50", text: "text-violet-700", ring: "ring-violet-200", dot: "bg-violet-500", chip: "bg-violet-50 text-violet-700", icon: "bg-violet-100 text-violet-700" },
  };
  function toolColor(key) { return TOOL_COLORS[key] || TOOL_COLORS.blue; }

  /* ------------------------------ Avatar ------------------------------- */
  function Avatar(props) {
    const size = props.size || 96;
    const style = { width: size, height: size };
    if (props.photo) {
      return <img src={props.photo} alt={props.name || ""} style={style}
        className={cx("rounded-full object-cover ring-4 ring-white shadow-md", props.className)} />;
    }
    return (
      <div style={style}
        className={cx("rounded-full bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400 grid place-items-center ring-4 ring-white shadow-md", props.className)}
        aria-label={props.name || "placeholder"}>
        <Icon name="user" size={Math.round(size * 0.5)} strokeWidth={1.5} />
      </div>
    );
  }

  /* ------------------------------- Card -------------------------------- */
  function Card(props) {
    const clickable = !!props.onClick;
    return (
      <div onClick={props.onClick}
        className={cx(
          "bg-white rounded-2xl border border-slate-100 shadow-sm",
          (props.hover !== false) && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          clickable && "cursor-pointer",
          props.className
        )}>
        {props.children}
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

  JL.TechMotif = TechMotif;
  JL.Waveform = Waveform;
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
