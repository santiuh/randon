export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const mail = useMail();
  await mail.send({
    to: useRuntimeConfig().mail.message.to,
    subject: body.subject,
    text: body.text,
    html: body.html,
  });
  return { ok: true };
});
