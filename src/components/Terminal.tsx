import { useState, useEffect } from 'react';

interface TerminalProps {
  lines: string[];
  delay?: number;
}

export const Terminal = ({ lines, delay = 50 }: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, line]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, displayedLines, delay]);

  return (
    <div className="font-mono text-terminal space-y-2">
      {displayedLines.map((line, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-matrix">$</span>
          <span>{line}</span>
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="flex items-center gap-2">
          <span className="text-matrix">$</span>
          <span>
            {lines[currentLine].substring(0, currentChar)}
            <span className="terminal-cursor text-matrix"></span>
          </span>
        </div>
      )}
    </div>
  );
};
