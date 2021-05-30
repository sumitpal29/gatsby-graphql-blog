import React from 'react'

function LocalMarkdownRenderer({ pageContext: {slug} }) {
    return (
        <div>
            {slug}
        </div>
    )
}

export default LocalMarkdownRenderer
