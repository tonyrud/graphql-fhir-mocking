module.exports = {
    resourceType: 'Practitioner',
    id: 'example',
    meta: {
        versionId: '1',
        lastUpdated: '2019-01-13T15:33:43.921Z',
    },
    text: {
        status: 'generated',
        div:
            '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n        2012</p>\n    </div>',
    },
    identifier: [
        {
            system: 'http://www.acme.org/practitioners',
            value: '23',
        },
    ],
    active: true,
    name: [
        {
            family: 'Careful',
            given: ['Adam'],
            prefix: ['Dr'],
        },
    ],
    address: [
        {
            use: 'home',
            line: ['534 Erewhon St'],
            city: 'PleasantVille',
            state: 'Vic',
            postalCode: '3999',
        },
    ],
    qualification: [
        {
            identifier: [
                {
                    system: 'http://example.org/UniversityIdentifier',
                    value: '12345',
                },
            ],
            code: {
                coding: [
                    {
                        system:
                            'http://terminology.hl7.org/CodeSystem/v2-0360/2.7',
                        code: 'BS',
                        display: 'Bachelor of Science',
                    },
                ],
                text: 'Bachelor of Science',
            },
            period: {
                start: '1995',
            },
            issuer: {
                display: 'Example University',
            },
        },
    ],
};