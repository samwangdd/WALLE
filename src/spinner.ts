import ora, { Ora } from 'ora';

class Spin {
  spinnerInstance: Ora;

  constructor() {
    this.spinnerInstance = ora();
  }

  clear() {
    this.spinnerInstance.clear();
  }

  start(text?: string) {
    this.spinnerInstance.start(text);
  }

  succeed(text?: string) {
    this.spinnerInstance.succeed(text);
  }

  fail(text?: string) {
    this.spinnerInstance.fail(text);
  }

  render() {
    this.spinnerInstance.render();
  }

  frame() {
    this.spinnerInstance.frame();
  }

  info(text?: string) {
    this.spinnerInstance.info(text);
  }

  stop() {
    this.spinnerInstance.stop();
  }
}

export const spinnerInstance = new Spin();
