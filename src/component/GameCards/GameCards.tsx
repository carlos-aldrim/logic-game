import React from "react";
import { useStyles } from "./GameCards.styles";
import { PlayArrowRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SnakeImage from "assets/img/GameSnakeImg.png";
import JKPImage from "assets/img/JokenpoImg.png";
import TetrisImg from "assets/img/TetrisImg.png";
import TicTacToeImg from "assets/img/JogoDaVelhaImg.png";
import { useGameSnake } from "hooks/useGameSnake";
import { useGameJokenpo } from "hooks/useJokenpoGame";

export const GameCards: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { setCurrentStep: setCurrentStepSnake } = useGameSnake();
  const { setCurrentStep: setCurrentStepJokenpo } = useGameJokenpo();

  React.useEffect(() => {
    setCurrentStepSnake(0);
    setCurrentStepJokenpo(0);
  }, [setCurrentStepJokenpo, setCurrentStepSnake]);

  const games = [
    {
      id: 0,
      name: "Jogo da Cobra",
      description:
        "Game Snake: Controle a cobra faminta, devore itens para crescer, mas cuidado com os obstáculos! Uma aventura desafiadora de estratégia e reflexos rápidos.",
      img: SnakeImage,
      onClick: () => navigate("/game-snake"),
    },
    {
      id: 1,
      name: "Pedra, Papel e Tesoura",
      description:
      "Pedra, Papel, Tesoura: Um jogo de decisões rápidas e estratégia. Escolha sabiamente e vença seus oponentes",
      img: JKPImage,
      onClick: () => navigate("/jokenpo"),
    },
    {
      id: 2,
      name: "Jogo da Velha",
      description:
      "Jogo da Velha: Traga de volta a diversão dos clássicos em um desafio estratégico e empolgante!",
      img: TicTacToeImg,
      onClick: () => navigate("/"),
    },
    {
      id: 3,
      name: "Tetris Game",
      description:
      "Tetris: Desafie sua habilidade de raciocínio e velocidade com o lendário Tetris. Encaixe as peças, acumule pontos e conquiste a vitória!",
      img: TetrisImg,
      onClick: () => navigate("/"),
    },
  ];

  const sortedGames = [...games].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={styles.cardContent}>
      <label className={styles.title}>Jogo(s):</label>
      {sortedGames.map((game) => (
        <div key={game.id} className={styles.card}>
          <div className={styles.image}>
            <img src={game.img} alt={game.name} />
          </div>
          <div className={styles.playButton} onClick={game.onClick}>
            <PlayArrowRounded />
          </div>
          <div className={styles.details}>
            <label className={styles.description}>{game.description}</label>
          </div>
        </div>
      ))}
    </div>
  );
};