
function filterProjectList(dataList) {

    if (!dataList || !Array.isArray(dataList)) {
        return null
    }

    return (
        <>
            {dataList.map((listItem, index) => (
                <p key={index} className='project-list-item text-paragraph'>
                    <span className='text-paragraph-bold'>{listItem.bold}:</span> {listItem.text}.
                </p>
            ))}
        </>
    )
}

export { filterProjectList }