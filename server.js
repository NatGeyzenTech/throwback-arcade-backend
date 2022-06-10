const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  res.send('Server up and running');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));