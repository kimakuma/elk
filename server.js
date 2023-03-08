import { app } from './components/app.js';
import config from 'config';

const port = config.get('app.port');

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`)
});