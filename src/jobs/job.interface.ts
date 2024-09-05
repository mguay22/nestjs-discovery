export interface Job {
  execute: () => void | Promise<void>;
}
