import { ReactNode } from 'react';

interface OrnateFrameProps {
  children: ReactNode;
}

export const OrnateFrame = ({ children }: OrnateFrameProps) => {
  return (
    <div className="relative p-8">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="200" cy="150" rx="180" ry="130" stroke="#D4798A" strokeWidth="2" opacity="0.3" />
        <ellipse cx="200" cy="150" rx="190" ry="140" stroke="#7A9E7E" strokeWidth="1.5" opacity="0.2" />
        <circle cx="50" cy="50" r="4" fill="#C9A84C" opacity="0.5" />
        <circle cx="350" cy="50" r="4" fill="#C9A84C" opacity="0.5" />
        <circle cx="50" cy="250" r="4" fill="#C9A84C" opacity="0.5" />
        <circle cx="350" cy="250" r="4" fill="#C9A84C" opacity="0.5" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
