export const conf = () => {
    return {
        index: ['sedaily'],
        field: {
            search: ['category.korean', 'reporter', 'title.korean', 'content.korean'],
            highlight: ['category', 'reporter', 'title', 'content'],
            result: ['title']
        },
        body: {
            from: 0,
            query: {
                bool: {
                    must: [],
                    filter: [],
                    should: []
                }
            },
            highlight: {
                fields: {}
            },
            _source: []
        }
    }
}

export const postConf = () => {
    return {
        index: 'sedaily',
        type: '_doc'
    }
}