const visaInfo = {
    tourist: "A tourist visa is for those visiting the country for leisure or vacation. Requirements include a valid passport, proof of accommodation, and return travel tickets.",
    work: "A work visa requires a job offer from a company within the country. Necessary documents include a work contract, proof of qualifications, and health insurance.",
    student: "A student visa is for those pursuing studies. You need an admission letter from a recognized educational institution, proof of funds, and health insurance.",
    medical: "A medical visa is for those seeking medical treatment. Required documents include a medical appointment confirmation, proof of funds, and a valid passport.",
    family: "A family reunion visa allows family members to join a resident in the country. Required documents include proof of relationship, proof of residence, and financial support evidence."
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    const chatOutput = document.getElementById('chat-output');

    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    const userLabel = document.createElement('div');
    userMessage.appendChild(userLabel);
    userLabel.className = 'user-label';
    // userLabel.innerText = "user";
    chatOutput.appendChild(userMessage);

    document.getElementById('user-input').value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Simulate loading time before bot replies
    displayLoading();

    setTimeout(() => {
        // Remove loading animation
        removeLoading();

        // Display bot reply
        const botResponse = document.createElement('div');
        botResponse.className = 'bot-response';
        botResponse.innerText = getBotResponse(userInput);
        const botLabel = document.createElement('div');
        botResponse.appendChild(botLabel);
        botLabel.className = 'bot-label';
        // botLabel.innerText = "bot";
        chatOutput.appendChild(botResponse);

        chatOutput.scrollTop = chatOutput.scrollHeight;
    }, 1000); // 1 second loading time
}

function displayLoading() {
    const chatOutput = document.getElementById('chat-output');
    const loadingElement = document.createElement('div');
    loadingElement.className = 'bot-response loading';

    const spinner = document.createElement('div');
    spinner.className = 'spinner-border text-primary';
    spinner.setAttribute('role', 'status');

    loadingElement.appendChild(spinner);
    chatOutput.appendChild(loadingElement);

    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function removeLoading() {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.remove();
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("visa")) {
        if (input.includes("tourist")) {
            return visaInfo.tourist;
        } else if (input.includes("work")) {
            return visaInfo.work;
        } else if (input.includes("student")) {
            return visaInfo.student;
        } else if (input.includes("medical")) {
            return visaInfo.medical;
        } else if (input.includes("family")) {
            return visaInfo.family;
        } else {
            return "Please specify the type of visa you are interested in (e.g., tourist, work, student, medical, family).";
        }
    } else {
        return "I'm here to help with information about visas. Please ask about a specific type of visa.";
    }
}

function showVisaTypes() {
    const visaInfoDiv = document.getElementById('visa-info');
    visaInfoDiv.innerHTML = `
        <p>Tourist Visa: ${visaInfo.tourist}</p>
        <p>Work Visa: ${visaInfo.work}</p>
        <p>Student Visa: ${visaInfo.student}</p>
        <p>Medical Visa: ${visaInfo.medical}</p>
        <p>Family Reunion Visa: ${visaInfo.family}</p>
    `;
}



