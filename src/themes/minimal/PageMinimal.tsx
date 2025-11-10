import {
  Clock,
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  Gauge,
  GitCompareArrows,
  Send,
  Globe,
  Shield,
  CircleFadingArrowUp,
} from 'lucide-react';
import infoData from '@/data/info.json';

const PageMinimal = () => {
  return (
    <>
      {/* <div
        className="h-1 w-full "
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(155, 243, 159, 0.9) 0 16px, rgba(155, 243, 159, 0.082) 16px 24px, transparent 24px 28px)',
        }}></div> */}

      <main className="relative mx-auto max-w-3xl px-6 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(60% 60% at 50% 50%, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0) 70%)',
            }}></div>
        </div>

        <section className="relative overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-950/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-1 ring-neutral-800/60 backdrop-blur-sm">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(180deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 6px)',
            }}></div>

          <div className="relative p-6 md:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex   gap-4">
                <div className="relative">
                  <img
                    className=" max-w-[110px] sm:max-w-[120px] aspect-square rounded-lg  object-cover  filter-[contrast(1.05)] ring- ring-green-100"
                    alt="Портрет разработчика"
                    src={`/src/assets/profile.webp`}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight  text-neutral-100">
                    {infoData.name}
                  </h1>
                  <p className="mt-1 text-sm text-neutral-400"> {infoData.position}</p>
                  <div className="mt-auto inline-flex items-center gap-2 rounded-md border border-dashed border-green-100/40 px-1 sm:px-2.5 py-1 text-[10px] sm:text-xs text-green-100/90">
                    <Clock size={12.25} />
                    <span className="text-nowrap"> {infoData.status}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full sm:max-w-[150px]  gap-2">
                <a
                  href={`mailto:${infoData.contacts.email}`}
                  className="inline-flex  items-center gap-2 rounded-md bg-green-100 px-3.5 py-2 text-sm font-medium text-neutral-950 ring-1 ring-green-100/30 transition outline-none hover:bg-green-100 hover:ring-green-100/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100">
                  <Mail size={14} />
                  <span>Email</span>
                </a>
                {/* <a
                  href={`https://${infoData.contacts.portfolio}`}
                  className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-neutral-200 ring-1 ring-neutral-800/80 transition outline-none hover:text-green-100 hover:ring-green-100/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100">
                  <ArrowUpRight size={14} />
                  <span>Портфолио</span>
                </a> */}
                <a
                  href="https://disk.yandex.ru/i/0vAt0-gaChxicA"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-neutral-200 ring-1 ring-neutral-800/80 transition outline-none hover:text-green-100 hover:ring-green-100/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100">
                  <Download size={14} />
                  <span>PDF</span>
                </a>
              </div>
            </div>

            <div className="my-6 h-px w-full bg-neutral-800/80"></div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <p className="text-sm leading-relaxed text-neutral-300">{infoData.desc}</p>
                <ul className="mt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                  <li className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800/80 px-2 py-1">
                    <Code2 size={12.25} className="text-green-100" />
                    Next.js • Redux Toolkit • Headless CSS
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800/80 px-2 py-1">
                    <GitCompareArrows size={12.25} className="text-green-100" />
                    GraphQL • Node.js • Express • Docker
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800/80 px-2 py-1">
                    <Gauge size={12.25} className="text-green-100" />
                    Оптимизация
                  </li>
                  <li className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800/80 px-2 py-1">
                    <CircleFadingArrowUp size={12.25} className="text-green-100" />
                    Миграция/Рефакторинг
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg border border-neutral-800/80 p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Часовая зона</span>
                    <span className="text-neutral-300">UTC+3</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Ответ</span>
                    <span className="text-neutral-300">~24ч</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://t.me/alexxxixxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X"
                    className="inline-flex  px-2.5 py-1.5 text-xs flex-1 gap-x-1 items-center justify-center rounded-full bg-neutral-900/40 ring-1 ring-neutral-800/80 text-neutral-300 transition outline-none hover:bg-neutral-900 hover:text-neutral-100 hover:ring-neutral-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                    aria-label="X">
                    <Send size={13.75} />
                    <span>Telegram</span>
                  </a>
                  {/* <a
                    href={`https://${infoData.contacts.site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-neutral-300 ring-1 ring-neutral-800/80 transition outline-none hover:text-green-100 hover:ring-green-100/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100">
                    <Globe size={13.75} />
                    <span>{infoData.contacts.site}</span>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="my-6 h-px w-full bg-neutral-800/80"></div>

            {/* <div id="portfolio" className="grid gap-3 sm:grid-cols-2">
              <a
                href="#"
                className="group relative overflow-hidden rounded-lg border border-neutral-800/80 p-4 transition hover:border-orange-500/40 hover:bg-neutral-900/30">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-neutral-200">Static Site</div>

                  <ArrowUpRight
                    size={14}
                    className="h-4 w-4 text-neutral-400 transition group-hover:text-green-100"
                  />
                </div>
                <p className="mt-1.5 text-xs text-neutral-400">
                  Ultra-light marketing page with sub-100ms TTI.
                </p>
                <div className="mt-3 h-24 w-full overflow-hidden rounded border border-neutral-800/80">
                  <img
                    className="h-full w-full object-cover grayscale transition group-hover:grayscale-0"
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Project preview"
                  />
                </div>
              </a>
              <a
                href="#"
                className="group relative overflow-hidden rounded-lg border border-neutral-800/80 p-4 transition hover:border-orange-500/40 hover:bg-neutral-900/30">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-neutral-200">Docs Template</div>

                  <ArrowUpRight
                    size={14}
                    className="h-4 w-4 text-neutral-400 transition group-hover:text-green-100"
                  />
                </div>
                <p className="mt-1.5 text-xs text-neutral-400">
                  Monochrome docs with keyboard-friendly navigation.
                </p>
                <div className="mt-3 h-24 w-full overflow-hidden rounded border border-neutral-800/80">
                  <img
                    className="h-full w-full object-cover grayscale transition group-hover:grayscale-0"
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Project preview"
                  />
                </div>
              </a>
            </div> */}
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-between border-t border-neutral-800/80 px-6 py-4 md:px-8">
            {/* <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
              <span>
                ©<span className="tabular-nums">2025</span> {infoData.name}
              </span>
            </div> */}
            <div className="flex flex-col sm:flex-row sm:inline-flex items-center gap-3">
              <a
                href={`mailto:${infoData.contacts.email}`}
                className="text-xs text-neutral-300  decoration-neutral-700 underline-offset-4 transition hover:text-green-100 hover:decoration-green-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-100">
                {infoData.contacts.email}
              </a>

              {/* <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
                <Shield size={12.25} className="text-green-100" />
                <span>Трекеры отсутствуют</span>
              </span> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PageMinimal;
