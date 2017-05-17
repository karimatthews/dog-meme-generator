

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// var image = document.createElement("img")
// image.id = "memeImage"
// image.src = ""
// image.alt = ""

var basic = null;

var croppedImage = document.getElementById("croppedImage")

var uploadDiv = document.getElementById('upload')

imageContainer = document.getElementById("imageContainer")

function cropImage(){
  //clear previous image
  function clearImageContainer() {
    while (imageContainer.childNodes.length > 0) {
      imageContainer.removeChild(imageContainer.childNodes[0])
    }
  }
  clearImageContainer();

  var file = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader = new FileReader();

  //create croppie
  basic = $('#imageContainer').croppie({
    viewport: {width: 200,height: 200},
    showZoomer: false
  });
  //
  // basic.croppie('setZoom', {
  //     value: 100
  // });

  //bind croppie to uploaded image
  reader.onloadend = function () {
    // basic.croppie('setZoom', {value: 1.5})
    basic.croppie('bind', {
        url: reader.result,
        // points: [0,0,2000,2000]
    })

  }

  if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
  } else {
      image.src = "";
  }


  var memeDiv = document.getElementById('memeDiv')

  function showCroppedImage() {
    basic.croppie('result', {
        type: 'base64',
        size: {width: 400}
    }).then(function(res){
      croppedImage.src = res
    });
  }

  showResultButton = document.createElement("button")
  showResultButton.id = "showResultButton"
  showResultButton.className = "button"
  imageContainer.appendChild(showResultButton)
  showResultButton.innerHTML = "Crop Image"
  showResultButton.onclick = showCroppedImage;

}


function addTopText() {
  var topText = document.getElementById("topTextBox")
  topText.innerHTML = document.getElementById("topTextInput").value
}


function addBottomText() {
  var bottomText = document.getElementById("bottomTextBox")
  bottomText.innerHTML = document.getElementById("bottomTextInput").value
}


function showMeme() {
  //delete old meme
  // if (uploadDiv.childNodes.length > 7) {
  //   uploadDiv.removeChild(uploadDiv.childNodes[7])
  // }

  addTopText();
  addBottomText();
}
