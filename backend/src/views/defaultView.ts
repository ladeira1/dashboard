export const defaultView = {
  error: (err: string) => {
    return {
      error: err
    }
  },
  manyErrors: (messages: string[] | string) => {
    if (Array.isArray(messages)) {
      return {
        error: messages.map(message => message),
      };
    }

    return { error: messages };
  }
}