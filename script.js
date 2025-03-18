function openForm(type) {
    document.getElementById("authForm").style.display = "block";
    document.getElementById("formTitle").innerText = type === "signup" ? "Sign Up" : "Log In";
    document.getElementById("authButton").innerText = type === "signup" ? "Sign Up" : "Log In";
    document.getElementById("toggleLink").innerText = type === "signup" ? "Switch to Log In" : "Switch to Sign Up";
}

function closeForm() {
    document.getElementById("authForm").style.display = "none";
}

function toggleForm() {
    let current = document.getElementById("formTitle").innerText;
    let newType = current === "Sign Up" ? "login" : "signup";
    openForm(newType);
}

function googleSignUp() {
    alert("Google Sign Up not implemented yet!");
}
