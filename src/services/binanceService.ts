import axios from "axios"
import WebSocket from "ws"

const apiUrl = process.env.API_URL

export const webSocketStart = () => {
    if(!apiUrl) {
        console.log('do not find a API')
        return
    }
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')

ws.on('message', async (data) => {
    const trade = JSON.parse(data.toString())

    const tradeData = {
        symbol: trade.s,
        price: trade.p,
        quantity: trade.q,
        timestamp: trade.T.toString(),
    }

    try {
        const response = await axios.post(apiUrl, tradeData);
        console.log('Send a deal to API', response.data);
    } catch (error) {
        console.error('error to send a message to API', error);
    }
})

    ws.on('open', () => console.log('WebSocket with Binance is open'));
    ws.on('close', () => console.log('WebSocket connection is closed'));
    ws.on('error', (error) => console.error('WebSocket Error', error));
}

