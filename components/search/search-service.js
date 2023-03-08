import * as searchModel from './search-model.js';

export const searchServiceFn = async (params) => {
    const queryDTO = {
        filter: params.filter ? params.filter : undefined,
        keyword: params.keyword,
        size: params.size
    }

    const { searchResult, index } = await searchModel.searchModelFn(queryDTO);            

    const body = searchResult.body.hits.hits.map(item => {
        return {
            ...item._source,
            highlight: item.highlight
        }
    });

    const response = {
        meta: {
            index,
            took: searchResult.body.took,
            total: searchResult.body.hits.total.value
        },
        body
    }

    return response;
}

export const postServiceFn = async (bodys) => {
    const bodyDTO = {
        title: bodys.title,
        content: bodys.content,
        reporter: bodys.reporter ? bodys.reporter : '무명의 작성자',
        category: bodys.category ? bodys.category : '기타',
        id: bodys.id,
        nid: bodys.nid,
        start_dttm: bodys.start_dttm,
        update_dttm: bodys.update_dttm
    }

    const { postResult, index } = await searchModel.postModelFn(bodyDTO);

    const response = {
        meta: {
            index,
            result: postResult.body.result
        },
        body: {
            id: postResult.body._id,
            title: bodyDTO.title
        }
    }

    return response;
}