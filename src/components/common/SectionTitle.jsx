const SectionTitle = (props) => {
  return (
    <div>
      <h1 className="text-6xl text-[#14532d] font-bold">{props.title}</h1>
      <p>{props.des}</p>
    </div>
  );
};

export default SectionTitle;
