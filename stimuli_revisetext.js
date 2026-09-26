const stimuliData = [
  // Set 1
  { s: "ཆརཔ་ རྐྱབ་ འཚར་ ནུག", g: "rain_has come/played_finished_particle used for past tense", en: "The rain has stopped" },
  { s: "ཁོ་ མི་ འོང ་ལོ།", g: "he_negation before verb_come_reporting particle", en: "He said he wont come /make it." },
  { s: "གནམ་གྲུ་ ཐང་ ནང་ ཆགས་ནུག", g: "Air plane_Ground_in/locative_landed (past particle)", en: "The plane has landed on the ground." },
  { s: "ཁོ་ གཟུགས ་རིམ་ ཡོད།", g: "He_body_long_yes", en: "He is tall." },
  { s: "ང་ ལྟོ་ བཟའ ་ནི།", g: "I/me_food/rice_eat_present particle", en: "I want to eat." },
  { s: "མོ་ གནམ་མེད་ས་མེད་ འཛའ་རིམ་ འདུག་", g: "She_Extremely_beautiful_yes particle", en: "She is extremely beautiful." },
  { s: "ང་ འབྲུག་མི་ ཨིན།", g: "I_Bhutanese person_Yes particle for validation", en: "I am Bhutanese" },
  { s: "ཕར་ ལུ་ མི་ འདུག", g: "Over there_locative particle_person/people_yes particle", en: "There are people over there." },
  { s: "ནོར་ཤ་ སྐམ་ དྲིམ་ འདུག་", g: "Beef_dry_smell_yes particle", en: "The dried beef has a weird smell." },
  { s: "བོད་སྲེམ་ མི་ ཞིམ མས།", g: "Soya bean_negation particle_tasty_particle to validate or say yes", en: "Soya beans don't taste good." },

  // Set 2
  { s: "བསྟན་འཛིན་ གློག་བརྙན་ བལྟ་བར་ ཡར་སོང ་ཡི།", g: "Tenzin_Movie_To watch_gone_Past tense particle", en: "Tenzin left to watch movie." },
  { s: "བཟང་མོ་ ཕགཔ་  འཆོལ ་བར འགྱོ་ ནུག", g: "Zangmo_pig_search for_nominalizer.loc_go_past particle", en: "Zangmo left to search a pig." },
  { s: "ཨ་མ་ ཁྲོམ་ ཁར ་ཡོད།", g: "Mother_town_in_Yes", en: "Mother is in the town." },
  { s: "ཨ་པ ་ལཱ འབད་ དོ།", g: "Father_work_do_progressive particle", en: "Father is working." },
  { s: "ཁོ་ དཔེ་ཆ་ ལྷབ་ དེ།", g: "He_book_reading_progressive particle", en: "He is reading a book." },
  { s: "རླུང་ ཤུགས་ སྦེ་ ཕུར་ དེ།", g: "Wind_strong_by_blow_progressive particle", en: "The wind is blowing strongly." },
  { s: "ཨ་ནི་ སེམས་ མ་ དགའ་ བས།", g: "Aunt_mind_Negation particle_Happy_quotative particle", en: "Aunt is said to be unhappy." },
  { s: "ཨ་ཞང ་འདི་ སྐྱ་ དཀར་ འཐོན་ ནུག་", g: "Maternal uncle_demonstrative particle/this_hair_white_come_quotation particle", en: "Maternal uncle's hair has turned white." },
  { s: "ཨ་ཡི་ གིས་ ལྟོ་ བཟོ།", g: "Mother_ergative_food_prepare", en: "Mother is preparing food." },
  { s: "ཁྱིམ་ འདི་ གསརཔ་ འདུག།", g: "House_demonstrative /this_new_copula/be", en: "This house is new." },

  // Set 3
  { s: "ད་རེས་ གཟའ་ ཉིམ་ ཨིན།", g: "Today_day/planet_Saturday_Copula/is", en: "Today is Saturday." },
  { s: "ལྷག་པ་ སེམས་ ལེགས་ པས།", g: "Lhakpa_mind/heart_good_Adverb marker", en: "lhakpa has a good heart." },
  { s: "ར་ བྱག་ གུ་ ལས ཆོངས་ མས།", g: "Goat_cliff_on/off locative particle_from_jump_past particle-is", en: "The goat jumps off the cliff." },
  { s: "དཔལ་སྒྲོན་ སྨན་ཁང་ མི་ འགྱོ་ ལོ།", g: "Peday_Hospital_Negative_go_quotative particle", en: "Peday said she won't go to the hospital." },
  { s: "མེ་ཏོག་ དཀརཔོ་ ཤར་ ནུག", g: "Flower_White_bloom_completed action particle/yes/is", en: "A white flower has bloomed." },
  { s: "སྒོ་ ཁར་ མི་ ཅིག་ འདུག", g: "Door/Entrance_at_person_a_exist", en: "There is a person at the door." },
  { s: "སློབ་དཔོན་ དཔེ་ཆ་ བསྟན་ དེ།", g: "Teacher_Book_teaching_Particle action in progress", en: "A teacher is teaching." },
  { s: "བུ་ ཁུར་ཆ་ འབག ་དེ།", g: "Son_Load_carry_action progressive", en: "Son is carrying a load." },
  { s: "འབྲུག་ རྒྱལ་ཁབ་ ཡར་རྒྱས་ འགྱོ་ དོ།", g: "Bhutan_country_development_go_progressive", en: "Bhutan is developing." },
  { s: "ད་རེས་ སློབ་གྲྭ་ ངལ་གསོ་ ཨིན།", g: "Today_school_holiday_cop/is", en: "Today is school holiday." },
  
  // Set 4
  { s: "ཁ་རྩ་ སེམས་ མ་ དགའ།", g: "Yesterday_Mind_negative/not_Happy", en: "I wasn't happy yesterday." },
  { s: "ནངས་པ་ ཨ་ཞང ་འོང་ དོ།", g: "Tomorrow_Maternal Uncle_come_progressive/future indication", en: "Tomorrow, uncle will visit." },
  { s: "ཁོ་ གིས་ ཤོབ་ རྐྱབ་ མས།", g: "He_by_lie_do/play_is", en: "He is lying." },
  { s: "པདྨ་ དང་ ལྷa་མོ་ ཆ་རོགས་ ཨིན།", g: "Pema_and_Lhamo_Friend_is/are", en: "Pema and Lhamo are friends." },
  { s: "ལྷa་ཕྲུག་ གིས་ ལྷa་སྐྱིད་ དགའ ་བས།", g: "Lhatruk_by_Lhaki_Love/happy_particle", en: "Lhatruk loves lhakhi" },
  { s: "སེམས་ ཚབ་ཚུབ་ འབདཝ་ མས།", g: "Mind_restless_do_PST/was", en: "Felt anxious /restless." },
  { s: "དགུན་ ལུ་ ཆརཔ་ མི ་རྐྱབ།", g: "Winter_in_rain_NEG/doesnt_play/do", en: "It does not rain in winter." },
  { s: "ན་ཧིང་ ཆུ་རུས་ མ འཐེན།", g: "Last year_flood_NEG/no_show up", en: "Last year, it did not rain." },
  { s: "དུས་རྩི་ གནམ་མེད་ ས་མེད་ ཚདཔ་ འདུག", g: "This year_No sky /phrase for a lot_no land /phrase for a lot_heat/hot_there", en: "It is extremely hot this year." },
  { s: "དྲོ་པ་ རང་ ཡར་ སོང ་ཡི།", g: "Morning_itself_go_left_PST/particle", en: "Left in the morning itself." },
  
  // Set 5
  { s: "འགྱོ་པ་ རང་ འཐོན་ འོང།", g: "Fast /soon_only_come/show up_EMPH", en: "Will be coming soon."},
  { s: "ལག་ བཏགས་ ཅིག ་བསྐྱལ་ གནང།", g: "Hand_carry/put on_a_send_please", en: "Please send a parcel."},
  { s: "རྒྱ་ གར་ ལུ ་མི་ འགྱོ།", g: "Plain_white_in_NEG_GO", en: "Not going to India."},
  { s: "ཁོ་ རྒྱ ་མི་ ཁ་ ཤེས་ ལོ།", g: "he_Chinese_people_language_know_quotative", en: "He said he knows Chinese language."},
  { s: "བལ ་ཡུལ་ ལུ ་གནས་ འདུག", g: "Nepal_country /place_in_holy sites_exist", en: "There is a holy site in Nepal."},
  { s: "བོད་ ལུ་ ཁaམ་པ་ མི་ རིག་ ཡོད", g: "Tibet_in_Khampa_people_ethnicity_yes/there", en: "There are Khampa people in Tibet"},
  { s: "ལྷ་ ས་ ལུ་ པོ་ཊ་ལ་ མཇལ་ འོང།", g: "God_land_in_Potala_visit_will", en: "At lhasa we got to see Potala Palace."},
  { s: "ཕྲནས་ ལུ་ ཨ་ཞིམ་ ཡོད།", g: "France_in_sister_is", en: "Sister is there in France."},
  { s: "ར་ཤི་ཡ་ དང་ ཡུ་ཀྲེན་ དམག་ རྐྱབ ་དེ།", g: "Russia_and_Ukraine_army_fight_progressive particle", en: "Russia and Ukraine are fighting a war."},
  { s: "རོ་ཁྱི་ དམརཔོ་ ཧབ་ དེ།", g: "Dog_red_bark_Progressive", en: "The red dog is barking."}
];