// Vollständige Checklisten-Daten aus dem PDF
const checklistData = {
    1: {
        title: "Anaphylaxie",
        symptoms: "Hypotension, Bronchospasmus, erhöhter Beatmungsdruck, abgeschwächtes oder fehlendes Atemgeräusch, Tachykardie, Urtikaria",
        steps: [
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Stoppe mögliche Allergene",
            "Adrenalinbolus (ggf. wiederholen)",
            "Verabreiche Volumen (min. 20 ml/KgKG), Trendelenburg-Position",
            "Erhöhe auf 100% O₂, hoher Frischgasfluss",
            "Atemweg sichern",
            "Erwäge:<br>• Wechsel auf Midazolam zur Narkoseführung bei Hypotension<br>• Vasopressin (Empressin®) bei Hypotension trotz wiederholter Noradrenalingabe<br>• Adrenalinperfusor<br>• H1-Blocker: Clemastin (Tavegyl®)<br>• Steroide: Methylprednisolon (Solu-Medrol®)<br>• Ventolin®-Inhalation<br>• Tryptasebestimmung: nach 30-120 Minuten und nach 24-48 Stunden<br>• Unterbruch der Operation"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Adrenalin:</strong><br>• Bolus i.v. 10-100 mcg<br>• Perfusor 0.1-1 mcg/kg/min i.v.<br><br><strong>Empressin®:</strong> 1-2 U i.v.<br><strong>Tavegyl®:</strong> 2 mg i.v.<br><strong>Solu-Medrol®:</strong> 125 mg i.v.<br><strong>Ventolin®:</strong> 2 Hübe"
            },
            {
                type: "warning",
                title: "Häufige ALLERGENE",
                content: "• Muskelrelaxantien<br>• Antiobiotika<br>• Latex<br>• Kontrastmittel"
            },
            {
                type: "danger",
                title: "Kritische VERÄNDERUNGEN",
                content: "Bei Kreislaufstillstand, gehe zu:<br>→ <a href='?id=2' class='link-card'>CHKLST 2 Asystolie/PEA</a><br>→ <a href='?id=10' class='link-card'>CHKLST 10 Kammerflimmern/-tachykardie</a>"
            }
        ]
    },
    2: {
        title: "Asystolie/PEA",
        symptoms: "Nicht defibrillierbarer, pulsloser Kreislaufstillstand",
        steps: [
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»<br>→ Anweisung: «Gute CPR hat oberste Priorität»",
            "100% O₂, hoher Frischgasfluss, Stopp vasodilatierender inhalativer und intravenöser Medikamente",
            "CPR beginnen und Zyklen zählen…<br><strong>CPR ausführen:</strong><br>• Push hard (> 5 cm tief) and fast (100-120 Kompressionen/Minute)<br>• Entlaste den Brustkorb komplett, minimiere Unterbrechungen<br>• Beatme mit 10 Atemhüben/Minute, vermeide Hyperventilation<br>• Falls nicht intubiert beatme im Verhältnis 30:2<br><br><strong>Adrenalin</strong>, alle 3-5 Minuten wiederholen<br><br><strong>Neubeurteilung alle 2 Minuten / 5 Zyklen:</strong><br>• Helferwechsel<br>• Kontrolle etCO₂: Falls < 1,33 kPa, verbessere CPR-Qualität; Falls > 5,3 kPa, mögliche ROSC<br>• Rhythmuskontrolle; bei organisiertem Rhythmus Pulskontrolle<br><br>Bei Asystolie/PEA: CPR fortsetzen, H's und T's laut vorlesen<br>Bei Kammerflimmern/-tachykardie: CPR fortsetzen, Weiter mit <a href='?id=10' class='link-card'>CHKLST 10</a>"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Adrenalin:</strong> 1mg i.v. alle 3-5 Minuten<br><br><strong>Therapie INTOXIKATION:</strong><br>Lokalanästhetikum: <a href='?id=11' class='link-card'>CHKLST 11</a><br>Betablocker: Glucagon 2-4 mg i.v.<br>Calziumkanalblocker: Calziumgluconat 10% 1 g i.v.<br><br><strong>Therapie HYPERKALIÄMIE:</strong><br>1. Calziumgluconat 10% 1 g i.v.<br>2. Glucose/Insulin: 25 IE NovoRapid® in 250 ml Glucose 20%<br>3. Wenn pH < 7,2: 100 ml NaBIC i.v."
            },
            {
                type: "danger",
                title: "H'S UND T'S",
                content: "• Hydrogenionen (Azidose)<br>• Hyperkaliämie<br>• Hypothermie<br>• Hypoxie<br>• Hypovolämie<br>• Tamponade<br>• Tension (Spannungs-Pneumothorax)<br>• Thrombose koronar<br>• Thrombose pulmonal<br>• Toxin"
            },
            {
                type: "warning",
                title: "WÄHREND CPR",
                content: "<strong>Atemweg:</strong> Suffiziente Maskenbeatmung<br><strong>Kreislauf:</strong> Erwäge Volumengabe, Echo, ECMO<br><strong>Rollenverteilen:</strong> Thoraxkompression, Atemwegs-Management, Gefässzugang, Dokumentation, Defi"
            }
        ]
    },
    3: {
        title: "Beatmungsdruck hoch",
        symptoms: "P<sub>insp</sub> > 30 mbar, V<sub>t</sub> reduziert",
        steps: [
            "Fordere Hilfe und Airway-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Patienten manuell beatmen und auskultieren<br>→ Erhöhe auf 100% O₂",
            "Überprüfe Muskelrelaxation und Narkosetiefe",
            "Überprüfe Kapnogramm<br>→ Bronchospasmus?<br>→ Tubus abgeknickt?",
            "Überprüfe Spirometrie<br>→ Zu tief / einseitig intubiert?",
            "Überprüfe Kreissystem<br>→ Knick?",
            "Patienten tief absaugen<br>→ Bronchoskopie erwägen",
            "Ambubeutel anschliessen",
            "Erwäge Intubation bei LMA, respektive Umintubation bei liegendem Tubus",
            "Prüfe Ursachen"
        ],
        infoBoxes: [
            {
                type: "warning",
                title: "URSACHEN",
                content: "<strong>Häufigste:</strong><br>• Ungenügende Muskelrelaxation<br>• Airway-Position (Tubus zu tief?)<br>• Laryngospasmus (wenn nicht intubiert)<br>• Einstellungen am Beatmungsgerät<br><br><strong>Kreissystem:</strong><br>• Geräteeinstellung<br>• Kreissystem abgeklemmt<br>• Defektes Ventil<br>• Überdruckventil abgeklemmt<br>• Defekt im O₂-Flush<br><br><strong>Airway:</strong><br>• Laryngospasmus (falls nicht intubiert)<br>• Tubusposition (zu tief?)<br>• Tubusgrösse (zu klein?)<br>• Tubus blockiert (Pat. beisst, Knick, Cuff-Hernie, Sekretverschluss)<br><br><strong>Patient:</strong><br>• Bronchospasmus<br>• Pneumothorax<br>• Pneumoperitoneum<br>• Tracheale Pathologie<br>• Thoraxwandrigidität<br>• Adipositas<br>• Alveoläre Pathologie (Ödem, Fibrose, Kontusion, Infektion, ARDS)"
            }
        ]
    },
    4: {
        title: "Blutung",
        symptoms: "Akute schwere Blutung",
        steps: [
            "Fordere Hilfe an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "100% O₂, hoher Frischgasfluss",
            "MAP 55-65 mmHg, bei SHT MAP 80-90 mmHg",
            "Normothermie anstreben<br>→ Warme Infusionen, Fluido®Airguard System, Bair Hugger verwenden",
            "Rasche Volumengabe<br>→ zwei grosskalibrige Zugänge (14-16 G)<br>→ Infusionen in Druckbeutel oder in Fluido®Airguard System",
            "Cellsaver installieren lassen, falls kein Vd.a. Tumor oder Infektion",
            "Frage an Operateur: «Können wir Hilfe rufen?»<br>→ Zusätzlichen Assistenten?<br>→ Gefässchirurgen?",
            "Labor abnehmen und wegschicken<br>→ T&S, falls nicht gültig vorliegend<br>→ ROTEM<br>→ Hämatogramm II, Quick, aPTT, Fibrinogen",
            "Erwäge<br>→ ungekreuzte 0 neg. EC-Transfusion, wenn T&S nicht vorhanden<br>→ EC-Bestellung<br>→ Tranexamsäure 1 g als KI",
            "Verwende SOPs<br>→ «Umgang mit Gerinnungshemmenden Substanzen»"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "BASISMASSNAHMEN",
                content: "• Hb > 7 g/dl<br>• T > 35°C<br>• pH > 7,2<br>• Ca > 1,15 mmol/l"
            },
            {
                type: "warning",
                title: "ERWEITERTE MASSNAHMEN",
                content: "<strong>Fibrinogen < 1,9 g/l oder A10<sub>FIB</sub> < 10 mm:</strong><br>Hämocomplettan® 2 g i.v.<br>Nach 6 g Fibrinogen: Fibrogammin® (Faktor XIII) 15E/kg KG<br><br><strong>Tc < 50 k (< 100 k bei SHT) oder A10<sub>EXT</sub> < 40 mm und A10<sub>FIB</sub> > 10 mm:</strong><br>1 TC-Poolkonzentrat<br><br><strong>Anamn. TC-Funktionsstörung:</strong><br>Minirin® 0,3 mcg/kg über 40 min i.v.<br><br><strong>Q < 50% oder CT<sub>EXT</sub> > 80s:</strong><br>Beriplex®: Einheiten: 0,5 KG x delta Q"
            }
        ]
    },
    5: {
        title: "Bradykardie - instabil",
        symptoms: "Hf < 50 bpm mit Hypotension, akuter Bewusstseinstrübung, Schock, Angina pectoris oder anderen Zeichen der akuten Herzinsuffizienz",
        steps: [
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Chirurgischen Stimulus unterbrechen",
            "Erhöhe auf 100% O₂, stelle adäquate Atmung/Beatmung sicher",
            "Atropin",
            "Wenn Atropin wirkungslos:<br>→ Transkutane Stimulation<br>oder<br>→ Adrenalinperfusor<br>oder<br>→ Einschwemmen eines transvenösen Schrittmachers",
            "Erwäge<br>→ Verminderung der Anästhetika<br>→ Kardiologisches Notfall-Konsilium<br>→ Antiarrhythmika-Überdosis als Ursache (z.B. Betablocker, Calziumkanalblocker, Digoxin)"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Atropin:</strong> 0,5 mg i.v., ggf. wiederholen bis total 3 mg<br><strong>Adrenalin:</strong> 2-10 mcg/min i.v.<br><strong>Isoprenalin (Isuprel®):</strong> 0,5-5 mcg/min i.v.<br><br><strong>Therapie einer ÜBERDOSIS:</strong><br>• Betablocker: Glucagon 2-4 mg i.v.<br>• Calziumkanalblocker: Calciumgluconat 10% 1 g i.v."
            },
            {
                type: "warning",
                title: "TRANSKUTANE SCHRITTMACHERTHERAPIE",
                content: "1. Elektroden anterior-posterior anbringen<br>2. 3-Kanal-EKG vom Defibrillator mit Pat. verbinden<br>3. Bei wachem Patienten Analgosedation (Dormicum, Sufentanil)<br>4. Schalter am Defibrillator auf «SCHRITTM.» drehen<br>5. Frequenz auf ca. 80 bpm drehen<br>6. Stromstärke erhöhen bis Stimulation effektiv<br>7. Stromstärke ca.10 mA über effektiver Stimulationsschwelle einstellen<br>8. Effektivität der Stimulation wiederholt prüfen: EKG-Ableitung, Femoralispuls<br>9. Erwäge Einschwemmen eines transvenösen Pacemakers"
            },
            {
                type: "danger",
                title: "Kritische VERÄNDERUNGEN",
                content: "Bei Asystolie/PEA, gehe zu <a href='?id=2' class='link-card'>CHKLST 2</a>"
            }
        ]
    },
    6: {
        title: "CICO: Can't intubate, can't oxygenate",
        symptoms: "Maskenbeatmung und Intubation nicht möglich",
        steps: [
            "Löse den Rea-Alarm aus, fordere den Airway-Turm an<br>→ Frage: «Wer ist der Team-Leader?»",
            "Halte die Maske dicht, 100% O₂, hoher Frischgasfluss",
            "Vertiefe die neuromuskuläre Blockade (Succinylcholin/Rocuronium)",
            "Mache einen weiteren Intubationsversuch mit C-MAC (Handwechsel)",
            "Lege eine Larynxmaske ein",
            "Klare Anatomie? Ligamentum cricothyroideum tastbar?",
            "Ja: Melker Set Seldinger-Koniotomie",
            "Nein: Skalpell-Koniotomie/-Tracheotomie<br>→ Vertikaler Schnitt 5-10 cm bis auf Trachea"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Succinylcholin:</strong> 1 mg/kg i.v.<br><strong>Rocuronium (Esmeron®):</strong> 1 mg/kg i.v."
            },
            {
                type: "warning",
                title: "VIDEOLARYNGOSKOPIE",
                content: "Verwende nach Möglichkeit das D-Blade"
            },
            {
                type: "danger",
                title: "Kritische VERÄNDERUNGEN",
                content: "Bei Kreislaufstillstand gehe zu:<br>→ <a href='?id=2' class='link-card'>CHKLST 2 Asystolie/PEA</a><br>→ <a href='?id=10' class='link-card'>CHKLST 10 Kammerflimmern/-tachykardie</a><br>Bei Bradykardie → <a href='?id=5' class='link-card'>CHKLST 5</a>"
            }
        ]
    },
    7: {
        title: "Feuer im OP",
        symptoms: "Feuer (plötzlicher Knall, Funken, Flammen, Rauch, Brandgeruch) auf Patient oder Tüchern oder im Atemweg",
        steps: [
            "Fordere Hilfe an und lasse den Feuer-Alarm auslösen<br>→ Handtaster einschlagen: vis-à-vis Koje 6; Innight-Lagerplatz; Rüstraum<br>→ Frage: «Wer ist der Team-Leader?»",
            "Fordere den Feuerlöscher an (2x vis-à-vis Koje 6)",
            "Weiter mit entsprechendem Protokoll"
        ],
        infoBoxes: [
            {
                type: "danger",
                title: "Feuer ausserhalb Atemweg",
                content: "<strong>ERSTER VERSUCH:</strong><br>• Stoppe alle Narkosegase, niedrigstmögliche FiO₂ wählen<br>• Entferne brennende und brennbare Materialien<br>• Brennende Materialien mit NaCl oder getränktem Mull löschen<br>• Verwende KEINE Flüssigkeiten, wenn elektrische Geräte brennen<br><br><strong>ES BRENNT WEITER:</strong><br>• Verwende den CO₂-Feuerlöscher (vis-à-vis Koje 6)<br><br><strong>ES BRENNT NOCH IMMER:</strong><br>• Patient aus OP in die ÜWS evakuieren<br>• Schalte die externe Gaszufuhr zum OP ab (Technischer Dienst: tags und nachts 2424)<br><br><strong>Wenn das Feuer gelöscht ist:</strong><br>• Atemweg erhalten<br>• Beurteilung von Verletzungen und Atemwegstraumata<br>• Beurteilung der Vitalparameter"
            },
            {
                type: "danger",
                title: "Feuer im Atemweg",
                content: "• Sauerstoff und Narkosegase ausschalten<br>• Dekonnektion des Tubus vom Respirator<br>• Entflammbares Material aus Atemweg entfernen<br>• Patient mit Raumluft am Ambubeutel beatmen<br>• FiO₂ minimal halten<br>• Kontrolle, ob erneut Feuer ausbricht<br>• Ist der Tubus intakt? Hat es Fremdkörper im Atemweg?<br>• Erwäge Bronchoskopie<br>• Beurteilung der Vitalparameter<br>• Sicherstellung aller Materialien für spätere Untersuchung"
            }
        ]
    },
    8: {
        title: "Hypotension",
        symptoms: "Unerklärter Blutdruckabfall",
        steps: [
            "Fordere Hilfe und Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Überprüfe…<br>→ Puls<br>→ Blutdruck<br>→ Equipment<br>→ Herzfrequenz: Bei Bradykardie gehe zu <a href='?id=5' class='link-card'>CHKLST 5</a><br>→ Rhythmus: Bei Kammerflimmern/-tachykardie gehe zu <a href='?id=10' class='link-card'>CHKLST 10</a>; Bei PEA gehe zu <a href='?id=2' class='link-card'>CHKLST 2</a>",
            "Volumen-Substitution",
            "Vasopressoren-Therapie<br>→ MILDE Hypotension: Ephedrin oder Phenylephrin<br>→ REFRAKTÄRE Hypotension: (Nor)Adrenalin (Bolus oder Perfusor)",
            "Erhöhe auf 100% O₂, hoher Frischgasfluss, Narkosetiefe ggf. reduzieren",
            "Untersuche OP-Feld auf Blutverlust<br>→ Bei Blutung gehe zu <a href='?id=4' class='link-card'>CHKLST 4</a>",
            "Erwäge Massnahmen<br>→ Trendelenburg-Position<br>→ zusätzliche i.v.-Leitung legen<br>→ invasive Blutdrucküberwachung",
            "Prüfe Ursachen"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Ephedrin:</strong> 5-10 mg i.v. ggf. wiederholen<br><strong>Phenylephrin:</strong> 50-100 mcg i.v., ggf. wiederholen<br><strong>(Nor)Adrenalin BOLUS:</strong> 5-10 mcg i.v.<br><strong>(Nor)Adrenalin PERFUSOR:</strong> 0,1-1 mcg/kgKG/min i.v."
            },
            {
                type: "warning",
                title: "URSACHEN",
                content: "<strong>Operationsgebiet:</strong><br>• Chirurgische/mechanische Manipulation<br>• Pneumoperitoneum<br>• Vagale Stimulation<br>• Gefässkompression<br><br><strong>Unerklärter Blutverlust:</strong><br>• Blut im Absaugbehälter<br>• Blutige Kompressen<br>• Blut am Boden<br>• Innere Blutung<br><br><strong>Medikamente/Allergen:</strong><br>• Anaphylaxie → <a href='?id=1' class='link-card'>CHKLST 1</a><br>• Vor kurzem verabreichte Medikamente<br>• Fehldosierung<br>• Ins OP-Gebiet applizierte Medikamente (z.B. LA)<br><br><strong>Atmung:</strong><br>• (Auto-) PEEP<br>• Hypo-/Hyperventilation<br>• Hypoxie → <a href='?id=9' class='link-card'>CHKLST 9</a><br>• Pneumothorax<br><br><strong>Kreislauf:</strong><br>• Luftembolie → <a href='?id=12' class='link-card'>CHKLST 12</a><br>• Bradykardie → <a href='?id=5' class='link-card'>CHKLST 5</a><br>• Maligne Hyperthermie → <a href='?id=13' class='link-card'>CHKLST 13</a><br>• Tachykardie → <a href='?id=14' class='link-card'>CHKLST 14</a><br>• Myokardischämie<br>• Embolie (Fett, Zement, Fruchtwasser, CO₂)<br>• Septischer Schock<br>• Tamponade"
            }
        ]
    },
    9: {
        title: "Hypoxie",
        symptoms: "Unerklärter Sättigungsabfall",
        steps: [
            "Fordere Hilfe und Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Erhöhe auf 100% O₂, hoher Frischgasfluss<br>→ Ausschluss von niedriger FiO₂<br>→ Prüfe etCO₂ und Veränderungen der Kapnographiekurve",
            "Handbeatmung: Prüfe die Compliance",
            "Auskultation",
            "Überprüfe<br>→ Blutdruck, Atemwegsdruck, Puls<br>→ Endotracheale Tubuslage<br>→ Artefakte (Sensor deplatziert, Vasokonstriktion, Lichtinterferenz, Elektrokauter, Farbstoffe)<br>→ Kreissystem: Diskonnektion, Knick, Leck",
            "Erwäge<br>→ ABGA<br>→ Tiefes Absaugen<br>→ Beatmung mit Ambubeutel<br>→ Bronchoskopie<br>→ Recruitment-Manöver (Cave: Hypotension)",
            "Kläre mögliche Ursachen"
        ],
        infoBoxes: [
            {
                type: "warning",
                title: "URSACHEN",
                content: "<strong>A- und B-Probleme:</strong><br>• Aspiration<br>• Laryngospasmus<br>• Atelektase<br>• Bronchospasmus<br>• Hypoventilation<br>• Pneumothorax<br>• Lungenödem<br>• Fehlintubation<br>• Auto-PEEP<br>• Pleuraerguss<br><br><strong>Kreislauf:</strong><br>• Lungenembolie<br>• Luftembolie → <a href='?id=12' class='link-card'>CHKLST 12</a><br>• Andere Embolien (Fett, Zement, septisch, CO₂, Fruchtwasser)<br>• Linksherzversagen<br>• Perikardtamponade<br>• Erhöhter O₂-Verbrauch<br>• Hypotonie mit Hypoxie → <a href='?id=8' class='link-card'>CHKLST 8</a><br><br><strong>Medikamente/Allergie:</strong><br>• Vor kurzem verabreichte Medikamente<br>• Fehldosierung<br>• Allergie/Anaphylaxie → <a href='?id=1' class='link-card'>CHKLST 1</a><br>• Methämoglobinämie, COHb"
            }
        ]
    },
    10: {
        title: "Kammerflimmern/-tachykardie",
        symptoms: "Defibrillierbarer, pulsloser Kreislaufstillstand",
        steps: [
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Erhöhe auf 100% O₂, hoher Frischgasfluss, schalte Anästhetikum ab",
            "CPR beginnen, Defibrillations-Zyklen zählen<br><strong>CPR ausführen:</strong><br>• Push hard (> 5 cm tief) and fast (100-120 Kompressionen/Minute)<br>• Entlaste den Brustkorb komplett, minimiere Unterbrechungen<br>• Beatme mit 10 Atemhüben/Minute, vermeide Hyperventilation<br>• Falls nicht intubiert beatme im Verhältnis 30:2<br>• Defi-Elektroden aufkleben<br><br><strong>Defibrillation:</strong><br>• Schock biphasisch 200 J<br>• CPR sofort wieder fortführen<br>• Erneute Defibrillation nach 2 min, resp. 5 Zyklen<br><br>Nach der zweiten Defibrillation: Adrenalin 1mg i.v., wiederholen alle 3-5 Minuten<br>Nach dem dritten Schock: Amiodaron<br><br><strong>Neubeurteilung alle 2 Minuten, resp. 5 Zyklen:</strong><br>• Helferwechsel<br>• Kontrolle etCO₂: Falls < 1,33 kPa, verbessere CPR-Qualität; Falls > 5,3 kPa, mögliche ROSC<br>• H's und T's laut vorlesen<br>• Rhythmuskontrolle; bei organisiertem Rhythmus Pulskontrolle<br>• Falls VF/VT CPR fortsetzen<br>• Falls Asystolie/PEA gehe zu <a href='?id=2' class='link-card'>CHKLST 2</a>"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Adrenalin:</strong> 1 mg i.v. alle 3-5 Minuten<br><br><strong>ANTIARRHYTHMIKA:</strong><br>Amiodaron (Cordarone®):<br>• 1. Dosis: 300 mg i.v./i.o.<br>• 2. Dosis: 150 mg i.v./i.o.<br><br>Magnesium: 1-2 g i.v./i.o. bei Torsade des Pointes"
            },
            {
                type: "warning",
                title: "ANWEISUNG DEFIBRILLATOR",
                content: "1. Elektroden anterior-lateral platzieren<br>2. Schalter auf «DEFIBRILLATOR» drehen<br>3. «ENERGIE-WAHL» auf 200 J festlegen<br>4. «LADEN» drücken<br>5. «SCHOCK» drücken"
            },
            {
                type: "danger",
                title: "H'S UND T'S",
                content: "• Hydrogenionen (Azidose)<br>• Hyperkaliämie<br>• Hypothermie<br>• Hypoxie<br>• Hypovolämie<br>• Tamponade<br>• Tension (Spannungs-Pneumothorax)<br>• Thrombose koronar<br>• Thrombose pulmonal<br>• Toxin"
            },
            {
                type: "info",
                title: "WÄHREND CPR",
                content: "<strong>Atemweg:</strong> Suffiziente Maskenbeatmung<br><strong>Kreislauf:</strong> Erwäge Volumengabe, Echo, ECMO<br><strong>Rollenverteilen:</strong> Thoraxkompression, Atemwegs-Management, Gefässzugang, Dokumentation, Defi"
            }
        ]
    },
    11: {
        title: "Lokalanästhetika-Intoxikation",
        symptoms: "Krampfanfall, verwaschene Sprache, taube Zunge, Tinnitus, Metallgeschmack, AV-Blockierungen während/nach LA-Injektion, Hypotension, breiter QRS-Komplex, irreversibler Kreislaufstillstand",
        steps: [
            "Sofort die Injektion und Infusion des Lokalanästhetikums stoppen",
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Teamleader?»",
            "Ausreichende Atmung/Beatmung und Sauerstoffversorgung sicherstellen, ggf. Intubation",
            "Krampfanfall behandeln",
            "Intralipid 20%",
            "Antiarrhythmika",
            "Erwäge…<br>→ H1-Blocker: Clemastin (Tavegyl®) 2 mg i.v.<br>→ Natriumbikarbonat 8.4% mit Ziel-pH > 7.25<br>→ CPR über mindestens 60 min durchführen<br>→ ECMO"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>ANTIEPILEPTIKA:</strong><br>Midazolam: 0.05 - 0.1 mg/kg<br>Thiopental: 1 mg/kg<br>Propofol: 0.5 - 2 mg/kg<br><br><strong>INTRALIPID 20% (im Medikamentenraum):</strong><br>• 1,5 ml/kg Bolus i.v. über 1 Minute (100 ml bei Erwachsenem)<br>• Anschliessend 0.25 ml/kg/min (1000 ml/h bei Erwachsenem)<br>• falls keine Reaktion nach 5 min: Bolus wiederholen und Infusionsrate verdoppeln<br>• max. 3 Bolusgaben alle 5 Minuten<br><br><strong>ARRHYTHMIE-Behandlung:</strong><br>• VERMEIDE Vasopressin, Calciumkanalblocker, Lido<br>• Vorsicht mit Betablockern (Myokarddepression)<br>• Amiodaron (Cordarone®) 150 mg als KI erwägen<br>• Transkutaner oder intravenöser Schrittmacher bei symptomatischer Bradykardie mit Puls"
            },
            {
                type: "danger",
                title: "Kritische VERÄNDERUNGEN",
                content: "Bei Kreislaufstillstand, gehe zu:<br>→ <a href='?id=2' class='link-card'>CHKLST 2 Asystolie/PEA</a><br>→ <a href='?id=10' class='link-card'>CHKLST 10 Kammerflimmern/-tachykardie</a>"
            }
        ]
    },
    12: {
        title: "Luftembolie",
        symptoms: "CO₂-Abfall, SpO₂-Abfall, Hypotension",
        steps: [
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Teamleader?»",
            "100% O₂, hoher Frischgasfluss",
            "Weiteren Lufteintritt verhindern<br>→ Operationsbereich ggf. mit Kochsalzlösung auffüllen<br>→ Verändere (falls möglich) die Lagerung, um die Operationsstelle unterhalb des Herzniveaus halten<br>→ Eintrittsstelle suchen (einschliesslich offene venöse Zugänge)",
            "Luft ggf. mit Zentralvenenkatheter aspirieren",
            "Rasche Volumengabe, um den ZVD zu erhöhen",
            "Erwäge…<br>→ Tisch nach links und Trendelenburgposition kippen<br>→ Adäquates Monitoring während Neupositionierung<br>→ Knochen mit Knochenwachs verschliessen<br>→ Transösophageale Echokardiographie (TEE) bei unklarer Diagnose<br>→ EtCO₂ um Verlauf und Auflösung des Embolus zu beobachten"
        ],
        infoBoxes: [
            {
                type: "danger",
                title: "Kritische VERÄNDERUNGEN",
                content: "Bei PEA gehe zu <a href='?id=2' class='link-card'>CHKLST 2</a>"
            }
        ]
    },
    13: {
        title: "Maligne Hyperthermie",
        symptoms: "Bei Trigger-Exposition: unerklärter Anstieg des etCO₂, unerklärte Tachykardie, unerklärte Tachypnoe, anhaltender Masseterspasmus nach Succinylcholin. Hyperthermie ist ein Spätsymptom.",
        steps: [
            "Fordere Hilfe und Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Team-Leader?»",
            "Zufuhr von Triggersubstanzen beenden und mit triggerfreier Narkose fortfahren",
            "100% O₂, hoher Frischgasfluss 10l/min",
            "Dantrolen aus Medikamentenraum holen",
            "Sofort weiteres Dantrolen bestellen",
            "Beauftrage mehrere Personen, Dantrolen vorzubereiten",
            "Gekühlte Ringeracetat Inflsg. anfordern",
            "Erhöhe das Atemminutenvolumen (Ziel: Normokapnie)",
            "Chir. Eingriff wenn möglich unterbrechen",
            "Dantrolen verabreichen",
            "Natriumbikarbonat geben bei vermuteter metabolischer Azidose (Ziel pH > 7.2)",
            "Hyperkaliämie behandeln",
            "Arrhythmien behandeln<br>→ Standardantiarrhythmika, KEINE Calciumkanal-Blocker verwenden!",
            "Labor wegschicken<br>→ ABGA, CK, Serum- und Urin-Myoglobin, Gerinnung nach 0,5, 4, 12 und 24 Std.",
            "Supportive Behandlung beginnen<br>→ Erwäge Kühlung, wenn Temperatur > 38.5°C<br>→ Spülung offener Körperhölen, Magenspülung mit kaltem Wasser, Oberflächenkühlung mit Eis, Kalte Infusionslösung<br>→ Verlegung auf IPS<br>→ MH-Notfallnummer: 061 265 44 00; MH-Diagnostikzentrum: Tel. 061 265 25 25<br>→ Internet: www.malignehyperthermie.ch/notfall.html"
        ],
        infoBoxes: [
            {
                type: "danger",
                title: "TRIGGERSTOFFE",
                content: "• Volatile Anästhestika<br>• Succinylcholin"
            },
            {
                type: "warning",
                title: "DIFFERENTIALDIAGNOSE",
                content: "• Malignes neuroleptisches Syndrom (zentraler Dopaminmangel)<br>• Thyreotoxikose<br>• Phäochromozytom<br>• Exogenes CO₂ (Kapnoperitoneum)<br>• Überwärmung<br>• Anticholinerges Syndrom<br>• Intoxikation mit Amphetaminen, Kokain, Salicylaten<br>• Alkoholentzugssyndrom"
            },
            {
                type: "info",
                title: "MEDIKAMENTENDOSIERUNG",
                content: "<strong>Dantrolen (Calziumkanalblocker):</strong><br>• 2.5 mg/kg i.v., 10-minütl. wiederholen bis 10 mg/kg, bis der Patient stabil ist<br>• selten bis 30 mg/kg erforderlich<br>• Jede Flasche Dantrolen (je 20 mg) mit je 60 ml sterilem Wasser (Aqua ad inject.) aufbereiten<br>• 2.5 mg/kg = 7.5 ml/kg; 70 kg = 525 ml<br><br><strong>Bicarbonat:</strong><br>• 1-2 mmol/kg, max. Dosis 50 mmol (bei metabolischer Azidose)<br><br><strong>Therapie HYPERKALIÄMIE:</strong><br>1. Calziumgluconat 10% 1 g i.v.<br>2. Glucose - Insulin: 25 IE NovoRapid® in 250 ml Glucose 20%<br>3. Wenn pH < 7,2: 100 ml NaBIC i.v."
            }
        ]
    },
    14: {
        title: "Tachykardie - instabil",
        symptoms: "Persistierende Tachykardie mit Hypotension, Angina pectoris, Bewusstseinstrübung oder Schock",
        steps: [
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Teamleader?»",
            "Erhöhe auf 100% O₂, hoher Frischgasfluss. Verringere Narkose",
            "Rhythmus-Analyse<br>→ Falls Breitkomplex, irregulär: behandle wie VF, gehe zu <a href='?id=10' class='link-card'>CHKLST 10</a><br>→ Andernfalls: Vorbereiten zur Kardioversion",
            "Bereite sofortige synchronisierte Kardioversion vor<br>→ Alle Patienten bei Bewusstsein sedieren ausser bei schneller Verschlechterung<br>→ Therapieelektroden anterior-lateral platzieren<br>→ Schalter auf DEFIBRILLATOR drehen<br>→ SYNC EIN/AUS drücken",
            "Mit richtiger Energie kardiovertieren<br>→ Bestimme geeignete Energiehöhe mittels biphasischer Kardioversions-Tabelle; beginne mit niedrigster Energiehöhe und erhöhe nach Bedarf<br>→ LADEN drücken<br>→ SCHOCK drücken und gedrückt halten<br>→ Monitor überprüfen; falls Tachykardie anhält, Energiehöhe steigern<br>→ Nach jedem Schock erneut SYNC EIN/AUS drücken<br>→ Auf Markierung über der R-Zacke achten, die den synchronisierten Modus anzeigt",
            "Erwäge dringendes kardiologisches Konsil"
        ],
        infoBoxes: [
            {
                type: "info",
                title: "BIPHASISCHE KARDIOVERSION Energiehöhe",
                content: "<strong>Schmal, regelmässig:</strong><br>50 J → 100 J → 150 J → 200 J<br><br><strong>Schmal, unregelmässig:</strong><br>120 J → 150 J → 200 J<br><br><strong>Breit, regelmässig:</strong><br>100 J → 150 J → 200 J<br><br><strong>Breit, unregelmässig:</strong><br>Wie VF behandeln: gehe zu <a href='?id=10' class='link-card'>CHKLST 10</a>"
            },
            {
                type: "danger",
                title: "Kritische VERÄNDERUNGEN",
                content: "Falls Kardioversion nötig, aber synchronisierter Schock unmöglich, benutze asynchronen Schock: biphasisch 200 J.<br><br>Bei Kreislaufstillstand gehe zu:<br>→ <a href='?id=2' class='link-card'>CHKLST 2 Asystolie/PEA</a><br>→ <a href='?id=10' class='link-card'>CHKLST 10 Kammerflimmern/-tachykardie</a>"
            }
        ]
    },
    15: {
        title: "Transfusionsreaktion",
        symptoms: "Fieber, Rücken-/Seitenschmerzen, Hypotension, Tachykardie, Kreislaufinstabilität, Bronchospasmus, Pfeifen/Giemen, erhöhter Beatmungsdruck, Hypoxie, Urtikaria/Quaddeln, Blutung aus Einstichstellen und Schleimhäuten, dunkler Urin",
        steps: [
            "Transfusion stoppen, venösen Zugang belassen (mit NaCl 0,9% spülen)<br>→ Patienten-ID und Transfusionsdokumentation kontrollieren",
            "Fordere Hilfe und den Defi-Wagen an, informiere das Team<br>→ Frage: «Wer ist der Teamleader?»",
            "Stelle adäquate Beatmung und Sauerstoffversorgung sicher, ggf. Intubation",
            "Bronchospasmus behandeln",
            "Kreislauf Unterstützung<br>→ Volumengabe (mind. 20 ml/kg), Trendelenburg-Position<br>→ Noradrenalin<br>→ Bei Anaphylaxie, gehe zu <a href='?id=1' class='link-card'>CHKLST 1</a>",
            "Diurese erhalten (mind. 0.5 – 1.5 ml/kg/h)<br>→ Furosemid",
            "Auf sich entwickelnde Koagulopathie (DIC) achten<br>→ Gerinnungsmonitoring (Rotem, Hämatogramm II, Quick, aPTT, D-Dimere, Fibrinogen)",
            "Bewahre den Blutkonserven-Restbeutel auf und informiere das Labor (Telefon 2331)",
            "Labor (wenn möglich am anderen Arm)<br>→ S. SOP „Vorgehen bei Transfusionsreaktion – Laborauftrag für die Abklärung <br>→ Freies Hämoglobin, Kalium, Myoglobin, LDH, Bilirubin, Haptoglobin",
            "Erwäge<br>→ Steroide: Methylprednisolon<br>→ Verlegung auf IPS<br>→ HÄMOVIGILANZ-Meldung im Meldeportal"
],
infoBoxes: [
    {
        type: "info",
        title: "MEDIKAMENTENDOSIERUNG",
        content: "<strong>Noradrenalin:</strong><br>• BOLUS 5-10 mcg i.v.<br>• INFUSION: 0.1-1 mcg/kg/min i.v.<br><br><strong>Furosemid (Lasix®):</strong><br>• 0.5 mg/kg i.v.<br><br><strong>Methylprednisolon (Solu Medrol®):</strong><br>• 1-3 mg/kg i.v."
    },
    {
        type: "danger",
        title: "Kritische VERÄNDERUNGEN",
        content: "Bei Kreislaufstillstand gehe zu:<br>→ <a href='?id=2' class='link-card'>CHKLST 2 Asystolie/PEA</a><br>→ <a href='?id=10' class='link-card'>CHKLST 10 Kammerflimmern/-tachykardie</a>"
    }
]
}
};