export const loggerConfig = {
  pinoHttp: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        singleLine: true,
        messageFormat:
          '{req.headers.host} - {req.method} {req.url} {res.statusCode} - {responseTime} ms',
      },
    },
  },
};
