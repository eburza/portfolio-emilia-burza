function filterProjectList(dataList) {
    if (!dataList || !Array.isArray(dataList)) {
        return null
    }

    return (
        <ul className='details-list'>
            {dataList.map((listItem, index) => (
                <li key={index} className='project-list-item text-paragraph'>
                    <span className='text-paragraph-bold'>{listItem.bold}:</span> {listItem.text}
                    {listItem.details && (
                        <ul className='nested-details-list'>
                            {listItem.details.map((detail, detailIndex) => (
                                <li key={`${index}-${detailIndex}`} className='nested-list-item text-paragraph'>
                                    {detail.text}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

export { filterProjectList }