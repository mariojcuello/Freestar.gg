const DetailsTableRow = (props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {props.children}
    </tr>
  );
};

export default DetailsTableRow;
