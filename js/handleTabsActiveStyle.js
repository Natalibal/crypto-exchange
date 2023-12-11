const handleTabsActiveStyle = (nodes, selector, className) => {
    nodes.forEach(node => {
        if (node.dataset.info.toLowerCase() === selector) {
            node.classList.add(className)
        } else {
            node.classList.remove(className)
        }
    })
}

export default handleTabsActiveStyle