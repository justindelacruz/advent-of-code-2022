import * as fs from "fs";

export function readTextFile(file: string): string[] {
  try {
    const data = fs.readFileSync(file, "utf8").split("\n");
    return data;
  } catch (err) {
    console.error(err);
  }

  return [];
}

export function print(...inputs: any): void {
  console.log(JSON.stringify(inputs.join(' '), null, 4));
}
