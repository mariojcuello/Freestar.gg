const SystemDesciption = ({ system }) => {
  return (
    <div className="text-lg mx-5 mt-5" dangerouslySetInnerHTML={{ __html: system.description }}/>

  );
};

export default SystemDesciption;
