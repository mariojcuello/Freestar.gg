const DetailsTableHead = (props) => {
    return (
        <th
              scope="row"
              className="px-6 pt-[0.3rem] pb-[0.3rem] font-bold text-gray-900 whitespace-nowrap dark:text-white"
            >
            {props.children}</th>
    )
}

export default DetailsTableHead