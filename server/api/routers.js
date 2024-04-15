const express = require('express');
const database = require('./database');
const { CopyAndPaste } = require("pixjs");
// const { default: removeBackground } = require('@imgly/background-removal');

const router = express.Router();

const replace = (str, oldArg, newArg) => {
    for(let i = 0; i < oldArg.length; i++) {
        if(str.includes(oldArg[i])){
            str = str.replace(oldArg[i], newArg[i]);
        }
    }
    return str;
}

const GETQueries = [
    {
        query: 'SELECT * FROM gifts',
        route: '/gifts'
    },
    {
        query: 'select distinct gifts.id, gifts.name, gifts.image, gifts.price from gifts full outer join buyers on gifts.id = buyers.item where buyers.id is null',
        route: '/tobuy'
    },
    {
        query: 'SELECT * FROM buyers',
        route: '/buyer'
    },
    {
        query: 'SELECT buyers.id as buy_id, buyers.buyer, gifts.image, gifts.name, buyers.confirm FROM buyers INNER JOIN gifts ON buyers.item = gifts.id',
        route: '/admin'
    },
    {
        query: 'SELECT "FELICIDADES PRA VOCES" as votos',
        route: '/parabens'
    }
]

GETQueries.forEach((query) => {
    router.get(query.route, async(req, res) => {
        const result = await database.query(query.query);
        res.send(result)
    })
})

const paramsQuery = [
    {
        query: 'SELECT * FROM gifts WHERE id = idToChange',
        route: '/gifts/:id'
    }
]

paramsQuery.forEach((query) => {
    router.get(query.route, async(req, res) => {
        const oldArg = ['idToChange'];
        const newArg = [req.params.id];
        const newQuery = replace(query.query, oldArg, newArg);
        res.send(await database.query(newQuery));
    })
})

const PATCHQueries = [
    {
        query: 'UPDATE buyers SET confirm = true where id = idToChange',
        route: '/buyers/:id'
    }
]

PATCHQueries.forEach((query) => {
    router.patch(query.route, async(req, res) => {
        const oldArg = ['idToChange'];
        const newArg = [req.params.id];
        const newQuery = replace(query.query, oldArg, newArg);
        res.send(await database.query(newQuery));
    })
})

const gera = (amount) => {
    return CopyAndPaste({
        name: process.env.PIX_NAME, // Receptor name
        key: process.env.PIX_KEY, // The pix key
        amount: Number(amount + '.00'), // Amount
        city: process.env.PIX_CITY, // String without special characters ex: Sao Paulo
        id: process.env.PIX_ID, // Payment identifier
        type: process.env.PIX_TYPE // "email" | "phone" | "cpf" | "cnpj" | "random"
    });
}

const POSTQueries = [
    {
        query: "INSERT INTO buyers(buyer, item, confirm) VALUES ('buyerToChange', 'itemToChange', 'confirmToChange')",
        route: '/buyer'
    },
    {
        query: "INSERT into gifts(name, image, price) values ('nameToChange', 'imageToChange', priceToChange)",
        route: '/gifts'
    }
]

POSTQueries.forEach((query) => {
    router.post(query.route, async (req, res) => {
        const oldArg = ['buyerToChange', 'itemToChange', 'confirmToChange', 'nameToChange', 'imageToChange', 'priceToChange'];
        const newArg = [req.body.buyer, req.body.item, req.body.confirm, req.body.name, req.body.image, req.body.price];
        const newQuery = replace(query.query, oldArg, newArg);
        if(req.body.buyer === "TESTE123"){
            const pixCode = gera(req.body.amount);
            return res.send({code: pixCode});
        }
        if(req.body.buyer != undefined){
            const pixCode = gera(req.body.amount);
            const queryRes = await database.query(newQuery)
            return res.send({res: queryRes, code: pixCode});
        }
        res.send(await database.query(newQuery))
    })
})

const DELETEQueries =[
    {
        query: "DELETE FROM gifts WHERE id = idToChange",
        route: "/gifts/:id"
    }
]

DELETEQueries.forEach((query) => {
    router.delete(query.route, async (req, res) => {
        console.log(req.params, req.body)
        const newQuery = replace(query.query, ['idToChange'], [req.params.id])
        console.log(newQuery)
        res.send(await database.query(newQuery))
    })
})


module.exports = router; 
