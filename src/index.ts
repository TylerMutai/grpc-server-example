import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// TODO: Implement gRPC services and JWT auth middleware

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});