function getBotResponse(input) {
    //rock paper scissors
    if (input == "") {
        return "customer ID";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi") {
        return "Welcome to APDCL Chatbot service! How may I assist you today? ";
    } else if (input == "billing") {
    
        return "For billing inquiries, you can visit the APDCL website or contact their customer support at 1800-XXX-XXXX.";
    }
    if (input =="outage"){
        return " "
    }
}


function apdclChatbot(input) {
    if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
        return "Welcome to APDCL Chatbot service! How may I assist you today?";
    } else if (input.toLowerCase().includes("billing") || input.toLowerCase().includes("bill")) {
        return "For billing inquiries, you can visit the APDCL website or contact their customer support at 1800-XXX-XXXX.";
    } else if (input.toLowerCase().includes("outage") || input.toLowerCase().includes("power cut")) {
        return "To report a power outage or check the status of an existing outage, please call APDCL helpline at 1912.";
    } else if (input.toLowerCase().includes("tariff") || input.toLowerCase().includes("rates")) {
        return "Information about electricity tariffs and rates can be found on the APDCL website under the 'Tariff' section.";
    } else if (input.toLowerCase().includes("connection") || input.toLowerCase().includes("new connection")) {
        return "To apply for a new electricity connection, you can submit the application form available on the APDCL website or visit your nearest APDCL office.";
    } else if (input.toLowerCase().includes("complaint") || input.toLowerCase().includes("feedback")) {
        return "If you have any complaints or feedback, you can lodge them through the 'Complaints' section on the APDCL website or contact customer support.";
    } else if (input.toLowerCase().includes("contact") || input.toLowerCase().includes("customer support")) {
        return "You can reach APDCL customer support at 1800-XXX-XXXX during their working hours.";
    } else if (input == "") {
        return "Talk to you later!";
    } else {
        return "I'm sorry, but I'm a bit limited in my responses. For more specific queries, I recommend visiting the APDCL website or contacting their customer support.";
    }
}
