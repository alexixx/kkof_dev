import { useState } from 'react';
import { motion } from 'motion/react';
import './App.css';
import techData from './tech.json';

function App() {
  const [showTechs, setShowTechs] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="w-full max-w-2xl terminal-shadow  border-2   border-orange-100 ">
      <div className="border-b-2 px-4 py-3 flex items-center gap-2 border-orange-100">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-orange-100"></div>
          <div className="w-3 h-3 rounded-full bg-orange-100 opacity-50"></div>
          <div className="w-3 h-3 rounded-full bg-orange-100 opacity-30"></div>
        </div>
        <span className="text-xs ml-2 text-orange-100">terminal@portfolio:~$</span>
      </div>

      <div className="p-4 md:p-12 space-y-8">
        <div className="space-y-2">
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: '#FFA500', opacity: '0.7' }}>
            <span>root@system</span>
            <span>~</span>
            <span className="cursor-blink animate-blink">▮</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold glow-text tracking-tight text-orange-100">
            Alexey Kochetkov
          </h1>
          <p className="text-sm text-orange-100 opacity-[0.6]">
            $ whoami → Frontend/Full Stack Developer
          </p>
        </div>

        <div className="tech-container  group max-w-[320px]">
          <div
            className="cursor-pointer flex items-center gap-3 text-sm text-orange-100 opacity-[0.8] title-hover"
            onClick={() => setShowTechs(!showTechs)}>
            <span>$</span>
            <span className="font-medium">cat tech_stack.txt</span>
            <span className="text-xs opacity-60">[click to expand]</span>
          </div>
          {showTechs && (
            <div className="pl-6 space-y-1.5 text-sm text-orange-100">
              {Object.entries(techData).map(([key, value], idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="tech-item flex items-center gap-2">
                  <span className="opacity-60">├──</span>
                  <span>{value}</span>
                </motion.div>
              ))}
              <span
                className="cursor-pointer text-xs opacity-60"
                onClick={() => setShowTechs(false)}>
                [hide]
              </span>
            </div>
          )}
        </div>

        <div className="space-y-4 pt-4  border-t border-orange-100">
          <div
            className="cursor-pointer flex items-center gap-3 text-sm text-orange-100 opacity-[0.8] title-hover"
            onClick={() => setShowContacts(!showContacts)}>
            <span>$</span>
            <span className="font-medium">ls -la ./contacts/</span>
            <span className=" text-xs opacity-60">[click to expand]</span>
          </div>
          {showContacts && (
            <div className="pl-6 space-y-2.5 text-sm text-orange-100">
              <a
                href="mailto:a.kkof@yandex.ru"
                className="flex items-center gap-3 link-hover transition-all duration-200">
                <span className="opacity-60">→</span>
                <span className="opacity-60">email:</span>
                <span className="underline decoration-dotted underline-offset-4">
                  a.kkof@yandex.ru
                </span>
              </a>
              <a
                href="https://t.me/alexxxixxx"
                className="flex items-center gap-3 link-hover transition-all duration-200">
                <span className="opacity-60">→</span>
                <span className="opacity-60">telegram:</span>
                <span className="underline decoration-dotted underline-offset-4">@alexxxixxx</span>
              </a>
              <a
                href="tel:+79996122078"
                className="flex items-center gap-3 link-hover transition-all duration-200">
                <span className="opacity-60">→</span>
                <span className="opacity-60">phone:</span>
                <span className="underline decoration-dotted underline-offset-4">
                  +7 (999) 612-20-78
                </span>
              </a>
              <a
                href="https://github.com/alexixx"
                className="flex items-center gap-3 link-hover transition-all duration-200">
                <span className="opacity-60">→</span>
                <span className="opacity-60">github:</span>
                <span className="underline decoration-dotted underline-offset-4">
                  github.com/alexixx
                </span>
              </a>
              {/* <a
              href="https://kkof.ru"
              className="flex items-center gap-3 link-hover transition-all duration-200">
              <span className="opacity-60">→</span>
              <span className="opacity-60">portfolio:</span>
              <span className="underline decoration-dotted underline-offset-4">kkof.ru</span>
            </a> */}
            </div>
          )}
        </div>

        <div className="pt-6 text-xs flex items-center justify-between text-orange-100 opacity-50 border-t">
          <span>$ uptime: since 2019</span>
          <span className="cursor-blink animate-blink">▮</span>
        </div>
      </div>
    </div>
  );
}

export default App;
