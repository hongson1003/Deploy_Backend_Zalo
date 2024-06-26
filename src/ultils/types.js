const STATUS_FRIENDSHIP = {
    PENDING: 'PENDING',
    RESOLVE: 'RESOLVE',
    REJECT: 'REJECT',
    OLD_FRIEND: 'OLD_FRIEND'
}

const STATUS_CHAT = {
    PRIVATE_CHAT: 'PRIVATE_CHAT',
    GROUP_CHAT: 'GROUP_CHAT'
}

const MESSAGES = {
    SEND_MESSAGE_FUNC: 'SEND_MESSAGE_FUNC',
    IMAGES: 'IMAGES',
    VIDEO: 'VIDEO',
    AUDIO: 'AUDIO',
    TEXT: 'TEXT',
    STICKER: 'STICKER',
    FILE_FOLDER: 'FILE_FOLDER',
    NOTIFY: 'NOTIFY',
    NEW_FRIEND: 'NEW_FRIEND',
}

module.exports = {
    STATUS_FRIENDSHIP,
    STATUS_CHAT,
    MESSAGES
}