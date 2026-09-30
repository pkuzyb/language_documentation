const stimuliData = [
    // item011
    { s: "བསྟན་འཛིན་གློག་བརྙན་བལྟ་བར་ཡར་སོང་སྦོ?", en: "Did Tenzin leave for the movie?" },
    // item012
    { s: "བཟང་མོ་ཕགཔ་འཆོལ་བར་འགྱོ་ནུག་ག?", en: "Has Zangmo left for searching for pigs ?" },
    // item013
    { s: "ཨ་མ་ཁྲོམ་ཁར་ཡོད་ག?", en: "Is mother at the town ?" },
    // item014
    { s: "ཨ་པ་ལཱ་འབད་དོ་སྨོ?", en: "Dad, you are working right ?" },
    // item015
    { s: "ཁོ་དཔེ་ཆ་ལྷབ་དེས་ཡ?", en: "Is he studying ?" },
    // item016
    { s: "རླུང་ཤུགས་སྦེ་ཕུར་དེས་ག?", en: "Is the wind blowing hard?" },
    // item017
    { s: "ཨ་ནི་སེམས་མ་དགའ་བས་སྨོ?", en: "Aunt is not happy right ?" },
    // item018
    { s: "ཨ་ཞང་འདི་སྐྱ་དཀར་འཐོན་ནུག་མེན་ན་?", en: "Maternal uncle's hair has turned white, isn't it ?" },
    // item019
    { s: "ཨའི་གིས་ལྟོ་བཟོ་ག་སྟཻ?", en: "Did mother eat ?" },
    // item020
    { s: "ཁྱིམ་འདི་གསརཔ་འདུག་ག?", en: "Is the house the house new ?" },

    // item001
    { s: "ཆརཔ་རྐྱབ་འཚར་ནུག་ག?", en: "Did the rain stop?" },
    // item002
    { s: "ཁོ་མི་འོང་ལོ་ཡ?", en: "Did he confirm that he won't make it?" },
    // item003
    { s: "གནམ་གྲུ་ཐང་ནང་ཆགས་ནུག་ག?", en: "Has plane landed at the airport?" },
    // item004
    { s: "ཁོ་གཟུགས་རིམ་ཡོད་ཡ?", en: "Is he tall in height?" },
    // item005
    { s: "ང་ལྟོ་བཟའ་ག?", en: "Can I eat rice?" },
    // item006
    { s: "མོ་གནམ་མེད་ས་མེད་འཇའ་རིམ་འདུག་སྨོ?", en: "She is extremely beautiful, right / doesn't she /isn't it?" },
    // item007
    { s: "ང་འབྲུག་མི་ཨིན་ན?", en: "Am I Bhutanese?" },
    // item008
    { s: "ཕར་ལུ་མི་འདུག་ག?", en: "Are there people over there ?" },
    // item009
    { s: "ནོར་ཤ་སྐམ་དྲིམ་འདུག་ཡ?", en: "Does the dried meat smell?" },
    // item010
    { s: "བོད་སྲེམ་འདི་མི་ཞིམ་མས་སྨོ?", en: "Soya bean doesn't taste good, does it?" },

    // item031
    { s: "ཁ་རྩ་སེམས་མ་དགའ་སྨོ?", en: "I wasn't happy yesterday, was he ?" },
    // item032
    { s: "ནངས་པ་ཨ་ཞང་འོང་དོ་ག?", en: "Tomorrow, uncle will visit?" },
    // item033
    { s: "ཁོ་གིས་ཤོབ་རྐྱབ་མས་ཡ?", en: "He is lying ?" },
    // item034
    { s: "པདྨ་དང་ལྷ་མོ་ཆ་རོགས་ཨིན་ན?", en: "Are Pema and Lhamo Friends ?" },
    // item035
    { s: "ལྷ་ཕྲུག་གིས་ལྷ་སྐྱིད་དགའ་བས་ག?", en: "Does Lhathruk loves Lhaki ?" },
    // item036
    { s: "སེམས་ཚབ་ཚུབ་འབདཝ་མས་ག?", en: "Do you feel anxious /restless?" },
    // item037
    { s: "དགུན་ལུ་ཆརཔ་མི་རྐྱབ་སྨོ?", en: "It does not rain in winter, does it ?" },
    // item038
    { s: "ན་ཧིང་ཆུ་རུས་མ་འཐེན་ག?", en: "Last year, there was no flood ?" },
    // item039
    { s: "དུས་རྩི་གནམ་མེད་ས་མེད་ཚདཔ་འདུག་སྨོ?", en: "It is extremely hot this year, isn't it?" },
    // item040
    { s: "དྲོ་པ་རང་ཡར་སོང་ཡི་སྦོ?", en: "Did they leave early morning ?" },

    // item021
    { s: "ད་རེས་གཟའ་ཉིམ་ཨིན་སྨོ?", en: "Today is Saturday, right ?" },
    // item022
    { s: "ལྷག་པ་སེམས་ལེགས་པས་སྟེ་སྨོ?", en: "lhakpa has a good heart, doesn't he ?" },
    // item023
    { s: "ར་བྱག་གུ་ལས་ཆོངས་མས་ག?", en: "Does goat jump off the cliff?" },
    // item024
    { s: "དཔལ་སྒྲོན་སྨན་ཁང་མི་འགྱོ་ལོ་ཟེར་ཡ?", en: "Peday said she won't go to the hospital then?" },
    // item025
    { s: "མེ་ཏོག་དཀརཔོ་ཤར་ནུག་ག?", en: "Has the white flower bloomed?" },
    // item026
    { s: "སྒོ་ཁར་མི་ཅིག་འདུག་ག?", en: "Is there a person at the door ?" },
    // item027
    { s: "སློབ་དཔོན་དཔེ་ཆ་བསྟན་དེ་ག?", en: "Is a teacher teaching ?" },
    // item028
    { s: "བུ་ཁུར་ཆ་འབག་དེ་ག?", en: "Is son carrying a load?" },
    // item029
    { s: "འབྲུག་རྒྱལ་ཁབ་ཡར་རྒྱས་འགྱོ་དོ་སྨོ?", en: "Bhutan is developing, right ?" },
    // item030
    { s: "ད་རེས་སློབ་གྲྭ་ངལ་གསོ་ཨིན་ན?", en: "Is the school closed today ?" },

    // item041
    { s: "འགྱོ་པ་རང་འཐོན་འོང་ག?", en: "Will you be coming soon ?" },
    // item042
    { s: "ལག་བཏགས་ཅིག་བསྐྱལ་གནང་བཏུབ་ག?", en: "Please send a parcel, is that okay?" },
    // item043
    { s: "རྒྱ་གར་ལུ་མི་འགྱོ་ག?", en: "Won't (you) go to India?" },
    // item044
    { s: "ཁོ་རྒྱ་མི་ཁ་ཤེས་ལོ་ཡ?", en: "Did he say he knows Chinese language ?" },
    // item045
    { s: "བལ་ཡུལ་ལུ་གནས་འདུག་ག?", en: "Is there a holy site in Nepal?" },
    // item046
    { s: "བོད་ལུ་ཁམ་པ་མི་རིག་ཡོད་སྨོ?", en: "There are Khampa people in Tibet, right ?" },
    // item047
    { s: "ལྷ་ས་ལུ་པོ་ཊ་ལ་མཇལ་འོང་ག?", en: "Can (we) see Potola Palace in Lhasa ?" },
    // item048
    { s: "ཕྲནས་ལུ་ཨ་ཞིམ་ཡོད་ག?", en: "Is there sister in France?" },
    // item049
    { s: "ར་ཤི་ཡ་དང་ཡུ་ཀྲེན་དམག་རྐྱབ་དེ་ག?", en: "Are Russia and Ukraine fighting a war?" },
    // item050
    { s: "རོ་ཁྱི་དམརཔོ་ཧབ་དེ་ག?", en: "Is red dog barking?" }
];