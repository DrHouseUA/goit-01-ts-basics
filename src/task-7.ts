function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS1");
    }, 1000);
  });
}

getMessage().then(result => console.log(result));
