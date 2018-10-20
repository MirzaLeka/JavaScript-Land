
// open file and display it on web

document.querySelector("#fileLoader").onchange = () => {
    let file = document.querySelector("#fileLoader").files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
        let text = e.target.result;
        document.querySelector("textarea").value = text;
    }

    fileReader.readAsText(file, "UTF-8");

}


// save file on pc

let saveFile = () => {
    let saveText = document.querySelector("textarea").value;
    let textBLOB = new Blob( [saveText], {type: "text/plain"} );
    let fileName = prompt("Enter file name");
    let link = document.createElement("a");

    link.download = fileName;
    link.innerHTML = "Download File";

    if (window.URL != null) {
        link.href = window.URL.createObjectURL(textBLOB);
    } else {
        link.href = window.URL.createObjectURL(textBLOB);
        link.onclick = destroy;
        link.style.display = "none";
        document.body.appendChild(link);
    }

    link.click();
}

let destroy = (e) => {
    document.body.removeChild(e.target);
}