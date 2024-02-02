class regionJobName {
    jobName(region){
        let regionArray = [];
        switch(region) {
            case 'us_smoke':
                regionArray.push('BFCBE1F67359372DFF6C668D5D7EED417163E8FCE7963117A9BB8157736ED802'); //Job ID
                regionArray.push('Univar US Upload'); //Job Name
                regionArray.push('Univar Solutions US QA'); //Cycle Name
                break;

            case 'uk_smoke':
                regionArray.push('A824AE682558B26DB5AF6400CA86223B66F1506F31E9E26D72DDC78839240380'); //Job ID
                regionArray.push('Univar UK Upload'); //Job Name
                regionArray.push('Univar Solutions UK QA'); //Cycle Name
                break;

            case 'se_smoke':
                regionArray.push('6E422BDD7A1211B06981022BE04A75D8ABEF8F62EBE78EA7386F1E6015647CF6'); //Job ID
                regionArray.push('Univar SE Upload'); //Job Name
                regionArray.push('Univar Solutions SE QA'); //Cycle Name
                break;

            case 'no_smoke':
                regionArray.push('2EFFE7F5C40153052F300EDDB8B23D14ACCBB5CD6D5C6D3F5E559E265EEF3FC3'); //Job ID
                regionArray.push('Univar NO Upload'); //Job Name
                regionArray.push('Univar Solutions NO QA'); //Cycle Name
                break;

            case 'nl_be_smoke':
                regionArray.push('2566DB20E0D643A664531B0EEBA7B07C0835C2A407C77332C8A43F80EC292C56'); //Job ID
                regionArray.push('Univar NL 30 Upload'); //Job Name
                regionArray.push('Univar Solutions NL 30 QA'); //Cycle Name
                break;

            case 'nl_smoke':
                regionArray.push('D75D8F21F4863430635C755CEDC83F23BD7AAE2AAFFE4E05DAA729A2B509FDC6'); //Job ID
                regionArray.push('Univar NL 10 Upload'); //Job Name
                regionArray.push('Univar Solutions NL 10 QA'); //Cycle Name
                break;

            case 'mx_smoke':
                regionArray.push('1B718E69F8E07C47D26A74ABD807DC85776B6E0BEA61565A0A4A89B88965398B'); //Job ID
                regionArray.push('Univar MX Upload'); //Job Name
                regionArray.push('Univar Solutions MX QA'); //Cycle Name
                break;

            case 'it_smoke':
                regionArray.push('C04A0404ED198F849462CBDA293B97C1D1306F657796F6D1D1FEDEE7D3586370'); //Job ID
                regionArray.push('Univar IT Upload'); //Job Name
                regionArray.push('Univar Solutions IT QA'); //Cycle Name
                break;

            case 'ie_smoke':
                regionArray.push('36CD4A8EA847B474D206187A5BB6CDD1AD006168673EF3BDAFE33DDF7EF461D8'); //Job ID
                regionArray.push('Univar IE Upload'); //Job Name
                regionArray.push('Univar Solutions IE QA'); //Cycle Name
                break;

            case 'fr_smoke':
                regionArray.push('8A070A744B86F56FDD321C4559B38378D294BAAF4EB57BB7EFF9230BB1263F5C'); //Job ID
                regionArray.push('Univar FR Upload'); //Job Name
                regionArray.push('Univar Solutions FR QA'); //Cycle Name
                break;

            case 'fi_smoke':
                regionArray.push('3AD63C4B70B057DF857538A9E3D2F3958ADE41B5A9BC7EE35E21792CAD8FD86D'); //Job ID
                regionArray.push('Univar FI Upload'); //Job Name
                regionArray.push('Univar Solutions FI QA'); //Cycle Name
                break;

            case 'es_smoke':
                regionArray.push('6B5E373D6C72D760AC2F8C2A7384646B80212984889ED81763AA72605B1074CD'); //Job ID
                regionArray.push('Univar ES Upload'); //Job Name
                regionArray.push('Univar Solutions ES QA'); //Cycle Name
                break;

            case 'dk_smoke':
                regionArray.push('639A7CB60F88775B46AE2A0A91533C2B4408DCD1728ADB244CBAF3EA54D28D2E'); //Job ID
                regionArray.push('Univar DK Upload'); //Job Name
                regionArray.push('Univar Solutions DK QA'); //Cycle Name
                break;

            case 'ca_en_smoke':
                regionArray.push('40C72A9BC633A963A0DB4A0B3DF886AA624486535EF0AE05DC5A0CDE7A65126E'); //Job ID
                regionArray.push('Univar CA EN Upload'); //Job Name
                regionArray.push('Univar Solutions CA EN QA'); //Cycle Name
                break;

            case 'ca_fr_smoke':
                regionArray.push('661AB91BB01A085676582648B408B7646BDA4133882C99817E54711204230D40'); //Job ID
                regionArray.push('Univar CA FR Upload'); //Job Name
                regionArray.push('Univar Solutions CA FR QA'); //Cycle Name
                break;

            case 'be_fr_smoke':
                regionArray.push('8096FB55488E13B086CAB27FE142A59DAE7AE7BC7934622805EB5BA0BB8AD89A'); //Job ID
                regionArray.push('Univar BE FR Upload'); //Job Name
                regionArray.push('Univar Solutions BE FR QA'); //Cycle Name
                break;

            case 'be_smoke':
                regionArray.push('BE162ECFE4345188EBD3515557DBC4848516C50E8CCA10533795DF61CD46BC26'); //Job ID
                regionArray.push('Univar BE Upload'); //Job Name
                regionArray.push('Univar Solutions BE QA'); //Cycle Name
                break;

            default:
                console.log('ERROR: Please enter a correct Region to start Zephyr API upload');
                process.exit();

        }

        return regionArray;
    }
}

module.exports = new regionJobName
