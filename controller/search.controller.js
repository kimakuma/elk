import { search_service } from '../service/search.service.js';

const search_controller = async (req, res) => {
    try {
        const order = req.body;

        const searched = await search_service(order);
        
        console.log(res);
        console.log(searched);
    } catch (er) {
        console.log('ERR!!!!!!!!!');
    }
};

export { search_controller };