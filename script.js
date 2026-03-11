// Оставляем ОДНУ функцию получения данных
function creds() {
    return {
        id: document.getElementById("idInstance").value,
        token: document.getElementById("apiToken").value
    }
}

function show(data) {
    document.getElementById("result").value = JSON.stringify(data, null, 2);
}

async function getSettings() {
    const { id, token } = creds();
    if (!id || !token) return alert("Введите ID и Token");
    
    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/getSettings/${token}`);
        show(await res.json());
    } catch (e) {
        show({ error: e.message });
    }
}

async function getState() {
    const { id, token } = creds();
    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`);
        show(await res.json());
    } catch (e) {
        show({ error: e.message });
    }
}

async function sendMessage() {
    const { id, token } = creds();
    const body = {
        chatId: `${document.getElementById("phone").value}@c.us`, // Добавляем суффикс, если его нет
        message: document.getElementById("message").value
    };

    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        show(await res.json());
    } catch (e) {
        show({ error: e.message });
    }
}

async function sendFile() {
    const { id, token } = creds();
    const body = {
        chatId: `${document.getElementById("phone").value}@c.us`,
        urlFile: document.getElementById("fileUrl").value,
        fileName: "file"
    };

    try {
        const res = await fetch(`https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        show(await res.json());
    } catch (e) {
        show({ error: e.message });
    }
}