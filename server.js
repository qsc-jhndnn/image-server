const http = require('http');
const { createCanvas } = require('canvas');

const server = http.createServer((req, res) => {

  if(req.url === "/foo")
  {
    res.setHeader('Content-Type', 'text/html');

    let html = `
    <html>
    <head>
    <style>
      body {
        background-color: powderblue;
      }
      .c1   {
        color: white;
        margin: 30px;
        padding: 10vh;
        background-color: blue;
        border: 10px solid #44444444;
        border-radius: 20px / 15%;
      }
      .c1:hover   {background-color: green;}
      .c2    {background-color: red; border-left: 3px solid yellow;}
      </style>
      </head>
  <body>
    <div class="c1" style="color: orange">THIS IS</div>
    <div class="c1">ANOTHER ONE</div>
    <div class="c2">SOMETHING</div>
    <div class="c1 c2">SOMETHING</div>
  </body>
  
  
  </html>    `

  res.write(html);
    res.end();
return;

  }
  // Set the response header to indicate that the response is an image/jpeg
  res.setHeader('Content-Type', 'image/jpeg');

  // Generate a random image
  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');

  // Draw a random background color
  ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw a random text
  const text = Math.floor(Math.random() * 1000000).toString();
  const fontSize = Math.floor(Math.random() * 100) + 50;
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + fontSize / 3);

  // Convert the canvas to a JPEG image and write it to the response
  const image = canvas.toBuffer('image/jpeg');
  res.write(image);
  res.end();
});
var port = process.env.PORT || '3000';
console.log(`port is ${port}`);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
