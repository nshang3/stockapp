import express from "express";
import cors from "cors";
import quotes from "./routes/quotes.js";
import lots from "./routes/lots.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/quotes", quotes);
app.use("/lots", lots)

app.options('/api/quotes', cors());
app.get('/api/quotes/:symbols', async (req, res) => {

  const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${req.params.symbols}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dd16385198msh05d12eea1e24340p19d96cjsn508075aa4433',
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },

    });

    const data = await response.json();
    
    res.json(data);

  } catch (error) {
    console.error('Error fetching data from Yahoo Finance API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});