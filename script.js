var typeText = document.querySelector(".typeText")
var textToBeTypedArr = ["Hi stranger!", "I'm Peter Kennedy Ngugi.", "I love dogs.", "Glad to have you here.", "Unfortunately there's not much to see yet."]
var index = 0,
      isAdding = true,
            textToBeTypedIndex = 0

function playAnim() {
      setTimeout(function () {
            // set the text of typeText to a substring of
            // the textToBeTyped using index.
            typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
            if (isAdding) {
                  // adding text
                  if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                        // no more text to add
                        isAdding = false
                        //break: wait 2s before playing again
                        typeText.classList.add("showAnim")
                        setTimeout(function () {
                              typeText.classList.remove("showAnim")
                              playAnim()
                        }, 3000)
                        return
                  } else {
                        // increment index by 1
                        index++
                  }
            } else {
                  // removing text
                  if (index === 0) {
                        // no more text to remove
                        isAdding = true
                        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
                  } else {
                        // decrement index by 1
                        index--
                  }
            }
            // call itself
            playAnim()
      }, isAdding ? 120 : 80)
}
// start animation
playAnim()

$(window).on("load", function (event) {
      $(".loader-wrapper").fadeOut("slow");
      $("#landing-page").fadeIn("slower");
});