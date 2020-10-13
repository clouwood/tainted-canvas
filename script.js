function capture() {
    let player = document.getElementsByClassName("video-stream")[0];
    let canvas = document.createElement("canvas");
    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;
    canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);
    let downloadLink = document.createElement("a");
    downloadLink.download = "screenshot";
    canvas.toBlob(async function (blob) {
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.click();       
    }, 'image/png');
}