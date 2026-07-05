# ⚽ FootballBot Pro

## Plataforma de Análise e Automação Esportiva

Clone melhorado do RoboBet — uma PWA (Progressive Web App) completa que pode ser instalada diretamente no Android sem depender da Google Play Store.

---

## 🚀 Funcionalidades

### 🤖 Sistema de Bots com Filtros
- **Filtros de Golos** — Total, BTTS, golos por equipa
- **Filtros de Odds** — Casa, Empate, Fora (min/max)
- **Filtros de Cantos** — Total de cantos
- **Filtros de Cartões** — Amarelos e Vermelhos
- **Filtros Estatísticos** — Posse de bola, remates, xG
- **Filtros de Tempo** — Minuto, 1ª/2ª parte
- **Filtros de Forma** — PPG, invencibilidade
- **Restrição de Ligas** — Selecionar ligas específicas
- **Indicador Combo** — FIRE + BALL
- **Confirmação Antecipada**

### 📊 Análise de Jogos
- Estatísticas em tempo real
- Odds pré-jogo
- Posse de bola, remates, cantos, cartões
- xG (Expected Goals)
- Previsões automáticas
- Indicadores visuais (🔥 FIRE, ⚽ BTTS, 🚩 Cantos)

### 📱 Notificações
- **Telegram Bot** — Receber alertas diretamente no Telegram
- **Push Notifications** — Notificações no navegador/dispositivo
- **Vibração** — Alertas táteis
- **Som** — Alertas sonoros

### 💾 Dados & Backup
- Exportar/importar configurações
- Backup completo de bots
- Cache local para funcionamento offline

---

## 📲 Instalação no Android (sem Google Play)

### Método 1: PWA (Recomendado)
1. Abra o URL do app no Chrome/Edge
2. Toque no menu (⋮) → "Adicionar ao ecrã inicial"
3. Confirme a instalação
4. O app aparece como um app nativo

### Método 2: Servidor Local
1. Coloque os ficheiros num servidor web (Apache, Nginx, ou qualquer hosting)
2. Aceda via HTTPS (necessário para Service Worker)
3. Instale como PWA

### Método 3: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos ficheiros
3. Ative GitHub Pages nas definições
4. Aceda via `https://seuuser.github.io/footballbot`

### Método 4: Netlify/Vercel (Gratuito)
1. Conecte o repositório ao Netlify/Vercel
2. Deploy automático
3. URL permanente com HTTPS

---

## 🔑 Configuração da API

### API-Football (Recomendado — Gratuito)
1. Registe-se em [api-football.com](https://www.api-football.com/)
2. Obtenha a sua chave API (gratuita: 100 req/dia)
3. Na app: Definições → Chave API → Cole a chave
4. Selecione "API-Football" como provedor

### Football-Data.org (Alternativa — Gratuito)
1. Registe-se em [football-data.org](https://www.football-data.org/)
2. Obtenha a sua chave (gratuita: 10 req/min)
3. Na app: Definições → Chave API → Cole a chave
4. Selecione "Football-Data.org" como provedor

### Modo Demo
- Funciona sem API com dados simulados
- Ideal para testar a interface e filtros

---

## ✈️ Configurar Telegram

1. Abra o Telegram e procure **@BotFather**
2. Envie `/newbot` e siga as instruções
3. Copie o token recebido
4. Na app: Definições → Telegram Bot
5. Cole o token
6. Comece uma conversa com o seu bot no Telegram
7. Clique "Obter Chat ID"
8. Clique "Enviar Teste" para verificar

---

## 🛠️ Como Expandir

### Adicionar Novos Filtros

No `index.html`, adicione uma nova secção no modal do bot:

```html
<div class="filter-section" onclick="toggleFilterSection(this)">
    <div class="filter-section-header">
        <div class="filter-section-title">🎯 Novo Filtro</div>
        <span class="chevron">▼</span>
    </div>
    <div class="filter-section-body">
        <!-- Campos do filtro -->
    </div>
</div>
```

Depois adicione a lógica no `checkMatchAgainstFilters()`.

### Adicionar Nova API

1. Crie uma função `fetchFromNovaAPI()` no JavaScript
2. Adicione o provedor no select de API
3. Mapeie os dados para o formato interno

### Adicionar Backtest

```javascript
function runBacktest(botId, startDate, endDate) {
    // Buscar dados históricos
    // Aplicar filtros do bot
    // Calcular taxa de acerto
    // Retornar resultados
}
```

### Adicionar Ticket Builder

```javascript
function buildTicket(alerts) {
    // Combinar alertas de múltiplos bots
    // Criar bilhete combinado
    // Calcular odds combinadas
}
```

---

## 📁 Estrutura do Projeto

```
robobet-clone/
├── index.html      ← App principal (HTML + CSS + JS)
├── manifest.json   ← Configuração PWA
├── sw.js           ← Service Worker (offline + notificações)
└── README.md       ← Este ficheiro
```

---

## 📋 Filtros Disponíveis vs RoboBet

| Filtro | RoboBet | FootballBot Pro |
|--------|---------|-----------------|
| Golos (Over/Under) | ✅ | ✅ |
| BTTS | ✅ | ✅ |
| Cantos | ✅ | ✅ |
| Cartões | ✅ | ✅ |
| Odds | ✅ | ✅ |
| Posse de Bola | ❌ | ✅ |
| xG | ❌ | ✅ |
| Remates | ❌ | ✅ |
| Filtros de Tempo | ✅ | ✅ |
| Forma/PPG | ✅ | ✅ |
| Restrição de Ligas | ✅ | ✅ |
| Indicador FIRE | ✅ | ✅ |
| Indicador BALL | ✅ | ✅ |
| Combo (FIRE+BALL) | ✅ (Premium) | ✅ Grátis |
| Ticket Builder | ✅ (Premium) | ✅ Grátis |
| Confirmação Antecipada | ✅ (Premium) | ✅ Grátis |
| Telegram | ✅ | ✅ Grátis |
| Exportar/Importar | ❌ | ✅ |
| Templates Prontos | ✅ | ✅ |
| Análise Pré-Jogo | ✅ | ✅ |
| H2H | ✅ | ✅ (com API) |
| Backtest | ✅ (Premium) | 🔜 (expansível) |

---

## 🔮 Roadmap

- [ ] Backtest de estratégias com dados históricos
- [ ] Mercado de bots (importar/exportar templates)
- [ ] Gráficos interativos de odds ao vivo
- [ ] Alertas por email
- [ ] Dashboard web completo
- [ ] Multi-idioma (EN, ES, FR)
- [ ] Integração com casas de apostas
- [ ] Machine Learning para previsões
- [ ] Widget para ecrã inicial Android

---

## ⚠️ Disclaimer

Esta aplicação é apenas para fins informativos e educacionais. Não constitui aconselhamento de apostas. Use os dados de forma responsável.

---

## 📄 Licença

MIT License — Livre para uso pessoal e comercial.
