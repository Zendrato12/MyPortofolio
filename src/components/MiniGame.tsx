import React, { useState, useEffect, useRef } from 'react';

type Block = {
  id: number;
  x: number; // posisi horizontal (0-100, persen)
  y: number; // posisi vertikal (0-100, persen)
  color: string;
};

const getRandomColor = () => {
  const colors = ['#0274BD', '#F57251', '#C4AD9D', '#F5D451', '#51F5A3', '#E951F5'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const GAME_WIDTH = 400;
const GAME_HEIGHT = 300;
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 16;
const BLOCK_SIZE = 32;

const MiniGame: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [paddleX, setPaddleX] = useState(GAME_WIDTH / 2 - PADDLE_WIDTH / 2);

  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Timer
  useEffect(() => {
    if (gameOver) return;
    if (time === 0) {
      setGameOver(true);
      return;
    }
    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time, gameOver]);

  // Spawn blocks
  useEffect(() => {
    if (gameOver) return;
    const spawn = setInterval(() => {
      setBlocks((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * (GAME_WIDTH - BLOCK_SIZE),
          y: 0,
          color: getRandomColor(),
        },
      ]);
    }, 900);
    return () => clearInterval(spawn);
  }, [gameOver]);

  // Move blocks down
  useEffect(() => {
    if (gameOver) return;
    const move = setInterval(() => {
      setBlocks((prev) =>
        prev
          .map((block) => ({ ...block, y: block.y + 6 }))
          .filter((block) => block.y < GAME_HEIGHT)
      );
    }, 50);
    return () => clearInterval(move);
  }, [gameOver]);

  // Check collision
  useEffect(() => {
    if (gameOver) return;
    setBlocks((prev) => {
      const newBlocks: Block[] = [];
      prev.forEach((block) => {
        // Jika block sudah sampai bawah
        if (block.y + BLOCK_SIZE >= GAME_HEIGHT - PADDLE_HEIGHT) {
          // Cek apakah block berada di atas paddle
          if (
            block.x + BLOCK_SIZE > paddleX &&
            block.x < paddleX + PADDLE_WIDTH
          ) {
            setScore((s) => s + 1);
            // Block tertangkap, tidak dimasukkan ke newBlocks
          } else {
            // Block tidak tertangkap, tetap hilang
          }
        } else {
          newBlocks.push(block);
        }
      });
      return newBlocks;
    });
  }, [blocks, paddleX, gameOver]);

  // Keyboard controls
  useEffect(() => {
    if (gameOver) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setPaddleX((x) => Math.max(0, x - 32));
      } else if (e.key === 'ArrowRight') {
        setPaddleX((x) => Math.min(GAME_WIDTH - PADDLE_WIDTH, x + 32));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver]);

  const handleRestart = () => {
    setScore(0);
    setTime(30);
    setBlocks([]);
    setGameOver(false);
    setPaddleX(GAME_WIDTH / 2 - PADDLE_WIDTH / 2);
  };

  // Mouse/touch controls (optional)
  const handleAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gameOver) return;
    const rect = gameAreaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickX = e.clientX - rect.left;
    setPaddleX(
      Math.max(0, Math.min(GAME_WIDTH - PADDLE_WIDTH, clickX - PADDLE_WIDTH / 2))
    );
  };

  return (
    <section className="py-12 flex flex-col items-center" style={{ background: '#E9E6DD', minHeight: 400 }}>
      <h2 className="text-2xl font-bold mb-4">Catch the Falling Blocks</h2>
      <div className="mb-2 text-lg">Score: {score}</div>
      <div className="mb-4 text-lg">Time: {time}s</div>
      <div
        ref={gameAreaRef}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#0274BD] select-none"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT, cursor: gameOver ? 'default' : 'pointer' }}
        onClick={handleAreaClick}
      >
        {/* Blocks */}
        {blocks.map((block) => (
          <div
            key={block.id}
            className="absolute rounded-md"
            style={{
              left: block.x,
              top: block.y,
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              backgroundColor: block.color,
              transition: 'top 0.05s linear',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
              userSelect: 'none',
            }}
          >
            🟦
          </div>
        ))}
        {/* Paddle */}
        <div
          className="absolute bg-[#0274BD] rounded-md"
          style={{
            left: paddleX,
            top: GAME_HEIGHT - PADDLE_HEIGHT,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            transition: 'left 0.1s',
          }}
        />
        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#E9E6DD]/80">
            <div className="text-2xl font-bold mb-2">Game Over!</div>
            <div className="mb-2">Final Score: {score}</div>
            <button
              className="px-6 py-2 bg-[#0274BD] text-white rounded-lg font-medium"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        )}
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        Gerakkan paddle dengan tombol panah kiri/kanan atau klik area game.<br />
        Tangkap blok warna-warni sebanyak mungkin sebelum waktu habis!
      </p>
    </section>
  );
};

export default MiniGame;