FROM denoland/deno:alpine
ARG PORT=8000
ENV PORT=$PORT
EXPOSE $PORT
WORKDIR /home/deno
USER deno
COPY --chown=deno:deno . .
RUN deno install
CMD ["sh", "-c", "deno serve -R=./static --port=$PORT --cached-only src/main.ts"]
