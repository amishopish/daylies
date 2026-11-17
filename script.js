const acceptanceArray = ['Accepted my thoughts', 
'Be kind towards my conflicts','Accepted myself', 'Did things my way',
'Didnt care about what others think','Accepted my body','Listened to my gut',
'Be kind towards myself','Be okay with my actions','Didnt condemn myself for fearing','Did my best',
'Took it slow','Was kind towards myself','Felt my feelings','Used anger as fuel',
'Was understanding towards self','Was kind to those around me','Listened to my body',
'Felt my emotions','Inspired self-trust','Did things my way','Raised my self-esteem','Do as I say',
'Practiced reciliance','Practised letting go','Was honest'];

const consciousArray = ['Listened to my thoughts','Became present','Lived in the now','Felt my toes','Examined my beliefs','Smiled more',
'Assumed joy','Did things slowly','Were present','Listened to my thoughts and examined my beliefs','Felt my feelings',
'Listened to others','Became clear on what I want','Became more intentional','Labeled my insecurities',
'Noticed when insecurities arose','Notice how my insecurities feel','Were kind to my emotions','Asked what I want',
'Paused before I speak','Listened with intention','Be mindful of my actions','Bring 5% more intention to my actions',
'Became aware of thoughts','Listened more'];

const purposeArray = ['Appreciated my friends','Do the things I say Im going to do','Be mindful with my words','Took things slow',
'Be present with my emotions','Enjoyed my life','Took care of my body','Managed my time','Managed my expectations',
'Doing things that aid me','Went at my own pace','Ate healthy and worked out','Took care of my emotions',
'Didnt label emotiosn as good or bad','Be a caring friend','Thought things trough','Became mindful of the ideas that motivate me','Used critical thinking',
'Be aware of gut sensations','Became mindful of others ideas'];

const integrityArray = ['Paused before I speak','Became concious of what comes out of my mouth','Made healthy choices',
'Talked slow','Didnt laugh at jokes I dont find funny','Learned to say no','Listened to myself','Took care of myself',
'Trust that others takes care of themselves','Didnt interfer in others lives','Do the things I say','Be mindful of my words',
'Said no','Practiced integrity','Worked on my integrity by standing up for what I beleive is right','Stood up against racist remarks',
'spread joy','Became more mindful of what I do and say','Lived accordiing to my values by being fair and just in my dealings with others'];

const assertivenessArray = ['Do my own things','Said my peace','Took care of my needs','Looked people in the eye',
'Didnt wait for someone to do it for me','Did things slow','Walked tall','Practiced self-assertiveness at home',
'Voiced my thoughts and opinions more often','Took care of my deepest yearnings','Said no when I mean no and yes when I mean yes','Listened to my gut',
'Asked myself what I want','Became open with friends and family','Spoke up','Asked for what I want ',
'Stopped to consider my needs','Listened to others','Listened to my emotions','Expressed myself',
'Didnt shy away from myself','Be candid with my answers','Didnt compromise myself to fit in'];

const responsibilityArray = ['Didnt binge','Took care of my body','Managed my time','Managed my expectations',
'Doing things that aid me','Went at my own pace','Did things slow','Acted confident at home','Ate healthy and worked out',
'Took care of my emotions','Didnt label emotions as good or bad','Was a caring friend','Thought things trough','Became mindful of the ideas that motivate me',
'Used critical thinking','Be aware of gut sensations','Became mindful of others ideas','Did things my way','Looked for happiness within and not for external sources of validation',
'Kept my inner monolog intentional','catched bad words','Be gentle and kind towards myself','Listened more',
'Slowed down','Tought happy','Stayed positive','looked on the bright side','Tried again','look me in the eye and tell me its okay',
'stayed present','Did things slow','Forgave myself','Lived in the present','Talked slow',
'Allowed myself things','Took it slow','Validated myself','Didnt look to produce results','Lived my life','Didnt worry about what others think','Be mindful',
'Take concious action','Hold my own hand']

function generate(){
    const rndmAcceptance = Math.floor(Math.random()* acceptanceArray.length);
    const dailyAcceptance = acceptanceArray[rndmAcceptance];

    const rndmCon = Math.floor(Math.random()* consciousArray.length);
    const dailyConscious = consciousArray[rndmCon];

    const rndmPurpose = Math.floor(Math.random()* purposeArray.length);
    const dailyPurpose = purposeArray[rndmPurpose];

    const rndmInt = Math.floor(Math.random()* integrityArray.length);
    const dailyIntegrity = integrityArray[rndmInt];

    const rndmAssert = Math.floor(Math.random()* assertivenessArray.length);
    const dailyAssertiveness = assertivenessArray[rndmAssert];

    const rndmRespons = Math.floor(Math.random() * responsibilityArray.length);
    const dailyResponsibility = responsibilityArray[rndmRespons];



    document.getElementById('acceptanceP').innerHTML = dailyAcceptance;
    document.getElementById('consciousP').innerHTML = dailyConscious;
    document.getElementById('purposeP').innerHTML = dailyPurpose;
    document.getElementById('integrityP').innerHTML = dailyIntegrity;
    document.getElementById('assertivenessP').innerHTML = dailyAssertiveness;
    document.getElementById('responsibilityP').innerHTML = dailyResponsibility;
}