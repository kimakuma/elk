import { Client } from '@elastic/elasticsearch';
import config from 'config';

const client = new Client({
    node: config.get('esConfig.nodes')
})

export const search = async (params) => {
    try {
        const result = await client.search(params);

        return result;
    } catch (err) {
        handleError(err);
    }
}

export const write = async (mode, index, docType, payload, _id) => {
    const param = {
      refresh: true,
      index: index,
      type: docType,
      id: _id,
      body: payload
    };
  
    try {
      const result = await client.index(param);

      return result;
    } catch (err) {
      handleError(err);
    }
  };