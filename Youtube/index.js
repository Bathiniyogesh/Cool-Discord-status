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
buttons : [{label : "Subscribe" , url : "your channel url"},{label : "Join discord",url : "your discord url"}]
}
})
})
client.login({ clientId : "000000000000000000" }).catch(console.error);
