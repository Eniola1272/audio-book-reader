const video = document.querySelector("video");

async function setup() {
  const stream = await navigator.mediaDevices.getUserMedia({ 
    video: true 
  })
  video.srcObject = stream


video.addEventListener("playing", async () => {
    const worker = Tessaract.createWorker()
    await worker.load()
    await worker.loadLanguage("eng")
    await worker.initialize("eng")
    
    const canvas = document.createElement("canvas")
    canvas.width = video.width
    canvas.height = video.height

    canvas.getContext("2d").drawImage(video, 0, 0, video.width, video.height)
})
}

setup()