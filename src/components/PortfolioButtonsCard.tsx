function PortfolioButtonsCard({ link, text }: { link: string; text: string }) {
  return (
    <div className="">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn block w-full text-center py-2"
      >
        {text}
      </a>
    </div>
  );
}
export default PortfolioButtonsCard;
