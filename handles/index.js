import { finishProcess } from "../helpers/helpers.js"
import { addFile } from "./add.js"
import { readFile } from "./cat.js"
import { changeDirectory } from "./cd.js"
import { compressFile } from "./compress.js"
import { copyFile } from "./cp.js"
import { decompressFile } from "./decompress.js"
import { deleteFile } from "./delete.js"
import { hash } from "./hash.js"
import { printList } from "./ls.js"
import { moveFile } from "./move.js"
import { getOSinfo } from "./os.js"
import { renameFile } from "./rename.js"
import { moveUp } from "./up.js"

export const commands = {
  'up': moveUp,
  'cd': changeDirectory,
  'ls': printList,
  'cat': readFile,
  'add': addFile,
  'rn': renameFile,
  'cp': copyFile,
  'mv': moveFile,
  'rm': deleteFile,
  'hash': hash,
  'compress': compressFile,
  'decompress': decompressFile,
  'os': getOSinfo,
  '.exit': finishProcess
}
