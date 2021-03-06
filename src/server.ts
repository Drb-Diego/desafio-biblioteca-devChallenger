import dotenv from 'dotenv';
import app from './config/app';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
