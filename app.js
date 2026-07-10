const express = require("express");
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");

const app = express();
const myChain = new Blockchain();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const search = req.query.search || "";

    let filteredChain = myChain.chain;

    if (search) {
        filteredChain = myChain.chain.filter(block => {
            const task = block.data.task || block.data || "";
            return task.toLowerCase().includes(search.toLowerCase());
        });
    }

    const totalTasks = myChain.chain.length - 1;
    const completedTasks = myChain.chain.filter(
        block => block.completed
    ).length;

    const progress =
        totalTasks > 0
            ? Math.round((completedTasks / totalTasks) * 100)
            : 0;

    let blockchainValid = true;

    for (let i = 1; i < myChain.chain.length; i++) {
        if (
            myChain.chain[i].previousHash !==
            myChain.chain[i - 1].hash
        ) {
            blockchainValid = false;
            break;
        }
    }

    res.render("index", {
        chain: filteredChain,
        totalTasks,
        completedTasks,
        progress,
        blockchainValid,
        search
    });
});

app.post("/add", (req, res) => {
    const task = req.body.task;

    if (task && task.trim() !== "") {
        myChain.addBlock(task);
    }

    res.redirect("/");
});

app.post("/complete/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (myChain.chain[index]) {
        myChain.chain[index].completed = true;
    }

    res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (index > 0) {
        myChain.chain.splice(index, 1);
    }

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});