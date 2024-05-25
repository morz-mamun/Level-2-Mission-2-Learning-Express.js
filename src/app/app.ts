import express, { NextFunction, Request, Response } from "express";
const app = express();
// const port = 3000

// parsers
app.use(express.json());
app.use(express.text());


// create router
const userRouter = express.Router();
const courseRouter = express.Router()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/courses', courseRouter)

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User is created successfully.",
    data: user,
  });
});


courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body
  console.log(course);

  res.json({
    success: true,
    message: 'This is courses',
    data: course
  })
  
})

// middleware

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.body, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
