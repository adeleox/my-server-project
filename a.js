class SMS {
    sendMessage(text) {
        console.log(`Sending SMS: ${text}`);
    }
}

class Email {
    sendMessage(text) {
        console.log(`Sending Email: ${text}`);
    }
}

class Notification {
    constructor(sender) {
        this.sender = sender;
    }

    send(msg) {
        this.sender.sendMessage(msg);
    }
}

class UrgentNotification extends Notification {
    send(msg) {
        super.send(`URGENT: ${msg}`);
    }
}

const smsSender = new SMS();
const emailSender = new Email();

const regularMsg = new Notification(smsSender);
regularMsg.send("Hello Adele");

const urgentMsg = new UrgentNotification(emailSender);
urgentMsg.send("Server Error");