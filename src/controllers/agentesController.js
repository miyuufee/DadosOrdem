const db = require('../db/knex');

exports.obter = async (req, res) => {
  try {
    const agente = await db("agentes").where({ id: req.params.id }).first();
    if (!agente) {
      return res.status(404).json({ erro: 'Agente não encontrado' });
    }
    res.json(agente);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar agente' });
  }
};

exports.listar = async (req, res) => {
  try {
    const agentes = await db('agentes');
    res.json(agentes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar agentes' });
  }
};

exports.inserir = async (req, res) => {
  try {
    const { nome, idade, classe, trilha, origem, estado } = req.body;
    await db('agentes').insert({ nome, idade, classe, trilha, origem, estado });
    res.status(201).json({ mensagem: 'Agente inserido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao inserir agente' });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, classe, trilha, origem, estado } = req.body;
    await db('agentes').where({ id }).update({ nome, idade, classe, trilha, origem, estado });
    res.json({ mensagem: 'Agente atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar agente' });
  }
};

exports.excluir = async (req, res) => {
  try {
    const { id } = req.params;
    await db('agentes').where({ id }).del();
    res.json({ mensagem: 'Agente excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir agente' });
  }
};