require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, ".", "public")));

const agentesRoutes = require('./routes/agentes');

app.use(express.json());

app.use('/agentes', agentesRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});