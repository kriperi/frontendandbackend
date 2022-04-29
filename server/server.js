import express from "express";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server started in http://localhost:${server.address().port}`)
});
