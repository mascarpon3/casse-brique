const quitRules = document.getElementById("quit-rules")
const openRules = document.getElementById("open-rules")
const rules = document.getElementById("rules")

openRules.addEventListener("click", e =>{
    rules.className = "rules visible"
})

quitRules.addEventListener("click", e =>{
    rules.className = "rules"
})
