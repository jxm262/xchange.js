const config = {
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

export default function (env = process.env.NODE_ENV) {
    return config[env];
}
