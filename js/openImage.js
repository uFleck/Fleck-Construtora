let img_container = document.querySelectorAll(".img-galery")

if (img_container) {
  img_container.forEach(function (img, index) {
    img.onclick = function () {
      let getFullURL = this.getAttribute("src")
      let getImgUrlPos = getFullURL.split("./img/")
      let formattedURL = getImgUrlPos[1]

      let container = document.body
      let newImgWindow = document.createElement("div")
      container.appendChild(newImgWindow)
      newImgWindow.setAttribute("class", "img-window")
      newImgWindow.setAttribute("onclick", "closeImg()")

      let newImg = document.createElement("img")
      newImgWindow.appendChild(newImg)
      newImg.setAttribute("src", "./img/" + formattedURL)
    }
  })
}

function closeImg() {
  document.querySelector(".img-window").remove()
}
