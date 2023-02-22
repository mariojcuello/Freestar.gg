const ContentWrapper = (props) => {
    return (
        <div className="max-w-[85rem] px-4 mt-5 mb-2 lg:px-8 lg:mt-5 mx-auto">
            {props.children}
        </div>
    );
}

export default ContentWrapper