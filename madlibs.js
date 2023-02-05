/**
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 */
//creating an array to retunr the story
let objectsArray = []; 
function parseStory(rawStory) {
  let storyArr = rawStory.split(" "); //spliting the story into words
  storyArr.forEach((element) => {
    let a = element.match(/\w+(?=\s*\[)/g); // the element should math with word containing alphanumeric letters and digits using \w and whitespace using \s 
    let b = element !== a; // if the element is not matched the condition it will store the words in b
    let pos = element.substr(-3); //it takes the hole string and store it into pos. So it's to extract characters from the end of the string, use a negative start position.
    let wordType = () => { //creating function called wordType 
      if (pos === "[a]") {
        return "adjective";  // if the pos equal to a a so it will return an adjective 
      } else if (pos === "[n]") {
        return "noun";      // if the pos equal to n a so it will return a noun
      } else if (pos === "[v]") {
        return "verb";     // if the pos equal to v a so it will return a verb
      }
    };
    if (a) {
      return objectsArray.push({ word: element.slice(0, -3), pos: wordType() }); //if it's true then pushing the word 
    } else if (b) {
      return objectsArray.push({ word: element });
    }
  });
  let inputvalue;
  let p = document.getElementById("paragraph"); 
  objectsArray.map((object,index) => {
    if (object.pos) {
      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", object.pos);
      input.setAttribute("class", "inputs  flex-wrap m-1 text-center text-sm rounded-md text-black w-14");
      input.setAttribute("maxLength", "20");
      p.appendChild(input);
      input.addEventListener('input',(e)=>{
        inputvalue = e.target.value
          let x = document.getElementById(index)
          x.innerText = e.target.value
        })
    } else {
      let text = document.createTextNode(' ' + object.word );
      p.appendChild(text);
      return;
    }
  });
  let inputs = document.getElementsByClassName("inputs");
  let p2 = document.getElementById("paragraph2");
  objectsArray.map((object,index) => {
    if (object.pos) {
      valueSpan = document.createElement("span");
      valueSpan.setAttribute("id", index);
      valueSpan.style.display = 'none'
      p2.appendChild(valueSpan);
    } else {
      text = document.createTextNode(" " + object.word + " ");
      p2.appendChild(text);
    }
  });
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      if (e.which === 13) {
        e.preventDefault();
        inputs[i].nextElementSibling.focus();
      }
    });
  }
  for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup",(e) => {
      e.preventDefault();
      let y = document.querySelectorAll('span')
      y.forEach(spanel=>{spanel.style.display = 'inline';
      spanel.style.fontWeight = '700';  }
      )
    })
  }

}


getRawStory()
.then(parseStory)
.then((processedStory) => {
  console.log(processedStory);
});