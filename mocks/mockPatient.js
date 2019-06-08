module.exports = {
    resourceType: 'Patient',
    id: '11',
    meta: {
        versionId: '2',
        lastUpdated: '2019-01-23T10:42:19.172Z',
    },
    text: {
        status: 'generated',
        div: `<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 11</p><p><b>active</b>: true</p><p><b>name</b>: Henry Levin </p><p><b>gender</b>: male</p><p><b>birthDate</b>: 9/24/1932</p><p><b>generalPractitioner</b>: <a href="Practitioner/example">Dr Adam Careful</a></p><p><b>managingOrganization</b>: <a href="Organization/2">Good Health Clinic</a></p></div>`,
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
};
