const SystemDesciption = ({ system }) => {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: system.description }}></p>
    </div>
  );
};

export default SystemDesciption;
