export const BotanicalDivider = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 10C20 5 30 15 40 10C50 5 60 15 70 10C80 5 90 15 100 10C110 5 120 15 130 10C140 5 150 15 160 10C170 5 180 15 190 10"
          stroke="#7A9E7E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <circle cx="40" cy="10" r="2" fill="#D4798A" opacity="0.6" />
        <circle cx="100" cy="10" r="2.5" fill="#C9A84C" opacity="0.6" />
        <circle cx="160" cy="10" r="2" fill="#7A9E7E" opacity="0.6" />
      </svg>
    </div>
  );
};
