
    function agregarPalabra() {
      var wordInput = document.getElementById("word-input");
      var wordList = document.getElementById("word-list");
      var newWord = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      
      var wordText = document.createElement("span");
      wordText.textContent = wordInput.value;
      
      var deleteButton = document.createElement("span");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "x";
      deleteButton.onclick = function() {
        newWord.remove();
      };
      
      if (wordInput.value.trim() === "") {
        var errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        return;
      }
      
      var errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "none";
      
      newWord.appendChild(checkbox);
      newWord.appendChild(wordText);
      newWord.appendChild(deleteButton);
      
      wordList.appendChild(newWord);
      
      wordInput.value = "";
    }
    
    function seleccionarTodo() {
      var checkboxes = document.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
      });
    }
    
 
  