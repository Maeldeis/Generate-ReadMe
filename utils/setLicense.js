export const setLicense = (license) => {
    let licenseBadge = '';
    let licenseNotice = '';

    switch (license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseNotice = 'This application is licensed under the terms of the MIT License.';
            break;
        case 'Boost 1.0':
            licenseBadge = '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            licenseNotice = 'This application is licensed under the terms of the Boost Software License 1.0.';
            break;
        case 'AGPL v3':
            licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
            licenseNotice = 'This application is licensed under the terms of the GNU AGPL v3 License.';
            break;
        case 'GPL v3':
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            licenseNotice = 'This application is licensed under the terms of the GNU GPL v3 License.';
            break;
        case 'MPL 2.0':
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            licenseNotice = 'This application is licensed under the terms of the Mozilla Public License 2.0.';
            break;
        case 'Apache 2.0':
            licenseBadge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            licenseNotice = 'This application is licensed under the terms of the Apache License 2.0.';
            break;
        default:
            break;
    }

    return { badge: licenseBadge, notice: licenseNotice };
};
