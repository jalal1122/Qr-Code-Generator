let input = document.getElementById("inputText")
let imgQr = document.getElementById("imgQr")
let imgBox = document.querySelector(".imgBox")

function GenerateQrCode(){
    if(input.value == ""){
        alert("Please enter a value")
        return
    }
    let qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value

    imgBox.style.display = "block"
    imgQr.src = qrCode
    console.log(qrCode);
    
}

function DownloadQrCode(){
    if(input.value == ""){
        alert("Please enter a value")
        return
    }
    let qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value

    let a = document.createElement("a")
    a.href = qrCode
    a.download = "qrCode.png"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}