exports.seed = async function(knex) {
  await knex('agentes').del();

  await knex('agentes').insert([
    { nome: 'Grace Grazi', idade: '25', classe: 'Ocultista', trilha: 'Graduado', origem: 'Universitária', estado: 'VIVO' },
    { nome: 'Gabriela Grazi', idade: '25', classe: 'Combatente', trilha: 'Tropa de Choque', origem: 'Atleta', estado: 'MORTO' },
    { nome: 'Yuri Bularque', idade: '28', classe: 'Combatente', trilha: 'Aniquilador', origem: 'Experimento', estado: 'VIVO' }
  ]);
};
