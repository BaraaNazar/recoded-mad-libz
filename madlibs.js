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

  let objectsArray = [];
  function parseStory(rawStory) {
    let storyArr = rawStory.split(" ");
    storyArr.forEach((element) => {
      let a = element.match(/\w+(?=\s*\[)/g);
      let b = element !== a;
      let pos = element.substr(-3);
      let wordType = () => {
        if (pos === "[a]") {
          return "adjective";
        } else if (pos === "[n]") {
          return "noun";
        } else if (pos === "[v]") {
          return "verb";
        }
      };
      if (a) {
        return objectsArray.push({ word: element.slice(0, -3), pos: wordType() });
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
    // const btnInsert = document.getElementById("btnInsert")
    // const isOutput = document.getElementById("isOutput")

    // btnInsert.addEventListener("click", ()=> {
    // const y = document.querySelectorAll("span")
    //   const setTextOfPreview = localStorage.setItem("saved",y ).innerText
    //   const textOfPreview = localStorage.getItem("saved");
    //   isOutput.innerHTML += `${textOfPreview}`
    //   console.log(y)
    // })

      };