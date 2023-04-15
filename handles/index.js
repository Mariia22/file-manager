import { finishProcess } from "../helpers/helpers.js"
import { add } from "./add.js"
import { cat } from "./cat.js"
import { cd } from "./cd.js"
import { compressFile } from "./compress.js"
import { copyFile } from "./cp.js"
import { decompressFile } from "./decompress.js"
import { deleteFile } from "./delete.js"
import { hash } from "./hash.js"
import { ls } from "./ls.js"
import { moveFile } from "./move.js"
import { osCommands } from "./os.js"
import { rn } from "./rename.js"
import { up } from "./up.js"

export const commands = {
  'up': up,
  'cd': cd,
  'ls': ls,
  'cat': cat,
  'add': add,
  'rn': rn,
  'cp': copyFile,
  'mv': moveFile,
  'rm': deleteFile,
  'hash': hash,
  'compress': compressFile,
  'decompress': decompressFile,
  'os': osCommands,
  '.exit': finishProcess
}
