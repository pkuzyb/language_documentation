const stimuliData = [
    // Pair 1
    { s: "བསྟན་འཛིན་གློག་བརྙན་བལྟ་བར་ཡར་སོང་ཡི།", en: "Tenzin left to watch movie." },
    { s: "བསྟན་འཛིན་གློག་བརྙན་བལྟ་བར་ཡར་སོང་ཡི?", en: "Did Tenzin leave to watch a movie?" },
    
    // Pair 2
    { s: "བཟང་མོ་ཕགཔ་འཆོལ་བར་འགྱོ་ནུག།", en: "Zangmo left to search a pig." },
    { s: "བཟང་མོ་ཕགཔ་འཆོལ་བར་འགྱོ་ནུག?", en: "Did Zangmo leave to search for a pig?" },
    
    // Pair 3
    { s: "ཨ་མ་ཁྲོམ་ཁར་ཡོད།", en: "Mother is in the town." },
    { s: "ཨ་མ་ཁྲོམ་ཁར་ཡོད?", en: "Is mother in the town?" },
    
    // Pair 4
    { s: "ཨ་པ་ལཱ་འབད་དོ།", en: "Father is working." },
    { s: "ཨ་པ་ལཱ་འབད་དོ?", en: "Is father working?" },
    
    // Pair 5
    { s: "ཁོ་དཔེ་ཆ་ལྷབ་དེ།", en: "He is reading a book." },
    { s: "ཁོ་དཔེ་ཆ་ལྷབ་དེ?", en: "Is he reading a book?" },
    
    // Pair 6
    { s: "རླུང་ཤུགས་སྦེ་ཕུར་དེ།", en: "The wind is blowing strongly." },
    { s: "རླུང་ཤུགས་སྦེ་ཕུར་དེ?", en: "Is the wind blowing strongly?" },
    
    // Pair 7
    { s: "ཨ་ནི་སེམས་མ་དགའ་བས།", en: "Aunt is said to be unhappy." },
    { s: "ཨ་ནི་སེམས་མ་དགའ་བས?", en: "Is aunt said to be unhappy?" },
    
    // Pair 8
    { s: "ཨ་ཞང་འདི་སྐྱ་དཀར་འཐོན་ནུག།", en: "Maternal uncle's hair has turned white." },
    { s: "ཨ་ཞང་འདི་སྐྱ་དཀར་འཐོན་ནུག?", en: "Has maternal uncle's hair turned white?" },
    
    // Pair 9
    { s: "ཨའི་གིས་ལྟོ་བཟོ།", en: "Mother is preparing food." },
    { s: "ཨའི་གིས་ལྟོ་བཟོ?", en: "Is mother preparing food?" },
    
    // Pair 10
    { s: "ཁྱིམ་འདི་གསརཔ་འདུག།", en: "This house is new." },
    { s: "ཁྱིམ་འདི་གསརཔ་འདུག?", en: "Is this house new?" },

    // Pair 11
    { s: "ཆརཔ་རྐྱབ་འཚར་ནུག།", en: "It has stopped raining." },
    { s: "ཆརཔ་རྐྱབ་འཚར་ནུག?", en: "Has it stopped raining?" },
    
    // Pair 12
    { s: "ཁོ་མི་འོང་ལོ།", en: "He will not come, it is said." },
    { s: "ཁོ་མི་འོང་ལོ?", en: "Will he not come, it is said?" },
    
    // Pair 13
    { s: "གནམ་གྲུ་ཐང་ནང་ཆགས་ནུག།", en: "The plane landed at the airport." },
    { s: "གནམ་གྲུ་ཐང་ནང་ཆགས་ནུག?", en: "Did the plane land at the airport?" },
    
    // Pair 14
    { s: "ཁོ་གཟུགས་རིམ་ཡོད།", en: "He has a good physique." },
    { s: "ཁོ་གཟུགས་རིམ་ཡོད?", en: "Does he have a good physique?" },
    
    // Pair 15
    { s: "ང་ལྟོ་བཟའ་ནི།", en: "I am going to eat." },
    { s: "ང་ལྟོ་བཟའ་ནི?", en: "Are you/am I going to eat?" },
    
    // Pair 16
    { s: "མོ་གནམ་མེད་ས་མེད་འཛའ་རིམ་འདུག།", en: "She is extremely beautiful." },
    { s: "མོ་གནམ་མེད་ས་མེད་འཛའ་རིམ་འདུག?", en: "Is she extremely beautiful?" },
    
    // Pair 17
    { s: "ཁྱོད་འབྲུག་མི་ཨིན།", en: "You are Bhutanese." },
    { s: "ཁྱོད་འབྲུག་མི་ཨིན?", en: "Are you Bhutanese?" },
    
    // Pair 18
    { s: "ཕར་ལུ་མི་འདུག།", en: "There is no one over there." },
    { s: "ཕར་ལུ་མི་འདུག?", en: "Is there no one over there?" },
    
    // Pair 19
    { s: "ནོར་ཤ་སྐམ་དྲིམ་འདུག།", en: "The dried beef smells tasty." },
    { s: "ནོར་ཤ་སྐམ་དྲིམ་འདུག?", en: "Does the dried beef smell tasty?" },
    
    // Pair 20
    { s: "བོད་སྲེམ་མི་ཞིམ་མས།", en: "The dish is not delicious." },
    { s: "བོད་སྲེམ་མི་ཞིམ་མས?", en: "Is the dish not delicious?" }
];