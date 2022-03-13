import { loadStdlib } from '@reach-sh/stdlib';// imports reach standard lib
import * as backend from './build/index.main.mjs';// imports your backend which ./reach compile will produce
const stdlib = loadStdlib();//loads the standard lib dynamically based on the REACH

const startingBalance = stdlib.parseCurrency(100);//Defines quantity of network tokens as the starting balance for each test 
const accAlice = await stdlib.newTestAccount(startingBalance);// 6&7 create test accounts with initial endowments for alice and Bob 
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);// alice deploys the contract 
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());// has bob attach to it 

await Promise.all([// awaits for backend initialization to complete 
    ctcAlice.p.Alice({
        // implement Alice's interact object here
    }),// initialize a backend for alice
    ctcBob.p.Bob({
        // implement Bob's interact object here
    }),// initialize a backend for bob 
]);
 