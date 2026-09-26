

const AboutCard = ({title, description}) => {
  return (
    <div className="m-10 bg-gray-500 max-w-[500px] rounded-2xl hover:bg-blue-900 hover:scale-110 duration-700 px-5 py-10">
       <h3 className="py-2 text-white font-bold">{title}</h3>
      <p className="text-base leading-7 text-white font-semibold">{description}</p>
    </div>
  );
}

export default AboutCard;
