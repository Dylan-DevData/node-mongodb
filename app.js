import express from 'express';
import 'dotenv/config';
import router from './routes/routes.js';
import { dbConnect } from './lib/mongoconnect.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('api ok');
});

const startServer = async () => {
    await dbConnect();
    app.listen(PORT, () => {
        console.log(`Serveur demarre http://localhost:${PORT}`);
    });
};

startServer();
