// node js has built-in module, called 'Events', where you can create-, fire-, listen- for ur own event

const EventEmitter = require('events')
const event = new EventEmitter()

// now handle/define the event  --listening to an event
// event.on('event's name, callback function --{wht u want to do}) 
event.on('sayMyName', ()=>{
    console.log('visheshta')
})

event.on('sayMyName', ()=>{
    console.log('kushwaha')
})

event.on('profession', ()=>{
    console.log('software development')
})

event.on('checkpage', (statuscode,message)=>{
    console.log(`statuscode is ${statuscode} and the page is ${message}`)
})

// if u want to called any event  --triger a event
//event.emit('create ur own event') --event fire
//emitter objects emit named events that cause previously registered listerners to be called

event.emit('sayMyName')
event.emit('profession')
event.emit('checkpage', 200, 'ok')

// console.log(event)