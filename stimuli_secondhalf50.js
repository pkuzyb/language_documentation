const stimuliData = [
    // --- Original 20 Pairs (40 Sentences) ---

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