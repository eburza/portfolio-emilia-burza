
function filterProjectList(dataList) {

    if (!dataList || !Array.isArray(dataList)) {
        return null
    }

    return (
        <ul className='details-list'>
            {dataList.map((listItem, index) => (
                <li key={index} className='project-list-item text-paragraph'>
                    <span className='text-paragraph-bold'>{listItem.bold}:</span> {listItem.text}.
                </li>
            ))}
        </ul>
    )
}

export { filterProjectList }