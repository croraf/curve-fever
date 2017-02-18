

export default function(chatOutMessage) {

    return {
        type: "CHAT_OUT_MESSAGE",
        payload: chatOutMessage
    };
}