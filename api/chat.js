export default async function handler(req, res) {
    if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
    }
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
          return res.status(400).json({ error: 'Invalid messages format' });
    }
    try {
          const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
                  },
                  body: JSON.stringify({
                            model: 'llama-3.1-8b-instant',
                            messages: messages,
                            max_tokens: 200,
                            temperature: 0.7
                  })
          });
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content || null;
          return res.status(200).json({ reply });
    } catch (error) {
          return res.status(500).json({ error: 'Failed to get response' });
    }
}
