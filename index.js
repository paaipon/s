const api = require("@justalk/pornhub-api") 
const { exec } = require("child_process")
var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
const { PornHub } = require("pornhub.js")
const fs = require("fs")
var counter = false;
const hub = new PornHub()
api.search("chinese teenager girl").then(async (list) => {
   const results = list.results.filter(r=>r.premium == false)
      const e = results[Math.floor(Math.random() * results.length)];
        if(fs.existsSync(`./output/${e.title}.mp4`))return;
        if(counter) return;
        counter = true;
        console.log(e.title)
        // exec("node r.js download=highest url="+e.link, (a,b,c) => console.log(a,b,c))
          //  exec(`wget -c -O "./output/${e.title}.m3u8" "${r.download_urls["1080P"]}"`,(a,b,c)=>
        const a = await hub.video(e.link)
        const d = a.mediaDefinitions.find(e=> e.format == "hls")
    if(!d) return;
    console.log(d)
    await converter
          .setInputFile(d.videoUrl.split(`\\`).join(""))
          .setOutputFile("./output/"+e.title+".mp4")
          .start();
  
})
