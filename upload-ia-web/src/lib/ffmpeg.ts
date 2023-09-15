import { FFmpeg} from '@ffmpeg/ffmpeg'

//?url => não vai fazer a importação direta do arquivo; vai importar o arquivo via url; como se fosse uma tag script; vai carregar assincronamente; vai carregar somente quando precisar.
import coreURL from '../ffmpeg/ffmpeg-core.js?url'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'

// o ffmpeg só será carregado no momento qem que for ser usada pois é um pouco pesada
let ffmpeg: FFmpeg | null

// cria uma única instância do ffmpeg que vai ser compartilhado na aplicação
export async function getFFmpeg(){
  if(ffmpeg){
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if(!ffmpeg.loaded){
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL,
    })
  }

  return ffmpeg
}