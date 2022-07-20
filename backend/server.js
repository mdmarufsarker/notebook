import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

const port = 7777;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})