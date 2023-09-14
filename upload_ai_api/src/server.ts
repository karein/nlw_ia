import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'


import { uploadVideoRoute } from './routes/upload-video';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';

const app = fastify()

app.register(fastifyCors, {
  origin: '*', 
})

app.register(uploadVideoRoute)
app.register(getAllPromptsRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)


const port =  3333;
app.listen({
  port
}).then(() => {
  console.log('HTTP Server Running on port:', port)
})