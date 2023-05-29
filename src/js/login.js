function handleLogin() {

    alert("로그인이 되었습니다.");
    window.location.href = "index.html";
}

function handleIdStorage() {
    var idInput = document.getElementById("exampleInputEmail1");
    var saveId = document.getElementById("exampleCheck1").checked;
    
    if (saveId) {
        localStorage.setItem("savedId", idInput.value);
    } else {
        localStorage.removeItem("savedId");
    }
}

// Restore saved ID on page load
window.onload = function() {
    var savedId = localStorage.getItem("savedId");
    var idInput = document.getElementById("exampleInputEmail1");
    
    if (savedId) {
        idInput.value = savedId;
        document.getElementById("exampleCheck1").checked = true;
    }
}