function SkillCards({
  logo,
  name,
  index,
}: {
  logo: string;
  name: string;
  index: number;
}) {
  const delay = 50 * index; // Délai basé sur la position de la carte
  return (
    <article
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={delay}
      className=" h-[105px] w-[80px]   lg:h-[150px] lg:w-[115px] bg-skill-cards rounded-lg flex 
    justify-center items-center flex-col border-2 border-gray-300 hover:scale-[1.02] transition duration-300 shadow hover:shadow-primary "
    >
      <div className="bg-white rounded-full flex items-center p-1">
        <img
          src={logo}
          alt="logo's technos"
          className="h-[50px] w-[50px]  lg:h-[75px] lg:w-[75px] rounded-full"
        />
      </div>
      <div className="mt-2 text-[12px] lg:text-base">{name}</div>
    </article>
  );
}

export default SkillCards;
