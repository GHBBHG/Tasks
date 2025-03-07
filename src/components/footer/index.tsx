export const Footer = () => {
  return (
    <div className="flex bg-neutral-950 gap60 w-full h-24 items-center text-center justify-center text-white text-4xl font-medium">
      <div className="flex items-center">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5554992299323&text=%F0%9F%98%80%20Ol%C3%A1%2C%20tenho%20interesse%20em%20seus%20produtos!"
        >
          <div
            title="Suporte"
            className="text-white text-base flex gap-1 px-3 py-1 items-center cursor-pointer"
          >
            <img src="/assets/suporte-icon.png" className="w-8 h-8" />
          </div>
        </a>
      </div>
      <div className="flex items-center">
        <a target="_blank" href="https://ghb-api.glitch.me">
          <div
            title="Api"
            className="text-white text-base flex gap-1 px-3 py-1 items-center cursor-pointer"
          >
            <img src="/assets/ghb-api.png" className="w-8 h-8" />
          </div>
        </a>
      </div>
    </div>
  );
};
