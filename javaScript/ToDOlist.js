
        // Function to show custom message box
        function showMessageBox(title, message) {
            document.getElementById("message-box-title").innerText = title;
            document.getElementById("message-box-content").innerText = message;
            document.getElementById("message-box-overlay").classList.add("show");
        }

        // Event listener for the OK button on the message box
        document.getElementById("message-box-ok-button").onclick = function() {
            document.getElementById("message-box-overlay").classList.remove("show")
        }

         // Event listener for the CLOSE button on the message box
        // document.getElementById("message-box-close-button").onclick = function() {
        //     document.getElementById("message-box-overlay").classList.remove("show")
        // }




        function addTask() {
            var inputTask = document.getElementById("task-input"); // Corrected ID
            var taskList = document.getElementById("task-list"); // Corrected ID

            // Check if the input field is empty
            if (inputTask.value.trim() === "") { // Use .trim() to handle whitespace
                showMessageBox("Input Required", "Please enter a new task.");
                return;
            }

            // Create new list item
            var listItem = document.createElement("li");
            listItem.innerText = inputTask.value;

            // Create button container
            var buttonContainer = document.createElement("div");
            buttonContainer.className = "task-buttons"; // Changed class name for clarity and consistency

            // Create delete button
            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.className = "btn btn-danger"; // Apply Bootstrap-like class
            deleteButton.onclick = function() {
                taskList.removeChild(listItem);
            };

            // Create complete button
            var completeButton = document.createElement("button");
            completeButton.innerText = "Complete";
            completeButton.className = "btn btn-success"; // Apply Bootstrap-like class
            completeButton.onclick = function() {
                listItem.classList.toggle("completed"); // Toggle 'completed' class for styling
            };

            // Append buttons to their container
            buttonContainer.appendChild(deleteButton);
            buttonContainer.appendChild(completeButton);

            // Append button container to list item
            listItem.appendChild(buttonContainer);

            // Append list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field after adding the task
            inputTask.value = "";
        }