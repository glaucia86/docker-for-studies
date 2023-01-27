## How to run this project?

1. Go to the `project-01` folder and run the command:

```bash
docker build .
```

2. After to build the image, run the command:

```bash
docker run -d -p 3000:3000 <image-id>
```

3. Open the browser on `localhost:3000` and you will see the message: `Olá, pessoal!`