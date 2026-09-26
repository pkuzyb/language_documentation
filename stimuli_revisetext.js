const stimuliData = [
  // Set 1
  { s: "ད་རེས་ གཟའ་ ཉིམ་ ཨིན།", en: "Today is Saturday." },
  { s: "ལྷག་པ་ སེམས་ ལེགས་ པས།", en: "lhakpa has a good heart." },
  { s: "ར་ བྱག་ གུ་ ལས ཆོངས་ མས།", en: "The goat jumps off the cliff." },
  { s: "དཔལ་སྒྲོན་ སྨན་ཁང་ མི་ འགྱོ་ ལོ།", en: "Peday said she won't go to the hospital." },
  { s: "མེ་ཏོག་ དཀརཔོ་ ཤར་ ནུག", en: "A white flower has bloomed." },
  { s: "སྒོ་ ཁར་ མི་ ཅིག་ འདུག", en: "There is a person at the door." },
  { s: "སློབ་དཔོན་ དཔེ་ཆ་ བསྟན་ དེ།", en: "A teacher is teaching." },
  { s: "བུ་ ཁུར་ཆ་ འབག ་དེ།", en: "Son is carrying a load." },
  { s: "འབྲུག་ རྒྱལ་ཁབ་ ཡར་རྒྱས་ འགྱོ་ དོ།", en: "Bhutan is developing." },
  { s: "ད་རེས་ སློབ་གྲྭ་ ངལ་གསོ་ ཨིན།", en: "Today is school holiday." },

  // Set 2
  { s: "ཁ་རྩ་ སེམས་ མ་ དགའ།", en: "I wasn't happy yesterday." },
  { s: "ནངས་པ་ ཨ་ཞང ་འོང་ དོ།", en: "Tomorrow, uncle will visit." },
  { s: "ཁོ་ གིས་ ཤོབ་ རྐྱབ་ མས།", en: "He is lying." },
  { s: "པདྨ་ དང་ ལྷ་མོ་ ཆ་རོགས་ ཨིན།", en: "Pema and Lhamo are friends." },
  { s: "ལྷ་ཕྲུག་ གིས་ ལྷ་སྐྱིད་ དགའ ་བས།", en: "Lhatruk loves lhakhi" },
  { s: "སེམས་ ཚབ་ཚུབ་ འབདཝ་ མས།", en: "Felt anxious /restless." },
  { s: "དགུན་ ལུ་ ཆརཔ་ མི ་རྐྱབ།", en: "It does not rain in winter." },
  { s: "ན་ཧིང་ ཆུ་རུས་ མ འཐེན།", en: "Last year, it did not rain." },
  { s: "དུས་རྩི་ གནམ་མེད་ ས་མེད་ ཚདཔ་ འདུག", en: "It is extremely hot this year." },
  { s: "དྲོ་པ་ རང་ ཡར་ སོང ་ཡི།", en: "Left in the morning itself." },

  // Set 3
  { s: "འགྱོ་པ་ རང་ འཐོན་ འོང།", en: "Will be coming soon." },
  { s: "ལག་ བཏགས་ ཅིག ་བསྐྱལ་ གནང།", en: "Please send a parcel." },
  { s: "རྒྱ་ གར་ ལུ ་མི་ འགྱོ།", en: "Not going to India." },
  { s: "ཁོ་ རྒྱ ་མི་ ཁ་ ཤེས་ ལོ།", en: "He said he knows Chinese language." },
  { s: "བལ ་ཡུལ་ ལུ ་གནས་ འདུག", en: "There is a holy site in Nepal." },
  { s: "བོད་ ལུ་ ཁམ་པ་ མི་ རིག་ ཡོད", en: "There are Khampa people in Tibet" },
  { s: "ལྷ་ ས་ ལུ་ པོ་ཊ་ལ་ མཇལ་ འོང།", en: "At lhasa we got to see Potala Palace." },
  { s: "ཕྲནས་ ལུ་ ཨ་ཞིམ་ ཡོད།", en: "Sister is there in France." },
  { s: "ར་ཤི་ཡ་ དང་ ཡུ་ཀྲེན་ དམག་ རྐྱབ ་དེ།", en: "Russia and Ukraine are fighting a war." },
  { s: "རོ་ཁྱི་ དམརཔོ་ ཧབ་ དེ།", en: "The red dog is barking." },

  // Declarative Acoustic Targets (Set 4)
  { s: "ཆརཔ་ རྐྱབ་ འཚར་ ནུག", en: "It has finished raining." },
  { s: "ཁོ་ མི་ འོང ་ལོ།", en: "He said he won't come." },
  { s: "གནམ་གྲུ་ ཐང་ ནང་ ཆགས་ནུག", en: "The airplane landed at the airport." },
  { s: "ཁོ་ གཟུགས ་རིམ་ ཡོད།", en: "He is tall." },
  { s: "ང་ ལྟོ་ བཟའ ་ནི།", en: "I am going to eat food." },
  { s: "མོ་ གནམ་མེད་ས་མེད་ འཛའ་རིམ་ འདུག་", en: "She is extremely beautiful." },
  { s: "ཁྱོད་ འབྲུག་ མི་ ཨིན།", en: "You are Bhutanese." },
  { s: "ཕར་ ལུ་ མི་ འདུག", en: "There is no one over there." },
  { s: "ནོར་ཤ་ སྐམ་ དྲིམ་ འདུག་", en: "Dried beef smells." },
  { s: "བོད་སྲེམ་ མི་ ཞིམ མས།", en: "Fermented soybean paste is not tasty." },

  // Set 5
  { s: "བསྟན་འཛིན་ གློག་བརྙན་ བལྟ་བར་ ཡར་སོང ་ཡི།", en: "Tenzin left to watch movie." },
  { s: "བཟང་མོ་ ཕགཔ་  འཆོལ ་བར འགྱོ་ ནུག", en: "Zangmo left to search a pig." },
  { s: "ཨ་མ་ ཁྲོམ་ ཁར ་ཡོད།", en: "Mother is in the town." },
  { s: "ཨ་པ ་ལཱ འབད་ དོ།", en: "Father is working." },
  { s: "ཁོ་ དཔེ་ཆ་ ལྷབ་ དེ།", en: "He is reading a book." },
  { s: "རླུང་ ཤུགས་ སྦེ་ ཕུར་ དེ།", en: "The wind is blowing strongly." },
  { s: "ཨ་ནི་ སེམས་ མ་ དགའ་ བས།", en: "Aunt is said to be unhappy." },
  { s: "ཨ་ཞང་ འདི་ སྐྱ་ དཀར་ འཐོན་ ནུག་", en: "Maternal uncle's hair has turned white." },
  { s: "ཨའི་ གིས་ ལྟོ་ བཟོ།", en: "Mother is preparing food." },
  { s: "ཁྱིམ་ འདི་ གསརཔ་ འདུག།", en: "This house is new." }
];