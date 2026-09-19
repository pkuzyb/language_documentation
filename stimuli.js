const stimuliData = [
    // --- Original 20 Pairs (40 Sentences) ---
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
    { s: "བོད་སྲེམ་མི་ཞིམ་མས?", en: "Is the dish not delicious?" },

    // --- Paired New Sentences (20 Pairs / 40 Sentences) ---
    // Pair 21
    { s: "ཁ་རྩ་སེམས་མ་དགའ།", en: "I wasn't happy yesterday." },
    { s: "ཁ་རྩ་སེམས་མ་དགའ?", en: "Was I/were you not happy yesterday?" },

    // Pair 22
    { s: "ནངས་པ་ཨ་ཞང་འོང་དོ།", en: "Tomorrow, uncle will visit." },
    { s: "ནངས་པ་ཨ་ཞང་འོང་དོ?", en: "Will uncle visit tomorrow?" },

    // Pair 23
    { s: "ཁོ་གིས་ཤོབ་རྐྱབ་མས།", en: "He is lying." },
    { s: "ཁོ་གིས་ཤོབ་རྐྱབ་མས?", en: "Is he lying?" },

    // Pair 24
    { s: "པདྨ་དང་ལྷ་མོ་ཆ་རོགས་ཨིན།", en: "Pema and Lhamo are friends." },
    { s: "པདྨ་དང་ལྷ་མོ་ཆ་རོགས་ཨིན?", en: "Are Pema and Lhamo friends?" },

    // Pair 25
    { s: "ལྷ་ཕྲུག་གིས་ལྷ་སྐྱིད་དགའ་བས།", en: "Lhatruk loves Lhakhi." },
    { s: "ལྷ་ཕྲུག་གིས་ལྷ་སྐྱིད་དགའ་བས?", en: "Does Lhatruk love Lhakhi?" },

    // Pair 26
    { s: "སེམས་ཚབ་ཚུབ་འབདཝ་མས།", en: "Felt anxious / restless." },
    { s: "སེམས་ཚབ་ཚུབ་འབདཝ་མས?", en: "Did you / he feel anxious / restless?" },

    // Pair 27
    { s: "དགུན་ལུ་ཆརཔ་མི་རྐྱབ།", en: "It does not rain in winter." },
    { s: "དགུན་ལུ་ཆརཔ་མི་རྐྱབ?", en: "Does it not rain in winter?" },

    // Pair 28
    { s: "ན་ཧིང་ཆུ་རུས་མ་འཐེན།", en: "Last year, it did not flood." },
    { s: "ན་ཧིང་ཆུ་རུས་མ་འཐེན?", en: "Did it not flood last year?" },

    // Pair 29
    { s: "དུས་རྩི་གནམ་མེད་ས་མེད་ཚདཔ་འདུག།", en: "It is extremely hot this year." },
    { s: "དུས་རྩི་གནམ་མེད་ས་མེད་ཚདཔ་འདུག?", en: "Is it extremely hot this year?" },

    // Pair 30
    { s: "དྲོ་པ་རང་ཡར་སོང་ཡི།", en: "Left in the morning itself." },
    { s: "དྲོ་པ་རང་ཡར་སོང་ཡི?", en: "Did he/she leave in the morning itself?" },

    // Pair 31
    { s: "ད་རེས་གཟའ་ཉིམ་ཨིན།", en: "Today is Saturday." },
    { s: "ད་རེས་གཟའ་ཉིམ་ཨིན?", en: "Is today Saturday?" },

    // Pair 32
    { s: "ལྷག་པ་སེམས་ལེགས་པས།", en: "Lhakpa has a good heart." },
    { s: "ལྷག་པ་སེམས་ལེགས་པས?", en: "Does Lhakpa have a good heart?" },

    // Pair 33
    { s: "ར་བྱག་གུ་ལས་ཆོངས་མས།", en: "The goat jumps off the cliff." },
    { s: "ར་བྱག་གུ་ལས་ཆོངས་མས?", en: "Does the goat jump off the cliff?" },

    // Pair 34
    { s: "དཔལ་སྒྲོན་སྨན་ཁང་མི་འགྱོ་ལོ།", en: "Peday said she won't go to the hospital." },
    { s: "དཔལ་སྒྲོན་སྨན་ཁང་མི་འགྱོ་ལོ?", en: "Did Peday say she won't go to the hospital?" },

    // Pair 35
    { s: "མེ་ཏོག་དཀརཔོ་ཤར་ནུག།", en: "A white flower has bloomed." },
    { s: "མེ་ཏོག་དཀརཔོ་ཤར་ནུག?", en: "Has a white flower bloomed?" },

    // Pair 36
    { s: "སྒོ་ཁར་མི་ཅིག་འདུག།", en: "There is a person at the door." },
    { s: "སྒོ་ཁར་མི་ཅིག་འདུག?", en: "Is there a person at the door?" },

    // Pair 37
    { s: "སློབ་དཔོན་དཔེ་ཆ་བསྟན་དེ།", en: "A teacher is teaching." },
    { s: "སློབ་དཔོན་དཔེ་ཆ་བསྟན་དེ?", en: "Is the teacher teaching?" },

    // Pair 38
    { s: "བུ་ཁུར་ཆ་འབག་དེ།", en: "Son is carrying a load." },
    { s: "བུ་ཁུར་ཆ་འབག་དེ?", en: "Is the son carrying a load?" },

    // Pair 39
    { s: "འབྲུག་རྒྱལ་ཁབ་ཡར་རྒྱས་འགྱོ་དོ།", en: "Bhutan is developing." },
    { s: "འབྲུག་རྒྱལ་ཁབ་ཡར་རྒྱས་འགྱོ་དོ?", en: "Is Bhutan developing?" },

    // Pair 40
    { s: "ད་རེས་སློབ་གྲྭ་ངལ་གསོ་ཨིན།", en: "Today is school holiday." },
    { s: "ད་རེས་སློབ་གྲྭ་ངལ་གསོ་ཨིན?", en: "Is today a school holiday?" }
];