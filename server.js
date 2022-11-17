#!/usr/bin/env node

import { roll } from './lib/roll.js'
import express from "express"
import minimist from "minimist"

const app = express();
const args = minimist(process.argv.slice(2));
const port= args.port||5000;

app.use(express.urlencoded({extended: true}));

app.get("/app", (req, res) => {
    res.status(200).send("200 OK");
})

app.get("/app/roll", (req, res) => {
    console.log(roll(6, 2, 1));
    res.send(roll(6, 2, 1));
    res.end();
})

app.post("/app/roll", (req, res) => {
    const s = parseInt(req.body.sides);
    const d = parseInt(req.body.dice);
    const r = parseInt(req.body.rolls);

    console.log(roll(s, d, r));
    res.send(roll(s, d, r));
    res.end();
})

app.get("/app/roll/:sides", (req, res) => {
    const s = parseInt(req.params.sides);

    console.log(roll(s, 2, 1));
    res.send(roll(s, 2, 1));
    res.end();
})

app.get("/app/roll/:sides/:dice", (req, res) => {
    const s = parseInt(req.params.sides);
    const d = parseInt(req.params.dice);

    console.log(roll(s, d, 1));
    res.send(roll(s, d, 1));
    res.end();
})

app.get("/app/roll/:sides/:dice/:rolls", (req, res) => {
    const s = parseInt(req.params.sides);
    const d = parseInt(req.params.dice);
    const r = parseInt(req.params.rolls);

    console.log(s,d,r);
    res.send(roll(s, d, r));
    res.end();
})

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
    res.end();
})

app.listen(port);
