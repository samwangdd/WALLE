import ora, { Ora } from 'ora';

class Spin {
  spinner: Ora;

  constructor() {
    this.spinner = ora();
  }

  clear() {
    this.spinner.clear();
  }

  start(text?: string) {
    this.spinner.start(text);
  }

  succeed(text?: string) {
    this.spinner.succeed(text);
  }

  fail(text?: string) {
    this.spinner.fail(text);
  }

  render() {
    this.spinner.render();
  }

  frame() {
    this.spinner.frame();
  }

  info(text?: string) {
    this.spinner.info(text);
  }

  stop() {
    this.spinner.stop();
  }
}

export const spinner = new Spin();
