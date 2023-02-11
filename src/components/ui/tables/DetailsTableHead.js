const DetailsTableHead = (props) => {
    return (
        <th
              scope="row"
              class="px-6 pt-[0.75rem] pb-[0.75rem] font-bold text-gray-900 whitespace-nowrap dark:text-white"
            >
            {props.children}</th>
    )
}

export default DetailsTableHead