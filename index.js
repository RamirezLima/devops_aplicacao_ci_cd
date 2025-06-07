const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Configura o pool usando a variável de ambiente DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`
        
        
        <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EU TO NO AR</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'JetBrains Mono', monospace;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(1deg); }
            50% { transform: translateY(-10px) rotate(-1deg); }
            75% { transform: translateY(-15px) rotate(0.5deg); }
        }
        
        @keyframes glow {
            0%, 100% { text-shadow: 0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88; }
            50% { text-shadow: 0 0 30px #ff0066, 0 0 60px #ff0066, 0 0 90px #ff0066; }
        }
        
        @keyframes pulse-bg {
            0%, 100% { background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460); }
            50% { background: linear-gradient(45deg, #16213e, #0f3460, #533483); }
        }
        
        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }
        
        @keyframes blink {
            50% { border-color: transparent; }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        .glowing { animation: glow 3s ease-in-out infinite; }
        .pulse-background { animation: pulse-bg 8s ease-in-out infinite; }
        
        .typewriter {
            overflow: hidden;
            border-right: 3px solid #00ff88;
            white-space: nowrap;
            animation: typing 3s steps(40, end), blink 1s step-end infinite;
        }
        
        .grid-bg {
            background-image: 
                linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
        }
        
        .neon-border {
            border: 2px solid #00ff88;
            box-shadow: 
                0 0 20px #00ff88,
                inset 0 0 20px rgba(0,255,136,0.1);
        }
        
        .hover-grow:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }
    </style>
</head>
<body class="min-h-screen bg-gray-900 pulse-background grid-bg overflow-hidden">
    <!-- Particles/Stars Background -->
    <div class="fixed inset-0 z-0">
        <div class="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full floating" style="animation-delay: 0s;"></div>
        <div class="absolute top-32 right-20 w-1 h-1 bg-blue-300 rounded-full floating" style="animation-delay: 1s;"></div>
        <div class="absolute top-64 left-32 w-3 h-3 bg-pink-300 rounded-full floating" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-32 right-32 w-2 h-2 bg-green-300 rounded-full floating" style="animation-delay: 3s;"></div>
        <div class="absolute bottom-64 left-20 w-1 h-1 bg-purple-300 rounded-full floating" style="animation-delay: 4s;"></div>
        <div class="absolute top-20 right-40 w-2 h-2 bg-red-300 rounded-full floating" style="animation-delay: 1.5s;"></div>
        <div class="absolute bottom-20 left-40 w-3 h-3 bg-cyan-300 rounded-full floating" style="animation-delay: 2.5s;"></div>
        <div class="absolute top-40 left-60 w-1 h-1 bg-orange-300 rounded-full floating" style="animation-delay: 3.5s;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <!-- Header Section -->
        <div class="text-center mb-8">
            <div class="inline-block neon-border rounded-lg px-6 py-2 mb-6 hover-grow">
                <span class="text-green-400 text-sm font-medium typewriter">>>> SISTEMA ATIVADO</span>
            </div>
        </div>

        <div class="text-center mb-8">
            <div class="inline-block neon-border rounded-lg px-6 py-2 mb-6 hover-grow">
                <span class="text-green-400 text-sm font-medium typewriter">>>> Servidor rodando! Hora do banco: ${result.rows[0].now});</span>
            </div>
        </div>
        
        <!-- Main Title -->
        <div class="text-center mb-12">
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 glowing mb-4 tracking-wider">
                EU TO
            </h1>
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 glowing tracking-wider">
                NO AR
            </h1>
        </div>

        <!-- Animated Rocket/Plane Icon -->
        <div class="mb-12 floating">
            <div class="text-6xl md:text-8xl">🚀</div>
        </div>

        <!-- Status Indicators -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
            <div class="bg-gray-800/50 backdrop-blur-sm neon-border rounded-lg p-6 text-center hover-grow">
                <div class="text-green-400 text-2xl mb-2">●</div>
                <div class="text-green-400 font-semibold">ONLINE</div>
                <div class="text-gray-300 text-sm">Sistema ativo</div>
            </div>
            <div class="bg-gray-800/50 backdrop-blur-sm neon-border rounded-lg p-6 text-center hover-grow">
                <div class="text-blue-400 text-2xl mb-2">📡</div>
                <div class="text-blue-400 font-semibold">TRANSMITINDO</div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-gray-400 text-sm">
            <div class="mb-2">[ CONECTADO AO UNIVERSO ]</div>
            <div class="flex items-center justify-center space-x-2">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Live desde o espaço</span>
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
        </div>
    </div>

    <!-- Interactive Elements -->
    <script>
        // Add click interactions
        document.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'fixed w-4 h-4 bg-green-400 rounded-full pointer-events-none animate-ping';
            ripple.style.left = (e.clientX - 8) + 'px';
            ripple.style.top = (e.clientY - 8) + 'px';
            ripple.style.zIndex = '50';
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });

        // Add hover effects to main title
        const titles = document.querySelectorAll('h1');
        titles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Dynamic background color shift
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            document.body.style.filter = hue-rotate(${hue}deg);
        }, 100);
    </script>
</body>
</html>`)
        
        
        
        
        
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no banco de dados');
  }
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});