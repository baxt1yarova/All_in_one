let prizes = [
    "75$",
    "500$",
    "750$",
    "100$",
    "Jackpot",
    "700$",
    "1000$",
    "150$",
    "Zero",
    "15$",
    "95$",
    "50$"
];
let d=0
function spinWheel() {
    let prizeIndex=0
    const wheel = document.getElementById("wheel");
    const resultElement = document.querySelector(".result");
    const randomRotation = Math.floor(Math.random() * 360)
    d+=randomRotation+1080
    wheel.style.transition = "transform 4s ease-out"
    wheel.style.transform = `rotate(${d}deg)`
    setTimeout(() => {
        let selectedPrize = 0
        if(randomRotation<=15 || randomRotation>345){
            selectedPrize=prizes[0]
            prizeIndex=0
        }
        else if(randomRotation>15 && randomRotation<=45){
            selectedPrize=prizes[11]
            prizeIndex=11
        }
        else if(randomRotation>45 && randomRotation<=75){
            selectedPrize=prizes[10]
            prizeIndex=10
        }
        else if(randomRotation>75 && randomRotation<=105){
            selectedPrize=prizes[9]
            prizeIndex=9
        }
        else if(randomRotation>105 && randomRotation<=135){
            selectedPrize=prizes[8]
            prizeIndex=8
        }
        else if(randomRotation>135 && randomRotation<=165){
            selectedPrize=prizes[7]
            prizeIndex=7
        }
        else if(randomRotation>165 && randomRotation<=195){
            selectedPrize=prizes[6]
            prizeIndex=6
        }
        else if(randomRotation>195 && randomRotation<=225){
            selectedPrize=prizes[5]
            prizeIndex=5
        }
        else if(randomRotation>225 && randomRotation<=255){
            selectedPrize=prizes[4]
            prizeIndex=4
        }
        else if(randomRotation>255 && randomRotation<=285){
            selectedPrize=prizes[3]
            prizeIndex=3
        }
        else if(randomRotation>285 && randomRotation<=315){
            selectedPrize=prizes[2]
            prizeIndex=2
        }
        else if(randomRotation>315 && randomRotation<=345){
            selectedPrize=prizes[1]
            prizeIndex=1
        }
        resultElement.textContent = `Result: ${selectedPrize}`
        prizes = [...prizes.slice(prizeIndex), ...prizes.slice(0, prizeIndex)]
    }, 6000)
}