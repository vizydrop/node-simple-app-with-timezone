const getSources = () => {
    return [
        {
            id: 'stocks', name: 'Stocks',
            filter: [
                {
                    id: `date`,
                    title: `Date Range`,
                    optional: true,
                    description: `Select period`,
                    type: `date`,
                    datalist: true,
                },
            ]
        }
    ];
};

module.exports = {
    name: 'Stocks with timezone',
    version: '1.0',
    description: 'Vizydrop custom app with timezone support',
    authentication: [{
        'id': 'none',
        'name': 'This information is public',
        'description': 'There is no any authentication required. Just press [Connect] button and proceed to charts beauty'
    }],
    'sources': getSources(),
    features: {
        timezone: true,
    },
};
