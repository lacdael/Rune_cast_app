const str = ( s , locale='en') => {
    if ( s in STRINGS) {
        if (locale in STRINGS[s]) return STRINGS[s][locale];
        else {
            return '. . .';
        }
     } else {
         return ". . .";
     }
}

const STRINGS = {
	"TITLE":{
		"en":"Wyrd"
	},
	"about":{
		"en":"About"
	},
	"runes":{
		"en":"Runes"
	},
	"CAST_ONE":{
		"en":"Cast Rune"
	},
	"rune_cast":{
		"en":"Cast Rune"
	},
	"CAST_THREE":{
		"en":"Cast Spread"
	},
	"CAST_THREE_THEN":{
		"en":"Then"
	},
	"CAST_THREE_NOW":{
		"en":"Now"
	},
	"CAST_THREE_SOON":{
		"en":"Soon"
	},
	"rune_spread":{
		"en":"Rune Spread"
	},
	"REVERSED":{"en":"Reversed"},
	"F_NAME":{"en": "Feoh"},
	"F_RIGHT":{"en": "Money, wealth, luck, abundance."},
	"F_REVERSED":{"en":"Travel, relocation, dance of life."},
	"U_NAME" : {"en":"Ur"},
	"U_RIGHT" : {"en":"Ox, strength, power, courage."},
	"U_REVERSED" : {"en":"Frailty, rashness, violence, lust."},
	"TH_NAME" :{"en": "Thorn"},
	"TH_RIGHT" : {"en":"Thorn, change, catharsis."},
	"TH_REVERSED" :{"en": "Compulsion, evil, violence, lust."},
	"O_NAME" : {"en":"Os"},
	"O_RIGHT" :{"en": "Mouth, creativity, "},
	"O_REVERSED":{"en": ""},
	"R_NAME" :{"en": "Rad"},
	"R_RIGHT" :{"en": "Wagaon, travel, journey, destiny."},
	"R_REVERSED" :{"en": "Crisis, rigidity, injustice, death."},
	"C_NAME" : {"en":"Cen"},
	"C_RIGHT" : {"en":"Torch, revelation, knowledge, creativity, inspiration."},
	"C_REVERSED" :{"en": "False hope, no creativity."},
	"G_NAME" : {"en":"Gyfu"},
	"G_RIGHT" : {"en":"Gift, love, generosity, marriage, partnership."},
	"W_NAME" : {"en":"Wynn"},
	"W_RIGHT" :{"en": "Joy, sucess, peace, pleasure, self defence."},
	"W_REVERSED" :{"en": "Sorrow, strife, intoxication, frenzy."},
	"H_NAME" :{"en": "Haegl"},
	"H_RIGHT" :{"en": "Hailstrom, loss, destruction, change."},
	"H_REVERSED" :{"en": "Catastrophe, loss, sickness, hardship, pain."},
	"N_NAME" : {"en":"Nyd"},
	"N_RIGHT" : {"en":"Need, necessity, hardship, delays."},
	"N_REVERSED" :{"en":"Drudgery, laxity, restlessness."},
	"I_NAME" : {"en":"Is"},
	"I_RIGHT" : {"en":"Ice, standstill, block, challenge."},
	"J_NAME" :{"en": "Jer"},
	"J_RIGHT" : {"en":"Year, harvest, peace, rewards."},
	"IW_NAME" : {"en":"Eeoh"},
	"IW_RIGHT" :{"en": "Yew tree, stability, strength, reliability, enlightenment."},
	"P_NAME" : {"en":"Peorth"},
	"P_RIGHT" : {"en":"Luck, magic, mystery, feminine."},
	"P_REVERSED" : {"en":"Addiction, loneliness, malaise."},
	"X_NAME" : {"en":"Eolh"},
	"X_RIGHT" : {"en":"Elk, protection, shield, self defence."},
	"X_REVERSED" :{"en": "Hidden danger, taboo, warning."},
	"S_NAME" : {"en":"Sigel"},
	"S_RIGHT" : {"en":"Sun, strength, energy, health, success."},
	"T_NAME" : {"en":"Tyr"},
	"T_RIGHT" : {"en":"Tyr, honor, justice, leadership, authority."},
	"T_REVERSED" : {"en":"Strife, war, stupidity, dullness."},
	"B_NAME" : {"en":"Beorc"},
	"B_RIGHT" : {"en":"Birch, birth, beginnings, personal growth, liberation."},
	"B_REVERSED" : {"en":"Anxiety, deceit, abandon, loss of control."},
	"E_NAME" : {"en":"Eoh"},
	"E_RIGHT" : {"en":"Horse, transportation, partnership."},
	"E_REVERSED" : {"en":"Reckless, haste, disharmony, mistrust, betrayal."},
	"M_NAME" : {"en":"Mann"},
	"M_RIGHT" : {"en":"Man, self, mankind, culture, friends."},
	"M_REVERSED" : {"en":"Depression, slyness, mortality, manipulation."},
	"L_NAME" : {"en":"Lagu"},
	"L_RIGHT" : {"en":"Lake, water, sea, flow, renewal"},
	"L_REVERSED" : {"en":"Confusion, dispair, perversity, madness."},
	"NG_NAME" : {"en":"Ing"},
	"NG_RIGHT" : {"en":"Fertility, growth, harmony."},
	"OE_NAME" : {"en":"Oedel"},
	"OE_RIGHT" : {"en":"Estate, property, plenty."},
	"OE_REVERSED" : {"en":"Slavery, bad karma, homelessness."},
	"D_NAME" : {"en":"Daeg"},
	"D_RIGHT" : {"en":"Day, dawn, break-through, awareness."},
	"ABOUT_TITLE":{
		"en":"Futhorc Runes"
	},
	"ABOUT_SIGN":{
		"en":"By Christian Lacdael."
	},
	"ABOUT_1":{
		"en":"used by the early Anglo-Saxons in their writing system. They were an extended version of the Elder Futhark, consisting of between 26 and 33 letters. The Futhorc was used to write Old English and Old Frisian and was in use from the 5th century until the Norman conquest in 1066. The runes were often carved on precious objects and stone monuments, and they had religious significance, being used in religious ceremonies and as charms or spells. The Anglo-Saxon Futhorc was based on the Elder Futhark and evolved to represent changes in sounds. The runes are thought to have been developed in Frisia and then adopted in England, or they may have developed in England and spread to Frisia. Archaeological evidence of their use includes inscriptions on jewelry, weapons, stones, and manuscripts, with some runes continuing to appear in Latin texts representing whole words even after the Latin alphabet began to replace them"
	},
	"ABOUT_2":{
		"en":"The Anglo-Saxon Futhorc runes were used in divination. Some practitioners consider the runes to be a valuable tool for divination, as they are associated with everyday experiences and can provide simple yet profound meanings. However, others advise against using certain runes in divination due to their perceived immense and destructive energies. The runes are also linked to magical rune-scripts, with some being used to block negative thoughts and actions. While the use of Anglo-Saxon runes in divination is not as common as that of other runic systems, they are still employed for this purpose by some practitioners. The runes' association with religious ceremonies, charms, and spells reflects their perceived magical powers and their use in divination"
	}
};

export default str;
