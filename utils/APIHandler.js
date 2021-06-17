import nc from "next-connect";

const handler = nc();

handler.use(async (req, res, next) => {
  // pass middleware here
  next();
});

export default handler;
