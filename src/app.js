import express from 'express';
import { checkUrlStatus } from './check.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post('/check-url', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const result = await checkUrlStatus(url);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default app;
