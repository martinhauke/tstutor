export function isSkipped(fn: Function, args: any[]): boolean {
  try {
    fn(...args)
  } catch (err: unknown) {
    if (err instanceof Error && err.message === "Not yet implemented") {
      return true
    }
  }
  return false
}

