// Career Path Recommendations
document.getElementById("career-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const skills = document.getElementById("skills").value;
    const interests = document.getElementById("interests").value;
    let recommendations = "<p>Based on your skills, here are some career options:</p>";
    
    if (skills.includes("programming")) {
        recommendations += "<p>Software Developer</p>";
    }
    if (interests.includes("design")) {
        recommendations += "<p>UI/UX Designer</p>";
    }

    document.getElementById("career-result").innerHTML = recommendations;
});

// Skill Gap Analyzer
function analyzeSkillGap() {
    const currentSkills = document.getElementById("current-skills").value;
    let gapResult = "<p>Here's what you need to improve:</p>";

    if (!currentSkills.includes("JavaScript")) {
        gapResult += "<p>Learn JavaScript to improve your web development skills.</p>";
    }

    document.getElementById("gap-result").innerHTML = gapResult;
}

// Career Coach Chatbot Interaction
function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    const chatLog = document.getElementById("chat-log");
    const botMessage = `Career Coach: Based on your input, we recommend focusing on improving your ${userMessage}.`;

    chatLog.innerHTML += `<div>User: ${userMessage}</div>`;
    chatLog.innerHTML += `<div>${botMessage}</div>`;
    document.getElementById("user-input").value = "";
}
