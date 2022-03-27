import dotenv from 'dotenv';
import server from './config/app';

dotenv.config();
const app = server();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
