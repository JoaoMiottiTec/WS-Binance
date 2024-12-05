# Binance Integration 🚀

Demonstration project showcasing how to integrate with Binance's **WebSocket API**. Simple, effective, no overkill.

---

## What This Does 🛠️

- **WebSocket Connection**: Real-time trade data for **BTC/USDT**.
- **API Dispatch**: Sends incoming trade data to a mock API. 
- **Purpose**: Education. No DB, no storage. Pure demonstration.

---

## Tech Stack ⚙️

- **Node.js**: Handles the runtime like a pro.
- **TypeScript**: Because type safety saves lives.
- **Axios**: Talk to APIs like it's nothing.
- **WebSocket**: Real-time data? Easy.

---

## Get Started 🚀

### Clone This:
```bash
git clone https://github.com/your-repo/binance-integration.git
cd binance-integration
```

---

## Install librarys:

```bash
npm install
```

## Make a .env:

```bash
API_URL=
```

## Run It:

```bash
npx ts-node src/index.ts
```

---


### What happens when u  try run this?

1. Connect a Binance WebSocket

2. Receive a trade data flows:
```json
{
    "s": "BTCUSDT",
    "p": "50000.00",
    "q": "0.001",
    "T": "123456789"
}
```
3. Axios search it to the your API set in a .env

---

### But now... How  better this code?

This a good question, because this project a initial connection using a WS Binance config so have a lot of things to do. Example:

* Plug in a DB
* Reconnection logic when the service down
* More pairs using a array maybe
* Clean a code more and more or using a better logs to debug easier
* Using a pong available in a Binance documentation to certified a still connection with the project

### Credits

Build this little WS by Tito (João Vitor dos Santos). Just for fun and studying. No pressure with your dreams

 * LinkedIn: https://www.linkedin.com/in/joaovitormiotti/
 * Email: joaovmiotti@gmail.com