const ContentWrapper = (props) => {
    return (
        <div className="max-w-[85rem] px-8 mt-9 mb-2 lg:px-8 lg:mt-8 mx-auto">
            {props.children}
        </div>
    );
}

export default ContentWrapper