export default {
    LOCAL: {
        kraken: {
            serverTime: '/kraken/serverTime',
        },
    },
    DEV: {
        kraken: {
            serverTime: 'https://api.kraken.com/0/public/Time'
        },
    },
    PROD: {
        kraken: {
            serverTime: 'https://api.kraken.com/0/public/Time',
        },
    },
};
