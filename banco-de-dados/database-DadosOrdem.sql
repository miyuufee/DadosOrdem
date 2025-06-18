
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "-03:00";


--
-- Banco de dados: `DadosOrdem`
--
CREATE DATABASE IF NOT EXISTS `DadosOrdem` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `DadosOrdem`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `agentes`
--

CREATE TABLE IF NOT EXISTS `agentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` char(120) NOT NULL,
  `idade` int NOT NULL,
  `classe` char(20) DEFAULT NULL,
  `trilha` char(50) DEFAULT NULL,
  `origem` char(50) DEFAULT NULL,
  `estado` char(20) DEFAULT 'VIVO',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `agentes`
--

INSERT INTO `agentes` ( `nome`, `idade`, `classe`, `trilha`, `origem`, `estado`) VALUES
('Grace Grazi', '25', 'Ocultista', 'Graduado', 'Universitária'),
('Gabriela Grazi', '25', 'Combatente', 'Tropa de Choque', 'Atleta'),
('Yuri Bularque', '28', 'Combatente', 'Aniquilador', 'Experimento');
COMMIT;
