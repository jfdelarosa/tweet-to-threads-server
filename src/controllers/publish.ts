import { ThreadsAPI } from "threads-api";

export default async (c) => {
  const body = await c.req.json();

  try {
    const threadsAPI = new ThreadsAPI({
      username: body.username,
      password: body.password,
    });

    await threadsAPI.publish({
      text: body.text,
    });

    return c.json({
      body,
    });
  } catch (error) {
    return c.json(
      {
        error: error.message,
        body,
      },
      500
    );
  }
};
