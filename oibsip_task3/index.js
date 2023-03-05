function add_item() {

    let item = document.getElementById("box");
    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");
    if (item.value != "") {

        let make_li = document.createElement("LI");
        let rem_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));

        list1.appendChild(make_li);

        item.value = ""

        make_li.onclick = function () {

            this.parentNode.removeChild(this);

            if (this != "") {
                rem_li = this;
                list2.appendChild(rem_li);
                alert("Task Completed Successfully!")
                rem_li.onclick = function () {
                    this.parentNode.removeChild(this);
                    alert("Task removed from completed list!");
                }
            }

        }
    }
    else {
        alert("Enter your task first!!!");
    }

}
