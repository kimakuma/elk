import { search, write } from '../../lib/elasticsearch/client.js';
import * as indexConfig from './config/index-config.js';

export const searchModelFn = async (params) => {
    try {
        const queryDAO = indexConfig.conf();
        const index = queryDAO.index.join(',');
        const field = queryDAO.field;
        const body = queryDAO.body;
        const { filter, keyword, size } = params;

        body.query.bool.must.push({
            multi_match: {
                fields: 
                    filter == undefined ? queryDAO.field.search : filter + '.korean',
                query: keyword
            }
        })
    
        field.highlight.forEach(item => {
            body.highlight.fields[item] = {};
        })

        body._source = field.result;
        body.size = size;
    
        const searchResult = await search({
            index,
            body
        });

        return { searchResult, index };
        } catch (err) {
        throw err;
    }
}

export const postModelFn = async (bodys) => {
    try {
        const postDAO = indexConfig.postConf();
        const index = postDAO.index;
        const docType = postDAO.type;
        const body = JSON.stringify(bodys);
    
        const postResult = await write(
            'post',
            index,
            docType,
            body
        );

        return { postResult, index };
        } catch (err) {
        throw err;
    }
}