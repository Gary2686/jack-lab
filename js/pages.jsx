/* =============================================================================
 * pages.jsx — 所有頁面元件 / All page components (on window.JL.pages)
 * Home, About, Team, Research, Publications, Awards, News, Activities, ToolDetail
 * ========================================================================== */
window.JL = window.JL || {};

(function () {
  const { useState, useEffect, useMemo } = React;
  const cx = JL.cx;
  const Icon = JL.Icon;
  const Card = JL.Card;
  const Button = JL.Button;
  const Pill = JL.Pill;
  const Tag = JL.Tag;
  const Avatar = JL.Avatar;
  const Reveal = JL.Reveal;
  const SectionHeading = JL.SectionHeading;
  const ImagePlaceholder = JL.ImagePlaceholder;
  const toolColor = JL.toolColor;
  const navigate = JL.navigate;

  const AREA_ICON = { ai: "cpu", neuro: "brain", case: "briefcase", fsqca: "diagram" };
  const AREA_COLOR = { ai: "blue", neuro: "indigo", case: "teal", fsqca: "violet" };
  const TOOLCAT_ICON = { positioning: "target", growth: "trendingUp", customer: "users", channel: "share", performance: "barChart", decision: "scale" };

  /* ----------------------------- helpers ----------------------------- */
  function Container(props) {
    return <div className={cx("mx-auto max-w-7xl px-4 sm:px-6", props.className)}>{props.children}</div>;
  }

  function PageHero(props) {
    return (
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div className="absolute inset-0 -z-10 hero-grid opacity-60" />
        <div className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <Container className="py-14 sm:py-16">
          <Reveal>
            {props.eyebrow ? <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-3">{props.eyebrow}</div> : null}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">{props.title}</h1>
            {props.subtitle ? <p className="mt-4 max-w-2xl text-lg text-slate-500 leading-relaxed">{props.subtitle}</p> : null}
          </Reveal>
        </Container>
      </section>
    );
  }

  function Modal(props) {
    useEffect(function () {
      function onKey(e) { if (e.key === "Escape") props.onClose(); }
      if (props.open) { document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden"; }
      return function () { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
    }, [props.open]);
    if (!props.open) return null;
    return (
      <div className="fixed inset-0 z-[60] grid place-items-center p-4" role="dialog" aria-modal="true">
        <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm animate-fade" onClick={props.onClose} />
        <div className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-pop">
          {props.children}
        </div>
      </div>
    );
  }

  function FilterChips(props) {
    const ctx = JL.useLang();
    return (
      <div className="flex flex-wrap gap-2">
        <Tag active={props.value === "all"} onClick={function () { props.onChange("all"); }}>{ctx.t(props.allLabel)}</Tag>
        {props.options.map(function (o) {
          return <Tag key={o.id} active={props.value === o.id} onClick={function () { props.onChange(o.id); }}>{ctx.t(o.label)}</Tag>;
        })}
      </div>
    );
  }

  /* ============================== HOME ============================== */
  function HomePage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const areas = window.DATA.research.areas;
    const members = window.DATA.members.groups;
    const news = window.DATA.news.items;
    const pubs = window.DATA.publications.items;

    const leaders = [];
    ["advisor", "postdoc", "phd"].forEach(function (gid) {
      const g = members.find(function (x) { return x.id === gid; });
      if (g && g.members[0]) leaders.push({ group: g, member: g.members[0] });
    });

    const latestNews = news.slice().sort(function (a, b) {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    }).slice(0, 3);

    const featured = pubs.filter(function (p) { return p.featured; }).slice(0, 4);
    const featuredList = featured.length ? featured : pubs.slice(0, 4);
    const chips = ["AI", "Generative AI", "EEG", "Eye Tracking", "Service Science", "fsQCA"];

    return (
      <div>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
          <div className="absolute inset-0 -z-10 hero-grid opacity-70" />
          <div className="absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl animate-floaty" />
          <div className="absolute top-10 -right-24 -z-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl animate-floaty-slow" />
          <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-floaty" />
          <Container className="py-20 sm:py-28">
            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-brand-100 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />{t(site.home.hero.eyebrow)}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-navy">
                  {t(site.home.hero.title)}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed">{t(site.home.hero.tagline)}</p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 max-w-2xl text-slate-500 leading-relaxed">{t(site.home.hero.intro)}</p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/research" icon="flask">{t(site.home.hero.ctaPrimary)}</Button>
                  <Button to="/team" variant="secondary" iconRight="arrowRight">{t(site.home.hero.ctaSecondary)}</Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex flex-wrap gap-2">
                  {chips.map(function (c) {
                    return <span key={c} className="rounded-full bg-white/70 ring-1 ring-slate-200 px-3 py-1 text-xs font-medium text-slate-500">{c}</span>;
                  })}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Container className="py-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <Reveal className="lg:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-3">{t(site.home.intro.title)}</div>
              <p className="text-lg text-slate-600 leading-relaxed">{t(site.home.intro.body)}</p>
            </Reveal>
            <Reveal delay={120}>
              <Card className="p-6 bg-gradient-to-br from-navy to-brand-700 text-white border-0">
                <Icon name="sparkles" className="text-white/80" />
                <div className="mt-3 text-2xl font-bold">{t(site.brand.short)}</div>
                <div className="text-sm text-white/70 mt-1">{t(site.brand.org)}</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 py-3"><div className="text-2xl font-extrabold">4</div><div className="text-[11px] text-white/70">{ctx.lang === "zh" ? "研究主軸" : "Pillars"}</div></div>
                  <div className="rounded-xl bg-white/10 py-3"><div className="text-2xl font-extrabold">26</div><div className="text-[11px] text-white/70">{ctx.lang === "zh" ? "分析工具" : "Tools"}</div></div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>

        {/* RESEARCH QUICK LINKS */}
        <Container className="py-8">
          <SectionHeading eyebrow={t(site.home.sections.research.title)} title={t(site.home.sections.research.title)} subtitle={t(site.home.sections.research.subtitle)} center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map(function (a, i) {
              const c = toolColor(AREA_COLOR[a.id]);
              return (
                <Reveal key={a.id} delay={i * 80}>
                  <Card onClick={function () { navigate("/research/" + a.id); }} className="p-6 h-full flex flex-col">
                    <div className={cx("h-12 w-12 rounded-xl grid place-items-center mb-4", c.icon)}>
                      <Icon name={AREA_ICON[a.id] || "flask"} />
                    </div>
                    <h3 className="font-bold text-navy text-lg leading-snug">{t(a.name)}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{t(a.tagline)}</p>
                    <div className={cx("mt-4 inline-flex items-center gap-1 text-sm font-semibold", c.text)}>
                      {t(site.ui.explore)}<Icon name="arrowRight" size={16} />
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>

        {/* TEAM PREVIEW */}
        <Container className="py-16">
          <SectionHeading eyebrow={t(site.home.sections.team.title)} title={t(site.home.sections.team.title)} subtitle={t(site.home.sections.team.subtitle)} center />
          <div className="grid sm:grid-cols-3 gap-6">
            {leaders.map(function (l, i) {
              return (
                <Reveal key={l.member.id} delay={i * 80}>
                  <Card className="p-6 text-center h-full">
                    <div className="flex justify-center"><Avatar name={t(l.member.name)} photo={l.member.photo} size={88} /></div>
                    <div className="mt-4 font-bold text-navy">{t(l.member.name)}</div>
                    <div className="text-sm text-slate-400">{t(l.member.name) !== l.member.name.en ? l.member.name.en : ""}</div>
                    <Pill className="mt-3 bg-brand-50 text-brand-700">{t(l.member.title)}</Pill>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button to="/team" variant="secondary" iconRight="arrowRight">{t(site.ui.viewAll)}</Button>
          </div>
        </Container>

        {/* NEWS */}
        <div className="bg-slate-50/70 border-y border-slate-100">
          <Container className="py-16">
            <SectionHeading eyebrow={t(site.home.sections.news.title)} title={t(site.home.sections.news.title)} subtitle={t(site.home.sections.news.subtitle)} center />
            <div className="grid md:grid-cols-3 gap-6">
              {latestNews.map(function (n, i) {
                return <Reveal key={n.id} delay={i * 80}><NewsCard item={n} /></Reveal>;
              })}
            </div>
            <div className="mt-8 text-center"><Button to="/news" variant="secondary" iconRight="arrowRight">{t(site.ui.viewAll)}</Button></div>
          </Container>
        </div>

        {/* PUBLICATIONS HIGHLIGHTS */}
        <Container className="py-16">
          <SectionHeading eyebrow={t(site.home.sections.publications.title)} title={t(site.home.sections.publications.title)} subtitle={t(site.home.sections.publications.subtitle)} center />
          <div className="grid gap-4 max-w-4xl mx-auto">
            {featuredList.map(function (p, i) {
              return <Reveal key={p.id} delay={i * 60}><PubItem item={p} compact /></Reveal>;
            })}
          </div>
          <div className="mt-8 text-center"><Button to="/publications" variant="secondary" iconRight="arrowRight">{t(site.ui.viewAll)}</Button></div>
        </Container>
      </div>
    );
  }

  /* ============================== ABOUT ============================== */
  function AboutPage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const about = site.about;
    const advisorGroup = window.DATA.members.groups.find(function (g) { return g.id === "advisor"; });
    const advisor = advisorGroup ? advisorGroup.members[0] : null;

    return (
      <div>
        <PageHero eyebrow={t(about.hero.subtitle)} title={t(about.hero.title)} subtitle={t(about.hero.subtitle)} />
        <Container className="py-16 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy">{t(about.intro.title)}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{t(about.intro.body)}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-2xl font-bold text-navy">{t(about.vision.title)}</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">{t(about.vision.body)}</p>
          </Reveal>
        </Container>

        <div className="bg-slate-50/70 border-y border-slate-100">
          <Container className="py-16">
            <SectionHeading title={t(about.features.title)} center />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {about.features.items.map(function (f, i) {
                return (
                  <Reveal key={i} delay={i * 80}>
                    <Card className="p-6 h-full">
                      <div className="h-11 w-11 rounded-xl grid place-items-center bg-brand-100 text-brand-700 mb-4"><Icon name={f.icon} /></div>
                      <h3 className="font-bold text-navy">{t(f.title)}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t(f.desc)}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </div>

        {advisor ? (
          <Container className="py-16">
            <SectionHeading title={t(about.advisor.title)} center />
            <Reveal>
              <Card className="p-8 max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <Avatar name={t(advisor.name)} photo={advisor.photo} size={120} />
                  <div className="text-center sm:text-left">
                    <div className="text-xl font-bold text-navy">{t(advisor.name)} <span className="text-slate-400 text-base font-medium">{advisor.name.en}</span></div>
                    <Pill className="mt-2 bg-brand-50 text-brand-700">{t(advisor.title)}</Pill>
                    <div className="mt-3 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      {advisor.interests[ctx.lang].map(function (it, i) {
                        return <span key={i} className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 text-xs">{it}</span>;
                      })}
                    </div>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">{t(advisor.bio)}</p>
                    <MemberLinks member={advisor} className="mt-4 justify-center sm:justify-start" />
                  </div>
                </div>
              </Card>
            </Reveal>
          </Container>
        ) : null}
      </div>
    );
  }

  /* ============================== TEAM ============================== */
  function MemberLinks(props) {
    const ctx = JL.useLang();
    const m = props.member;
    const links = [];
    if (m.email) links.push({ icon: "mail", href: "mailto:" + m.email, label: ctx.t(window.DATA.site.ui.email) });
    if (m.scholar) links.push({ icon: "scholar", href: m.scholar, label: ctx.t(window.DATA.site.ui.scholar), ext: true });
    if (m.website) links.push({ icon: "globe", href: m.website, label: ctx.t(window.DATA.site.ui.website), ext: true });
    if (!links.length) return null;
    return (
      <div className={cx("flex flex-wrap gap-2", props.className)}>
        {links.map(function (l, i) {
          return (
            <a key={i} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-brand-300 hover:text-brand-700 transition-colors">
              <Icon name={l.icon} size={15} />{l.label}
            </a>
          );
        })}
      </div>
    );
  }

  function MemberCard(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const m = props.member;
    const layout = props.layout;

    if (layout === "compact") {
      return (
        <Card className="p-5 flex items-center gap-4">
          <Avatar name={t(m.name)} photo={m.photo} size={56} />
          <div className="min-w-0">
            <div className="font-semibold text-navy truncate">{t(m.name)}</div>
            <div className="text-xs text-slate-400 truncate">{m.name.en}</div>
            {m.email ? <a href={"mailto:" + m.email} className="text-xs text-brand-600 hover:underline">{m.email}</a>
              : <span className="text-xs text-slate-300">{ctx.t(window.DATA.site.ui.email)} —</span>}
          </div>
        </Card>
      );
    }
    if (layout === "alumni") {
      return (
        <Card className="p-5 flex items-start gap-4">
          <Avatar name={t(m.name)} photo={m.photo} size={56} />
          <div className="min-w-0">
            <div className="font-semibold text-navy">{t(m.name)} <span className="text-xs text-slate-400">{m.name.en}</span></div>
            <div className="mt-1 text-xs text-slate-500 flex items-start gap-1">
              <Icon name="briefcase" size={13} className="mt-0.5 text-slate-300" />{t(m.currentPosition)}
            </div>
            {m.email ? <a href={"mailto:" + m.email} className="mt-1 inline-block text-xs text-brand-600 hover:underline">{m.email}</a> : null}
          </div>
        </Card>
      );
    }
    // full
    return (
      <Card onClick={function () { props.onOpen(m); }} className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-4">
          <Avatar name={t(m.name)} photo={m.photo} size={72} />
          <div>
            <div className="font-bold text-navy text-lg leading-tight">{t(m.name)}</div>
            <div className="text-sm text-slate-400">{m.name.en}</div>
            <Pill className="mt-1.5 bg-brand-50 text-brand-700 text-xs">{t(m.title)}</Pill>
          </div>
        </div>
        {m.interests ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {m.interests[ctx.lang].slice(0, 4).map(function (it, i) {
              return <span key={i} className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 text-xs">{it}</span>;
            })}
          </div>
        ) : null}
        <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">{t(m.bio)}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          {ctx.lang === "zh" ? "查看詳細" : "View profile"}<Icon name="arrowRight" size={15} />
        </div>
      </Card>
    );
  }

  function TeamPage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const groups = window.DATA.members.groups;
    const [active, setActive] = useState(null);

    function gridFor(layout) {
      if (layout === "full") return "grid sm:grid-cols-2 lg:grid-cols-3 gap-6";
      if (layout === "compact") return "grid sm:grid-cols-2 lg:grid-cols-4 gap-4";
      return "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"; // alumni
    }

    return (
      <div>
        <PageHero eyebrow={t(site.pages.team.subtitle)} title={t(site.pages.team.title)} subtitle={t(site.pages.team.subtitle)} />
        <Container className="py-16 space-y-14">
          {groups.map(function (g) {
            return (
              <section key={g.id}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-bold text-navy">{t(g.label)}</h2>
                  <span className="text-sm text-slate-400">({g.members.length})</span>
                  <span className="h-px flex-1 bg-slate-100" />
                </div>
                <div className={gridFor(g.layout)}>
                  {g.members.map(function (m, i) {
                    return <Reveal key={m.id} delay={i * 50}><MemberCard member={m} layout={g.layout} onOpen={setActive} /></Reveal>;
                  })}
                </div>
              </section>
            );
          })}
        </Container>

        <Modal open={!!active} onClose={function () { setActive(null); }}>
          {active ? (
            <div>
              <div className="relative bg-gradient-to-br from-brand-600 to-navy h-28">
                <button onClick={function () { setActive(null); }} className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/20 text-white hover:bg-white/30" aria-label="Close"><Icon name="close" size={18} /></button>
              </div>
              <div className="px-6 pb-6 -mt-12">
                <Avatar name={t(active.name)} photo={active.photo} size={96} />
                <div className="mt-3 text-xl font-bold text-navy">{t(active.name)} <span className="text-base font-medium text-slate-400">{active.name.en}</span></div>
                <Pill className="mt-1.5 bg-brand-50 text-brand-700">{t(active.title)}</Pill>
                {active.interests ? (
                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{t(site.ui.interests)}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {active.interests[ctx.lang].map(function (it, i) {
                        return <span key={i} className="rounded-full bg-slate-100 text-slate-600 px-2.5 py-1 text-xs">{it}</span>;
                      })}
                    </div>
                  </div>
                ) : null}
                {active.bio ? (
                  <div className="mt-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{t(site.ui.bio)}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{t(active.bio)}</p>
                  </div>
                ) : null}
                <MemberLinks member={active} className="mt-5" />
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }

  /* ============================ RESEARCH ============================ */
  function ToolHubCard(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const tool = props.tool;
    const c = toolColor(props.color);
    return (
      <Card onClick={function () { navigate("/tools/" + tool.id); }} className="p-5 h-full flex flex-col">
        <div className={cx("h-10 w-10 rounded-xl grid place-items-center mb-3", c.icon)}>
          <Icon name={TOOLCAT_ICON[tool.categoryId] || "layers"} size={20} />
        </div>
        <h4 className="font-semibold text-navy leading-snug">{t(tool.name)}</h4>
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed flex-1">{t(tool.summary)}</p>
        <div className={cx("mt-3 inline-flex items-center gap-1 text-sm font-medium", c.text)}>
          {t(window.DATA.site.ui.readMore)}<Icon name="arrowRight" size={15} />
        </div>
      </Card>
    );
  }

  function ToolHub() {
    const ctx = JL.useLang(); const t = ctx.t;
    const data = window.DATA.tools;
    const [cat, setCat] = useState("all");
    const items = cat === "all" ? data.items : data.items.filter(function (x) { return x.categoryId === cat; });

    return (
      <div>
        <div className="mb-6"><FilterChips options={data.categories} value={cat} onChange={setCat} allLabel={window.DATA.site.ui.all} /></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(function (tool, i) {
            const c = data.categories.find(function (x) { return x.id === tool.categoryId; });
            return <Reveal key={tool.id} delay={(i % 6) * 40}><ToolHubCard tool={tool} color={c ? c.color : "blue"} /></Reveal>;
          })}
        </div>
      </div>
    );
  }

  function ResearchSection(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const s = props.section;
    const c = toolColor(props.color);
    return (
      <div>
        <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
          <span className={cx("h-2 w-2 rounded-full", c.dot)} />{t(s.title)}
        </h3>
        {s.type === "tags" ? (
          <div className="flex flex-wrap gap-2">
            {s.items.map(function (it, i) { return <span key={i} className={cx("rounded-full px-3 py-1.5 text-sm font-medium", c.chip)}>{t(it)}</span>; })}
          </div>
        ) : null}
        {s.type === "cards" ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {s.items.map(function (it, i) {
              return <Card key={i} className="p-5" hover={false}><div className="font-semibold text-navy">{t(it.title)}</div><p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{t(it.desc)}</p></Card>;
            })}
          </div>
        ) : null}
        {s.type === "links" ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {s.items.map(function (it, i) {
              const hasUrl = !!it.url;
              return (
                <Card key={i} className="p-5" hover={hasUrl}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-semibold text-navy">{t(it.title)}</div>
                    <Icon name="link" size={16} className="text-slate-300 shrink-0" />
                  </div>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{t(it.desc)}</p>
                  {hasUrl
                    ? <a href={it.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline">{t(window.DATA.site.ui.readMore)}<Icon name="external" size={14} /></a>
                    : <span className="mt-3 inline-block text-xs text-slate-400">{ctx.lang === "zh" ? "連結待補充" : "Link coming soon"}</span>}
                </Card>
              );
            })}
          </div>
        ) : null}
        {s.type === "faq" ? (
          <div className="space-y-3">
            {s.items.map(function (it, i) {
              return (
                <details key={i} className="group rounded-xl border border-slate-200 bg-white p-4">
                  <summary className="flex items-center justify-between cursor-pointer font-medium text-navy list-none">
                    {t(it.q)}<Icon name="chevronDown" size={18} className="text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{t(it.a)}</p>
                </details>
              );
            })}
          </div>
        ) : null}
        {s.type === "note" ? (
          <p className="text-slate-600 leading-relaxed">{t(s.note)}</p>
        ) : null}
      </div>
    );
  }

  function SubAreaView(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const sa = props.subArea;
    const color = props.color;
    return (
      <div className="space-y-8">
        <p className="text-slate-600 leading-relaxed">{t(sa.intro)}</p>
        {sa.equipment ? (
          <div className={cx("rounded-xl p-4 flex items-start gap-3", toolColor(color).soft)}>
            <Icon name="cpu" size={18} className={cx("mt-0.5", toolColor(color).text)} />
            <div><span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{ctx.lang === "zh" ? "實驗設備" : "Equipment"}</span><div className="text-sm text-slate-600">{t(sa.equipment)}</div></div>
          </div>
        ) : null}
        {sa.toolHub ? <ToolHub /> : null}
        {sa.sections ? sa.sections.map(function (s) { return <ResearchSection key={s.id} section={s} color={color} />; }) : null}
      </div>
    );
  }

  function ResearchPage(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const areas = window.DATA.research.areas;
    const route = props.route;

    const activeId = (route && route.sub && areas.some(function (a) { return a.id === route.sub; })) ? route.sub : areas[0].id;
    const area = areas.find(function (a) { return a.id === activeId; });
    const color = AREA_COLOR[area.id] || "blue";

    const [subIdx, setSubIdx] = useState(0);
    useEffect(function () { setSubIdx(0); }, [activeId]);

    return (
      <div>
        <PageHero eyebrow={t(site.pages.research.subtitle)} title={t(site.pages.research.title)} subtitle={t(site.pages.research.subtitle)} />

        {/* Area tabs */}
        <div className="sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
          <Container>
            <div className="flex gap-1 overflow-x-auto no-scrollbar py-2">
              {areas.map(function (a) {
                const on = a.id === activeId;
                const c = toolColor(AREA_COLOR[a.id]);
                return (
                  <button key={a.id} type="button" onClick={function () { navigate("/research/" + a.id); }}
                    className={cx("whitespace-nowrap inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      on ? cx(c.soft, c.text, "ring-1", c.ring) : "text-slate-500 hover:text-navy hover:bg-slate-50")}>
                    <Icon name={AREA_ICON[a.id] || "flask"} size={16} />{t(a.name)}
                  </button>
                );
              })}
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <Reveal>
            <div className="flex items-start gap-4 mb-8">
              <div className={cx("h-14 w-14 rounded-2xl grid place-items-center shrink-0", toolColor(color).icon)}><Icon name={AREA_ICON[area.id] || "flask"} size={26} /></div>
              <div>
                <h2 className="text-2xl font-bold text-navy">{t(area.name)}</h2>
                <p className="mt-1 text-slate-500">{t(area.tagline)}</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-3xl mb-10">{t(area.intro)}</p>
          </Reveal>

          {area.subAreas ? (
            <div>
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-4">
                {area.subAreas.map(function (sa, i) {
                  const on = i === subIdx;
                  return (
                    <button key={sa.id} type="button" onClick={function () { setSubIdx(i); }}
                      className={cx("rounded-xl px-4 py-2 text-sm font-semibold transition-colors", on ? "bg-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200")}>
                      {t(sa.name)}
                    </button>
                  );
                })}
              </div>
              <SubAreaView subArea={area.subAreas[subIdx]} color={color} />
            </div>
          ) : (
            <div className="space-y-10">
              {area.sections.map(function (s) { return <ResearchSection key={s.id} section={s} color={color} />; })}
            </div>
          )}
        </Container>
      </div>
    );
  }

  /* ========================== PUBLICATIONS ========================== */
  function PubItem(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const p = props.item;
    const typeObj = window.DATA.publications.types.find(function (x) { return x.id === p.type; });
    const [open, setOpen] = useState(false);
    return (
      <Card className="p-5" hover={false}>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="rounded-md bg-navy/90 text-white px-2 py-0.5 text-[11px] font-semibold">{typeObj ? t(typeObj.label) : p.type}</span>
          <span className="text-xs font-semibold text-slate-400">{p.year}</span>
          {p.featured ? <span className="rounded-md bg-amber-100 text-amber-700 px-2 py-0.5 text-[11px] font-semibold inline-flex items-center gap-1"><Icon name="sparkles" size={11} />{ctx.lang === "zh" ? "精選" : "Featured"}</span> : null}
        </div>
        <h3 className="font-semibold text-navy leading-snug">{t(p.title)}</h3>
        <div className="mt-1.5 text-sm text-slate-500">{t(p.authors)}</div>
        <div className="mt-0.5 text-sm text-slate-400 italic">{t(p.venue)}{p.detail && t(p.detail) ? " · " + t(p.detail) : ""}</div>
        {!props.compact ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {(p.topics || []).map(function (tid) {
              const topic = window.DATA.publications.topics.find(function (x) { return x.id === tid; });
              return topic ? <span key={tid} className="rounded-full bg-slate-100 text-slate-500 px-2.5 py-0.5 text-xs">{t(topic.label)}</span> : null;
            })}
            {p.doi ? <a href={"https://doi.org/" + p.doi} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-brand-600 hover:underline inline-flex items-center gap-1">DOI<Icon name="external" size={12} /></a> : null}
            {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-brand-600 hover:underline inline-flex items-center gap-1">{ctx.lang === "zh" ? "連結" : "Link"}<Icon name="external" size={12} /></a> : null}
            {p.abstract ? <button type="button" onClick={function () { setOpen(!open); }} className="text-xs font-medium text-slate-500 hover:text-navy inline-flex items-center gap-1">{ctx.lang === "zh" ? "摘要" : "Abstract"}<Icon name="chevronDown" size={12} className={cx("transition-transform", open && "rotate-180")} /></button> : null}
          </div>
        ) : null}
        {!props.compact && open && p.abstract ? <p className="mt-3 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">{t(p.abstract)}</p> : null}
      </Card>
    );
  }

  function PublicationsPage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const data = window.DATA.publications;
    const [type, setType] = useState("all");
    const [topic, setTopic] = useState("all");
    const [q, setQ] = useState("");

    const filtered = useMemo(function () {
      const ql = q.trim().toLowerCase();
      return data.items.filter(function (p) {
        if (type !== "all" && p.type !== type) return false;
        if (topic !== "all" && (!p.topics || p.topics.indexOf(topic) < 0)) return false;
        if (ql) {
          const hay = (t(p.title) + " " + t(p.authors) + " " + t(p.venue)).toLowerCase();
          if (hay.indexOf(ql) < 0) return false;
        }
        return true;
      }).sort(function (a, b) { return b.year - a.year; });
    }, [type, topic, q, ctx.lang]);

    return (
      <div>
        <PageHero eyebrow={t(site.pages.publications.subtitle)} title={t(site.pages.publications.title)} subtitle={t(site.pages.publications.subtitle)} />
        <Container className="py-12">
          <div className="space-y-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{t(site.ui.type)}</div>
              <FilterChips options={data.types} value={type} onChange={setType} allLabel={site.ui.all} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{t(site.ui.topic)}</div>
              <FilterChips options={data.topics} value={topic} onChange={setTopic} allLabel={site.ui.all} />
            </div>
            <div className="relative max-w-sm">
              <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input value={q} onChange={function (e) { setQ(e.target.value); }} placeholder={t(site.ui.search)}
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-300" />
            </div>
          </div>

          <div className="text-sm text-slate-400 mb-4">{filtered.length} {ctx.lang === "zh" ? "筆" : "items"}</div>
          {filtered.length ? (
            <div className="grid gap-4">
              {filtered.map(function (p, i) { return <Reveal key={p.id} delay={(i % 8) * 30}><PubItem item={p} /></Reveal>; })}
            </div>
          ) : <div className="text-center text-slate-400 py-16">{t(site.ui.noResults)}</div>}
        </Container>
      </div>
    );
  }

  /* ============================== AWARDS ============================== */
  function AwardsPage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const data = window.DATA.awards;
    const [type, setType] = useState("all");

    const filtered = data.items.filter(function (a) { return type === "all" || a.type === type; }).sort(function (a, b) { return b.year - a.year; });
    const years = [];
    filtered.forEach(function (a) { if (years.indexOf(a.year) < 0) years.push(a.year); });

    function typeLabel(id) { const x = data.types.find(function (y) { return y.id === id; }); return x ? t(x.label) : id; }

    return (
      <div>
        <PageHero eyebrow={t(site.pages.awards.subtitle)} title={t(site.pages.awards.title)} subtitle={t(site.pages.awards.subtitle)} />
        <Container className="py-12">
          <div className="mb-10"><FilterChips options={data.types} value={type} onChange={setType} allLabel={site.ui.all} /></div>

          {filtered.length ? (
            <div className="space-y-10">
              {years.map(function (yr) {
                return (
                  <div key={yr} className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="grid place-items-center h-10 w-10 rounded-full bg-navy text-white font-bold text-sm">{String(yr).slice(2)}</span>
                      <span className="text-lg font-bold text-navy">{yr}</span>
                      <span className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {filtered.filter(function (a) { return a.year === yr; }).map(function (a, i) {
                        return (
                          <Reveal key={a.id} delay={i * 50}>
                            <Card className="p-5 h-full">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="grid place-items-center h-9 w-9 rounded-lg bg-amber-100 text-amber-600"><Icon name="award" size={18} /></span>
                                <span className="rounded-md bg-slate-100 text-slate-500 px-2 py-0.5 text-[11px] font-semibold">{typeLabel(a.type)}</span>
                              </div>
                              <h3 className="font-semibold text-navy leading-snug">{t(a.title)}</h3>
                              <div className="mt-1.5 text-sm text-brand-700 font-medium">{t(a.recipient)}</div>
                              <div className="text-xs text-slate-400">{t(a.org)}</div>
                              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t(a.desc)}</p>
                            </Card>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : <div className="text-center text-slate-400 py-16">{t(site.ui.noResults)}</div>}
        </Container>
      </div>
    );
  }

  /* =============================== NEWS =============================== */
  function NewsCard(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const n = props.item;
    const [open, setOpen] = useState(false);
    const cat = window.DATA.news.categories.find(function (x) { return x.id === n.category; });
    const tagDefs = window.DATA.news.tags;
    return (
      <Card className="overflow-hidden h-full flex flex-col" hover={false}>
        <ImagePlaceholder src={n.image} className="h-40" icon="news" />
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {n.pinned ? <span className="inline-flex items-center gap-1 rounded-md bg-brand-600 text-white px-2 py-0.5 text-[11px] font-semibold"><Icon name="pin" size={11} />{t(window.DATA.site.ui.pinned)}</span> : null}
            {cat ? <span className="rounded-md bg-slate-100 text-slate-500 px-2 py-0.5 text-[11px] font-semibold">{t(cat.label)}</span> : null}
            <span className="text-xs text-slate-400 inline-flex items-center gap-1"><Icon name="calendar" size={12} />{n.date}</span>
          </div>
          <h3 className="font-semibold text-navy leading-snug">{t(n.title)}</h3>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{t(n.summary)}</p>
          {n.tags && n.tags.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {n.tags.map(function (tid) {
                const td = tagDefs.find(function (x) { return x.id === tid; });
                return td ? <span key={tid} className="rounded-full bg-brand-50 text-brand-600 px-2 py-0.5 text-[11px]">#{t(td.label)}</span> : null;
              })}
            </div>
          ) : null}
          <div className="mt-4">
            {n.url ? <a href={n.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline">{t(window.DATA.site.ui.readMore)}<Icon name="external" size={14} /></a>
              : n.body ? <button type="button" onClick={function () { setOpen(!open); }} className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline">{t(window.DATA.site.ui.readMore)}<Icon name="chevronDown" size={14} className={cx("transition-transform", open && "rotate-180")} /></button> : null}
          </div>
          {open && n.body ? <p className="mt-3 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">{t(n.body)}</p> : null}
        </div>
      </Card>
    );
  }

  function NewsPage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const data = window.DATA.news;
    const [cat, setCat] = useState("all");
    const [tag, setTag] = useState("all");

    const filtered = data.items.filter(function (n) {
      if (cat !== "all" && n.category !== cat) return false;
      if (tag !== "all" && (!n.tags || n.tags.indexOf(tag) < 0)) return false;
      return true;
    }).sort(function (a, b) {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    });

    return (
      <div>
        <PageHero eyebrow={t(site.pages.news.subtitle)} title={t(site.pages.news.title)} subtitle={t(site.pages.news.subtitle)} />
        <Container className="py-12">
          <div className="space-y-4 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{t(site.ui.category)}</div>
              <FilterChips options={data.categories} value={cat} onChange={setCat} allLabel={site.ui.all} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{ctx.lang === "zh" ? "標籤" : "Tags"}</div>
              <FilterChips options={data.tags} value={tag} onChange={setTag} allLabel={site.ui.all} />
            </div>
          </div>
          {filtered.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(function (n, i) { return <Reveal key={n.id} delay={(i % 6) * 50}><NewsCard item={n} /></Reveal>; })}
            </div>
          ) : <div className="text-center text-slate-400 py-16">{t(site.ui.noResults)}</div>}
        </Container>
      </div>
    );
  }

  /* ============================ ACTIVITIES ============================ */
  function ActivitiesPage() {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const items = window.DATA.activities.items.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    return (
      <div>
        <PageHero eyebrow={t(site.pages.activities.subtitle)} title={t(site.pages.activities.title)} subtitle={t(site.pages.activities.subtitle)} />
        <Container className="py-12 space-y-10">
          {items.map(function (a, idx) {
            const photos = a.photos && a.photos.length ? a.photos : [null, null, null];
            return (
              <Reveal key={a.id} delay={(idx % 4) * 60}>
                <Card className="overflow-hidden" hover={false}>
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 grid grid-cols-2 gap-1 p-1 bg-slate-50">
                      {photos.slice(0, 4).map(function (src, i) {
                        return <ImagePlaceholder key={i} src={src || undefined} className={cx("aspect-[4/3] rounded-lg", i === 0 ? "col-span-2" : "")} icon="activity" />;
                      })}
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <Icon name="calendar" size={13} />{a.date}
                        {a.location ? <React.Fragment><span>·</span><Icon name="pin" size={13} />{t(a.location)}</React.Fragment> : null}
                      </div>
                      <h3 className="text-lg font-bold text-navy">{t(a.title)}</h3>
                      {a.tags && a.tags.length ? (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {a.tags.map(function (tg, i) { return <span key={i} className="rounded-full bg-brand-50 text-brand-600 px-2.5 py-0.5 text-xs">{t(tg)}</span>; })}
                        </div>
                      ) : null}
                      <p className="mt-3 text-slate-600 leading-relaxed">{t(a.description)}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </Container>
      </div>
    );
  }

  /* =========================== TOOL DETAIL =========================== */
  function ToolDetailPage(props) {
    const ctx = JL.useLang(); const t = ctx.t;
    const site = window.DATA.site;
    const data = window.DATA.tools;
    const id = props.route ? props.route.sub : null;
    const tool = data.items.find(function (x) { return x.id === id; });

    if (!tool) {
      return (
        <Container className="py-24 text-center">
          <div className="text-slate-400 mb-4">{ctx.lang === "zh" ? "找不到這個工具。" : "Tool not found."}</div>
          <Button to="/research/case" variant="secondary" icon="arrowRight">{t(site.ui.backToTools)}</Button>
        </Container>
      );
    }
    const catObj = data.categories.find(function (x) { return x.id === tool.categoryId; });
    const color = catObj ? catObj.color : "blue";
    const c = toolColor(color);
    const related = data.items.filter(function (x) { return x.categoryId === tool.categoryId && x.id !== tool.id; }).slice(0, 3);

    return (
      <div>
        <section className={cx("border-b border-slate-100", c.soft)}>
          <Container className="py-12">
            <button type="button" onClick={function () { navigate("/research/case"); }} className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-navy mb-6">
              <Icon name="arrowRight" size={15} className="rotate-180" />{t(site.ui.backToTools)}
            </button>
            <div className="flex items-start gap-4">
              <div className={cx("h-14 w-14 rounded-2xl grid place-items-center shrink-0 bg-white shadow-sm", c.text)}><Icon name={TOOLCAT_ICON[tool.categoryId] || "layers"} size={26} /></div>
              <div>
                <div className={cx("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold mb-2 bg-white", c.text)}>{catObj ? t(catObj.label) : ""}</div>
                <h1 className="text-3xl font-extrabold text-navy tracking-tight">{t(tool.name)}</h1>
                <p className="mt-2 text-slate-600 max-w-2xl">{t(tool.summary)}</p>
              </div>
            </div>
          </Container>
        </section>

        <Container className="py-12 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <h2 className="text-lg font-bold text-navy mb-3">{t(site.ui.definition)}</h2>
              <p className="text-slate-600 leading-relaxed">{t(tool.definition)}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-lg font-bold text-navy mb-3">{t(site.ui.framework)}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {tool.framework.map(function (f, i) {
                  return (
                    <div key={i} className="rounded-xl border border-slate-200 p-4">
                      <div className="flex items-center gap-2">
                        <span className={cx("grid place-items-center h-6 w-6 rounded-full text-xs font-bold text-white shrink-0", c.dot)}>{i + 1}</span>
                        <div className="font-semibold text-navy">{t(f.title)}</div>
                      </div>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t(f.desc)}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-lg font-bold text-navy mb-3">{t(site.ui.example)}</h2>
              <div className={cx("rounded-xl p-5 flex gap-3", c.soft)}>
                <Icon name="quote" size={20} className={cx("shrink-0", c.text)} />
                <p className="text-slate-700 leading-relaxed">{t(tool.example)}</p>
              </div>
            </Reveal>
          </div>

          {/* sidebar */}
          <div className="space-y-6">
            <Reveal>
              <Card className="p-5" hover={false}>
                <h3 className="font-bold text-navy mb-3">{t(site.ui.whenToUse)}</h3>
                <ul className="space-y-2">
                  {tool.whenToUse[ctx.lang].map(function (it, i) {
                    return <li key={i} className="flex items-start gap-2 text-sm text-slate-600"><Icon name="check" size={16} className={cx("mt-0.5 shrink-0", c.text)} />{it}</li>;
                  })}
                </ul>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="p-5" hover={false}>
                <h3 className="font-bold text-navy mb-3">{ctx.lang === "zh" ? "教學資源" : "Teaching slides"}</h3>
                {tool.deckUrl
                  ? <Button href={tool.deckUrl} external icon="doc" className="w-full">{t(site.ui.viewSlides)}</Button>
                  : <div className="flex items-center gap-2 text-sm text-slate-400"><Icon name="doc" size={16} />{t(site.ui.slidesComingSoon)}</div>}
                {tool.references && tool.references.length ? (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">{t(site.ui.references)}</div>
                    <ul className="space-y-1.5">
                      {tool.references.map(function (r, i) {
                        return <li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-600 hover:underline inline-flex items-center gap-1">{t(r.label)}<Icon name="external" size={12} /></a></li>;
                      })}
                    </ul>
                  </div>
                ) : null}
              </Card>
            </Reveal>

            {related.length ? (
              <Reveal>
                <Card className="p-5" hover={false}>
                  <h3 className="font-bold text-navy mb-3">{ctx.lang === "zh" ? "同類工具" : "Related tools"}</h3>
                  <div className="space-y-2">
                    {related.map(function (r) {
                      return (
                        <button key={r.id} type="button" onClick={function () { navigate("/tools/" + r.id); }}
                          className="w-full text-left flex items-center justify-between gap-2 rounded-lg px-3 py-2 hover:bg-slate-50 text-sm text-slate-600">
                          {t(r.name)}<Icon name="arrowRight" size={14} className="text-slate-300" />
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </Reveal>
            ) : null}
          </div>
        </Container>
      </div>
    );
  }

  /* ============================= NOT FOUND ============================= */
  function NotFoundPage() {
    const ctx = JL.useLang();
    return (
      <Container className="py-32 text-center">
        <div className="text-6xl font-extrabold text-slate-200">404</div>
        <p className="mt-4 text-slate-500">{ctx.lang === "zh" ? "找不到頁面。" : "Page not found."}</p>
        <div className="mt-6"><Button to="/" icon="home">{ctx.lang === "zh" ? "回首頁" : "Home"}</Button></div>
      </Container>
    );
  }

  JL.NewsCard = NewsCard;
  JL.PubItem = PubItem;
  JL.pages = {
    home: HomePage,
    about: AboutPage,
    team: TeamPage,
    research: ResearchPage,
    publications: PublicationsPage,
    awards: AwardsPage,
    news: NewsPage,
    activities: ActivitiesPage,
    tools: ToolDetailPage,
    notFound: NotFoundPage,
  };
})();
