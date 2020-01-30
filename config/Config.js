module.exports = {
    'secretToken': 'parkiran1',
    'server_mongoose': `mongodb://${process.env.NODE_NAME}:${process.env.PORT_DATABASE_MONGO}/${process.env.COLLECTION_DATABASE_MONGO}?retryWrites="true"`,
    'hashPassword': 'parkiran_oke',
}
