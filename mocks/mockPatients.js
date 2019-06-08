module.exports = {
    entry: [
        {
            fullUrl:
                'http://test.fhir.org/r4/Patient/08ba3d5e-4256-44df-8278-69fa610a38',
            resource: {
                resourceType: 'Patient',
                id: '08ba3d5e-4256-44df-8278-69fa610a38',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-28T09:55:53.843Z',
                },
                text: {
                    status: 'generated',
                },
                identifier: [
                    {
                        type: {
                            coding: [
                                {
                                    system: 'http://hl7.org/fhir/v2/0203',
                                    code: 'SS',
                                },
                            ],
                        },
                        system: 'http://hl7.org/fhir/sid/us-ssn',
                        value: '444222222',
                    },
                ],
                active: true,
                name: [
                    {
                        use: 'official',
                        family: 'Everywoman',
                        given: ['Petra'],
                    },
                ],
                telecom: [
                    {
                        system: 'phone',
                        value: '555-555-5555',
                        use: 'work',
                    },
                ],
                gender: 'female',
                birthDate: '1976-07-04',
                address: [
                    {
                        use: 'home',
                        line: ['2222 Home Street'],
                    },
                ],
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl:
                'http://test.fhir.org/r4/Patient/0c89be2f-121a-4b31-b9c8-d7528179fb',
            resource: {
                resourceType: 'Patient',
                id: '0c89be2f-121a-4b31-b9c8-d7528179fb',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-28T09:47:57.094Z',
                },
                text: {
                    status: 'generated',
                },
                identifier: [
                    {
                        type: {
                            coding: [
                                {
                                    system: 'http://hl7.org/fhir/v2/0203',
                                    code: 'SS',
                                },
                            ],
                        },
                        system: 'http://hl7.org/fhir/sid/us-ssn',
                        value: '12345678',
                    },
                ],
                active: true,
                name: [
                    {
                        use: 'official',
                        family: 'Nesco',
                        given: ['Joseph'],
                    },
                ],
                telecom: [
                    {
                        system: 'phone',
                        value: '555-555-5555',
                        use: 'work',
                    },
                ],
                gender: 'female',
                birthDate: '1976-07-04',
                deceasedBoolean: true,
                address: [
                    {
                        use: 'home',
                        line: ['2222 Home Street'],
                    },
                ],
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/11',
            resource: {
                resourceType: 'Patient',
                id: '11',
                meta: {
                    versionId: '2',
                    lastUpdated: '2019-01-23T10:42:19.172Z',
                },
                text: {
                    status: 'generated',
                },
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 8th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/12',
            resource: {
                resourceType: 'Patient',
                id: '12',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-21T15:18:27.123Z',
                },
                text: {
                    status: 'generated',
                },
                extension: [
                    {
                        url: 'http://example.org/StructureDefinition/trials',
                        valueCode: 'renal',
                    },
                ],
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 7th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/14',
            resource: {
                resourceType: 'Patient',
                id: '14',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-21T15:18:30.217Z',
                },
                text: {
                    status: 'generated',
                },
                extension: [
                    {
                        url: 'http://example.org/StructureDefinition/trials',
                        valueCode: 'renal',
                    },
                ],
                identifier: [
                    {
                        use: 'usual',
                        type: {
                            coding: [
                                {
                                    system:
                                        'http://terminology.hl7.org/CodeSystem/v2-0203',
                                    code: 'MR',
                                },
                            ],
                        },
                        system: 'http://www.goodhealth.org/identifiers/mrn',
                        value: '123456',
                    },
                ],
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 7th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/15',
            resource: {
                resourceType: 'Patient',
                id: '15',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-21T15:18:30.389Z',
                },
                text: {
                    status: 'generated',
                },
                extension: [
                    {
                        url: 'http://example.org/StructureDefinition/trials',
                        valueCode: 'renal',
                    },
                ],
                identifier: [
                    {
                        use: 'usual',
                        type: {
                            coding: [
                                {
                                    system:
                                        'http://terminology.hl7.org/CodeSystem/v2-0203',
                                    code: 'MR',
                                },
                            ],
                        },
                        system: 'http://www.goodhealth.org/identifiers/mrn',
                        value: '123456',
                    },
                ],
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 7th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/16',
            resource: {
                resourceType: 'Patient',
                id: '16',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-21T15:18:30.701Z',
                },
                text: {
                    status: 'generated',
                },
                extension: [
                    {
                        url: 'http://example.org/StructureDefinition/trials',
                        valueCode: 'renal',
                    },
                ],
                identifier: [
                    {
                        use: 'usual',
                        type: {
                            coding: [
                                {
                                    system:
                                        'http://terminology.hl7.org/CodeSystem/v2-0203',
                                    code: 'MR',
                                },
                            ],
                        },
                        system: 'http://www.goodhealth.org/identifiers/mrn',
                        value: '123456',
                    },
                ],
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 7th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/17',
            resource: {
                resourceType: 'Patient',
                id: '17',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-21T15:28:02.406Z',
                },
                text: {
                    status: 'generated',
                },
                extension: [
                    {
                        url: 'http://example.org/StructureDefinition/trials',
                        valueCode: 'renal',
                    },
                ],
                identifier: [
                    {
                        use: 'usual',
                        type: {
                            coding: [
                                {
                                    system:
                                        'http://terminology.hl7.org/CodeSystem/v2-0203',
                                    code: 'MR',
                                },
                            ],
                        },
                        system: 'http://www.goodhealth.org/identifiers/mrn',
                        value: '123456',
                    },
                ],
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 7th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl:
                'http://test.fhir.org/r4/Patient/178355b9199f4cadba1f42823d5d5e5d',
            resource: {
                resourceType: 'Patient',
                id: '178355b9199f4cadba1f42823d5d5e5d',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-05-05T15:20:49.172Z',
                    security: [
                        {
                            system:
                                'http://terminology.hl7.org/CodeSystem/v3-ActReason',
                            code: 'HTEST',
                            display: 'test health data',
                        },
                    ],
                },
                text: {
                    status: 'generated',
                },
                identifier: [
                    {
                        system: 'http://happyvalley.com/patient',
                        value: '067284105-001-19262015',
                    },
                ],
                active: true,
                name: [
                    {
                        use: 'official',
                        family: 'AmitieV0rmKx',
                        given: ['TimV0rmKx'],
                    },
                ],
                gender: 'male',
                birthDate: '1974-05-05',
            },
            search: {
                mode: 'match',
            },
        },
        {
            fullUrl: 'http://test.fhir.org/r4/Patient/18',
            resource: {
                resourceType: 'Patient',
                id: '18',
                meta: {
                    versionId: '1',
                    lastUpdated: '2019-01-21T15:28:02.640Z',
                },
                text: {
                    status: 'generated',
                },
                extension: [
                    {
                        url: 'http://example.org/StructureDefinition/trials',
                        valueCode: 'renal',
                    },
                ],
                identifier: [
                    {
                        use: 'usual',
                        type: {
                            coding: [
                                {
                                    system:
                                        'http://terminology.hl7.org/CodeSystem/v2-0203',
                                    code: 'MR',
                                },
                            ],
                        },
                        system: 'http://www.goodhealth.org/identifiers/mrn',
                        value: '123456',
                    },
                ],
                active: true,
                name: [
                    {
                        family: 'Levin',
                        given: ['Henry'],
                        suffix: ['The 7th'],
                    },
                ],
                gender: 'male',
                birthDate: '1932-09-24',
                generalPractitioner: [
                    {
                        reference: 'Practitioner/example',
                        display: 'Dr Adam Careful',
                    },
                ],
                managingOrganization: {
                    reference: 'Organization/2',
                    display: 'Good Health Clinic',
                },
            },
            search: {
                mode: 'match',
            },
        },
    ],
};
