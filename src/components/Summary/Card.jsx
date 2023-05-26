const Card = ({ label, score, color, icon, alt, gradient }) => {
  return (
    <div className="flex flex-col gap-y-3 xl:w-[350px]">
      <div className={`gradient-${gradient}  flex w-full justify-between rounded-lg p-3`}>
        <div className="flex gap-x-3">
          <img alt={alt} src={icon} />
          <h3 className={color}>{label}</h3>
        </div>

        <h3>
          {score} <span className="text-neutral-light-lavender">/ 100</span>
        </h3>
      </div>
    </div>
  );
};

export default Card;
