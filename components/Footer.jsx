const Footer = ({ bgColor = "bg-[#AA1E2E]" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`h-12 ${bgColor} text-[#FFFCF4] flex items-center justify-center px-4`}>
      <div className="text-center text-[0.6rem] xl:text-base">
        Copyright © {currentYear} The Wok all rights reserved. Powered by&nbsp;
        <a
          href="https://advertcommunications.com/"
          target="_blank"
          className="hover:underline"
        >
          Advert Communications
        </a>
      </div>
    </footer>
  );
};

export default Footer;
