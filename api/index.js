import express from 'express';
import { configApp } from './configs/index.js';
import { appRoutes } from './routes/index.js';

const app = express();

configApp(app);

appRoutes(app);
