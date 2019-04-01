var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();

let commands = [{
        "rektor": ["rektor", "rejser", "actor"]
    },
    {
        "studieadmin": ["studieadministration", "studieadministrationen"]
    },
    {
        "vrlab": ["vr-lab", "vr lab", "vr lap", "vi er lab"]
    },
    {
        "innolab": ["innolab", "inno lab"]
    },
    {
        "f11t18": ["11", "12", "13", "14", "15", "16", "17", "18"]
    },
    {
        "f21t25": ["21", "22", "23", "24", "25"]
    },
    {
        "f31t32": ["31", "32"]
    },
    {
        "f43t45": ["43", "44", "45"]
    },
    {
        "f46t50": ["46", "47", "48", "49", "50"]
    },
    {
        "f51t54": ["51", "52", "53", "54"]
    },
    {
        "f60t63": ["60", "61", "62", "63"]
    },
    {
        "proces": ["proces", "process", "prosa", "protest"]
    },
    {
        "teori": ["teori"]
    },
    {
        "biokemi": ["biokemi"]
    },
    {
        "fysik": ["fysik"]
    },
    {
        "printer": ["print", "printe", "printer", "printeren", "printere", "printerne"]
    },
    {
        "bibliotek": ["bibliotek", "biblioteket"]
    },
    {
        "teknologi": ["teknologi"]
    },
    {
        "byg": ["byg", "Byg", "by"]
    },
    {
        "musik": ["musik"]
    },
    {
        "kantine": ["kantine", "sydsal", "syd sal"]
    },
    {
        "nordsal": ["nordsal", "nord sal"]
    }
];

recognition.lang = 'da';
recognition.continuous = true;
recognition.interimResults = true;

recognition.start();
recognition.onspeechend = function () {
    recognition.start();
}
$(".command-card").hide();

let resultDiv;

recognition.onresult = function (event) {
    $("#speech").html(recognition.SpeechRecognitionResultList);
    for (e of commands) {
        for (k of Object.values(e)[0]) {
            if(recognition.SpeechRecognitionResultList.includes(k)) {
                console.log("Fandt ord: " + Object.keys(e));
                divName = Object.keys(e);
                $("#content").html($("#" + divName).clone().show());
            }
        }
    }
}