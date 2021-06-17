import handler from "@/utils/APIHandler";
const END_POINT = "/api/hello";

handler.get(END_POINT, async (req, res) => {
  res.json({
    data: "Hello Chief!",
  });
});

export default handler;
