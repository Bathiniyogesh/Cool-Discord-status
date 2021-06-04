var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Watching Youtube",
assets : {
large_image : "ytt",
large_text : "Youtube" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Subscribe" , url : "https://www.youtube.com/channel/UCP3XNJ8iqZagrAFa_ptIuTg"},{label : "Join discord",url : "https://Discord.io/bathiniyogesh"}]
}
})
})
client.login({ clientId : "843095616019759114" }).catch(console.error);