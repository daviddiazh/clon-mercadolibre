import profileBrandDisneyStar from '../assets/logos-brands/comboplus-square.jpg';
import profileBrandParamount from '../assets/logos-brands/paramount-logo-vdp-56-x-56-filled@2x.png';
import profileBrandHBO from '../assets/logos-brands/logoSquare@2x.png';

import bgDisneyAndStar from '../assets/benefits/disney-nivel6-mla-mco-mlm@2x.png';
import bgParamount from '../assets/benefits/paramount-mco-mlm@2x.jpg';
import bgHBO from '../assets/benefits/HBOMax_widgetmulti_mobdsk_mco_@2x.webp';

export const mockMarketingPoints = [
    {
        id: 1,
        backgroundPhoto: bgDisneyAndStar,
        // backgroundPhoto: 'https://drive.google.com/uc?export=view&id=1pm9A5PV-a-VKA1r5Qv1GWN4UzbLipIuq',
        profilePhotoBrand: profileBrandDisneyStar,
        // profilePhotoBrand: 'https://drive.google.com/uc?export=view&id=1M2jeNUiF4PlXHauwL1tveCW3u70kHRuW',
        freeDays: null,
        title: 'Sin cargo nivel 6',
        brandName: 'Disney+ y Star+',
    },
    {
        id: 2,
        backgroundPhoto: bgParamount,
        // backgroundPhoto: 'https://drive.google.com/uc?export=view&id=1BVfX-ht5fn8JJrEm2TRdcQwEVUtUgSlF',
        profilePhotoBrand: profileBrandParamount,
        // profilePhotoBrand: 'https://drive.google.com/uc?export=view&id=1dTH4-9gMIhscJVINQ_lyyI3y-UEv3VBr',
        freeDays: '7 DÍAS GRATIS',
        title: 'Hasta 50% OFF',
        brandName: 'Paramount+',
    },
    {
        id: 3,
        backgroundPhoto: bgHBO,
        // backgroundPhoto: 'https://drive.google.com/uc?export=view&id=1HqIwJiyAHfjWCXQXLsQFFPyGzL0wPdwm',
        profilePhotoBrand: profileBrandHBO,
        // profilePhotoBrand: 'https://drive.google.com/uc?export=view&id=1T7qKN2TXWDOa1QQmapaJHeoKMrXndRAG',
        freeDays: '7 DÍAS GRATIS',
        title: 'Hasta 50% OFF',
        brandName: 'HBO Max',
    }
];