// eslint-disable-next-line @typescript-eslint/no-require-imports
const promptSync = require("prompt-sync")({ sigint: true });

export const promptWithTimeout = (
  question: string,
  timeoutMs: number
): string | null => {
  let input: string | null = null;
  let done = false;
  const timer = setTimeout(() => {
    if (!done) {
      console.log("\nTemps écoulé. Fin de la session.");
      process.exit(0);
    }
  }, timeoutMs);
  try {
    input = promptSync(question);
    done = true;
    clearTimeout(timer);
    return input;
  } catch {
    clearTimeout(timer);
    return null;
  }
};
