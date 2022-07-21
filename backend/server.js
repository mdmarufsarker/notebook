import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express();
console.log(process.env.PORT);

app.listen(process.env.PORT || 7777, () => {
    console.log(`Server is running`);
    console.log(`http://localhost:${process.env.PORT || 7777}`);
})