const stimuliData = [
    // --- Original 20 Pairs (40 Sentences) ---
    // Pair 1
    { s: "བསྟན་འཛིན་གློག་བརྙན་བལྟ་བར་ཡར་སོང་ཡི།", en: "Tenzin left to watch movie." },
    { s: "བསྟན་འཛིན་གློག་བརྙན་བལྟ་བར་ཡར་སོང་ཡི?", en: "Tenzin left to watch movie?" },
    
    // Pair 2
    { s: "བཟང་མོ་ཕགཔ་འཆོལ་བར་འགྱོ་ནུག།", en: "Zangmo left to search a pig." },
    { s: "བཟང་མོ་ཕགཔ་འཆོལ་བར་འགྱོ་ནུག?", en: "Zangmo left to search a pig?" },
    
    // Pair 3
    { s: "ཨ་མ་ཁྲོམ་ཁར་ཡོད།", en: "Mother is in the town." },
    { s: "ཨ་མ་ཁྲོམ་ཁར་ཡོད?", en: "Mother is in the town?" },
    
    // Pair 4
    { s: "ཨ་པ་ལཱ་འབད་དོ།", en: "Father is working." },
    { s: "ཨ་པ་ལཱ་འབད་དོ?", en: "Father is working?" },
    
    // Pair 5
    { s: "ཁོ་དཔེ་ཆ་ལྷབ་དེ།", en: "He is reading a book." },
    { s: "ཁོ་དཔེ་ཆ་ལྷབ་དེ?", en: "He is reading a book?" },
    
    // Pair 6
    { s: "རླུང་ཤུགས་སྦེ་ཕུར་དེ།", en: "The wind is blowing strongly." },
    { s: "རླུང་ཤུགས་སྦེ་ཕུར་དེ?", en: "The wind is blowing strongly?" },
    
    // Pair 7
    { s: "ཨ་ནི་སེམས་མ་དགའ་བས།", en: "Aunt is said to be unhappy." },
    { s: "ཨ་ནི་སེམས་མ་དགའ་བས?", en: "Aunt is said to be unhappy?" },
    
    // Pair 8
    { s: "ཨ་ཞང་འདི་སྐྱ་དཀར་འཐོན་ནུག།", en: "Maternal uncle's hair has turned white." },
    { s: "ཨ་ཞང་འདི་སྐྱ་དཀར་འཐོན་ནུག?", en: "Maternal uncle's hair has turned white?" },
    
    // Pair 9
    { s: "ཨའི་གིས་ལྟོ་བཟོ།", en: "Mother is preparing food." },
    { s: "ཨའི་གིས་ལྟོ་བཟོ?", en: "Mother is preparing food?" },
    
    // Pair 10
    { s: "ཁྱིམ་འདི་གསརཔ་འདུག།", en: "This house is new." },
    { s: "ཁྱིམ་འདི་གསརཔ་འདུག?", en: "This house is new?" },

    // Pair 11
    { s: "ཆརཔ་རྐྱབ་འཚར་ནུག།", en: "It has stopped raining." },
    { s: "ཆརཔ་རྐྱབ་འཚར་ནུག?", en: "It has stopped raining?" },
    
    // Pair 12
    { s: "ཁོ་མི་འོང་ལོ།", en: "He will not come, it is said." },
    { s: "ཁོ་མི་འོང་ལོ?", en: "He will not come, it is said?" },
    
    // Pair 13
    { s: "གནམ་གྲུ་ཐང་ནང་ཆགས་ནུག།", en: "The plane landed at the airport." },
    { s: "གནམ་གྲུ་ཐང་ནང་ཆགས་ནུག?", en: "The plane landed at the airport?" },
    
    // Pair 14
    { s: "ཁོ་གཟུགས་རིམ་ཡོད།", en: "He has a good physique." },
    { s: "ཁོ་གཟུགས་རིམ་ཡོད?", en: "He has a good physique?" },
    
    // Pair 15
    { s: "ང་ལྟོ་བཟའ་ནི།", en: "I am going to eat." },
    { s: "ང་ལྟོ་བཟའ་ནི?", en: "I am going to eat?" },
    
    // Pair 16
    { s: "མོ་གནམ་མེད་ས་མེད་འཛའ་རིམ་འདུག།", en: "She is extremely beautiful." },
    { s: "མོ་གནམ་མེད་ས་མེད་འཛའ་རིམ་འདུག?", en: "She is extremely beautiful?" },
    
    // Pair 17
    { s: "ཁྱོད་འབྲུག་མི་ཨིན།", en: "You are Bhutanese." },
    { s: "ཁྱོད་འབྲུག་མི་ཨིན?", en: "You are Bhutanese?" },
    
    // Pair 18
    { s: "ཕར་ལུ་མི་འདུག།", en: "There is no one over there." },
    { s: "ཕར་ལུ་མི་འདུག?", en: "There is no one over there?" },
    
    // Pair 19
    { s: "ནོར་ཤ་སྐམ་དྲིམ་འདུག།", en: "The dried beef smells tasty." },
    { s: "ནོར་ཤ་སྐམ་དྲིམ་འདུག?", en: "The dried beef smells tasty?" },
    
    // Pair 20
    { s: "བོད་སྲེམ་མི་ཞིམ་མས།", en: "Soya beans don't taste good" },
    { s: "བོད་སྲེམ་མི་ཞིམ་མས?", en: "Soya beans don't taste good?" },

    // --- Paired New Sentences (20 Pairs / 40 Sentences) ---
    // Pair 21
    { s: "ཁ་རྩ་སེམས་མ་དགའ།", en: "I wasn't happy yesterday." },
    { s: "ཁ་རྩ་སེམས་མ་དགའ?", en: "I wasn't happy yesterday?" },

    // Pair 22
    { s: "ནངས་པ་ཨ་ཞང་འོང་དོ།", en: "Tomorrow, uncle will visit." },
    { s: "ནངས་པ་ཨ་ཞང་འོང་དོ?", en: "Tomorrow, uncle will visit?" },

    // Pair 23
    { s: "ཁོ་གིས་ཤོབ་རྐྱབ་མས།", en: "He is lying." },
    { s: "ཁོ་གིས་ཤོབ་རྐྱབ་མས?", en: "He is lying?" },

    // Pair 24
    { s: "པདྨ་དང་ལྷ་མོ་ཆ་རོགས་ཨིན།", en: "Pema and Lhamo are friends." },
    { s: "པདྨ་དང་ལྷ་མོ་ཆ་རོགས་ཨིན?", en: "Pema and Lhamo are friends?" },

    // Pair 25
    { s: "ལྷ་ཕྲུག་གིས་ལྷ་སྐྱིད་དགའ་བས།", en: "Lhatruk loves Lhakhi." },
    { s: "ལྷ་ཕྲུག་གིས་ལྷ་སྐྱིད་དགའ་བས?", en: "Lhatruk loves Lhakhi?" },

    // Pair 26
    { s: "སེམས་ཚབ་ཚུབ་འབདཝ་མས།", en: "Felt anxious / restless." },
    { s: "སེམས་ཚབ་ཚུབ་འབདཝ་མས?", en: "Felt anxious / restless?" },

    // Pair 27
    { s: "དགུན་ལུ་ཆརཔ་མི་རྐྱབ།", en: "It does not rain in winter." },
    { s: "དགུན་ལུ་ཆརཔ་མི་རྐྱབ?", en: "It does not rain in winter?" },

    // Pair 28
    { s: "ན་ཧིང་ཆུ་རུས་མ་འཐེན།", en: "Last year, it did not flood." },
    { s: "ན་ཧིང་ཆུ་རུས་མ་འཐེན?", en: "Last year, it did not flood?" },

    // Pair 29
    { s: "དུས་རྩི་གནམ་མེད་ས་མེད་ཚདཔ་འདུག།", en: "It is extremely hot this year." },
    { s: "དུས་རྩི་གནམ་མེད་ས་མེད་ཚདཔ་འདུག?", en: "It is extremely hot this year?" },

    // Pair 30
    { s: "དྲོ་པ་རང་ཡར་སོང་ཡི།", en: "Left in the morning itself." },
    { s: "དྲོ་པ་རང་ཡར་སོང་ཡི?", en: "Left in the morning itself?" },

    // Pair 31
    { s: "ད་རེས་གཟའ་ཉིམ་ཨིན།", en: "Today is Saturday." },
    { s: "ད་རེས་གཟའ་ཉིམ་ཨིན?", en: "Today is Saturday?" },

    // Pair 32
    { s: "ལྷག་པ་སེམས་ལེགས་པས།", en: "Lhakpa has a good heart." },
    { s: "ལྷག་པ་སེམས་ལེགས་པས?", en: "Lhakpa has a good heart?" },

    // Pair 33
    { s: "ར་བྱག་གུ་ལས་ཆོངས་མས།", en: "The goat jumps off the cliff." },
    { s: "ར་བྱག་གུ་ལས་ཆོངས་མས?", en: "The goat jumps off the cliff?" },

    // Pair 34
    { s: "དཔལ་སྒྲོན་སྨན་ཁང་མི་འགྱོ་ལོ།", en: "Peday said she won't go to the hospital." },
    { s: "དཔལ་སྒྲོན་སྨན་ཁང་མི་འགྱོ་ལོ?", en: "Peday said she won't go to the hospital?" },

    // Pair 35
    { s: "མེ་ཏོག་དཀརཔོ་ཤར་ནུག།", en: "A white flower has bloomed." },
    { s: "མེ་ཏོག་དཀརཔོ་ཤར་ནུག?", en: "A white flower has bloomed?" },

    // Pair 36
    { s: "སྒོ་ཁར་མི་ཅིག་འདུག།", en: "There is a person at the door." },
    { s: "སྒོ་ཁར་མི་ཅིག་འདུག?", en: "There is a person at the door?" },

    // Pair 37
    { s: "སློབ་དཔོན་དཔེ་ཆ་བསྟན་དེ།", en: "A teacher is teaching." },
    { s: "སློབ་དཔོན་དཔེ་ཆ་བསྟན་དེ?", en: "A teacher is teaching?" },

    // Pair 38
    { s: "བུ་ཁུར་ཆ་འབག་དེ།", en: "Son is carrying a load." },
    { s: "བུ་ཁུར་ཆ་འབག་དེ?", en: "Son is carrying a load?" },

    // Pair 39
    { s: "འབྲུག་རྒྱལ་ཁབ་ཡར་རྒྱས་འགྱོ་དོ།", en: "Bhutan is developing." },
    { s: "འབྲུག་རྒྱལ་ཁབ་ཡར་རྒྱས་འགྱོ་དོ?", en: "Bhutan is developing?" },

    // Pair 40
    { s: "ད་རེས་སློབ་གྲྭ་ངལ་གསོ་ཨིན།", en: "Today is school holiday." },
    { s: "ད་རེས་སློབ་གྲྭ་ངལ་གསོ་ཨིན?", en: "Today is school holiday?" },

    // --- Added Items 001–010 (10 Pairs / 20 Sentences) ---
    // Pair 41 (item001)
    { s: "འགྱོ་པ་རང་འཐོན་འོང།", en: "Will be coming soon." },
    { s: "འགྱོ་པ་རང་འཐོན་འོང?", en: "Will be coming soon?" },

    // Pair 42 (item002)
    { s: "ལག་བཏགས་ཅིག་བསྐྱལ་གནང།", en: "Please send a parcel." },
    { s: "ལག་བཏགས་ཅིག་བསྐྱལ་གནང?", en: "Please send a parcel?" },

    // Pair 43 (item003)
    { s: "རྒྱ་གར་ལུ་མི་འགྱོ།", en: "Not going to India." },
    { s: "རྒྱ་གར་ལུ་མི་འགྱོ?", en: "Not going to India?" },

    // Pair 44 (item004)
    { s: "ཁོ་རྒྱ་མི་ཁ་ཤེས་ལོ།", en: "He said he knows Chinese language." },
    { s: "ཁོ་རྒྱ་མི་ཁ་ཤེས་ལོ?", en: "He said he knows Chinese language?" },

    // Pair 45 (item005)
    { s: "བལ་ཡུལ་ལུ་གནས་འདུག།", en: "There is a holy site in Nepal." },
    { s: "བལ་ཡུལ་ལུ་གནས་འདུག?", en: "There is a holy site in Nepal?" },

    // Pair 46 (item006)
    { s: "བོད་ལུ་ཁམ་པ་མི་རིགས་ཡོད།", en: "There are Khampa people in Tibet." },
    { s: "བོད་ལུ་ཁམ་པ་མི་རིགས་ཡོད?", en: "There are Khampa people in Tibet?" },

    // Pair 47 (item007)
    { s: "ལྷ་ས་ལུ་པོ་ཊ་ལ་མཇལ་འོང།", en: "At Lhasa we got to see Potala Palace." },
    { s: "ལྷ་ས་ལུ་པོ་ཊ་ལ་མཇལ་འོང?", en: "At Lhasa we got to see Potala Palace?" },

    // Pair 48 (item008)
    { s: "ཕྲནས་ལུ་ཨ་ཞིམ་ཡོད།", en: "Sister is there in France." },
    { s: "ཕྲནས་ལུ་ཨ་ཞིམ་ཡོད?", en: "Sister is there in France?" },

    // Pair 49 (item009)
    { s: "ར་ཤི་ཡ་དང་ཡུ་ཀྲེན་དམག་རྐྱབ་དེ།", en: "Russia and Ukraine are fighting a war." },
    { s: "ར་ཤི་ཡ་དང་ཡུ་ཀྲེན་དམག་རྐྱབ་དེ?", en: "Russia and Ukraine are fighting a war?" },

    // Pair 50 (item010)
    { s: "རོ་ཁྱི་དམརཔོ་ཧབ་དེ།", en: "The red dog is barking." },
    { s: "རོ་ཁྱི་དམརཔོ་ཧབ་དེ?", en: "The red dog is barking?" }
];