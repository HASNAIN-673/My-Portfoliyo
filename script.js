document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor-follower');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        });
    }

    // Scroll Reveal Animations
    ScrollReveal().reveal('.reveal', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 100
    });

    // AI Assistant Logic
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat');
    const chatBody = document.getElementById('chat-body');

    const getBotResponse = (text) => {
        const input = text.toLowerCase().trim();

        // Professional response for "How is Hasnain?"
        if (input.includes('hasnain kaisa') || input.includes('hasnain kesa') || input.includes('how is hasnain') || input.includes('about hasnain') || input.includes('tell me about hasnain')) {
            return [
                "Muhammad Hasnain is a highly **capable** and talented professional.",
                "He is deeply **focused** on his goals and consistently strives for excellence.",
                "He is an expert **Full Stack Web Developer** with a passion for creative design.",
                "In addition to development, Hasnain is also a skilled **Crypto Trader**.",
                "Combining technical development and market strategy, Muhammad Hasnain brings a unique and powerful skill set to any project."
            ];
        }

        if (input.includes('salam') || input.includes('alaikum')) {
            return "Walaikum Assalam! I am Muhammad Hasnain's AI Assistant. You can ask me anything about his professional background or skills.";
        } else if (input.includes('hi') || input.includes('hello')) {
            return "Hello! Muhammad Hasnain's AI AI-OS is online. How can I help you explore his profile?";
        } else if (input.includes('project')) {
            return "Hasnain ne kafi interesting projects banaye hain, jaise ke AI Chatbot aur E-Commerce platforms. Aap neche Projects section mein dekh sakte hain.";
        } else if (input.includes('skill')) {
            return "Hasnain ki top skills mein JavaScript, React, Node.js, aur Crypto Market Analysis shamil hain.";
        }

        return "System processed your input. Requesting more details about Muhammad Hasnain...";
    };

    const addChatMessage = (text, type) => {
        const msg = document.createElement('div');
        msg.className = `message ${type}-message`;
        msg.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const handleChatSend = () => {
        const text = chatInput.value.trim();
        if (!text) return;

        addChatMessage(text, 'user');
        chatInput.value = '';

        // Bot typing simulation for step-by-step effect
        const response = getBotResponse(text);

        if (Array.isArray(response)) {
            let delay = 600;
            response.forEach((line, index) => {
                setTimeout(() => {
                    addChatMessage(line, 'bot');
                }, delay * (index + 1));
            });
        } else {
            setTimeout(() => {
                addChatMessage(response, 'bot');
            }, 600);
        }
    };

    if (sendChatBtn && chatInput) {
        sendChatBtn.addEventListener('click', handleChatSend);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChatSend();
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
