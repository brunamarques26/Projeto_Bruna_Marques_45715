

//RESPONSIVIDADE DA PÁGINA

let btnBackTop = document.querySelector("#back-to-top");

//Função para alterar a posição vertical do elemento .right dependendo da posição atual do scroll
window.addEventListener('scroll', function() {
    let reportPage = document.querySelector('.right');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        reportPage.style.top = '20px';
        btnBackTop.style.display = "block"
        btnBackTop.addEventListener("click", function() {
            window.scrollTo(0, 0);
        });
    } else if (scrollPosition === 0) {
        reportPage.style.top = '100px';
        btnBackTop.style.display = "none"
    }
});

function showField(id) {
	let campo = document.getElementById(id);
	campo.style.display = "block";
}

function hideField(id) {
	let campo = document.getElementById(id);
	campo.style.display = "none";
}

function showFieldComentario(id) {
  let campo = document.getElementById(id);
  if (campo.style.display === "none") {
    campo.style.display = "block";
  } else {
    campo.style.display = "none";
  }
}

let isCommentExpanded = true;
let comentarioDiv = document.querySelector(".comentario");
let showLessButton = document.querySelector("#showLessButton");


//FUNÇÃO PARA DIMINUIR A AREA DO LADO DIREITO SUPERIOR
function toggleComentarioSize() {
  if (isCommentExpanded) {
    comentarioDiv.style.height = "13vh";
    isCommentExpanded = false;
	comentarioDiv.classList.add("comentario-small");
    showLessButton.classList.remove("expand-less");
    showLessButton.classList.add("expand-more");
	} else {
    comentarioDiv.style.height = "auto";
    isCommentExpanded = true;
	comentarioDiv.classList.remove("comentario-small");
	showLessButton.classList.remove("expand-more");
	showLessButton.classList.add("expand-less");
  }
}



//TEXTAREA DOS COMENTÁRIOS

let generalComment = document.getElementById("general-comment-report")
let generalCommentInput = document.getElementById("general-comment-input");
let introCommentReport = document.getElementById("intro-comment");
let generalCommentSpan = document.getElementById("general-comment-span");


generalCommentInput.addEventListener("input", () => {
	generalCommentSpan.style.display = "block";

	if(generalCommentInput.value != ""){
		generalComment.innerText = " " + generalCommentInput.value;
	}else{
		generalCommentSpan.style.display = "none";
	}
});


let abstractCommentInput = document.getElementById("abstract-comment-input");
let abstractCommentSpan = document.getElementById("abstract-comment-span");

abstractCommentInput.addEventListener("input", () => {
	abstractCommentSpan.style.display = "block";
	if(abstractCommentInput.value != ""){
		abstractComment.innerText = " " + abstractCommentInput.value;
	}else{
		abstractCommentSpan.style.display = "none";
	}
});

let keywordsComment = document.getElementById("keywords-comment-report")
let keywordsCommentInput = document.getElementById("keywords-comment-input");
let keywordsCommentSpan = document.getElementById("keywords-comment-span");

keywordsCommentInput.addEventListener("input", () => {
	keywordsCommentSpan.style.display = "block";
	
	if(keywordsCommentInput.value != ""){
		keywordsComment.innerText = " " + keywordsCommentInput.value;
	}else{
		
		keywordsCommentSpan.style.display = "none";
	}
	
});

let sectionComment = document.getElementById("section-comment-report")
let sectionCommentInput = document.getElementById("section-comment-input");
let sectionCommentSpan = document.getElementById("section-comment-span");


sectionCommentInput.addEventListener("input", () => {
	sectionCommentSpan.style.display = "block";

	if(sectionCommentInput.value != ""){
		sectionComment.innerText = " " + sectionCommentInput.value;
	}else{
		
		sectionCommentSpan.style.display = "none";
	}
});

let mathematicalComment = document.getElementById("mathematical-comment-report");
let mathematicalCommentInput = document.getElementById("mathematical-expressions-comment-input");
let mathematicalCommentSpan = document.getElementById("mathematical-comment-span");

mathematicalCommentInput.addEventListener("input", () => {
    mathematicalCommentSpan.style.display = "block";
    

    if(mathematicalCommentInput.value != ""){
        mathematicalComment.innerText = " " + mathematicalCommentInput.value;
    }else{
		
        mathematicalCommentSpan.style.display = "none";
    }
});

let introductionComment = document.getElementById("introduction-comment-report")
let introductionCommentInput = document.getElementById("introduction-comment-input");
let introductionCommentSpan = document.getElementById("introduction-comment-span");

introductionCommentInput.addEventListener("input", () => {
    introductionCommentSpan.style.display = "block";
    

    if(introductionCommentInput.value != ""){
        introductionComment.innerText = " " + introductionCommentInput.value;
    }else{
		
        introductionCommentSpan.style.display = "none";
    }
});

let stateOfArtComment = document.getElementById("references-comment-report")
let stateOfArtCommentInput = document.getElementById("state-of-art-comment-input");
let stateOfArtCommentSpan = document.getElementById("references-comment-span");

stateOfArtCommentInput.addEventListener("input", () => {
    stateOfArtCommentSpan.style.display = "block";
    

    if(stateOfArtCommentInput.value != ""){
        stateOfArtComment.innerText = " " + stateOfArtCommentInput.value;
    }else{
		
        stateOfArtCommentSpan.style.display = "none";
    }
});

let figuresComment = document.getElementById("figures-comment-report")
let figuresCommentInput = document.getElementById("figures-comment-input");
let figuresCommentSpan = document.getElementById("figures-comment-span");


figuresCommentInput.addEventListener("input", () => {
    figuresCommentSpan.style.display = "block";
    

    if(figuresCommentInput.value != ""){
        figuresComment.innerText = " " + figuresCommentInput.value;
    }else{
		
        figuresCommentSpan.style.display = "none";
    }
});

let remainingComment = document.getElementById("remaining-comment-report")
let remainingCommentInput = document.getElementById("remaining-comment-input");
let remainingCommentSpan = document.getElementById("remaining-comment-span");


remainingCommentInput.addEventListener("input", () => {
    remainingCommentSpan.style.display = "block";
    

    if(remainingCommentInput.value != ""){
        remainingComment.innerText = " " + remainingCommentInput.value;
    }else{
		
        remainingCommentSpan.style.display = "none";
    }
});

//seleciona todas as textareas
function verifyTextAreas(){

	let textareas = document.querySelectorAll('textarea');

	textareas.forEach(textarea => {
  textarea.addEventListener('input', () => {
    //verifica se todas as textareas estão vazias
    let allEmpty = true;
    for (let i = 0; i < textareas.length; i++) {
        if (textareas[i].value.trim() !== '') {
            allEmpty = false;
            break;
        }
    }
    //se todas as textareas estiverem vazias, oculta o elemento HTML que contém o texto
	if (allEmpty) {
		introCommentReport.style.display = 'none';
	  } else {
		introCommentReport.style.display = 'block';
	  }
  });
});

}



//seleciona todas as textareas
function verifyTextAreasNotGeneral(){

	let textareas = document.querySelectorAll('textarea:not(#general-comment-input)');

	textareas.forEach(() => {
 
    //verifica se todas as textareas estão vazias
    let allEmpty = true;
    for (let i = 0; i < textareas.length; i++) {
        if (textareas[i].value.trim() !== '') {
            allEmpty = false;
            break;
        }
    }
    //se todas as textareas estiverem vazias, oculta o elemento HTML que contém o texto
	if (allEmpty) {
		introCommentReport.style.display = 'none';
		console.log(allEmpty)
	  } else {
		introCommentReport.style.display = 'block';
		console.log(allEmpty)

	  }
});

}

verifyTextAreas()

//FUNCTION
function displayValueAtIndex(inputElement, displayElement, values, index) {
	inputElement.addEventListener("input", () => {
	  displayElement.innerText = values[index];
	});
  }


// PERGUNTAS -----------------------------------------------------  
//GENERAL QUESTIONS

//Input da pergunta: What is the title of the paper?
let titleInput = document.getElementById("titleInput");
let titleReport = document.getElementById("title-report");

titleInput.addEventListener("input", function() {
	if(titleInput.value != ""){
		titleReport.innerText = "Title of paper: " + titleInput.value;
	} else{
		titleReport.innerText = ""
	}	
  });


  /*
  //Este código coloca o título do relatório como "Review report of the article" seguido do nome do artigo a rever
titleInput.addEventListener("input", () => {
	if(titleInput.value != ""){
		nameReport.innerText = 'Review report of the paper "' + titleInput.value + '"';	
	} else {
		nameReport.innerText = '';	
	}
	
});
*/

//Input da pergunta: What is the length of the paper (number of pages)?
let lengthInput = document.getElementById("lengthInput");
let lengthReport = document.getElementById("length-report");

lengthInput.addEventListener("input", function() {
	if(lengthInput.value != ""){
		lengthReport.innerText = "Number of pages: " + lengthInput.value;
	} else{
		lengthReport.innerText = ""
	}
  });


//Input da pergunta: Which acronym or abbreviation would you use to describe this Journal?
let acronymInput = document.getElementById("acronymInput");
let acronymReport = document.getElementById("acronym-report");

acronymInput.addEventListener("input", function() {
	if(acronymInput.value != ""){
		acronymReport.innerText = "Submitted to: " + acronymInput.value;
	} else{
		acronymReport.innerText = ""
	}
  });


//Input da pergunta: Include date of revision?
let dateRevisionYes = document.getElementById("date-revision-yes");
let dateRevisionNo = document.getElementById("date-revision-no");
let dataRelatorio = document.getElementById("data-report");

//Coloca a data
dateRevisionYes.addEventListener("input", () => {
	let atualDate = new Date();
	let dataFormatada = atualDate.toLocaleDateString('pt-PT');
	dataRelatorio.innerText = "Revision date: " + dataFormatada;
});

//Retira e/ou não coloca a data ao relatório
dateRevisionNo.addEventListener("input", () => {
	dataRelatorio.innerText = "";
});

//Abstract ----------------------------------->

//Elementos da parte do relatório
let abstractReport = document.getElementById("abstract-report");
let abstractComment = document.getElementById("abstract-comment-report")


//Input da pergunta: Is the Abstract concise and straight to the point?
let abstract1 = document.getElementById("abstract1");
let abstract2 = document.getElementById("abstract2");
let abstract3 = document.getElementById("abstract3");
let abstract4 = document.getElementById("abstract4");
let abstract5 = document.getElementById("abstract5");


let abstractPhrases1 = [
	"The abstract has the potential to be condensed.",
	"It is possible to create a more concise abstract.",
	"A shorter abstract is attainable.",
	"The abstract could potentially be made briefer.",
	"There is room for reducing the length of the abstract.",
	"One could consider shortening the abstract.",
	"Efforts can be made to make the abstract more succinct.",
	"It is conceivable to have a shorter abstract.",
	"The abstract has the potential to be more concise.",
	"Consideration can be given to making the abstract shorter.",
	"It is feasible to produce a shorter abstract.",
	"There is a possibility of shortening the abstract.",
	"One might contemplate a shorter abstract.",
	"Efforts could be directed towards a more concise abstract.",
	"It is within the realm of possibility to have a shorter abstract.",
	"The abstract has the potential for brevity.",
	"One possible approach is to make the abstract shorter.",
	"It is worth considering a shorter abstract.",
	"There is an opportunity to create a more compact abstract.",
	"One could explore the option of a shorter abstract.",
	"Efforts may be made to reduce the length of the abstract.",
	"It is conceivable to aim for a more concise abstract.",
	"The abstract has the potential to be more succinct.",
	"Consideration could be given to shortening the abstract.",
	"It is possible to achieve a shorter abstract.",
	"There is a possibility to make the abstract shorter.",
	"One might consider a shorter abstract.",
	"Efforts could be focused on a more concise abstract.",
	"It is within the realm of possibility to aim for a shorter abstract.",
	"The abstract has the potential for conciseness."
  ];

  let abstractPhrases2 = [
	"The abstract does not provide a brief introduction to the subject or problem.",
	"The abstract fails to offer a concise introduction to the topic or issue.",
	"The abstract does not present a succinct overview of the subject matter or problem.",
	"The abstract lacks a concise introduction to the subject or problem.",
	"The abstract does not deliver a brief overview of the topic or issue.",
	"The abstract fails to provide a succinct introduction to the subject matter or problem.",
	"The abstract does not offer a concise overview of the subject or problem.",
	"The abstract fails to present a brief introduction to the topic or issue.",
	"The abstract does not provide a succinct overview of the subject matter or problem.",
	"The abstract fails to deliver a concise introduction to the subject or problem.",
	"The abstract does not offer a brief overview of the topic or issue.",
	"The abstract fails to provide a succinct introduction to the subject matter or problem.",
	"The abstract does not present a concise overview of the subject or problem.",
	"The abstract fails to offer a brief introduction to the topic or issue.",
	"The abstract does not provide a succinct overview of the subject matter or problem.",
	"The abstract fails to deliver a concise introduction to the subject or problem.",
	"The abstract does not offer a brief overview of the topic or issue.",
	"The abstract fails to provide a succinct introduction to the subject matter or problem.",
	"The abstract does not present a concise overview of the subject or problem.",
	"The abstract fails to offer a brief introduction to the topic or issue.",
	"The abstract does not provide a succinct overview of the subject matter or problem.",
	"The abstract fails to deliver a concise introduction to the subject or problem.",
	"The abstract does not offer a brief overview of the topic or issue.",
	"The abstract fails to provide a succinct introduction to the subject matter or problem.",
	"The abstract does not present a concise overview of the subject or problem.",
	"The abstract fails to offer a brief introduction to the topic or issue.",
	"The abstract does not provide a succinct overview of the subject matter or problem.",
	"The abstract fails to deliver a concise introduction to the subject or problem.",
	"The abstract does not offer a brief overview of the topic or issue.",
	"The abstract fails to provide a succinct introduction to the subject matter or problem.",
	"The abstract does not present a concise overview of the subject or problem."
  
  ];
  
  let abstractPhrases3 = [
	"The abstract fails to offer a concise summary of the adopted methodology.",
  "The abstract lacks a succinct presentation of the approach undertaken.",
  "The abstract does not furnish a concise outline of the method utilized.",
  "The abstract does not present a brief summary of the adopted approach.",
  "The abstract does not provide a succinct account of the approach employed.",
  "The abstract does not offer a concise description of the methodology pursued.",
  "The abstract fails to provide a succinct explanation of the approach employed.",
  "The abstract does not present a brief overview of the adopted methodology.",
  "The abstract does not furnish a concise portrayal of the approach taken.",
  "The abstract does not offer a succinct depiction of the method utilized.",
  "The abstract does not provide a brief summary of the approach undertaken.",
  "The abstract does not present a concise account of the adopted approach.",
  "The abstract fails to provide a succinct description of the methodology pursued.",
  "The abstract does not offer a concise explanation of the approach taken.",
  "The abstract does not provide a brief overview of the method employed.",
  "The abstract does not furnish a succinct portrayal of the approach utilized.",
  "The abstract does not present a concise depiction of the approach pursued.",
  "The abstract does not offer a brief summary of the adopted methodology.",
  "The abstract fails to provide a succinct account of the approach taken.",
  "The abstract does not offer a concise description of the method employed.",
  "The abstract does not provide a brief overview of the approach utilized.",
  "The abstract does not furnish a succinct presentation of the approach pursued.",
  "The abstract does not present a concise portrayal of the method utilized.",
  "The abstract does not offer a brief summary of the approach taken.",
  "The abstract fails to provide a succinct explanation of the methodology pursued.",
  "The abstract does not present a concise account of the approach utilized.",
  "The abstract does not provide a brief overview of the adopted approach.",
  "The abstract does not furnish a succinct description of the method employed.",
  "The abstract does not offer a concise explanation of the approach pursued.",
  "The abstract does not provide a brief overview of the methodology utilized."
  ];

  let abstractPhrases4 = [
	"The abstract does not provide sufficient details regarding the primary outcomes or accomplishments.",
  "The abstract fails to incorporate essential information regarding the principal findings or successes.",
  "The abstract is deficient in terms of presenting key results or achievements.",
  "The abstract lacks adequate information concerning the main outcomes or accomplishments.",
  "Insufficient information on primary outcomes or achievements is evident in the abstract.",
  "The abstract's lack of information on main results or achievements is noticeable.",
  "The abstract is deficient in conveying essential details about the principal findings or successes.",
  "Inadequate information on key results or achievements is evident in the abstract.",
  "The abstract lacks comprehensive information on the primary outcomes or accomplishments.",
  "The abstract fails to adequately include essential details regarding the principal findings or successes.",
  "The abstract is lacking in terms of providing significant results or achievements.",
  "The abstract does not sufficiently cover the main outcomes or accomplishments.",
  "The abstract is deficient in terms of conveying crucial information about the primary findings or successes.",
  "The abstract lacks explicit information on key results or achievements.",
  "Insufficient details regarding primary outcomes or accomplishments are evident in the abstract.",
  "The abstract's lack of information on main results or achievements is evident.",
  "The abstract fails to adequately incorporate essential information concerning the principal findings or successes.",
  "The abstract is deficient in terms of presenting noteworthy results or achievements.",
  "The abstract lacks comprehensive coverage of the primary outcomes or accomplishments.",
  "The abstract does not sufficiently encompass essential details regarding the principal findings or successes.",
  "The abstract is lacking in terms of providing significant outcomes or achievements.",
  "The abstract fails to adequately address the main outcomes or accomplishments.",
  "The abstract is deficient in terms of presenting crucial information about the primary findings or successes.",
  "The abstract lacks explicit details on key results or achievements.",
  "Insufficient information on primary outcomes or accomplishments is evident in the abstract.",
  "The abstract's lack of information on main results or achievements is apparent.",
  "The abstract fails to adequately encompass essential information concerning the principal findings or successes.",
  "The abstract is deficient in terms of presenting significant results or achievements.",
  "The abstract lacks comprehensive information about the primary outcomes or accomplishments.",
  "The abstract does not sufficiently incorporate essential details concerning the principal findings or successes."
  ];
  
  
  //Este código serve para escrever no relátorio em tempo real o texto da checkbox selecionada no Abstract
function writeInReportCheckbox(checkbox, value) {
    checkbox.addEventListener('input', () => {
        if (checkbox.checked) {
            abstractReport.innerText = abstractReport.innerText + " " + value;
        } else {
            //Esta parte serve para retirar o texto caso o utilizador desselecione a checkbox
            let textToRemove = value;
            abstractReport.innerText = abstractReport.innerText.replace(textToRemove, "");
        }
    });
}
  
let randomNumber = Math.floor(Math.random() * 30);

writeInReportCheckbox(abstract2, abstractPhrases1[randomNumber]);
writeInReportCheckbox(abstract3, abstractPhrases2[randomNumber]);
writeInReportCheckbox(abstract4, abstractPhrases3[randomNumber]);
writeInReportCheckbox(abstract5, abstractPhrases4[randomNumber]);


//Este código serve para bloquear as outras opções caso a pessoa escolha a opção "Yes"
abstract1.addEventListener('change', () => {
	if (abstract1.checked) {
		abstract2.disabled = true;
		abstract3.disabled = true;
		abstract4.disabled = true;
		abstract5.disabled = true;
	} else {
		abstract2.disabled = false;
		abstract3.disabled = false;
		abstract4.disabled = false;
		abstract5.disabled = false;
	}
});

//Este código serve para bloquear a opção "Yes" caso a pessoa escolha uma das outras opções
function blockYes(abstract, abstract1) {
    abstract.addEventListener('change', () => {
        if (abstract.checked) {
            abstract1.disabled = true;
        } else {
            abstract1.disabled = false;
        }
    });
}

blockYes(abstract2, abstract1);
blockYes(abstract3, abstract1);
blockYes(abstract4, abstract1);
blockYes(abstract5, abstract1);

//Keywords ----------------------------------->

//Input da pergunta: Do you consider the list of keywords appropriate (and sufficient)?
let keywordsYes = document.getElementById("keywords-yes");
let keywordsReport = document.getElementById("keywords-report");
let keywordsReport2 = document.getElementById("keywords-report-2");


//Input da pergunta: Examples of keywords that are missing?
let keywordsMissing = document.getElementById("keywords-missing");

//Input da pergunta: Examples of keywords that should be removed?
let keywordsRemoved = document.getElementById("keywords-removed");


let keywordsPhrasesMissing = [
	"The list is missing keywords such as __EXAMPLES__.",
	"The list lacks essential keywords, for example, __EXAMPLES__.",
	"The list fails to include vital keywords like __EXAMPLES__.",
	"The list does not contain necessary keywords, such as __EXAMPLES__.",
	"Keywords such as __EXAMPLES__ are absent from the list.",
	"The list lacks important keywords, including __EXAMPLES__.",
	"Essential keywords, like __EXAMPLES__, are missing from the list.",
	"The list is incomplete without keywords such as __EXAMPLES__.",
	"Crucial keywords, such as __EXAMPLES__, are not present in the list.",
	"The list fails to incorporate necessary keywords like __EXAMPLES__.",
	"Keywords such as __EXAMPLES__ have been omitted from the list.",
	"The list is deficient in important keywords, such as __EXAMPLES__.",
	"The list does not encompass essential keywords, like __EXAMPLES__.",
	"Vital keywords, such as __EXAMPLES__, are not included in the list.",
	"The list lacks crucial keywords, such as __EXAMPLES__.",
	"Keywords such as __EXAMPLES__ have been overlooked in the list.",
	"The list is incomplete due to the absence of keywords like __EXAMPLES__.",
	"The list is deficient in necessary keywords, such as __EXAMPLES__.",
	"Essential keywords, such as __EXAMPLES__, have been excluded from the list.",
	"The list fails to incorporate vital keywords like __EXAMPLES__.",
	"Keywords such as __EXAMPLES__ are not accounted for in the list.",
	"The list is lacking in important keywords, including __EXAMPLES__.",
	"The list does not include necessary keywords like __EXAMPLES__.",
	"Crucial keywords, such as __EXAMPLES__, are missing from the list.",
	"The list is incomplete without keywords such as __EXAMPLES__.",
	"The list is deficient in crucial keywords, like __EXAMPLES__.",
	"Vital keywords, such as __EXAMPLES__, are absent from the list.",
	"The list lacks necessary keywords, like __EXAMPLES__.",
	"Keywords such as __EXAMPLES__ have not been included in the list.",
	"The list is incomplete due to the omission of keywords like __EXAMPLES__.",
	"The list is deficient in essential keywords, such as __EXAMPLES__."  
  ];

  randomNumber = Math.floor(Math.random() * 30);


keywordsMissing.addEventListener("input", () => {
	if(keywordsMissing.value != ""){
		keywordsReport.innerText = keywordsPhrasesMissing[randomNumber].replace("__EXAMPLES__", keywordsMissing.value);
		} else{
			keywordsReport.innerText = ""
	}

});

let keywordsPhrasesRemove = [
	"The subsequent expressions ought to be excluded from the compilation of search terms: __EXAMPLES__",
	"The ensuing vocabulary must be eliminated from the register of keyword phrases: __EXAMPLES__",
	"The subsequent terminology needs to be eradicated from the inventory of key terms: __EXAMPLES__",
	"The following lexicon should be expunged from the collection of search phrases: __EXAMPLES__",
	"The subsequent nomenclature ought to be eliminated from the set of keywords: __EXAMPLES__",
	"The ensuing phraseology must be excluded from the catalog of key terms: __EXAMPLES__",
	"The subsequent vocabulary needs to be eradicated from the listing of keyword phrases: __EXAMPLES__",
	"The following expressions should be expunged from the compendium of search terms: __EXAMPLES__",
	"The ensuing terminology must be eliminated from the assemblage of key terms: __EXAMPLES__",
	"The subsequent lexicon needs to be excluded from the compilation of keywords: __EXAMPLES__",
	"The following nomenclature ought to be eradicated from the register of search phrases: __EXAMPLES__",
	"The ensuing phraseology must be expunged from the inventory of key terms: __EXAMPLES__",
	"The subsequent vocabulary should be eliminated from the collection of keywords: __EXAMPLES__",
	"The following expressions need to be eradicated from the catalog of keyword phrases: __EXAMPLES__",
	"The ensuing terminology must be excluded from the set of search terms: __EXAMPLES__",
	"The subsequent lexicon should be eliminated from the listing of key terms: __EXAMPLES__",
	"The following nomenclature ought to be expunged from the compilation of keywords: __EXAMPLES__",
	"The ensuing phraseology needs to be excluded from the register of search phrases: __EXAMPLES__",
	"The subsequent vocabulary must be eradicated from the compendium of key terms: __EXAMPLES__",
	"The following expressions should be eliminated from the inventory of keyword phrases: __EXAMPLES__",
	"The ensuing terminology ought to be expunged from the collection of search terms: __EXAMPLES__",
	"The subsequent lexicon must be excluded from the catalog of key terms: __EXAMPLES__",
	"The following nomenclature needs to be eliminated from the listing of keywords: __EXAMPLES__",
	"The ensuing phraseology should be eradicated from the compilation of search terms: __EXAMPLES__",
	"The subsequent vocabulary must be excluded from the register of keyword phrases: __EXAMPLES__",
	"The following expressions ought to be eliminated from the collection of key terms: __EXAMPLES__",
	"The ensuing terminology should be expunged from the inventory of search phrases: __EXAMPLES__",
	"The subsequent lexicon needs to be eradicated from the compendium of keywords: __EXAMPLES__",
	"The following nomenclature must be excluded from the catalog of keyword phrases: __EXAMPLES__",
	"The ensuing phraseology should be eliminated from the listing of search terms: __EXAMPLES__"
  
  ];

keywordsRemoved.addEventListener("input", () => {
	if(keywordsRemoved.value != ""){
		keywordsReport2.innerText = keywordsPhrasesRemove[randomNumber].replace("__EXAMPLES__", keywordsRemoved.value);
	} else{
		keywordsReport2.innerText = ""
	}
	
});


//Section and Sub-section----------------------------------->

//Input da pergunta: Is the main title of the paper duly capitalized?
let titleCapitalizedYes = document.getElementById("titleCapitalizedYes");
let titleCapitalizedNo = document.getElementById("titleCapitalizedNo");
let sectionReport = document.getElementById("section-1-report")


let titlePhrases = [
	"The paper's title lacks appropriate capitalization.",
	"The capitalization of the paper's title is inadequate.",
	"The title of the paper does not meet proper capitalization standards.",
	"The paper's title is not adequately capitalized.",
	"Insufficient capitalization is observed in the title of the paper.",
	"The title of the paper fails to meet the required capitalization.",
	"There is a lack of proper capitalization in the paper's title.",
	"The capitalization of the paper's title does not conform to the necessary standards.",
	"The title of the paper is not duly capitalized.",
	"The capitalization of the paper's title is not in accordance with the prescribed norms.",
	"The title of the paper does not adhere to the appropriate capitalization conventions.",
	"Inadequate capitalization is evident in the title of the paper.",
	"The paper's title does not display proper capitalization.",
	"The title of the paper is not appropriately capitalized.",
	"The capitalization of the paper's title does not meet the required criteria.",
	"The paper's title lacks the necessary capitalization.",
	"The title of the paper is not properly capitalized.",
	"The capitalization of the paper's title is insufficient.",
	"The paper's title fails to meet the standard capitalization rules.",
	"The title of the paper is not capitalized as required.",
	"In the paper's title, capitalization is not appropriately applied.",
	"The capitalization of the paper's title does not fulfill the necessary requirements.",
	"The paper's title is not adequately capitalized according to the guidelines.",
	"The title of the paper does not conform to the expected capitalization style.",
	"The capitalization of the paper's title is not done correctly.",
	"The paper's title lacks proper capitalization.",
	"The title of the paper does not meet the capitalization standards.",
	"Inadequate capitalization is observed in the paper's title.",
	"The paper's title does not follow proper capitalization rules.",
	"The capitalization of the paper's title does not meet the established norms." 
  ];

  randomNumber = Math.floor(Math.random() * 30);

  displayValueAtIndex(titleCapitalizedNo, sectionReport, titlePhrases, randomNumber);


//Input da pergunta: Is capitalization of (sub)section titles consistent?
let sectionCapitalizedYes = document.getElementById("section-capitalized-yes");
let sectionCapitalizedNo = document.getElementById("section-capitalized-no");
let sectionReport2 = document.getElementById("section-2-report")

let capitalizationPhrases = [
	"The manuscript exhibits inconsistent capitalization of section titles.",
	"There is a lack of consistency in capitalizing section titles throughout the manuscript.",
	"Inconsistencies can be observed in the capitalization of section titles within the manuscript.",
	"The manuscript's section titles lack consistent capitalization.",
	"Consistency in capitalizing section titles is absent throughout the manuscript.",
	"Section titles in the manuscript display inconsistent capitalization.",
	"The capitalization of section titles within the manuscript is not uniform.",
	"In the manuscript, section titles are capitalized inconsistently.",
	"The lack of consistency in capitalizing section titles is evident in the manuscript.",
	"Inconsistencies in capitalization can be noted among section titles in the manuscript.",
	"The manuscript's section titles exhibit varying capitalization.",
	"Throughout the manuscript, section titles are inconsistently capitalized.",
	"The capitalization of section titles within the manuscript lacks uniformity.",
	"In the manuscript, inconsistency is observed in the capitalization of section titles.",
	"The manuscript's section titles do not follow a consistent capitalization style.",
	"The manuscript displays irregular capitalization of section titles.",
	"Section titles within the manuscript are inconsistently capitalized.",
	"Inconsistency in capitalization is apparent in the manuscript's section titles.",
	"The capitalization of section titles in the manuscript varies.",
	"The manuscript's section titles lack standardized capitalization.",
	"Inconsistent capitalization can be seen in section titles throughout the manuscript.",
	"The manuscript's section titles show discrepancies in capitalization.",
	"Section titles within the manuscript are not consistently capitalized.",
	"Inconsistencies in capitalizing section titles are evident in the manuscript.",
	"The manuscript lacks uniform capitalization for its section titles.",
	"In the manuscript, section titles exhibit inconsistent capitalization.",
	"The capitalization of section titles within the manuscript is irregular.",
	"Section titles in the manuscript are not consistently capitalized.",
	"Inconsistency can be observed in the capitalization of section titles throughout the manuscript.",
	"The manuscript's section titles do not adhere to a consistent capitalization style."
	];

  randomNumber = Math.floor(Math.random() * 30);

  displayValueAtIndex(sectionCapitalizedNo, sectionReport2, capitalizationPhrases, randomNumber);


//Mathematical expressions----------------------------------->

//Input da pergunta: Are there mathematical expressions in the manuscript?
let mathematicalYes = document.getElementById("mathematical-yes");
let mathematicalNo = document.getElementById("mathematical-no");


//Input da pergunta: Are inline mathematical expressions correctly typed?
let inlineMathematicalYes = document.getElementById("inline-mathematical-yes");
let inlineMathematicalNo = document.getElementById("inline-mathematical-no");
let mathematicalInlineReport = document.getElementById("mathematical-inline-report")
let someWork = document.getElementById("some-work-Input")
let mathematicalSectionReport = document.getElementById("mathematical-section-report")

let inlineMathematicalExamples = [
	"Typesetting of inline mathematical expressions requires improvement in certain sections of the manuscript, for instance, __EXAMPLES__.",
	"Enhancement is required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions, for example, __EXAMPLES__.",
	"Improvements are necessary in certain sections of the manuscript to refine the typesetting of inline mathematical expressions, such as __EXAMPLES__.",
	"Certain sections of the manuscript require improvements in the typesetting of inline mathematical expressions, with __EXAMPLES__ serving as an example.",
	"The typesetting of inline mathematical expressions needs improvement in specific sections of the manuscript, illustrated by __EXAMPLES__.",
	"In specific sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions, as seen in __EXAMPLES__.",
	"To enhance the typesetting of inline mathematical expressions, improvements are needed in certain sections of the manuscript, demonstrated by __EXAMPLES__.",
	"Refinement is required in particular areas of the manuscript to improve the typesetting of inline mathematical expressions, with __EXAMPLES__ as an instance.",
	"Certain sections of the manuscript necessitate improvements in the typesetting of inline mathematical expressions, for example, __EXAMPLES__.",
	"The typesetting of inline mathematical expressions requires enhancement in specific sections of the manuscript, with __EXAMPLES__ as a demonstration.",
	"In certain sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions, exemplified by __EXAMPLES__.",
	"To refine the typesetting of inline mathematical expressions, improvements are necessary in specific sections of the manuscript, shown through __EXAMPLES__.",
	"Improvements are required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions, as illustrated by __EXAMPLES__.",
	"Certain sections of the manuscript demand improvements in the typesetting of inline mathematical expressions, with __EXAMPLES__ serving as a representation.",
	"The typesetting of inline mathematical expressions needs enhancement in specific sections of the manuscript, depicted by __EXAMPLES__.",
	"In specific sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions, using __EXAMPLES__ as an illustration.",
	"To improve the typesetting of inline mathematical expressions, refinements are needed in certain sections of the manuscript, exemplified by __EXAMPLES__.",
	"Refinement is necessary in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions, demonstrated by __EXAMPLES__.",
	"Certain sections of the manuscript require improvements in the typesetting of inline mathematical expressions, with __EXAMPLES__ as an exemplification.",
	"The typesetting of inline mathematical expressions requires enhancement in specific sections of the manuscript, as shown by __EXAMPLES__.",
	"In certain sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions, with __EXAMPLES__ as an example.",
	"To refine the typesetting of inline mathematical expressions, improvements are necessary in specific sections of the manuscript, exemplified through __EXAMPLES__.",
	"Improvements are required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions, as demonstrated by __EXAMPLES__.",
	"Certain sections of the manuscript demand improvements in the typesetting of inline mathematical expressions, with __EXAMPLES__ as a demonstration.",
	"The typesetting of inline mathematical expressions needs enhancement in specific sections of the manuscript, represented by __EXAMPLES__.",
	"In specific sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions, utilizing __EXAMPLES__ as an illustration.",
	"To improve the typesetting of inline mathematical expressions, refinements are needed in certain sections of the manuscript, exemplified by __EXAMPLES__.",
	"Refinement is necessary in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions, demonstrated through __EXAMPLES__.",
	"Certain sections of the manuscript require improvements in the typesetting of inline mathematical expressions, with __EXAMPLES__ as an exemplification.",
	"The typesetting of inline mathematical expressions requires enhancement in specific sections of the manuscript, as illustrated by __EXAMPLES__.",
	"In certain sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions, with __EXAMPLES__ as an example.",
	"To refine the typesetting of inline mathematical expressions, improvements are necessary in specific sections of the manuscript, shown by __EXAMPLES__.",
	"Improvements are required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions, demonstrated by __EXAMPLES__."  
];
  
let inlineMathematical = [
	"Typesetting of inline mathematical expressions requires improvement in certain sections of the manuscript.",
	"Enhancement is needed in specific sections of the manuscript to improve the typesetting of inline mathematical expressions.",
	"Improvements are necessary in certain sections of the manuscript to refine the typesetting of inline mathematical expressions.",
	"Certain sections of the manuscript require improvements in the typesetting of inline mathematical expressions.",
	"The typesetting of inline mathematical expressions needs improvement in specific sections of the manuscript.",
	"In specific sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions.",
	"To enhance the typesetting of inline mathematical expressions, improvements are needed in certain sections of the manuscript.",
	"Refinement is required in particular areas of the manuscript to improve the typesetting of inline mathematical expressions.",
	"Certain sections of the manuscript necessitate improvements in the typesetting of inline mathematical expressions.",
	"The typesetting of inline mathematical expressions requires enhancement in specific sections of the manuscript.",
	"In certain sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions.",
	"To refine the typesetting of inline mathematical expressions, improvements are necessary in specific sections of the manuscript.",
	"Improvements are required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions.",
	"Certain sections of the manuscript demand improvements in the typesetting of inline mathematical expressions.",
	"The typesetting of inline mathematical expressions needs enhancement in specific sections of the manuscript.",
	"In specific sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions.",
	"To improve the typesetting of inline mathematical expressions, refinements are needed in certain sections of the manuscript.",
	"Refinement is necessary in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions.",
	"Certain sections of the manuscript require improvements in the typesetting of inline mathematical expressions.",
	"The typesetting of inline mathematical expressions requires enhancement in specific sections of the manuscript.",
	"In certain sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions.",
	"To refine the typesetting of inline mathematical expressions, improvements are necessary in specific sections of the manuscript.",
	"Improvements are required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions.",
	"Certain sections of the manuscript demand improvements in the typesetting of inline mathematical expressions.",
	"The typesetting of inline mathematical expressions needs enhancement in specific sections of the manuscript.",
	"In specific sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions.",
	"To improve the typesetting of inline mathematical expressions, refinements are needed in certain sections of the manuscript.",
	"Refinement is necessary in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions.",
	"Certain sections of the manuscript require improvements in the typesetting of inline mathematical expressions.",
	"The typesetting of inline mathematical expressions requires enhancement in specific sections of the manuscript.",
	"In certain sections of the manuscript, there is a need for improvement in the typesetting of inline mathematical expressions.",
	"To refine the typesetting of inline mathematical expressions, improvements are necessary in specific sections of the manuscript.",
	"Improvements are required in particular areas of the manuscript to enhance the typesetting of inline mathematical expressions."
  
	];


randomNumber = Math.floor(Math.random() * 30);

inlineMathematicalNo.addEventListener("input", () => {
    someWork.addEventListener("input", () => {
        if (someWork.value != "") {
            mathematicalInlineReport.innerText = inlineMathematicalExamples[randomNumber].replace("__EXAMPLES__", someWork.value);
        } else {
            mathematicalInlineReport.innerText = inlineMathematical[randomNumber];
        }
    });

    //Verificar se o input está vazio depois do evento "input"
    if (someWork.value === "") {
        mathematicalInlineReport.innerText = inlineMathematical[randomNumber];
    }
});


//Input da pergunta: Are mathematical expressions in display math mode part of phrases(i.e., treated as first class citizens)?
let displayMathematicalYes = document.getElementById("display-mathematical-yes");
let displayMathematicalNo = document.getElementById("display-mathematical-no");
let mathematicalDisplayReport = document.getElementById("mathematical-display-report")

let mathematicalDisplay = [
	"Mathematical expressions in display math mode should be part of phrases, following the same syntactical rules.",
	"The same syntactical rules should be followed when incorporating mathematical expressions in display math mode as part of phrases.",
	"In display math mode, mathematical expressions should be included as part of phrases, following the same syntactical rules.",
	"Part of phrases in display math mode should consist of mathematical expressions that adhere to the same syntactical rules.",
	"Display math mode requires mathematical expressions to be part of phrases and follow the same syntactical rules.",
	"To conform to the same syntactical rules, mathematical expressions in display math mode must be part of phrases.",
	"Incorporating mathematical expressions in display math mode necessitates adhering to the same syntactical rules.",
	"The inclusion of mathematical expressions in display math mode within phrases should adhere to the same syntactical rules.",
	"Display math mode necessitates mathematical expressions being part of phrases, following the same syntactical rules.",
	"Mathematical expressions in display math mode must be part of phrases and follow the same syntactical rules.",
	"The same syntactical rules apply to mathematical expressions in display math mode that are part of phrases.",
	"Incorporating mathematical expressions into phrases within display math mode requires following the same syntactical rules.",
	"Display math mode phrases should contain mathematical expressions that follow the same syntactical rules.",
	"To follow the same syntactical rules, mathematical expressions should be part of phrases in display math mode.",
	"The syntactical rules for mathematical expressions in display math mode apply to phrases as well.",
	"In display math mode, phrases should include mathematical expressions that adhere to the same syntactical rules.",
	"Mathematical expressions in display math mode must be incorporated into phrases, following the same syntactical rules.",
	"Display math mode requires mathematical expressions to be part of phrases that follow the same syntactical rules.",
	"To adhere to the same syntactical rules, mathematical expressions in display math mode should be part of phrases.",
	"Incorporating mathematical expressions in display math mode necessitates phrases following the same syntactical rules.",
	"The same syntactical rules should be followed when incorporating mathematical expressions into phrases within display math mode.",
	"Display math mode necessitates phrases including mathematical expressions that follow the same syntactical rules.",
	"Mathematical expressions in display math mode must be part of phrases and adhere to the same syntactical rules.",
	"The same syntactical rules apply to phrases containing mathematical expressions in display math mode.",
	"Incorporating mathematical expressions into phrases within display math mode requires adherence to the same syntactical rules.",
	"Display math mode phrases should include mathematical expressions that follow the same syntactical rules.",
	"To follow the same syntactical rules, phrases in display math mode should contain mathematical expressions.",
	"The syntactical rules for phrases in display math mode apply to mathematical expressions as well.",
	"In display math mode, phrases should incorporate mathematical expressions that adhere to the same syntactical rules.",
	"Mathematical expressions in display math mode must be included in phrases, following the same syntactical rules.",
	"Display math mode requires phrases to include mathematical expressions that follow the same syntactical rules.",
	"To adhere to the same syntactical rules, phrases in display math mode should incorporate mathematical expressions."
  ];
  
  randomNumber = Math.floor(Math.random() * 30);

  displayValueAtIndex(displayMathematicalYes, mathematicalDisplayReport, mathematicalDisplay, randomNumber);


//Introduction ---------------------------------------------------------->

//Input da pergunta: This section lacks a better introduction to the subject at hands.
let introduction1Yes = document.getElementById("introduction-1-yes");
let introduction1No = document.getElementById("introduction-1-no");
let introduction1Report = document.getElementById("introduction-1-report")

let introduction1Phrases = [
	"The subject of this paper requires stronger motivation.",
	"A more compelling motivation is needed for the subject of this paper.",
	"Enhanced motivation is necessary for the subject of this paper.",
	"This paper's subject matter could benefit from improved motivation.",
	"Motivating the subject of this paper further is crucial.",
	"The subject of this paper ought to be better motivated.",
	"For this paper, a stronger motivation for the subject is necessary.",
	"Improving the motivation behind the subject of this paper is vital.",
	"The motivation for the subject of this paper needs enhancement.",
	"A better justification is needed for the subject of this paper.",
	"This paper's subject could use a more persuasive motivation.",
	"The subject of this paper requires a more compelling rationale.",
	"Increasing the motivation for the subject of this paper is essential.",
	"The subject of this paper needs to be motivated more effectively.",
	"A stronger motivation is necessary for the subject of this paper.",
	"This paper's subject matter should be better motivated.",
	"The subject of this paper would benefit from enhanced motivation.",
	"Providing better motivation for the subject of this paper is important.",
	"Improving the motivation behind the subject of this paper is necessary.",
	"The subject of this paper needs a more convincing motivation.",
	"Enhancing the motivation for the subject of this paper is crucial.",
	"A more compelling motivation is necessary for this paper's subject.",
	"Motivating the subject of this paper better is important.",
	"The subject of this paper should be better motivated.",
	"For this paper, a stronger motivation for the subject is required.",
	"The motivation for the subject of this paper needs improvement.",
	"A more persuasive justification is needed for the subject of this paper.",
	"This paper's subject could benefit from a better motivation.",
	"The subject of this paper requires a more compelling reason.",
	"Increasing the motivation for the subject of this paper is crucial.",
	"The subject of this paper needs to be motivated more effectively.",
	"A stronger motivation is necessary for the subject of this paper."
  ];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(introduction1Yes, introduction1Report, introduction1Phrases, randomNumber);

//Input da pergunta: This section lacks a better description of the addressed problem.
let introduction2Yes = document.getElementById("introduction-2-yes");
let introduction2No = document.getElementById("introduction-2-no");
let introduction2Report = document.getElementById("introduction-2-report")

let introduction2Phrases = [
	"A more detailed description is required for the problem addressed in this work.",
	"Improving the description of the problem addressed in this work is necessary.",
	"This work necessitates a clearer depiction of the addressed problem.",
	"Enhancing the description of the problem tackled by this work is imperative.",
	"A better portrayal of the problem discussed in this work is needed.",
	"The problem examined in this work requires a more comprehensive description.",
	"It is essential to provide a more accurate description of the problem addressed in this work.",
	"This work demands a more precise explanation of the problem it tackles.",
	"Improving the description of the problem addressed in this work is crucial.",
	"The problem explored in this work needs a more detailed description.",
	"It is necessary to better articulate the problem addressed in this work.",
	"This work requires a more thorough explanation of the problem it deals with.",
	"Enhancing the description of the problem addressed in this work is vital.",
	"The problem analyzed in this work needs to be better described.",
	"Providing a more comprehensive description of the problem addressed in this work is important.",
	"It is crucial to improve the description of the problem discussed in this work.",
	"This work necessitates a clearer explanation of the addressed problem.",
	"A more accurate portrayal of the problem tackled by this work is needed.",
	"The problem examined in this work requires a more precise description.",
	"It is essential to provide a better explanation of the problem addressed in this work.",
	"This work demands a more detailed depiction of the problem it tackles.",
	"Improving the description of the problem addressed in this work is necessary.",
	"The problem explored in this work needs a more articulated description.",
	"It is necessary to better describe the problem addressed in this work.",
	"This work requires a more thorough depiction of the problem it deals with.",
	"Enhancing the description of the problem addressed in this work is crucial.",
	"The problem analyzed in this work needs to be better explained.",
	"Providing a more comprehensive description of the problem addressed in this work is crucial.",
	"It is important to improve the description of the problem discussed in this work.",
	"This work necessitates a clearer explanation of the addressed problem.",
	"A more accurate portrayal of the problem tackled by this work is necessary."
  ];
  

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(introduction2Yes, introduction2Report, introduction2Phrases, randomNumber);

//Input da pergunta: This section does not adequately identify the novelty of the described work.
let introduction3Yes = document.getElementById("introduction-3-yes");
let introduction3No = document.getElementById("introduction-3-no");
let introduction3Report = document.getElementById("introduction-3-report")

let introduction3Phrases = [
	"Insufficient identification of novelty is found in this section.",
	"This section lacks proper identification of novelty.",
	"The identification of novelty in this section is inadequate.",
	"Insufficiently identifying novelty is a problem in this section.",
	"This section fails to adequately identify novelty.",
	"The identification of novelty in this section needs improvement.",
	"Adequate identification of novelty is lacking in this section.",
	"Novelty is not sufficiently identified in this section.",
	"This section lacks proper identification of the novelty.",
	"The identification of novelty in this section is not adequate.",
	"Insufficiently identifying the novelty is a problem in this section.",
	"This section fails to adequately identify the novelty.",
	"The identification of the novelty in this section needs improvement.",
	"Adequate identification of the novelty is lacking in this section.",
	"The identification of novelty is not satisfactory in this section.",
	"This section does not adequately identify novelty.",
	"There is a lack of proper identification of novelty in this section.",
	"The identification of novelty in this section is not satisfactory.",
	"Inadequate identification of novelty is found in this section.",
	"This section is lacking in adequately identifying novelty.",
	"The identification of novelty in this section is not up to par.",
	"Insufficiently identifying novelty poses a problem in this section.",
	"This section falls short in adequately identifying novelty.",
	"The identification of novelty in this section requires improvement.",
	"Adequate identification of novelty is missing in this section.",
	"Novelty is not properly identified in this section.",
	"This section lacks adequate identification of novelty.",
	"The identification of novelty in this section is not sufficient.",
	"Insufficiently identifying the novelty poses a problem in this section.",
	"This section fails to properly identify the novelty.",
	"The identification of the novelty in this section requires improvement."
  ];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(introduction3No, introduction3Report, introduction3Phrases, randomNumber);

//Input da pergunta: The structure of the paper is not correctly described at the end of the section.
let introduction4Yes = document.getElementById("introduction-4-yes");
let introduction4No = document.getElementById("introduction-4-no");
let introduction4Report = document.getElementById("introduction-4-report")

let introduction4Phrases = [
	"A concise description of the paper structure should be included at the end of the section.",
	"Include a brief overview of the paper structure at the conclusion of the section.",
	"At the end of the section, make sure to incorporate a succinct explanation of the paper structure.",
	"The section should conclude with a concise description outlining the paper structure.",
	"Ensure that a brief summary of the paper structure is added to the end of the section.",
	"Conclude the section by providing a compact explanation of the paper structure.",
	"At the conclusion of the section, it is important to include a concise description of the paper structure.",
	"Incorporate a succinct overview of the paper structure at the end of the section.",
	"Don't forget to include a concise description of the paper structure at the end of the section.",
	"The end of the section should feature a brief summary outlining the paper structure.",
	"Include a compact explanation of the paper structure at the conclusion of the section.",
	"At the end of the section, add a concise description that outlines the paper structure.",
	"Ensure that a succinct overview of the paper structure is provided at the end of the section.",
	"Conclude the section by incorporating a compact explanation of the paper structure.",
	"At the conclusion of the section, make sure to include a concise description of the paper structure.",
	"Incorporate a brief summary of the paper structure at the end of the section.",
	"Don't forget to add a concise description of the paper structure at the end of the section.",
	"The end of the section should include a succinct overview outlining the paper structure.",
	"Include a compact explanation that outlines the paper structure at the conclusion of the section.",
	"At the end of the section, provide a concise description of the paper structure.",
	"Ensure that a succinct overview is included at the end of the section to describe the paper structure.",
	"Conclude the section by adding a compact explanation outlining the paper structure.",
	"At the conclusion of the section, don't forget to mention a concise description of the paper structure.",
	"Incorporate a brief summary outlining the paper structure at the end of the section.",
	"Add a concise description of the paper structure at the end of the section.",
	"The end of the section should feature a succinct overview of the paper structure.",
	"Include a compact explanation of the paper structure at the conclusion of the section.",
	"At the end of the section, make sure to provide a concise description outlining the paper structure.",
	"Ensure that a brief summary of the paper structure is included at the end of the section.",
	"Conclude the section by incorporating a succinct explanation of the paper structure.",
	"At the conclusion of the section, include a concise description that outlines the paper structure."
  ];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(introduction4No, introduction4Report, introduction4Phrases, randomNumber);


//State-of-the-Art ---------------------------------------------------------->

//Input da pergunta: The State-of-the-Art or Related Works are not correctly covered in the paper.
let references1Yes = document.getElementById("references-1-yes");
let references1No = document.getElementById("references-1-no");
let references1Report = document.getElementById("references-1-report")

let references1Phrases = [
	"State-of-the-Art needs to be better described.",
	"A more detailed description of State-of-the-Art is required.",
	"Improvements are necessary in describing State-of-the-Art.",
	"We should provide a clearer explanation for State-of-the-Art.",
	"Enhancements are needed in defining State-of-the-Art.",
	"State-of-the-Art should be described in greater detail.",
	"A better depiction of State-of-the-Art is warranted.",
	"We need to improve the description of State-of-the-Art.",
	"State-of-the-Art requires a more comprehensive explanation.",
	"The current description of State-of-the-Art needs improvement.",
	"We should provide a more elaborate definition for State-of-the-Art.",
	"State-of-the-Art would benefit from a more precise description.",
	"It is important to better describe State-of-the-Art.",
	"State-of-the-Art demands a more accurate explanation.",
	"We need to enhance the portrayal of State-of-the-Art.",
	"A clearer elucidation of State-of-the-Art is necessary.",
	"State-of-the-Art necessitates a better depiction.",
	"We should improve the way we describe State-of-the-Art.",
	"State-of-the-Art deserves a more detailed account.",
	"A more thorough explanation for State-of-the-Art is essential.",
	"State-of-the-Art should be better articulated.",
	"We need to refine the description of State-of-the-Art.",
	"State-of-the-Art requires a more explicit portrayal.",
	"We should provide a more comprehensive definition for State-of-the-Art.",
	"State-of-the-Art would benefit from a clearer explanation.",
	"It is crucial to better describe State-of-the-Art.",
	"State-of-the-Art demands a more precise depiction.",
	"We need to enhance the way we describe State-of-the-Art.",
	"State-of-the-Art necessitates a better explanation.",
	"We should improve the presentation of State-of-the-Art.",
	"State-of-the-Art deserves a more thorough description."
	];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(references1No, references1Report, references1Phrases, randomNumber);

//Input da pergunta: The State-of-the-Art or Related Works would benefit from the inclusion of a comparative table?
let references2Yes = document.getElementById("references-2-yes");
let references2No = document.getElementById("references-2-no");
let references2Report = document.getElementById("references-2-report")

let references2Phrases = [
	"Including a comparative table would enhance the discussion of related works.",
	"To improve the discussion of related works, it would be helpful to include a comparative table.",
	"A comparative table would add value to the discussion of related works.",
	"Including a comparative table in the discussion of related works would be beneficial.",
	"The inclusion of a comparative table would enhance the discussion of related works.",
	"To strengthen the discussion of related works, it would be beneficial to include a comparative table.",
	"A comparative table would enrich the discussion of related works.",
	"The discussion of related works could be improved by including a comparative table.",
	"Including a comparative table could enhance the discussion of related works.",
	"To make the discussion of related works more comprehensive, it would be helpful to include a comparative table.",
	"A comparative table would be a valuable addition to the discussion of related works.",
	"Including a comparative table would provide a valuable reference for the discussion of related works.",
	"To facilitate the discussion of related works, it would be beneficial to include a comparative table.",
	"A comparative table would contribute to a more thorough discussion of related works.",
	"The discussion of related works would benefit from the addition of a comparative table.",
	"To enhance the discussion of related works, it would be useful to include a comparative table.",
	"A comparative table would improve the understanding of related works in the discussion.",
	"Including a comparative table would strengthen the analysis of related works.",
	"To provide a better context for the discussion of related works, it would be helpful to include a comparative table.",
	"A comparative table would assist in comparing and analyzing related works in the discussion.",
	"The discussion of related works would be more comprehensive with the inclusion of a comparative table.",
	"To enrich the discussion of related works, it would be beneficial to include a comparative table.",
	"A comparative table would enhance the evaluation of related works in the discussion.",
	"Including a comparative table would allow for a more detailed comparison of related works.",
	"To improve the analysis of related works, it would be helpful to include a comparative table.",
	"A comparative table would provide a visual representation of the comparison between related works in the discussion.",
	"The discussion of related works would benefit from a comparative table for better understanding.",
	"To provide a clearer overview of related works, it would be beneficial to include a comparative table.",
	"A comparative table would facilitate the discussion of related works by providing a structured comparison.",
	"Including a comparative table would enhance the clarity of the discussion of related works.",
	"To enhance the comparison of related works, it would be helpful to include a comparative table."
	];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(references2Yes, references2Report, references2Phrases, randomNumber);

//Input da pergunta: Are recent references missing from the description?
let references3Yes = document.getElementById("references-3-yes");
let references3No = document.getElementById("references-3-no");
let references3Report = document.getElementById("references-3-report")

let references3Phrases = [
	"The description lacks information about recent works.",
	"The description is incomplete without recent works mentioned.",
	"Missing from the description are the recent works.",
	"The recent works are not included in the description.",
	"Recent projects are absent from the description.",
	"The description does not cover recent works.",
	"Recent works have been left out of the description.",
	"The description is incomplete without mentioning recent works.",
	"Missing from the description are details about recent works.",
	"The recent works have not been mentioned in the description.",
	"Recent projects are not adequately described.",
	"The description lacks information about recent projects.",
	"The description does not include recent works.",
	"Recent works are not properly described in the description.",
	"Missing from the description is any mention of recent works.",
	"The recent works are omitted from the description.",
	"The description fails to mention recent works.",
	"Recent projects are not adequately represented in the description.",
	"The description is incomplete without recent projects included.",
	"Missing from the description are the recent projects.",
	"The recent works have not been addressed in the description.",
	"Recent projects are not properly explained.",
	"The description lacks information about recent projects.",
	"The description does not cover recent projects.",
	"Recent works are not properly explained in the description.",
	"Missing from the description is any reference to recent works.",
	"The recent projects are missing from the description.",
	"The description fails to acknowledge recent works.",
	"Recent projects are not adequately described in the description.",
	"The description is incomplete without mentioning recent projects.",
	"Missing from the description are details about recent projects.",
	"The recent works have not been mentioned in the description."
  ];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(references3Yes, references3Report, references3Phrases, randomNumber);

//Input da pergunta: Are authors correctly listed in the references?
let listReferencesProblem1 = document.getElementById("list-references-problem-1-input");
let references4Report = document.getElementById("references-4-report");
let listReferencesProblem12 = document.getElementById("list-references-problem-1-2-input");

// faz update no texto quando existem 2 inputs (State-of-the-Art)
function updateText(message, input, value1, value2) {
    let fullMessage = message.replace("__EXAMPLES__", value1.value);

    if (value2.value != "") {
        fullMessage = fullMessage + " (compare with " + value2.value + ").";
    }

    input.innerText = fullMessage;
}

let authorsNamePhrases = [
	"Names of authors are not consistently presented, for example, in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, the names of authors lack consistency",
	"The presentation of authors' names lacks consistency, as seen in reference(s) __EXAMPLES__",
	"Inconsistent naming of authors is observed in reference(s) __EXAMPLES__",
	"Reference(s) __EXAMPLES__ exhibit inconsistent presentation of authors' names",
	"Authors' names are not consistently shown, for instance, in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, there is a lack of consistency in presenting authors' names",
	"The manner in which authors' names are presented lacks consistency, such as in reference(s) __EXAMPLES__",
	"Reference(s) __EXAMPLES__ do not adhere to a consistent format for authors' names",
	"Authors' names are inconsistently displayed, as exemplified in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, the presentation of authors' names varies inconsistently",
	"The consistency of authors' names is not maintained in reference(s) __EXAMPLES__",
	"Reference(s) __EXAMPLES__ show inconsistency in presenting authors' names",
	"Authors' names are not consistently formatted, for instance, in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, authors' names are presented in an inconsistent manner",
	"The presentation of authors' names in reference(s) __EXAMPLES__ lacks uniformity",
	"Reference(s) __EXAMPLES__ demonstrate inconsistent naming of authors",
	"Authors' names in reference(s) __EXAMPLES__ are not consistently displayed",
	"In reference(s) __EXAMPLES__, authors' names are not presented in a consistent manner",
	"The consistency of authors' names is not maintained in reference(s) __EXAMPLES__",
	"Reference(s) __EXAMPLES__ do not adhere to a consistent format for authors' names",
	"Authors' names are inconsistently displayed, as exemplified in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, the presentation of authors' names varies inconsistently",
	"The manner in which authors' names are presented lacks consistency, such as in reference(s) __EXAMPLES__",
	"Reference(s) __EXAMPLES__ exhibit inconsistent presentation of authors' names",
	"Authors' names are not consistently shown, for instance, in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, there is a lack of consistency in presenting authors' names",
	"The presentation of authors' names lacks consistency, as seen in reference(s) __EXAMPLES__",
	"Inconsistent naming of authors is observed in reference(s) __EXAMPLES__",
	"Names of authors are not presented in a consistent manner, e.g., in reference(s) __EXAMPLES__"
	];

	randomNumber = Math.floor(Math.random() * 30);

listReferencesProblem1.addEventListener("input", () => {
	updateText(authorsNamePhrases[randomNumber], references4Report, listReferencesProblem1, listReferencesProblem12);
});

listReferencesProblem12.addEventListener("input", () => {
	updateText(authorsNamePhrases[randomNumber], references4Report, listReferencesProblem1, listReferencesProblem12);
});

//Input da pergunta: Are authors correctly listed in the references?
let listReferencesProblem2 = document.getElementById("list-references-problem-2-input");
let references5Report = document.getElementById("references-5-report");
let listReferencesProblem22 = document.getElementById("list-references-problem-2-2-input");

let titleCapitalizedPhrases = [
	"Titles are not correctly or consistently capitalized, e.g., in reference(s) __EXAMPLES__",
	"Titles are not consistently or correctly capitalized, e.g., in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, titles are not correctly or consistently capitalized.",
	"In reference(s) __EXAMPLES__, titles are not consistently or correctly capitalized.",
	"Incorrectly or inconsistently capitalized titles, e.g., in reference(s) __EXAMPLES__.",
	"In reference(s) __EXAMPLES__, capitalized titles are not correctly or consistently formatted.",
	"Capitalized titles are not consistently or correctly formatted, e.g., in reference(s) __EXAMPLES__.",
	"Titles in reference(s) __EXAMPLES__ are not correctly or consistently capitalized.",
	"Titles in reference(s) __EXAMPLES__ are not consistently or correctly capitalized.",
	"In reference(s) __EXAMPLES__, the capitalization of titles is incorrect or inconsistent.",
	"In reference(s) __EXAMPLES__, the capitalization of titles is inconsistent or incorrect.",
	"Titles, e.g., in reference(s) __EXAMPLES__, are not correctly or consistently capitalized.",
	"Titles, e.g., in reference(s) __EXAMPLES__, are not consistently or correctly capitalized.",
	"The capitalization of titles is not correct or consistent, e.g., in reference(s) __EXAMPLES__.",
	"The capitalization of titles is not consistent or correct, e.g., in reference(s) __EXAMPLES__.",
	"In reference(s) __EXAMPLES__, titles are inconsistently or incorrectly capitalized.",
	"In reference(s) __EXAMPLES__, titles are incorrectly or inconsistently capitalized.",
	"Titles are not correctly or consistently capitalized in reference(s) __EXAMPLES__.",
	"Titles are not consistently or correctly capitalized in reference(s) __EXAMPLES__.",
	"E.g., in reference(s) __EXAMPLES__, titles are not correctly or consistently capitalized.",
	"E.g., in reference(s) __EXAMPLES__, titles are not consistently or correctly capitalized.",
	"In reference(s) __EXAMPLES__, the capitalization of titles is not correct or consistent.",
	"In reference(s) __EXAMPLES__, the capitalization of titles is not consistent or correct.",
	"Titles, e.g., in reference(s) __EXAMPLES__, are inconsistently or incorrectly capitalized.",
	"Titles, e.g., in reference(s) __EXAMPLES__, are incorrectly or inconsistently capitalized.",
	"The capitalization of titles in reference(s) __EXAMPLES__ is not correct or consistent.",
	"The capitalization of titles in reference(s) __EXAMPLES__ is not consistent or correct.",
	"In reference(s) __EXAMPLES__, titles are not consistently or correctly formatted.",
	"In reference(s) __EXAMPLES__, titles are not correctly or consistently formatted.",
	"Titles are not consistently or correctly formatted in reference(s) __EXAMPLES__.",
	"Titles are not correctly or consistently formatted in reference(s) __EXAMPLES__."
  ];

  randomNumber = Math.floor(Math.random() * 30);

listReferencesProblem2.addEventListener("input", () => {
	updateText(titleCapitalizedPhrases[randomNumber], references5Report, listReferencesProblem2, listReferencesProblem22);
});

listReferencesProblem22.addEventListener("input", () => {
	updateText(titleCapitalizedPhrases[randomNumber], references5Report, listReferencesProblem2, listReferencesProblem22);
});


//Input da pergunta: Are names of venues correctly listed in the references?
let listReferencesProblem3 = document.getElementById("list-references-problem-3-input");
let references6Report = document.getElementById("references-6-report");
let listReferencesProblem32 = document.getElementById("list-references-problem-3-2-input");

let nameVenuesPhrases = [
	"Names of venues are not presented in a consistent manner, e.g., in reference(s) __EXAMPLES__",
	"In reference(s) __EXAMPLES__, names of venues are not consistently presented.",
	"Inconsistent presentation of venue names can be observed, e.g., in reference(s) __EXAMPLES__.",
	"Venue names lack consistency in their presentation, for example, in reference(s) __EXAMPLES__.",
	"The presentation of venue names is inconsistent, as seen in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ does not provide consistent presentation of venue names.",
	"Lack of consistency can be observed in the presentation of venue names, e.g., in reference(s) __EXAMPLES__.",
	"Inconsistent manner of presenting venue names is evident in reference(s) __EXAMPLES__.",
	"Venue names are not consistently presented, as shown in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ lacks a consistent approach in presenting venue names.",
	"The manner in which venue names are presented lacks consistency, for example, in reference(s) __EXAMPLES__.",
	"Consistent presentation of venue names is lacking, as observed in reference(s) __EXAMPLES__.",
	"Venue names are presented inconsistently, e.g., in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ does not follow a consistent pattern in presenting venue names.",
	"The lack of consistency in presenting venue names can be seen in reference(s) __EXAMPLES__.",
	"In reference(s) __EXAMPLES__, the presentation of venue names is not consistent.",
	"Venue names are not uniformly presented, for example, in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ does not adhere to a consistent format in presenting venue names.",
	"The inconsistent presentation of venue names is evident in reference(s) __EXAMPLES__.",
	"In reference(s) __EXAMPLES__, venue names are presented in an inconsistent manner.",
	"Venue names are presented in a non-consistent way, e.g., in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ lacks consistency in presenting venue names.",
	"The lack of a consistent presentation can be observed in reference(s) __EXAMPLES__.",
	"Inconsistent manner of presenting venue names can be seen in reference(s) __EXAMPLES__.",
	"Venue names are not presented consistently, as seen in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ does not provide a consistent format for venue names.",
	"The inconsistent presentation of venue names is noticeable in reference(s) __EXAMPLES__.",
	"In reference(s) __EXAMPLES__, venue names are not uniformly presented.",
	"Venue names are presented in a non-uniform manner, e.g., in reference(s) __EXAMPLES__.",
	"Reference(s) __EXAMPLES__ lacks a standardized approach to presenting venue names.",
	"The lack of uniformity in presenting venue names is evident in reference(s) __EXAMPLES__."
  ];
  

randomNumber = Math.floor(Math.random() * 30);

listReferencesProblem3.addEventListener("input", () => {
	updateText(nameVenuesPhrases[randomNumber], references6Report, listReferencesProblem3, listReferencesProblem32);
});

listReferencesProblem32.addEventListener("input", () => {
	updateText(nameVenuesPhrases[randomNumber], references6Report, listReferencesProblem3, listReferencesProblem32);
});


//Input da pergunta: Is the year missing from any reference?
let references8Yes = document.getElementById("references-8-yes");
let references8No = document.getElementById("references-8-no");
let references7Report = document.getElementById("references-7-report")
let listReferencesProblem4Input = document.getElementById("list-references-problem-4-input")
let references8Report = document.getElementById("references-8-report")

let dateMissingExamples = [
	"Date information is missing in some references, namely __EXAMPLES__.",
	"Date information is absent in certain references, specifically __EXAMPLES__.",
	"Certain references lack date information, namely __EXAMPLES__.",
	"Some references do not include date information, specifically __EXAMPLES__.",
	"Date information is incomplete or missing in certain references, namely __EXAMPLES__.",
	"Date information is not provided in some references, namely __EXAMPLES__.",
	"In certain references, the date information is not present, namely __EXAMPLES__.",
	"The absence of date information can be observed in some references, namely __EXAMPLES__.",
	"Date information is omitted in certain references, specifically __EXAMPLES__.",
	"Certain references do not contain date information, namely __EXAMPLES__.",
	"The lack of date information can be seen in some references, specifically __EXAMPLES__.",
	"Date information is not available in certain references, namely __EXAMPLES__.",
	"In some references, the date information is missing, specifically __EXAMPLES__.",
	"Certain references are missing date information, namely __EXAMPLES__.",
	"The absence of date information is notable in some references, specifically __EXAMPLES__.",
	"Date information is not included in certain references, namely __EXAMPLES__.",
	"Some references lack the date information, specifically __EXAMPLES__.",
	"In certain references, the date information is not provided, namely __EXAMPLES__.",
	"Date information is not present in some references, specifically __EXAMPLES__.",
	"Certain references fail to mention the date information, namely __EXAMPLES__.",
	"The date information is missing in certain references, specifically __EXAMPLES__.",
	"Date information is not specified in some references, namely __EXAMPLES__.",
	"Certain references lack the required date information, specifically __EXAMPLES__.",
	"In some references, the date information is absent, namely __EXAMPLES__.",
	"Date information is not given in certain references, specifically __EXAMPLES__.",
	"Certain references do not provide date information, namely __EXAMPLES__.",
	"The absence of date information is observed in certain references, specifically __EXAMPLES__.",
	"Date information is not mentioned in some references, namely __EXAMPLES__.",
	"Some references are missing date information, specifically __EXAMPLES__.",
	"In certain references, the date information is not included, namely __EXAMPLES__.",
	"Date information is not available in some references, specifically __EXAMPLES__.",
	"Certain references lack the necessary date information, namely __EXAMPLES__."
  ];
  
  let dateMissing = [
	"Date information is missing in some references.",
  "Date information is absent in certain references.",
  "Certain references lack date information.",
  "Some references do not include date information.",
  "Date information is incomplete or missing in certain references.",
  "Date information is not provided in some references.",
  "In certain references, the date information is not present.",
  "The absence of date information can be observed in some references.",
  "Date information is omitted in certain references.",
  "Certain references do not contain date information.",
  "The lack of date information can be seen in some references.",
  "Date information is not available in certain references.",
  "In some references, the date information is missing.",
  "Certain references are missing date information.",
  "The absence of date information is notable in some references.",
  "Date information is not included in certain references.",
  "Some references lack the date information.",
  "In certain references, the date information is not provided.",
  "Date information is not present in some references.",
  "Certain references fail to mention the date information.",
  "The date information is missing in certain references.",
  "Date information is not specified in some references.",
  "Certain references lack the required date information.",
  "In some references, the date information is absent.",
  "Date information is not given in certain references.",
  "Certain references do not provide date information.",
  "The absence of date information is observed in certain references.",
  "Date information is not mentioned in some references.",
  "Some references are missing date information.",
  "In certain references, the date information is not included.",
  "Date information is not available in some references.",
  "Certain references lack the necessary date information."
  ];


randomNumber = Math.floor(Math.random() * 30);

references8Yes.addEventListener("input", () => {
    listReferencesProblem4Input.addEventListener("input", () => {
        if (listReferencesProblem4Input.value != "") {
            references7Report.innerText = dateMissingExamples[randomNumber].replace("__EXAMPLES__", listReferencesProblem4Input.value);
        } else {
            references7Report.innerText = dateMissing[randomNumber];
        }
    });

    //Verificar se o input está vazio depois do evento "input"
    if (listReferencesProblem4Input.value === "") {
        references7Report.innerText = dateMissing[randomNumber];
    }
});

//Input da pergunta: Is the URL missing from electronic references?
let references9Yes = document.getElementById("references-9-yes");
let references9No = document.getElementById("references-9-no");
let references9Report = document.getElementById("references-9-report");
let listReferencesProblem5Input = document.getElementById("list-references-problem-5-input");
let references10Report = document.getElementById("references-10-report");

let urlMissingExamples = [
	"Electronic references should include the Uniform Resource Locator (URL). Examples include __EXAMPLES__.",
  "Electronic references should contain the Uniform Resource Locator (URL). Instances include __EXAMPLES__.",
  "Include the Uniform Resource Locator (URL) in electronic references. Examples encompass __EXAMPLES__.",
  "In electronic references, make sure to incorporate the Uniform Resource Locator (URL). Examples consist of __EXAMPLES__.",
  "Ensure that electronic references incorporate the Uniform Resource Locator (URL). Examples demonstrate __EXAMPLES__.",
  "The Uniform Resource Locator (URL) should be included in electronic references. Examples exemplify __EXAMPLES__.",
  "When including electronic references, remember to provide the Uniform Resource Locator (URL). Examples showcase __EXAMPLES__.",
  "For electronic references, it is important to include the Uniform Resource Locator (URL). Examples display __EXAMPLES__.",
  "Electronic references necessitate the inclusion of the Uniform Resource Locator (URL). Examples feature __EXAMPLES__.",
  "Make sure to include the Uniform Resource Locator (URL) in electronic references. Examples highlight __EXAMPLES__.",
  "Include the Uniform Resource Locator (URL) in electronic references. Examples illustrate __EXAMPLES__.",
  "Ensure that electronic references include the Uniform Resource Locator (URL). Examples present __EXAMPLES__.",
  "In electronic references, make sure to mention the Uniform Resource Locator (URL). Examples provide __EXAMPLES__.",
  "The Uniform Resource Locator (URL) should be included in electronic references. Examples represent __EXAMPLES__.",
  "When including electronic references, remember to specify the Uniform Resource Locator (URL). Examples show __EXAMPLES__.",
  "For electronic references, it is important to incorporate the Uniform Resource Locator (URL). Examples depict __EXAMPLES__.",
  "Electronic references necessitate the inclusion of the Uniform Resource Locator (URL). Examples indicate __EXAMPLES__.",
  "Make sure to include the Uniform Resource Locator (URL) in electronic references. Examples outline __EXAMPLES__.",
  "Include the Uniform Resource Locator (URL) in electronic references. Examples outline __EXAMPLES__.",
  "Ensure that electronic references include the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "In electronic references, make sure to specify the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "The Uniform Resource Locator (URL) should be included in electronic references. Examples outline __EXAMPLES__.",
  "When including electronic references, remember to provide the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "For electronic references, it is important to incorporate the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "Electronic references necessitate the inclusion of the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "Make sure to include the Uniform Resource Locator (URL) in electronic references. Examples outline __EXAMPLES__.",
  "Include the Uniform Resource Locator (URL) in electronic references. Examples outline __EXAMPLES__.",
  "Ensure that electronic references include the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "In electronic references, make sure to specify the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "The Uniform Resource Locator (URL) should be included in electronic references. Examples outline __EXAMPLES__.",
  "When including electronic references, remember to provide the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "For electronic references, it is important to incorporate the Uniform Resource Locator (URL). Examples outline __EXAMPLES__.",
  "Electronic references necessitate the inclusion of the Uniform Resource Locator (URL). Examples outline __EXAMPLES__."
];

  let urlMissing = [
	"Electronic references should include the Uniform Resource Locator (URL).",
	"Electronic references should contain the Uniform Resource Locator (URL).",
	"Include the Uniform Resource Locator (URL) in electronic references.",
	"In electronic references, make sure to incorporate the Uniform Resource Locator (URL).",
	"Ensure that electronic references incorporate the Uniform Resource Locator (URL).",
	"The Uniform Resource Locator (URL) should be included in electronic references.",
	"When including electronic references, remember to provide the Uniform Resource Locator (URL).",
	"For electronic references, it is important to include the Uniform Resource Locator (URL).",
	"Electronic references necessitate the inclusion of the Uniform Resource Locator (URL).",
	"Make sure to include the Uniform Resource Locator (URL) in electronic references.",
	"Include the Uniform Resource Locator (URL) in electronic references.",
	"Ensure that electronic references include the Uniform Resource Locator (URL).",
	"In electronic references, make sure to mention the Uniform Resource Locator (URL).",
	"The Uniform Resource Locator (URL) should be included in electronic references.",
	"When including electronic references, remember to specify the Uniform Resource Locator (URL).",
	"For electronic references, it is important to incorporate the Uniform Resource Locator (URL).",
	"Electronic references necessitate the inclusion of the Uniform Resource Locator (URL).",
	"Make sure to include the Uniform Resource Locator (URL) in electronic references.",
	"Include the Uniform Resource Locator (URL) in electronic references.",
	"Ensure that electronic references include the Uniform Resource Locator (URL).",
	"In electronic references, make sure to specify the Uniform Resource Locator (URL).",
	"The Uniform Resource Locator (URL) should be included in electronic references.",
	"When including electronic references, remember to provide the Uniform Resource Locator (URL).",
	"For electronic references, it is important to incorporate the Uniform Resource Locator (URL).",
	"Electronic references necessitate the inclusion of the Uniform Resource Locator (URL).",
	"Make sure to include the Uniform Resource Locator (URL) in electronic references.",
	"Include the Uniform Resource Locator (URL) in electronic references.",
	"Ensure that electronic references include the Uniform Resource Locator (URL).",
	"In electronic references, make sure to specify the Uniform Resource Locator (URL).",
	"The Uniform Resource Locator (URL) should be included in electronic references.",
	"When including electronic references, remember to provide the Uniform Resource Locator (URL).",
	"For electronic references, it is important to incorporate the Uniform Resource Locator (URL).",
	"Electronic references necessitate the inclusion of the Uniform Resource Locator (URL)."
  ];
  

randomNumber = Math.floor(Math.random() * 30);

references9Yes.addEventListener("input", () => {
    listReferencesProblem5Input.addEventListener("input", () => {
        if (listReferencesProblem5Input.value != "") {
            references9Report.innerText = urlMissingExamples[randomNumber].replace("__EXAMPLES__", listReferencesProblem5Input.value);
        } else {
            references9Report.innerText = urlMissing[randomNumber];
        }
    });

    //Verificar se o input está vazio depois do evento "input"
    if (listReferencesProblem5Input.value === "") {
        references9Report.innerText = urlMissing[randomNumber];
    }
});


//Input da pergunta: Is the date of last access missing from electronic references?

let references10Yes = document.getElementById("references-10-yes");
let references10No = document.getElementById("references-10-no");
let references11Report = document.getElementById("references-11-report")
let listReferencesProble6Input = document.getElementById("list-references-problem-6-input")
let references12Report = document.getElementById("references-12-report")

let urlMissingDateExamples = [
	"Electronic references should include the date of last access. Examples include __EXAMPLES__.",
	"Electronic references ought to contain the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be provided in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access is necessary for electronic references. Examples include __EXAMPLES__.",
	"Electronic references must have the date of last access. Examples include __EXAMPLES__.",
	"It is important to include the date of last access in electronic references. Examples include __EXAMPLES__.",
	"The inclusion of the date of last access is required for electronic references. Examples include __EXAMPLES__.",
	"Electronic references should specify the date of last access. Examples include __EXAMPLES__.",
	"The date of last access needs to be mentioned in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access in electronic references is crucial. Examples include __EXAMPLES__.",
	"Electronic references should feature the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be indicated in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access is essential for electronic references. Examples include __EXAMPLES__.",
	"Electronic references should note the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be included in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access in electronic references is recommended. Examples include __EXAMPLES__.",
	"Electronic references should contain the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be mentioned in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access is obligatory for electronic references. Examples include __EXAMPLES__.",
	"Electronic references should have the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be provided in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access in electronic references is a must. Examples include __EXAMPLES__.",
	"Electronic references should state the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be included in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access in electronic references is important. Examples include __EXAMPLES__.",
	"Electronic references should specify the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be indicated in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access is essential for electronic references. Examples include __EXAMPLES__.",
	"Electronic references should note the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be included in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access in electronic references is recommended. Examples include __EXAMPLES__.",
	"Electronic references should contain the date of last access. Examples include __EXAMPLES__.",
	"The date of last access should be mentioned in electronic references. Examples include __EXAMPLES__.",
	"Including the date of last access is obligatory for electronic references. Examples include __EXAMPLES__."
  ];
  
  let urlMissingDate = [
	"Electronic references should include the date of last access.",
	"Electronic references ought to contain the date of last access.",
	"The date of last access should be provided in electronic references.",
	"Including the date of last access is necessary for electronic references.",
	"Electronic references must have the date of last access.",
	"It is important to include the date of last access in electronic references.",
	"The inclusion of the date of last access is required for electronic references.",
	"Electronic references should specify the date of last access.",
	"The date of last access needs to be mentioned in electronic references.",
	"Including the date of last access in electronic references is crucial.",
	"Electronic references should feature the date of last access.",
	"The date of last access should be indicated in electronic references.",
	"Including the date of last access is essential for electronic references.",
	"Electronic references should note the date of last access.",
	"The date of last access should be included in electronic references.",
	"Including the date of last access in electronic references is recommended.",
	"Electronic references should contain the date of last access.",
	"The date of last access should be mentioned in electronic references.",
	"Including the date of last access is obligatory for electronic references.",
	"Electronic references should have the date of last access.",
	"The date of last access should be provided in electronic references.",
	"Including the date of last access in electronic references is a must.",
	"Electronic references should state the date of last access.",
	"The date of last access should be included in electronic references.",
	"Including the date of last access in electronic references is important.",
	"Electronic references should specify the date of last access.",
	"The date of last access should be indicated in electronic references.",
	"Including the date of last access is essential for electronic references.",
	"Electronic references should note the date of last access.",
	"The date of last access should be included in electronic references.",
	"Including the date of last access in electronic references is recommended.",
	"Electronic references should contain the date of last access.",
	"The date of last access should be mentioned in electronic references.",
	"Including the date of last access is obligatory for electronic references."
  ];
  

randomNumber = Math.floor(Math.random() * 30);

references10Yes.addEventListener("input", () => {
    listReferencesProble6Input.addEventListener("input", () => {
        if (listReferencesProble6Input.value != "") {
            references11Report.innerText = urlMissingDateExamples[randomNumber].replace("__EXAMPLES__", listReferencesProble6Input.value);
        } else {
            references11Report.innerText = urlMissingDate[randomNumber];
        }
    });

    //Verificar se o input está vazio depois do evento "input"
    if (listReferencesProble6Input.value === "") {
        references11Report.innerText = urlMissingDate[randomNumber];
    }
});

//Input da pergunta: Is the quality of figures adequate?

let figures1Yes = document.getElementById("figures-1-yes");
let figures1No = document.getElementById("figures-1-no");
let figures1Report = document.getElementById("figures-1-report")
let listFiguresProblem1Input = document.getElementById("list-figures-problem-1-input")

//putText(figures1Yes, figures1No, figures1Report, "The quality of figures is not adequate. ", listFiguresProblem1Input)

let qualityFiguresExamples = [
	"The quality of figures __EXAMPLES__ is insufficient.",
	"The quality of figures __EXAMPLES__ is subpar.",
	"The quality of figures __EXAMPLES__ is below standard.",
	"The quality of figures __EXAMPLES__ is unsatisfactory.",
	"The quality of figures __EXAMPLES__ is lacking.",
	"The quality of figures __EXAMPLES__ is not up to par.",
	"The quality of figures __EXAMPLES__ is mediocre.",
	"The quality of figures __EXAMPLES__ is below average.",
	"The quality of figures __EXAMPLES__ is wanting.",
	"The quality of figures __EXAMPLES__ is deficient.",
	"The quality of figures __EXAMPLES__ is inadequate.",
	"The quality of figures __EXAMPLES__ is not satisfactory.",
	"The quality of figures __EXAMPLES__ is not up to scratch.",
	"The quality of figures __EXAMPLES__ is not up to snuff.",
	"The quality of figures __EXAMPLES__ is not up to the mark.",
	"The quality of figures __EXAMPLES__ is below par.",
	"The quality of figures __EXAMPLES__ is underwhelming.",
	"The quality of figures __EXAMPLES__ is not on par.",
	"The quality of figures __EXAMPLES__ is disappointing.",
	"The quality of figures __EXAMPLES__ is not acceptable.",
	"The quality of figures __EXAMPLES__ is not adequate.",
	"The quality of figures __EXAMPLES__ is not good enough.",
	"The quality of figures __EXAMPLES__ is unsuitable.",
	"The quality of figures __EXAMPLES__ is below expectations.",
	"The quality of figures __EXAMPLES__ is not commendable.",
	"The quality of figures __EXAMPLES__ is wanting in quality.",
	"The quality of figures __EXAMPLES__ is lackluster.",
	"The quality of figures __EXAMPLES__ is not impressive.",
	"The quality of figures __EXAMPLES__ is not up to the desired level.",
	"The quality of figures __EXAMPLES__ is flawed.",
	"The quality of figures __EXAMPLES__ is below the desired standard."
  ];

  let qualityFigureExamples = [
	"The quality of figure __EXAMPLES__ is insufficient.",
	"The quality of figure __EXAMPLES__ is subpar.",
	"The quality of figure __EXAMPLES__ is below standard.",
	"The quality of figure __EXAMPLES__ is unsatisfactory.",
	"The quality of figure __EXAMPLES__ is lacking.",
	"The quality of figure __EXAMPLES__ is not up to par.",
	"The quality of figure __EXAMPLES__ is mediocre.",
	"The quality of figure __EXAMPLES__ is below average.",
	"The quality of figure __EXAMPLES__ is wanting.",
	"The quality of figure __EXAMPLES__ is deficient.",
	"The quality of figure __EXAMPLES__ is inadequate.",
	"The quality of figure __EXAMPLES__ is not satisfactory.",
	"The quality of figure __EXAMPLES__ is not up to scratch.",
	"The quality of figure __EXAMPLES__ is not up to snuff.",
	"The quality of figure __EXAMPLES__ is not up to the mark.",
	"The quality of figure __EXAMPLES__ is below par.",
	"The quality of figure __EXAMPLES__ is underwhelming.",
	"The quality of figure __EXAMPLES__ is not on par.",
	"The quality of figure __EXAMPLES__ is disappointing.",
	"The quality of figure __EXAMPLES__ is not acceptable.",
	"The quality of figure __EXAMPLES__ is not adequate.",
	"The quality of figure __EXAMPLES__ is not good enough.",
	"The quality of figure __EXAMPLES__ is unsuitable.",
	"The quality of figure __EXAMPLES__ is below expectations.",
	"The quality of figure __EXAMPLES__ is not commendable.",
	"The quality of figure __EXAMPLES__ is wanting in quality.",
	"The quality of figure __EXAMPLES__ is lackluster.",
	"The quality of figure __EXAMPLES__ is not impressive.",
	"The quality of figure __EXAMPLES__ is not up to the desired level.",
	"The quality of figure __EXAMPLES__ is flawed.",
	"The quality of figure __EXAMPLES__ is below the desired standard."
  ];

  let qualityFigures = [
	"The quality of figures is insufficient.",
	"The quality of figures is subpar.",
	"The quality of figures is below standard.",
	"The quality of figures is unsatisfactory.",
	"The quality of figures is lacking.",
	"The quality of figures is not up to par.",
	"The quality of figures is mediocre.",
	"The quality of figures is below average.",
	"The quality of figures is wanting.",
	"The quality of figures is deficient.",
	"The quality of figures is inadequate.",
	"The quality of figures is not satisfactory.",
	"The quality of figures is not up to scratch.",
	"The quality of figures is not up to snuff.",
	"The quality of figures is not up to the mark.",
	"The quality of figures is below par.",
	"The quality of figures is underwhelming.",
	"The quality of figures is not on par.",
	"The quality of figures is disappointing.",
	"The quality of figures is not acceptable.",
	"The quality of figures is not adequate.",
	"The quality of figures is not good enough.",
	"The quality of figures is unsuitable.",
	"The quality of figures is below expectations.",
	"The quality of figures is not commendable.",
	"The quality of figures is wanting in quality.",
	"The quality of figures is lackluster.",
	"The quality of figures is not impressive.",
	"The quality of figures is not up to the desired level.",
	"The quality of figures is flawed.",
	"The quality of figures is below the desired standard."
  ];

  randomNumber = Math.floor(Math.random() * 30);

  figures1No.addEventListener("input", () => {
	listFiguresProblem1Input.addEventListener("input", () => {
		if (listFiguresProblem1Input.value != "") {
			if (listFiguresProblem1Input.value.includes(' ')) {
				figures1Report.innerText = qualityFiguresExamples[randomNumber].replace("__EXAMPLES__", listFiguresProblem1Input.value);
			} else {
				figures1Report.innerText = qualityFigureExamples[randomNumber].replace("__EXAMPLES__", listFiguresProblem1Input.value);
			}
		} else {
			figures1Report.innerText = qualityFigures[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listFiguresProblem1Input.value === "") {
        figures1Report.innerText = qualityFigures[randomNumber];
    }
});
  

//Input da pergunta: Is the font size in figures adequate?

let figures2Yes = document.getElementById("figures-2-yes");
let figures2No = document.getElementById("figures-2-no");
let figures2Report = document.getElementById("figures-2-report")
let listFiguresProblem2Input = document.getElementById("list-figures-problem-2-input")

let fontFiguresExamples = [
	"The font size in figures __EXAMPLES__ is not consistent with the manuscript.",
	"The font size in figures __EXAMPLES__ doesn't match the manuscript.",
	"The manuscript has inconsistent font sizes for figures __EXAMPLES__.",
	"Figures __EXAMPLES__ in the manuscript lack consistent font sizes.",
	"In the manuscript, the font size for figures __EXAMPLES__ is irregular.",
	"The figures __EXAMPLES__ in the manuscript display varying font sizes.",
	"There is a lack of consistency in font sizes for figures __EXAMPLES__ in the manuscript.",
	"Figures __EXAMPLES__ in the manuscript exhibit font size discrepancies.",
	"The manuscript's font size for figures __EXAMPLES__ is not uniform.",
	"The font sizes of figures __EXAMPLES__ in the manuscript are inconsistent.",
	"In the manuscript, the font size for figures __EXAMPLES__ is not standardized.",
	"Figures __EXAMPLES__ in the manuscript do not have a consistent font size.",
	"There is a discrepancy in the font size of figures __EXAMPLES__ in the manuscript.",
	"The manuscript lacks consistency in font sizes for figures __EXAMPLES__.",
	"Figures __EXAMPLES__ in the manuscript have varying font sizes that are not aligned.",
	"The font size for figures __EXAMPLES__ in the manuscript is haphazard.",
	"In the manuscript, figures __EXAMPLES__ have inconsistent font sizes that don't match.",
	"The font sizes of figures __EXAMPLES__ in the manuscript are not standardized.",
	"The manuscript displays inconsistent font sizes for figures __EXAMPLES__.",
	"Figures __EXAMPLES__ in the manuscript do not adhere to a consistent font size.",
	"There is no uniformity in the font size of figures __EXAMPLES__ in the manuscript.",
	"The manuscript's figures __EXAMPLES__ lack a consistent font size.",
	"The font size for figures __EXAMPLES__ in the manuscript varies inconsistently.",
	"In the manuscript, the font size for figures __EXAMPLES__ is irregularly set.",
	"Figures __EXAMPLES__ in the manuscript do not follow a consistent font size.",
	"The font size in figures __EXAMPLES__ is out of sync with the manuscript.",
	"The font sizes of figures __EXAMPLES__ in the manuscript do not align.",
	"In the manuscript, the font size for figures __EXAMPLES__ is not letant.",
	"Figures __EXAMPLES__ in the manuscript have varying font sizes that are not uniform.",
	"The manuscript lacks a consistent font size for figures __EXAMPLES__.",
	"Figures __EXAMPLES__ in the manuscript exhibit font size disparities.",
	"The font size for figures __EXAMPLES__ in the manuscript is not standardized."
  ];
  
  let fontFigureExamples = [
	"The font size in figure __EXAMPLES__ is not consistent with the manuscript.",
	"The font size in figure __EXAMPLES__ doesn't match the manuscript.",
	"The manuscript has inconsistent font sizes for figure __EXAMPLES__.",
	"Figure __EXAMPLES__ in the manuscript lack consistent font sizes.",
	"In the manuscript, the font size for figure __EXAMPLES__ is irregular.",
	"The figure __EXAMPLES__ in the manuscript display varying font sizes.",
	"There is a lack of consistency in font sizes for figure __EXAMPLES__ in the manuscript.",
	"Figure __EXAMPLES__ in the manuscript exhibit font size discrepancies.",
	"The manuscript's font size for figure __EXAMPLES__ is not uniform.",
	"The font sizes of figure __EXAMPLES__ in the manuscript are inconsistent.",
	"In the manuscript, the font size for figure __EXAMPLES__ is not standardized.",
	"Figure __EXAMPLES__ in the manuscript do not have a consistent font size.",
	"There is a discrepancy in the font size of figure __EXAMPLES__ in the manuscript.",
	"The manuscript lacks consistency in font sizes for figure __EXAMPLES__.",
	"Figure __EXAMPLES__ in the manuscript have varying font sizes that are not aligned.",
	"The font size for figure __EXAMPLES__ in the manuscript is haphazard.",
	"In the manuscript, figure __EXAMPLES__ have inconsistent font sizes that don't match.",
	"The font sizes of figure __EXAMPLES__ in the manuscript are not standardized.",
	"The manuscript displays inconsistent font sizes for figure __EXAMPLES__.",
	"Figure __EXAMPLES__ in the manuscript do not adhere to a consistent font size.",
	"There is no uniformity in the font size of figure __EXAMPLES__ in the manuscript.",
	"The manuscript's figure __EXAMPLES__ lack a consistent font size.",
	"The font size for figure __EXAMPLES__ in the manuscript varies inconsistently.",
	"In the manuscript, the font size for figure __EXAMPLES__ is irregularly set.",
	"Figure __EXAMPLES__ in the manuscript do not follow a consistent font size.",
	"The font size in figure __EXAMPLES__ is out of sync with the manuscript.",
	"The font sizes of figure __EXAMPLES__ in the manuscript do not align.",
	"In the manuscript, the font size for figure __EXAMPLES__ is not letant.",
	"Figure __EXAMPLES__ in the manuscript have varying font sizes that are not uniform.",
	"The manuscript lacks a consistent font size for figure __EXAMPLES__.",
	"Figure __EXAMPLES__ in the manuscript exhibit font size disparities.",
	"The font size for figure __EXAMPLES__ in the manuscript is not standardized."
  ];
  
  let fontFigures = [
	"The font size in figure is not consistent with the manuscript.",
	"The font size in figure doesn't match the manuscript.",
	"The manuscript has inconsistent font sizes for figure.",
	"Figure in the manuscript lack consistent font sizes.",
	"In the manuscript, the font size for figure is irregular.",
	"The figure in the manuscript display varying font sizes.",
	"There is a lack of consistency in font sizes for figure in the manuscript.",
	"Figure in the manuscript exhibit font size discrepancies.",
	"The manuscript's font size for figure is not uniform.",
	"The font sizes of figure in the manuscript are inconsistent.",
	"In the manuscript, the font size for figure is not standardized.",
	"Figure in the manuscript do not have a consistent font size.",
	"There is a discrepancy in the font size of figure in the manuscript.",
	"The manuscript lacks consistency in font sizes for figure.",
	"Figure in the manuscript have varying font sizes that are not aligned.",
	"The font size for figure in the manuscript is haphazard.",
	"In the manuscript, figure have inconsistent font sizes that don't match.",
	"The font sizes of figure in the manuscript are not standardized.",
	"The manuscript displays inconsistent font sizes for figure.",
	"Figure in the manuscript do not adhere to a consistent font size.",
	"There is no uniformity in the font size of figure in the manuscript.",
	"The manuscript's figure lack a consistent font size.",
	"The font size for figure in the manuscript varies inconsistently.",
	"In the manuscript, the font size for figure is irregularly set.",
	"Figure in the manuscript do not follow a consistent font size.",
	"The font size in figure is out of sync with the manuscript.",
	"The font sizes of figure in the manuscript do not align.",
	"In the manuscript, the font size for figure is not letant.",
	"Figure in the manuscript have varying font sizes that are not uniform.",
	"The manuscript lacks a consistent font size for figure.",
	"Figure in the manuscript exhibit font size disparities.",
	"The font size for figure in the manuscript is not standardized."
  ];

randomNumber = Math.floor(Math.random() * 30);

figures2No.addEventListener("input", () => {
	listFiguresProblem2Input.addEventListener("input", () => {
		if (listFiguresProblem2Input.value != "") {
			if (listFiguresProblem2Input.value.includes(' ')) {
				figures2Report.innerText = fontFiguresExamples[randomNumber].replace("__EXAMPLES__", listFiguresProblem2Input.value);
			} else {
				figures2Report.innerText = fontFigureExamples[randomNumber].replace("__EXAMPLES__", listFiguresProblem2Input.value);
			}
		} else {
			figures2Report.innerText = fontFigures[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listFiguresProblem2Input.value === "") {
        figures2Report.innerText = fontFigures[randomNumber];
    }
});


//Input da pergunta: Are captions concise and complete?
let figures3Yes = document.getElementById("figures-3-yes");
let figures3No = document.getElementById("figures-3-no");
let figuresReport = document.getElementById("figures-3-report")

let captionsPhrases = [
	"Self-descriptive and concise captions are essential.",
	"Concise and self-explanatory captions are crucial.",
	"Captions must be both descriptive and succinct.",
	"Being descriptive and concise is key for captions.",
	"To the point and self-explanatory captions are important.",
	"Captions should convey meaning in a concise manner.",
	"Being descriptive yet concise is vital for captions.",
	"It's important for captions to be both clear and brief.",
	"Clarity and brevity are crucial for captions.",
	"Conciseness and self-descriptiveness matter in captions.",
	"Captions need to be both concise and descriptive.",
	"Being brief while conveying meaning is essential for captions.",
	"Clarity and conciseness should characterize captions.",
	"Captions should be clear and to the point.",
	"Being descriptive yet concise is necessary for captions.",
	"Conveying meaning concisely is important in captions.",
	"Captions must be both succinct and self-explanatory.",
	"It's vital for captions to be descriptive and brief.",
	"Clarity and brevity are vital for captions.",
	"Conciseness and self-descriptiveness are important in captions.",
	"Captions need to be both concise and expressive.",
	"Being brief while conveying meaning is essential for captions.",
	"Clarity and conciseness should be the focus in captions.",
	"Captions should be clear and concise.",
	"Being descriptive yet concise is necessary for captions.",
	"Conveying meaning in a concise manner is important for captions.",
	"Captions must be both succinct and self-explanatory.",
	"It's vital for captions to be descriptive and to the point.",
	"Clarity and brevity are fundamental in captions.",
	"Conciseness and self-descriptiveness are key in captions.",
	"Captions need to be both concise and expressive."
  ];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(figures3No, figuresReport, captionsPhrases, randomNumber);


//Input da pergunta: Are all figures and tables mentioned/discussed in the text?

let figures4Yes = document.getElementById("figures-4-yes");
let figures4No = document.getElementById("figures-4-no");
let figures4Report = document.getElementById("figures-4-report")
let listFiguresProblem4Input = document.getElementById("list-figures-problem-4-input")

let figuresMentionedExamples = [
	"All included resources should be cross referenced and discussed in the manuscript. E.g., __EXAMPLES__  is never mentioned in the text.",
	"In the manuscript, it is crucial to cross reference and discuss all included resources. For instance, __EXAMPLES__  is never mentioned in the text.",
	"Cross referencing and discussing all included resources is important in the manuscript. For example, __EXAMPLES__  is never mentioned in the text.",
	"It is essential to discuss and cross reference all resources included in the manuscript. __EXAMPLES__ , for instance, is never mentioned in the text.",
	"The manuscript should contain cross references and discussions for all included resources. __EXAMPLES__  is an example that is not mentioned in the text.",
	"In the manuscript, all included resources need to be cross referenced and discussed. For instance, __EXAMPLES__  is never mentioned in the text.",
	"Cross referencing and discussing all included resources in the manuscript is necessary. For example, __EXAMPLES__  is never mentioned in the text.",
	"Discussing and cross referencing all included resources in the manuscript is a requirement. __EXAMPLES__ , for instance, is never mentioned in the text.",
	"The manuscript must include cross references and discussions for all included resources. __EXAMPLES__  is an example that is not mentioned in the text.",
	"All included resources mentioned in the manuscript should be cross referenced and discussed. E.g., __EXAMPLES__  is never mentioned in the text.",
	"In the manuscript, it is important to cross reference and discuss all mentioned resources. For instance, __EXAMPLES__  is never mentioned in the text.",
	"Cross referencing and discussing all mentioned resources is crucial in the manuscript. For example, __EXAMPLES__  is never mentioned in the text.",
	"It is essential to discuss and cross reference all mentioned resources in the manuscript. __EXAMPLES__ , for instance, is never mentioned in the text.",
	"The manuscript should contain cross references and discussions for all mentioned resources. __EXAMPLES__  is an example that is not mentioned in the text.",
	"In the manuscript, all mentioned resources need to be cross referenced and discussed. For instance, __EXAMPLES__  is never mentioned in the text.",
	"Cross referencing and discussing all mentioned resources in the manuscript is necessary. For example, __EXAMPLES__  is never mentioned in the text.",
	"Discussing and cross referencing all mentioned resources in the manuscript is a requirement. __EXAMPLES__ , for instance, is never mentioned in the text.",
	"The manuscript must include cross references and discussions for all mentioned resources. __EXAMPLES__  is an example that is not mentioned in the text.",
	"All included resources in the manuscript should be cross referenced and discussed. E.g., __EXAMPLES__  is never mentioned in the text.",
	"In the manuscript, it is important to cross reference and discuss all resources that are included. For instance, __EXAMPLES__  is never mentioned in the text.",
	"Cross referencing and discussing all resources that are included is crucial in the manuscript. For example, __EXAMPLES__  is never mentioned in the text.",
	"It is essential to discuss and cross reference all resources that are included in the manuscript. __EXAMPLES__ , for instance, is never mentioned in the text.",
	"The manuscript should contain cross references and discussions for all resources that are included. __EXAMPLES__  is an example that is not mentioned in the text.",
	"In the manuscript, all resources that are included need to be cross referenced and discussed. For instance, __EXAMPLES__  is never mentioned in the text.",
	"Cross referencing and discussing all resources that are included in the manuscript is necessary. For example, __EXAMPLES__  is never mentioned in the text.",
	"Discussing and cross referencing all resources that are included in the manuscript is a requirement. __EXAMPLES__ , for instance, is never mentioned in the text.",
	"The manuscript must include cross references and discussions for all resources that are included. __EXAMPLES__  is an example that is not mentioned in the text.",
	"All included resources in the manuscript should be cross referenced and discussed. E.g., __EXAMPLES__  is never referenced in the text.",
	"In the manuscript, it is important to cross reference and discuss all included resources. For instance, __EXAMPLES__  is never referenced in the text.",
	"Cross referencing and discussing all included resources is crucial in the manuscript. For example, __EXAMPLES__  is never referenced in the text.",
	"It is essential to discuss and cross reference all included resources in the manuscript. __EXAMPLES__ , for instance, is never referenced in the text.",
	"The manuscript should contain cross references and discussions for all included resources. __EXAMPLES__  is an example that is not referenced in the text.",
	"In the manuscript, all included resources need to be cross referenced and discussed. For instance, __EXAMPLES__  is never referenced in the text."
  ];
  
  let figuresMentioned = [
	"All included resources should be cross referenced and discussed in the manuscript.",
	"In the manuscript, it is crucial to cross reference and discuss all included resources.",
	"Cross referencing and discussing all included resources is important in the manuscript.",
	"It is essential to discuss and cross reference all resources included in the manuscript.",
	"The manuscript should contain cross references and discussions for all included resources.",
	"In the manuscript, all included resources need to be cross referenced and discussed.",
	"Cross referencing and discussing all included resources in the manuscript is necessary.",
	"Discussing and cross referencing all included resources in the manuscript is a requirement.",
	"The manuscript must include cross references and discussions for all included resources.",
	"All included resources mentioned in the manuscript should be cross referenced and discussed.",
	"In the manuscript, it is important to cross reference and discuss all mentioned resources.",
	"Cross referencing and discussing all mentioned resources is crucial in the manuscript.",
	"It is essential to discuss and cross reference all mentioned resources in the manuscript.",
	"The manuscript should contain cross references and discussions for all mentioned resources.",
	"In the manuscript, all mentioned resources need to be cross referenced and discussed.",
	"Cross referencing and discussing all mentioned resources in the manuscript is necessary.",
	"Discussing and cross referencing all mentioned resources in the manuscript is a requirement.",
	"The manuscript must include cross references and discussions for all mentioned resources.",
	"All included resources in the manuscript should be cross referenced and discussed.",
	"In the manuscript, it is important to cross reference and discuss all resources that are included.",
	"Cross referencing and discussing all resources that are included is crucial in the manuscript.",
	"It is essential to discuss and cross reference all resources that are included in the manuscript.",
	"The manuscript should contain cross references and discussions for all resources that are included.",
	"In the manuscript, all resources that are included need to be cross referenced and discussed.",
	"Cross referencing and discussing all resources that are included in the manuscript is necessary.",
	"Discussing and cross referencing all resources that are included in the manuscript is a requirement.",
	"The manuscript must include cross references and discussions for all resources that are included.",
	"All included resources in the manuscript should be cross referenced and discussed.",
	"In the manuscript, it is important to cross reference and discuss all included resources.",
	"Cross referencing and discussing all included resources is crucial in the manuscript.",
	"It is essential to discuss and cross reference all resources included in the manuscript."
  ];
  

randomNumber = Math.floor(Math.random() * 30);

figures4No.addEventListener("input", () => {
	listFiguresProblem4Input.addEventListener("input", () => {
		if (listFiguresProblem4Input.value != "") {
			figures4Report.innerText = figuresMentionedExamples[randomNumber].replace("__EXAMPLES__", listFiguresProblem4Input.value)
		} else {
			figures4Report.innerText = figuresMentioned[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listFiguresProblem4Input.value === "") {
        figures4Report.innerText = figuresMentioned[randomNumber];
    }
});

//Remainig Parts ---------------->
//Input da pergunta: Do you suggest inclusion of additional tables?

let remaining2Yes = document.getElementById("remaining-2-yes");
let remaining2No = document.getElementById("remaining-2-no");
let remaining1Report = document.getElementById("remaining-1-report")
let remaining12Report = document.getElementById("remaining-1-2-report")

let listRemainingProblem2Include = document.getElementById("list-remaining-problem-2-include")
let listRemainingProblem2Remove = document.getElementById("list-remaining-problem-2-remove")

let moreTablesExamples = [
	"More tables should be included. Tables to be included:  __EXAMPLES__.",
	"Including more tables is necessary. Tables that should be included:  __EXAMPLES__.",
	"We should add additional tables. Tables to include:  __EXAMPLES__.",
	"It would be beneficial to have more tables. Examples of tables to include:  __EXAMPLES__.",
	"Inclusion of more tables is important. Here are some examples of tables to include:  __EXAMPLES__.",
	"We need to consider including more tables. Some examples of tables to include:  __EXAMPLES__.",
	"Expanding the number of tables is crucial. Tables that need to be included:  __EXAMPLES__.",
	"It's essential to incorporate more tables. Here are a few examples of tables to include:  __EXAMPLES__.",
	"Adding more tables would be advantageous. Some examples of tables to include:  __EXAMPLES__.",
	"We must include additional tables. Tables that should be included:  __EXAMPLES__.",
	"Including more tables is necessary. Examples of tables to be included:  __EXAMPLES__.",
	"We should add more tables. Tables to include:  __EXAMPLES__.",
	"It would be beneficial to include more tables. Tables to be included:  __EXAMPLES__.",
	"Inclusion of more tables is important. Tables to include:  __EXAMPLES__.",
	"We need to consider adding more tables. Tables to be included:  __EXAMPLES__.",
	"Expanding the number of tables is crucial. Examples of tables to include:  __EXAMPLES__.",
	"It's essential to incorporate more tables. Some examples of tables to include:  __EXAMPLES__.",
	"Adding more tables would be advantageous. Tables to include:  __EXAMPLES__.",
	"We must include additional tables. Examples of tables to be included:  __EXAMPLES__.",
	"Including more tables is necessary. Tables that need to be included:  __EXAMPLES__.",
	"We should add more tables. Examples of tables to be included:  __EXAMPLES__.",
	"It would be beneficial to include more tables. Tables that should be included:  __EXAMPLES__.",
	"Inclusion of more tables is important. Tables that need to be included:  __EXAMPLES__.",
	"We need to consider adding more tables. Examples of tables to include:  __EXAMPLES__.",
	"Expanding the number of tables is crucial. Tables to include:  __EXAMPLES__.",
	"It's essential to incorporate more tables. Tables to include:  __EXAMPLES__.",
	"Adding more tables would be advantageous. Examples of tables to be included:  __EXAMPLES__.",
	"We must include additional tables. Tables that should be included:  __EXAMPLES__.",
	"Including more tables is necessary. Tables to include:  __EXAMPLES__.",
	"We should add more tables. Examples of tables to include:  __EXAMPLES__."
  ];

  let moreTables = [
	"More tables should be included.",
	"Including more tables is necessary.",
	"We should add additional tables.",
	"It would be beneficial to have more tables.",
	"Inclusion of more tables is important.",
	"We need to consider including more tables.",
	"Expanding the number of tables is crucial.",
	"It's essential to incorporate more tables.",
	"Adding more tables would be advantageous.",
	"We must include additional tables.",
	"Including more tables is necessary.",
	"We should add more tables.",
	"It would be beneficial to include more tables. ",
	"Inclusion of more tables is important.",
	"We need to consider adding more tables.",
	"Expanding the number of tables is crucial.",
	"It's essential to incorporate more tables.",
	"Adding more tables would be advantageous.",
	"We must include additional tables.",
	"Including more tables is necessary.",
	"We should add more tables.",
	"It would be beneficial to include more tables.",
	"Inclusion of more tables is important.",
	"We need to consider adding more tables.",
	"Expanding the number of tables is crucial.",
	"It's essential to incorporate more tables.",
	"Adding more tables would be advantageous.",
	"We must include additional tables.",
	"Including more tables is necessary.",
	"We should add more tables."
  ];
  

remaining2Yes.addEventListener("input", () => {
	listRemainingProblem2Include.addEventListener("input", () => {
		if (listRemainingProblem2Include.value != "") {
			remaining1Report.innerText = moreTablesExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem2Include.value)
		} else {
			remaining1Report.innerText = moreTables[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem2Include.value === "") {
		remaining1Report.innerText = moreTables[randomNumber];
    }
});

let removeTablesExamples = [
	"Certain tables should be eliminated. Tables that need removal: __EXAMPLES__.",
	"Several tables have to go. Tables to be removed: __EXAMPLES__.",
	"We need to get rid of a few tables. Tables that should be removed: __EXAMPLES__.",
	"It's necessary to remove certain tables. Tables to be eliminated: __EXAMPLES__.",
	"A few tables must be taken out. Tables that require removal: __EXAMPLES__.",
	"Some tables need to be excluded. Tables to be removed: __EXAMPLES__.",
	"We have to remove specific tables. Tables that should be taken out: __EXAMPLES__.",
	"Removing certain tables is essential. Tables to be eliminated: __EXAMPLES__.",
	"There are tables that need removal. Tables to be removed: __EXAMPLES__.",
	"Getting rid of some tables is necessary. Tables that require removal: __EXAMPLES__.",
	"Certain tables ought to be excluded. Tables to be removed: __EXAMPLES__.",
	"We must eliminate a few tables. Tables that should be taken out: __EXAMPLES__.",
	"Removing specific tables is crucial. Tables to be eliminated: __EXAMPLES__.",
	"We need to remove a number of tables. Tables that need removal: __EXAMPLES__.",
	"It's important to exclude certain tables. Tables to be removed: __EXAMPLES__.",
	"We should take out specific tables. Tables that should be eliminated: __EXAMPLES__.",
	"Removing certain tables is required. Tables to be removed: __EXAMPLES__.",
	"There are tables that should be eliminated. Tables to be taken out: __EXAMPLES__.",
	"Getting rid of some tables is crucial. Tables that require removal: __EXAMPLES__.",
	"Certain tables need to be excluded. Tables to be removed: __EXAMPLES__.",
	"We must remove a few tables. Tables that should be taken out: __EXAMPLES__.",
	"Removing specific tables is necessary. Tables to be eliminated: __EXAMPLES__.",
	"We need to eliminate a number of tables. Tables that need removal: __EXAMPLES__.",
	"It's necessary to exclude certain tables. Tables to be removed: __EXAMPLES__.",
	"We should take out specific tables. Tables that should be eliminated: __EXAMPLES__.",
	"Removing certain tables is required. Tables to be removed: __EXAMPLES__.",
	"There are tables that need to be eliminated. Tables to be taken out: __EXAMPLES__.",
	"Getting rid of some tables is crucial. Tables that require removal: __EXAMPLES__.",
	"Certain tables should be excluded. Tables to be removed: __EXAMPLES__.",
	"We must remove a few tables. Tables that should be taken out: __EXAMPLES__.",
	"Removing specific tables is necessary. Tables to be eliminated: __EXAMPLES__."
  ];

  let removeTables = [
	"Certain tables should be eliminated.",
	"Several tables have to go.",
	"We need to get rid of a few tables.",
	"It's necessary to remove certain tables.",
	"A few tables must be taken out.",
	"Some tables need to be excluded.",
	"We have to remove specific tables.",
	"Removing certain tables is essential.",
	"There are tables that need removal.",
	"Getting rid of some tables is necessary.",
	"Certain tables ought to be excluded.",
	"We must eliminate a few tables.",
	"Removing specific tables is crucial.",
	"We need to remove a number of tables.",
	"It's important to exclude certain tables.",
	"We should take out specific tables.",
	"Removing certain tables is required.",
	"There are tables that should be eliminated.",
	"Getting rid of some tables is crucial.",
	"Certain tables need to be excluded.",
	"We must remove a few tables.",
	"Removing specific tables is necessary.",
	"We need to eliminate a number of tables.",
	"It's necessary to exclude certain tables.",
	"We should take out specific tables.",
	"Removing certain tables is required.",
	"There are tables that need to be eliminated.",
	"Getting rid of some tables is crucial.",
	"Certain tables should be excluded.",
	"We must remove a few tables.",
	"Removing specific tables is necessary."
  ];

remaining2No.addEventListener("input", () => {
	listRemainingProblem2Remove.addEventListener("input", () => {
		if (listRemainingProblem2Remove.value != "") {
			remaining12Report.innerText = removeTablesExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem2Remove.value)
		} else {
			remaining12Report.innerText = removeTables[randomNumber];
			//remaining12Report.innerText = "Some tables must be removed.";
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem2Remove.value === "") {
        remaining12Report.innerText = removeTables[randomNumber];
    }
});


//Input da pergunta: Do you suggest inclusion of additional figures?

let remaining4Yes = document.getElementById("remaining-4-yes");
let remaining4No = document.getElementById("remaining-4-no");
let remaining2Report = document.getElementById("remaining-2-report")
let remaining22Report = document.getElementById("remaining-2-2-report")

let listRemainingProblem5Include = document.getElementById("list-remaining-problem-5-include")
let listRemainingProblem5Remove = document.getElementById("list-remaining-problem-5-remove")

let moreFiguresExamples = [
	"More examples must be incorporated. Examples to be included: __EXAMPLES__",
	"Additional figures ought to be included. Figures to include: __EXAMPLES__",
	"Including more illustrations is necessary. Examples that should be included: __EXAMPLES__",
	"It is important to include more visuals. Examples to be incorporated: __EXAMPLES__",
	"We should add more figures. Examples that need to be included: __EXAMPLES__",
	"Including additional visuals is crucial. Figures to include: __EXAMPLES__",
	"It is advisable to incorporate more examples. Examples to be included: __EXAMPLES__",
	"We must include more figures. Figures that should be included: __EXAMPLES__",
	"Adding more visuals is essential. Examples that need to be incorporated: __EXAMPLES__",
	"It is necessary to include more figures. Figures to include: __EXAMPLES__",
	"Including more examples is recommended. Examples to be included: __EXAMPLES__",
	"We should incorporate additional figures. Figures that should be included: __EXAMPLES__",
	"Adding more visuals is highly important. Examples that need to be included: __EXAMPLES__",
	"It is crucial to include more examples. Examples to be incorporated: __EXAMPLES__",
	"We must include more figures. Figures to include: __EXAMPLES__",
	"Including additional visuals is strongly recommended. Examples that should be included: __EXAMPLES__",
	"It is advisable to incorporate more figures. Figures that need to be included: __EXAMPLES__",
	"Adding more examples is essential. Examples to be included: __EXAMPLES__",
	"It is necessary to include more visuals. Examples that should be incorporated: __EXAMPLES__",
	"We should add more figures. Figures to include: __EXAMPLES__",
	"Including more examples is crucial. Examples that need to be included: __EXAMPLES__",
	"It is important to include more figures. Figures to include: __EXAMPLES__",
	"We must incorporate additional visuals. Examples that should be included: __EXAMPLES__",
	"Adding more examples is strongly recommended. Examples to be included: __EXAMPLES__",
	"It is highly important to include more figures. Figures that need to be included: __EXAMPLES__",
	"We should include more visuals. Examples that should be incorporated: __EXAMPLES__",
	"Including additional figures is advisable. Figures to include: __EXAMPLES__",
	"It is crucial to incorporate more examples. Examples to be included: __EXAMPLES__",
	"We must include more figures. Figures that should be included: __EXAMPLES__",
	"Adding more visuals is necessary. Examples that need to be incorporated: __EXAMPLES__",
	"It is essential to include more examples. Examples to be included: __EXAMPLES__"
  ];

  let moreFigures = [
	"More figures should be included.",
	"Additional figures ought to be included.",
	"Including more illustrations is necessary.",
	"It is important to include more visuals.",
	"We should add more figures.",
	"Including additional visuals is crucial.",
	"It is advisable to incorporate more examples.",
	"We must include more figures.",
	"Adding more visuals is essential.",
	"It is necessary to include more figures.",
	"Including more examples is recommended.",
	"We should incorporate additional figures.",
	"Adding more visuals is highly important.",
	"It is crucial to include more examples.",
	"We must include more figures.",
	"Including additional visuals is strongly recommended.",
	"It is advisable to incorporate more figures.",
	"Adding more examples is essential.",
	"It is necessary to include more visuals.",
	"We should add more figures.",
	"Including more examples is crucial.",
	"It is important to include more figures.",
	"We must incorporate additional visuals.",
	"Adding more examples is strongly recommended.",
	"It is highly important to include more figures.",
	"We should include more visuals.",
	"Including additional figures is advisable.",
	"It is crucial to incorporate more examples.",
	"We must include more figures.",
	"Adding more visuals is necessary.",
	"It is essential to include more examples."
  ];


remaining4Yes.addEventListener("input", () => {
	listRemainingProblem5Include.addEventListener("input", () => {
		if (listRemainingProblem5Include.value != "") {
			remaining2Report.innerText = moreFiguresExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem5Include.value)
		} else {
			remaining2Report.innerText = moreFigures[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem5Include.value === "") {
		remaining2Report.innerText = moreFigures[randomNumber];
    }
});


let removeFiguresExamples = [
	"Some figures need to be eliminated. Figures that should be removed:  __EXAMPLES__ ",
	"Certain figures must be excluded. Figures to be removed:  __EXAMPLES__ ",
	"We have to remove some figures. The figures that should be removed are:  __EXAMPLES__ ",
	"It is necessary to eliminate certain figures. The figures to be removed are:  __EXAMPLES__ ",
	"There are figures that must be taken out. The figures to be removed include:  __EXAMPLES__ ",
	"We need to get rid of some figures. Figures that need to be removed include:  __EXAMPLES__ ",
	"Several figures should be removed. Examples of figures to be removed:  __EXAMPLES__ ",
	"We should exclude a few figures. The figures that need to be removed are:  __EXAMPLES__ ",
	"It's important to remove specific figures. Figures to be removed:  __EXAMPLES__ ",
	"We must eliminate certain figures. Examples of figures to be removed:  __EXAMPLES__ ",
	"Some figures ought to be removed. Figures that should be excluded:  __EXAMPLES__ ",
	"Certain figures need to be taken out. The figures to be removed include:  __EXAMPLES__ ",
	"We have to exclude some figures. Figures that should be removed:  __EXAMPLES__ ",
	"It is necessary to remove particular figures. Examples of figures to be removed:  __EXAMPLES__ ",
	"There are figures that must be eliminated. Figures to be removed include:  __EXAMPLES__ ",
	"We need to eliminate several figures. The figures that need to be removed are:  __EXAMPLES__ ",
	"We should remove a few figures. Figures that need to be removed include:  __EXAMPLES__ ",
	"It's important to exclude specific figures. Examples of figures to be removed:  __EXAMPLES__ ",
	"We must take out certain figures. Figures to be removed:  __EXAMPLES__ ",
	"Some figures have to be removed. The figures to be removed include:  __EXAMPLES__ ",
	"Certain figures should be eliminated. Figures that should be removed:  __EXAMPLES__ ",
	"We have to get rid of some figures. Examples of figures to be removed:  __EXAMPLES__ ",
	"It is necessary to exclude certain figures. Figures to be removed include:  __EXAMPLES__ ",
	"There are figures that need to be eliminated. The figures that need to be removed are:  __EXAMPLES__ ",
	"We need to take out several figures. Figures that need to be removed include:  __EXAMPLES__ ",
	"We should eliminate a few figures. Examples of figures to be removed:  __EXAMPLES__ ",
	"It's important to remove specific figures. Figures to be removed:  __EXAMPLES__ ",
	"We must exclude certain figures. The figures that should be removed are:  __EXAMPLES__ ",
	"Some figures must be taken out. Figures to be removed:  __EXAMPLES__ ",
	"Certain figures need to be removed. Figures that should be excluded:  __EXAMPLES__ "
  ];

  let removeFigures = [
	"Some figures must be removed.",
	"Certain figures need to be eliminated.",
	"We have to remove some figures.",
	"It is necessary to eliminate certain figures.",
	"There are figures that must be taken out.",
	"We need to get rid of some figures.",
	"Several figures should be removed.",
	"We should exclude a few figures.",
	"It's important to remove specific figures.",
	"We must eliminate certain figures.",
	"Some figures ought to be removed.",
	"Certain figures need to be taken out.",
	"We have to exclude some figures.",
	"It is necessary to remove particular figures.",
	"There are figures that must be eliminated.",
	"We need to eliminate several figures.",
	"We should remove a few figures.",
	"It's important to exclude specific figures.",
	"We must take out certain figures.",
	"Some figures have to be removed.",
	"Certain figures should be eliminated.",
	"We have to get rid of some figures.",
	"It is necessary to exclude certain figures.",
	"There are figures that need to be eliminated.",
	"We need to take out several figures.",
	"We should eliminate a few figures.",
	"It's important to remove specific figures.",
	"We must exclude certain figures.",
	"Some figures must be taken out.",
	"Certain figures need to be removed."
  ];

remaining4No.addEventListener("input", () => {
	listRemainingProblem5Remove.addEventListener("input", () => {
		if (listRemainingProblem5Remove.value != "") {
			remaining22Report.innerText = removeFiguresExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem5Remove.value)
		} else {
			remaining22Report.innerText = removeFigures[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem5Remove.value === "") {
        remaining22Report.innerText = removeFigures[randomNumber];
    }
});



//Input da pergunta: Do you suggest reducing the size of paper?

let remaining6Yes = document.getElementById("remaining-6-yes");
let remaining6No = document.getElementById("remaining-6-no");
let remaining3Report = document.getElementById("remaining-3-report");
let remaining32Report = document.getElementById("remaining-3-2-report");

let listRemainingProblem8Include = document.getElementById("list-remaining-problem-8-include");
let listRemainingProblem8Remove = document.getElementById("list-remaining-problem-8-remove");

let paperReduceExamples = [
	"The paper can be safely abbreviated. For instance, __EXAMPLES__",
	"It is possible to condense the paper. For example, __EXAMPLES__",
	"The document can be made briefer. For instance, __EXAMPLES__",
	"It is feasible to shorten the paper. For example, __EXAMPLES__",
	"The paper can be compacted without any issues. E.g., __EXAMPLES__",
	"It is safe to reduce the paper's length. For example, __EXAMPLES__",
	"The document can be made more concise. For instance, __EXAMPLES__",
	"It is possible to trim down the paper. For example, __EXAMPLES__",
	"The paper can be shortened effectively. E.g., __EXAMPLES__",
	"It is feasible to make the paper more succinct. For example, __EXAMPLES__",
	"The document can be condensed. For instance, __EXAMPLES__",
	"It is safe to abbreviate the paper. For example, __EXAMPLES__",
	"The paper can be compressed. E.g., __EXAMPLES__",
	"It is possible to make the paper more compact. For example, __EXAMPLES__",
	"The document can be made shorter. For instance, __EXAMPLES__",
	"It is feasible to reduce the paper's length. For example, __EXAMPLES__",
	"The paper can be trimmed down. E.g., __EXAMPLES__",
	"It is safe to make the paper more concise. For example, __EXAMPLES__",
	"The document can be shortened effectively. For instance, __EXAMPLES__",
	"It is possible to condense the paper. For example, __EXAMPLES__",
	"The paper can be made briefer. E.g., __EXAMPLES__",
	"It is feasible to shorten the paper. For example, __EXAMPLES__",
	"The document can be compacted without any issues. For instance, __EXAMPLES__",
	"It is safe to reduce the paper's length. For example, __EXAMPLES__",
	"The paper can be made more concise. E.g., __EXAMPLES__",
	"It is possible to trim down the paper. For example, __EXAMPLES__",
	"The paper can be shortened effectively. E.g., __EXAMPLES__",
	"It is feasible to make the paper more succinct. For example, __EXAMPLES__",
	"The document can be condensed. For instance, __EXAMPLES__",
	"It is safe to abbreviate the paper. For example, __EXAMPLES__",
	"The paper can be compressed. E.g., __EXAMPLES__",
  ];
  
  let paperReduce = [
	"The paper can be safely made shorter.",
	"It is possible to safely shorten the paper.",
	"The document can be safely abbreviated.",
	"It is feasible to make the paper shorter.",
	"The paper can be safely condensed.",
	"It is safe to reduce the length of the paper.",
	"The document can be made more concise.",
	"It is possible to safely trim the paper.",
	"The paper can be effectively shortened.",
	"It is feasible to make the paper more succinct.",
	"The document can be condensed.",
	"It is safe to abbreviate the paper.",
	"The paper can be compressed.",
	"It is possible to make the paper more compact.",
	"The document can be safely shortened.",
	"It is feasible to reduce the paper's length.",
	"The paper can be safely trimmed down.",
	"It is safe to make the paper more concise.",
	"The document can be effectively shortened.",
	"It is possible to safely condense the paper.",
	"The paper can be safely made briefer.",
	"It is feasible to safely shorten the paper.",
	"The document can be safely compacted.",
	"It is safe to reduce the paper's length.",
	"The paper can be made more concise.",
	"It is possible to safely trim down the paper.",
	"The paper can be effectively shortened.",
	"It is feasible to make the paper more succinct.",
	"The document can be condensed.",
	"It is safe to abbreviate the paper.",
	"The paper can be compressed."
  ]

remaining6Yes.addEventListener("input", () => {
	listRemainingProblem8Include.addEventListener("input", () => {
		if (listRemainingProblem8Include.value != "") {
			remaining3Report.innerText = paperReduceExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem8Include.value)
		} else {
			remaining3Report.innerText = paperReduce[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem8Include.value === "") {
		remaining3Report.innerText = paperReduce[randomNumber];
    }
});

let paperExtendedExamples = [
	"The explanation should be extended to include. E.g., __EXAMPLES__",
	"The explanation ought to be expanded to incorporate. For example, __EXAMPLES__",
	"It is necessary to elaborate the explanation to encompass. For instance, __EXAMPLES__",
	"Expanding the explanation is required to cover. Such as, __EXAMPLES__",
	"To provide a comprehensive understanding, the explanation should be broadened to encompass. E.g., __EXAMPLES__",
	"Including __EXAMPLES__ would enhance the explanation and make it more comprehensive.",
	"The explanation needs to incorporate __EXAMPLES__ in order to be more thorough.",
	"To fully explain the concept, __EXAMPLES__ should be included.",
	"Enhancing the explanation by adding __EXAMPLES__ would be beneficial.",
	"The inclusion of __EXAMPLES__ is essential for a complete explanation.",
	"Expanding the explanation to include __EXAMPLES__ is crucial.",
	"It is important to incorporate __EXAMPLES__ in the explanation.",
	"The explanation should be extended to encompass __EXAMPLES__ for better clarity.",
	"To illustrate the point further, __EXAMPLES__ should be included in the explanation.",
	"Including __EXAMPLES__ in the explanation would provide additional context.",
	"Expanding the explanation to cover __EXAMPLES__ is necessary.",
	"To make the explanation more comprehensive, it should include __EXAMPLES__.",
	"It would be beneficial to incorporate __EXAMPLES__ into the explanation.",
	"The explanation should be broadened to include __EXAMPLES__.",
	"To better demonstrate the concept, __EXAMPLES__ should be included in the explanation.",
	"Including __EXAMPLES__ would enrich the explanation and enhance understanding.",
	"Expanding the explanation to encompass __EXAMPLES__ is highly recommended.",
	"It is advisable to incorporate __EXAMPLES__ into the explanation.",
	"The explanation should be extended to encompass __EXAMPLES__ for a more complete understanding.",
	"To provide concrete examples, __EXAMPLES__ should be included in the explanation.",
	"Including __EXAMPLES__ in the explanation would elucidate the concept.",
	"Expanding the explanation to cover __EXAMPLES__ is crucial for clarity.",
	"To ensure a thorough explanation, it should include __EXAMPLES__.",
	"It would greatly improve the explanation to incorporate __EXAMPLES__.",
	"The explanation should be broadened to include __EXAMPLES__ for better illustration.",
	"To enhance comprehension, __EXAMPLES__ should be included in the explanation.",
  ];

  let paperExtended = [
	"The explanation should be extended to include.",
	"The explanation ought to be expanded to incorporate.",
	"It is necessary to elaborate the explanation to encompass.",
	"Expanding the explanation is required to cover.",
	"To provide a comprehensive understanding, the explanation should be broadened to encompass.",
	"Including would enhance the explanation and make it more comprehensive.",
	"The explanation needs to incorporate in order to be more thorough.",
	"To fully explain the concept, should be included.",
	"Enhancing the explanation by adding would be beneficial.",
	"The inclusion of is essential for a complete explanation.",
	"Expanding the explanation to include is crucial.",
	"It is important to incorporate in the explanation.",
	"The explanation should be extended to encompass for better clarity.",
	"To illustrate the point further, should be included in the explanation.",
	"Including in the explanation would provide additional context.",
	"Expanding the explanation to cover is necessary.",
	"To make the explanation more comprehensive, it should include.",
	"It would be beneficial to incorporate into the explanation.",
	"The explanation should be broadened to include.",
	"To better demonstrate the concept, should be included in the explanation.",
	"Including would enrich the explanation and enhance understanding.",
	"Expanding the explanation to encompass is highly recommended.",
	"It is advisable to incorporate into the explanation.",
	"The explanation should be extended to encompass for a more complete understanding.",
	"To provide concrete examples, should be included in the explanation.",
	"Including in the explanation would elucidate the concept.",
	"Expanding the explanation to cover is crucial for clarity.",
	"To ensure a thorough explanation, it should include.",
	"It would greatly improve the explanation to incorporate.",
	"The explanation should be broadened to include for better illustration.",
	"To enhance comprehension, should be included in the explanation.",
  ];

remaining6No.addEventListener("input", () => {
	listRemainingProblem8Remove.addEventListener("input", () => {
		if (listRemainingProblem8Remove.value != "") {
			remaining32Report.innerText = paperExtendedExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem8Remove.value)
		} else {
			remaining32Report.innerText = paperExtended[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem8Remove.value === "") {
        remaining32Report.innerText = removeFigures[randomNumber];
    }
});


//Input da pergunta: Should the structure/organization of the paper be improved?


let remaining7Yes = document.getElementById("remaining-7-yes");
let remaining7No = document.getElementById("remaining-7-no");
let remaining4Report = document.getElementById("remaining-4-report")
let listRemainingProblem10Input = document.getElementById("list-remaining-problem-10-input")

let workStructureExamples = [
	"Work on structure/organization of the paper is required. E.g., __EXAMPLES__",
	"Work on the paper's structure/organization is necessary. E.g., __EXAMPLES__",
	"It is essential to improve the structure/organization of the paper. E.g., __EXAMPLES__",
	"Enhancements are needed in the paper's structure/organization. E.g., __EXAMPLES__",
	"Revisions must be made to the paper's structure/organization. E.g., __EXAMPLES__",
	"The paper requires work on its structure/organization. E.g., __EXAMPLES__",
	"Considerations should be given to the structure/organization of the paper. E.g., __EXAMPLES__",
	"Attention needs to be given to the paper's structure/organization. E.g., __EXAMPLES__",
	"Improvements are warranted in the structure/organization of the paper. E.g., __EXAMPLES__",
	"The structure/organization of the paper needs to be addressed. E.g., __EXAMPLES__",
	"Modifications are necessary for the paper's structure/organization. E.g., __EXAMPLES__",
	"A focus on the paper's structure/organization is required. E.g., __EXAMPLES__",
	"The paper's structure/organization necessitates further work. E.g., __EXAMPLES__",
	"Work needs to be done on the structure/organization of the paper. E.g., __EXAMPLES__",
	"The structure/organization of the paper should be improved. E.g., __EXAMPLES__",
	"To improve the paper, attention should be given to its structure/organization. E.g., __EXAMPLES__",
	"Considerations must be made for the structure/organization of the paper. E.g., __EXAMPLES__",
	"Enhancing the structure/organization of the paper is recommended. E.g., __EXAMPLES__",
	"The paper's structure/organization requires adjustments. E.g., __EXAMPLES__",
	"Improving the structure/organization of the paper is crucial. E.g., __EXAMPLES__",
	"It is necessary to address the paper's structure/organization. E.g., __EXAMPLES__",
	"The structure/organization of the paper demands attention. E.g., __EXAMPLES__",
	"Revisions are needed in the paper's structure/organization. E.g., __EXAMPLES__",
	"Work on the structure/organization of the paper is vital. E.g., __EXAMPLES__",
	"To enhance the paper, focus on its structure/organization is required. E.g., __EXAMPLES__",
	"Considering the structure/organization of the paper is essential. E.g., __EXAMPLES__",
	"The paper's structure/organization necessitates improvement. E.g., __EXAMPLES__",
	"Addressing the structure/organization of the paper is crucial. E.g., __EXAMPLES__",
	"The paper's structure/organization should be revised. E.g., __EXAMPLES__",
	"Improving the structure/organization of the paper is recommended. E.g., __EXAMPLES__",
	"Attention needs to be given to the structure/organization of the paper. E.g., __EXAMPLES__"
  ];
  
  let workStructure = [
	"Work on structure/organization of the paper is required.",
	"Work on the paper's structure/organization is necessary.",
	"It is essential to improve the structure/organization of the paper.",
	"Enhancements are needed in the paper's structure/organization.",
	"Revisions must be made to the paper's structure/organization.",
	"The paper requires work on its structure/organization.",
	"Considerations should be given to the structure/organization of the paper.",
	"Attention needs to be given to the paper's structure/organization.",
	"Improvements are warranted in the structure/organization of the paper.",
	"The structure/organization of the paper needs to be addressed.",
	"Modifications are necessary for the paper's structure/organization.",
	"A focus on the paper's structure/organization is required.",
	"The paper's structure/organization necessitates further work.",
	"Work needs to be done on the structure/organization of the paper.",
	"The structure/organization of the paper should be improved.",
	"To improve the paper, attention should be given to its structure/organization.",
	"Considerations must be made for the structure/organization of the paper.",
	"Enhancing the structure/organization of the paper is recommended.",
	"The paper's structure/organization requires adjustments.",
	"Improving the structure/organization of the paper is crucial.",
	"It is necessary to address the paper's structure/organization.",
	"The structure/organization of the paper demands attention.",
	"Revisions are needed in the paper's structure/organization.",
	"Work on the structure/organization of the paper is vital.",
	"To enhance the paper, focus on its structure/organization is required.",
	"Considering the structure/organization of the paper is essential.",
	"The paper's structure/organization necessitates improvement.",
	"Addressing the structure/organization of the paper is crucial.",
	"The paper's structure/organization should be revised.",
	"Improving the structure/organization of the paper is recommended.",
	"Attention needs to be given to the structure/organization of the paper."
  ];

randomNumber = Math.floor(Math.random() * 30);

remaining7Yes.addEventListener("input", () => {
	listRemainingProblem10Input.addEventListener("input", () => {
		if (listRemainingProblem10Input.value != "") {
			remaining4Report.innerText = workStructureExamples[randomNumber].replace("__EXAMPLES__", listRemainingProblem10Input.value)
		} else {
			remaining4Report.innerText = workStructure[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listRemainingProblem10Input.value === "") {
        remaining4Report.innerText = workStructure[randomNumber];
    }
});


//Final Questions -------------------------------------------------------------->

// Input da pergunta: How would you rate the quality of writing?
let radioButtonsFinal1 = document.querySelectorAll('.radio-input-quality');
let labelElementsFinal1 = document.querySelectorAll('.radio-label-quality');
let conciseYes = document.getElementById('concise-yes')
let conciseNo = document.getElementById('concise-no')
let flowYes = document.getElementById('flow-yes')
let flowNo = document.getElementById('flow-no')

let lowQualityPhrases = [
	"The writing is of extremely low quality, which alone justifies rejecting the manuscript in its current form.",
	"The poor quality of the writing alone warrants the rejection of the manuscript as it is.",
	"Rejecting the manuscript as it is becomes inevitable due to the exceptionally poor quality of writing.",
	"The writing is so substandard that the manuscript must be rejected without hesitation.",
	"The manuscript, as it is, is bound to be rejected solely based on the extremely poor quality of writing.",
	"The quality of writing is abysmal, leaving no choice but to reject the manuscript in its current state.",
	"Rejecting the manuscript as is, solely based on the very poor quality of writing, is the only option.",
	"The manuscript's writing quality is insufficient, leading to its immediate rejection as it stands.",
	"The writing is so inadequately done that the manuscript must be rejected outright.",
	"The manuscript's subpar writing quality alone warrants its rejection in the current form.",
	"Rejecting the manuscript is a must, considering the woefully poor quality of writing it exhibits.",
	"The writing quality is dismal, providing sufficient grounds to reject the manuscript as it is.",
	"The manuscript's writing is of such low quality that rejecting it in its current form is the only logical decision.",
	"The poor writing quality is reason enough to reject the manuscript without delay.",
	"The manuscript's writing falls well below the acceptable standard, necessitating its rejection as is.",
	"Rejecting the manuscript is justified solely based on the extremely poor quality of writing it showcases.",
	"The writing is exceptionally weak, rendering the manuscript unsuitable for acceptance.",
	"The manuscript's writing is unsatisfactory, leaving no other option but to reject it in its current state.",
	"Rejecting the manuscript as it is, solely based on the poor quality of writing, is the appropriate course of action.",
	"The manuscript's writing lacks the required level of proficiency, resulting in its rejection without hesitation.",
	"The writing quality is so deficient that rejecting the manuscript in its current form is the only reasonable choice.",
	"The manuscript's writing is inadequate, justifying its immediate rejection.",
	"Rejecting the manuscript is necessary due to the woefully poor quality of writing it demonstrates.",
	"The writing quality is extremely disappointing, making it necessary to reject the manuscript as it is.",
	"The manuscript's writing is of such poor quality that it cannot be accepted in its current form.",
	"The writing falls far below the expected standard, warranting the rejection of the manuscript in its entirety.",
	"The manuscript's writing fails to meet the required standards, mandating its rejection as is.",
	"Rejecting the manuscript is the only option considering the remarkably poor quality of writing it possesses.",
	"The writing quality is below par, leading to the rejection of the manuscript as it stands.",
	"The manuscript's writing is substandard, justifying its outright rejection.",
	"Rejecting the manuscript is warranted solely based on the very poor quality of writing it exhibits."
  ];

  let poorQualityPhrases = [
	"The writing quality is subpar and requires significant enhancement during the revision stage (if applicable).",
	"The writing needs a substantial improvement in quality during the revision phase (if applicable).",
	"Enhancements are necessary to greatly improve the quality of writing during the revision round (if applicable).",
	"The revision round (if applicable) should focus on improving the poor quality of writing.",
	"Considerable improvement is required in the quality of writing during the revision round (if applicable).",
	"The writing is of low quality and should be significantly improved in the revision stage (if applicable).",
	"A major improvement in writing quality is needed during the revision phase (if applicable).",
	"The revision round (if applicable) should address the poor writing quality and strive for improvement.",
	"There is a pressing need to greatly enhance the quality of writing during the revision round (if applicable).",
	"The writing quality is lacking and must be substantially improved during the revision stage (if applicable).",
	"Significant improvement is necessary in the quality of writing during the revision round (if applicable).",
	"The revision round (if applicable) should aim to improve the poor quality of writing.",
	"The writing exhibits poor quality and requires substantial improvement in the revision phase (if applicable).",
	"Enhancing the quality of writing is crucial during the revision stage (if applicable).",
	"The revision round (if applicable) should focus on improving the subpar quality of writing.",
	"Considerable improvement in writing quality is needed during the revision phase (if applicable).",
	"The poor writing quality necessitates a major improvement in the revision round (if applicable).",
	"A significant enhancement in writing quality is required during the revision stage (if applicable).",
	"The revision round (if applicable) should address the substandard writing quality and aim for improvement.",
	"There is an urgent need to greatly improve the quality of writing during the revision round (if applicable).",
	"The writing quality is inadequate and must be significantly improved during the revision stage (if applicable).",
	"Substantial improvement is necessary in the quality of writing during the revision round (if applicable).",
	"The revision round (if applicable) should strive to improve the poor quality of writing.",
	"The writing demonstrates low quality and needs substantial improvement in the revision phase (if applicable).",
	"It is crucial to enhance the quality of writing during the revision stage (if applicable).",
	"The revision round (if applicable) should focus on improving the unsatisfactory quality of writing.",
	"Considerable improvement in writing quality is required during the revision phase (if applicable).",
	"The poor quality of writing demands significant improvement in the revision round (if applicable).",
	"A significant improvement in writing quality is needed during the revision stage (if applicable).",
	"The revision round (if applicable) should address the inadequate writing quality and aim for improvement.",
	"There is a pressing need to greatly enhance the quality of writing during the revision round (if applicable).",
	"The writing quality is subpar and requires substantial improvement in the revision stage (if applicable)."
  ];

  let improvePhrases = [
	"Proof-reading from a native speaker would greatly enhance the writing's quality.",
	"Improving the writing further would be advantageous, especially with the help of a native speaker's proof-reading.",
	"The writing's quality could benefit from the expertise of a native speaker for proof-reading.",
	"A native speaker's proof-reading could contribute to enhancing the quality of the writing.",
	"Enhancements to the writing's quality can still be made, particularly with the assistance of a native speaker's proof-reading.",
	"The writing has room for improvement in terms of quality and could benefit from proof-reading by a native speaker.",
	"Proof-reading by a native speaker would be valuable in improving the quality of the writing.",
	"The quality of the writing could be enhanced further with the assistance of a native speaker's proof-reading.",
	"To improve the writing's quality, it would be beneficial to have a native speaker proof-read it.",
	"A native speaker's proof-reading could help improve the writing's quality.",
	"The writing's quality has the potential for improvement, especially through proof-reading by a native speaker.",
	"Improvements to the writing's quality can still be achieved, and a native speaker's proof-reading would be helpful.",
	"The writing would benefit from proof-reading by a native speaker, which could enhance its quality.",
	"To further improve the quality of the writing, a native speaker's proof-reading would be beneficial.",
	"The quality of the writing can be elevated with the assistance of a native speaker's proof-reading.",
	"Proof-reading by a native speaker can help enhance the quality of the writing.",
	"A native speaker's proof-reading could contribute to improving the writing's quality.",
	"Enhancements to the writing's quality are still possible and would be facilitated by a native speaker's proof-reading.",
	"The writing's quality could be improved by having a native speaker proof-read it.",
	"To enhance the writing's quality, it would be beneficial to have a native speaker proof-read it.",
	"Proof-reading from a native speaker could enhance the quality of the writing.",
	"The quality of the writing has room for improvement, and a native speaker's proof-reading could assist in achieving that.",
	"The writing's quality could be further improved with the aid of proof-reading by a native speaker.",
	"A native speaker's proof-reading would be valuable in enhancing the quality of the writing.",
	"The writing's quality can still be improved, and it would benefit from proof-reading by a native speaker.",
	"To improve the quality of the writing, having a native speaker proof-read it would be beneficial.",
	"Proof-reading by a native speaker would contribute to improving the quality of the writing.",
	"A native speaker's proof-reading can help elevate the quality of the writing.",
	"Enhancements to the quality of the writing are possible, and a native speaker's proof-reading could facilitate them.",
	"The writing's quality could be enhanced with the assistance of proof-reading by a native speaker.",
	"Having a native speaker proof-read the writing would be beneficial in improving its quality."
  ];

  let stillImprovePhrases = [
	"The writing's quality can still be enhanced and might benefit from proofreading.",
	"Improvements can be made to the writing's quality and it could benefit from proofreading.",
	"There is room for improvement in the quality of the writing, and proofreading could be beneficial.",
	"Enhancements can be made to the quality of the writing, which may benefit from proofreading.",
	"The writing has potential for improvement and could benefit from proofreading.",
	"The quality of the writing can still be enhanced and might benefit from reviewing.",
	"There is scope for improvement in the writing's quality, which could benefit from proofreading.",
	"Enhancements can be made to the quality of the writing, potentially benefiting from proofreading.",
	"The writing has room for improvement and may benefit from proofreading.",
	"The quality of the writing can still be improved and could potentially benefit from proofreading.",
	"There is a possibility to improve the quality of the writing, which might benefit from proofreading.",
	"Enhancements can be made to the quality of the writing, possibly benefiting from proofreading.",
	"The writing has the potential for improvement and could benefit from proofreading.",
	"The quality of the writing can still be enhanced and might benefit from reviewing.",
	"There is room for improvement in the quality of the writing, which could benefit from proofreading.",
	"Enhancements can be made to the quality of the writing, potentially benefiting from proofreading.",
	"The writing has room for improvement and may benefit from proofreading.",
	"The quality of the writing can still be improved and could potentially benefit from proofreading.",
	"There is a possibility to improve the quality of the writing, which might benefit from proofreading.",
	"Enhancements can be made to the quality of the writing, possibly benefiting from proofreading.",
	"The writing has the potential for improvement and could benefit from proofreading.",
	"The writing's quality can still be enhanced and might benefit from reviewing.",
	"Improvements can be made to the writing's quality and it could benefit from proofreading.",
	"There is scope for improvement in the quality of the writing, which could benefit from proofreading.",
	"Enhancements can be made to the quality of the writing, potentially benefiting from proofreading.",
	"The writing has room for improvement and may benefit from proofreading.",
	"The quality of the writing can still be improved and could potentially benefit from proofreading.",
	"There is a possibility to improve the quality of the writing, which might benefit from proofreading.",
	"Enhancements can be made to the quality of the writing, possibly benefiting from proofreading.",
	"The writing has the potential for improvement and could benefit from proofreading."
  ];

  let wellPhrases = [
	"The paper is exceptionally well written, and the discussion is concise and easy to follow.",
	"The paper is written in a highly commendable manner, and the discussion is succinct and straightforward.",
	"The paper exhibits a remarkably well-crafted composition, and the discussion is clear and comprehensible.",
	"The paper is skillfully written, and the discussion is concise and readily understandable.",
	"The paper demonstrates exemplary writing, with a concise and easily understandable discussion.",
	"The paper is impressively well written, and the discussion is succinct and coherent.",
	"The paper is elegantly written, with a concise and effortlessly comprehensible discussion.",
	"The paper is expertly crafted, and the discussion is concise and easily digestible.",
	"The paper is flawlessly written, and the discussion is concise and straightforward.",
	"The paper is written with great finesse, and the discussion is concise and easy to grasp.",
	"The paper is remarkably well written, and the discussion is concise and accessible.",
	"The paper is skillfully composed, with a concise and easily followed discussion.",
	"The paper is masterfully written, and the discussion is concise and straightforward.",
	"The paper is meticulously crafted, with a concise and easily understandable discussion.",
	"The paper is written with remarkable proficiency, and the discussion is concise and coherent.",
	"The paper is beautifully written, and the discussion is concise and readily comprehensible.",
	"The paper showcases excellent writing, with a concise and effortlessly followed discussion.",
	"The paper is exceptionally well executed, and the discussion is concise and easy to comprehend.",
	"The paper is written with impressive precision, and the discussion is concise and clear.",
	"The paper is superbly written, with a concise and easily followed discussion.",
	"The paper is written with admirable clarity, and the discussion is concise and straightforward.",
	"The paper is excellently composed, and the discussion is concise and readily understandable.",
	"The paper is brilliantly written, with a concise and easily digestible discussion.",
	"The paper is impeccably written, and the discussion is concise and straightforward.",
	"The paper is written with remarkable fluency, and the discussion is concise and easy to grasp.",
	"The paper is outstandingly well written, and the discussion is concise and accessible.",
	"The paper is skillfully presented, with a concise and easily followed discussion.",
	"The paper is written with exceptional expertise, and the discussion is concise and coherent.",
	"The paper is wonderfully crafted, with a concise and easily understandable discussion.",
	"The paper is written with remarkable skill, and the discussion is concise and straightforward.",
	"The paper is artfully written, and the discussion is concise and readily comprehensible.",
	"The paper showcases exemplary writing, with a concise and effortlessly followed discussion."
  ];

  let additionalPhrases = [
	"The structure of the paper is appropriate also.",
	"Also, the paper's structure is appropriate.",
	"The appropriate structure is evident in the paper as well.",
	"In addition, the paper has an appropriate structure.",
	"Furthermore, the paper's structure is fitting.",
	"Additionally, the structure of the paper is suitable.",
	"Moreover, the paper is appropriately structured.",
	"The paper is structured appropriately as well.",
	"Likewise, the structure of the paper is appropriate.",
	"Moreover, the paper has an appropriate structure.",
	"The paper's structure is also suitable.",
	"Furthermore, the structure of the paper is well-suited.",
	"Additionally, the paper exhibits an appropriate structure.",
	"The appropriate structure is visible in the paper too.",
	"Also, the paper is well-structured.",
	"Moreover, the paper is appropriately organized.",
	"The paper is organized in an appropriate manner as well.",
	"Likewise, the structure of the paper is fitting.",
	"Furthermore, the paper displays an appropriate structure.",
	"The appropriate structure is evident in the paper too.",
	"Also, the paper's organization is appropriate.",
	"Moreover, the paper is well-arranged.",
	"The paper is appropriately laid out as well.",
	"Likewise, the structure of the paper is suitable.",
	"Furthermore, the paper is structured in an appropriate way.",
	"Additionally, the structure of the paper is fitting.",
	"The appropriate structure is visible in the paper also.",
	"Also, the paper is properly organized.",
	"Moreover, the paper is appropriately formatted.",
	"The paper is properly structured as well.",
	"Likewise, the structure of the paper is fitting."
  ];

  let betterDiscussion = [
	"The paper is exceptionally well written, although the flow of discussion can still be enhanced.",
	"The paper is written extremely well; however, the flow of discussion could use some improvement.",
	"Although the flow of discussion can still be improved, the paper is very well written.",
	"While the paper is very well written, there is room for improvement in the flow of discussion.",
	"Despite the need for improvement in the flow of discussion, the paper is excellently written.",
	"The paper is well written, though there is still potential for enhancing the flow of discussion.",
	"Though the flow of discussion can be improved, the paper is very well written.",
	"The paper exhibits excellent writing skills; however, the flow of discussion could be enhanced.",
	"Even though the flow of discussion can still be improved, the paper is very well written.",
	"The paper is written with great proficiency; however, the flow of discussion requires improvement.",
	"While the flow of discussion can be improved, the paper is very well written.",
	"The paper demonstrates exceptional writing; nevertheless, the flow of discussion could be refined.",
	"Despite the need for improvement in the flow of discussion, the paper is well written.",
	"Although the paper is very well written, there is room for improvement in the flow of discussion.",
	"The paper is skillfully written, though the flow of discussion can still be improved.",
	"The paper showcases excellent writing skills; however, the flow of discussion could use some work.",
	"Even though the flow of discussion can be improved, the paper is exceptionally well written.",
	"While the paper is very well written, there is still potential for enhancing the flow of discussion.",
	"The paper is written exceptionally well; however, the flow of discussion requires improvement.",
	"Though the flow of discussion can still be improved, the paper is very well written.",
	"The paper demonstrates great writing skills; nevertheless, the flow of discussion could be enhanced.",
	"Despite the need for improvement in the flow of discussion, the paper is excellently written.",
	"Although the flow of discussion can be improved, the paper is very well written.",
	"The paper is written with remarkable proficiency; however, the flow of discussion could be refined.",
	"Even though the paper is very well written, there is room for improvement in the flow of discussion.",
	"The paper is crafted skillfully, though the flow of discussion can still be improved.",
	"The paper displays excellent writing skills; however, the flow of discussion could use some work.",
	"While the flow of discussion can be improved, the paper is exceptionally well written.",
	"The paper is very well written, yet there is still potential for enhancing the flow of discussion.",
	"The paper is written exceptionally well; however, the flow of discussion requires refinement.",
	"Though the flow of discussion can still be improved, the paper is very well written.",
	"The paper exemplifies great writing skills; nevertheless, the flow of discussion could be enhanced.",
	"Despite the need for improvement in the flow of discussion, the paper is excellently written."
  ];

  let pausedRhythmPhrases = [
	"Furthermore, the flow could derive advantages from a more deliberate tempo (In my viewpoint, there are absent commas).",
	"Moreover, the progression would gain from a slightly slower cadence (From my perspective, there are omitted commas).",
	"In addition, the sequence might be improved by adopting a more leisurely rhythm (In my belief, there is a lack of commas).",
	"Additionally, a more measured tempo would enhance the overall flow (I believe there are commas missing).",
	"Besides, a more deliberate pace would contribute to the flow (In my opinion, there is a dearth of commas).",
	"Furthermore, the rhythm would benefit from being more restrained (I think there are missing commas).",
	"Moreover, a more paced cadence would enhance the flow (In my viewpoint, there are omitted commas).",
	"In addition, the flow would derive advantages from a more leisurely tempo (From my perspective, there is a lack of commas).",
	"Additionally, a more measured rhythm would improve the overall sequence (I believe there are commas missing).",
	"Moreover, a more deliberate tempo would contribute to the progression (In my opinion, there is a dearth of commas).",
	"Furthermore, the cadence would benefit from being slightly slower (I think there are missing commas).",
	"Besides, a more paused rhythm would enhance the flow (In my viewpoint, there are omitted commas).",
	"Moreover, the flow could derive advantages from a more leisurely pace (From my perspective, there is a lack of commas).",
	"Additionally, a more measured cadence would improve the overall rhythm (I believe there are commas missing).",
	"Furthermore, a more deliberate tempo would contribute to the sequence (In my opinion, there is a dearth of commas).",
	"Moreover, the rhythm would benefit from being more restrained (I think there are missing commas).",
	"In addition, a more paced flow would enhance the overall progression (In my viewpoint, there are omitted commas).",
	"Furthermore, the tempo could derive advantages from a more leisurely rhythm (From my perspective, there is a lack of commas).",
	"Moreover, a more measured cadence would improve the flow (I believe there are commas missing).",
	"Besides, a more deliberate pace would contribute to the cadence (In my opinion, there is a dearth of commas).",
	"Additionally, the flow would benefit from a slightly slower tempo (I think there are missing commas).",
	"Moreover, a more paused rhythm would enhance the overall flow (In my viewpoint, there are omitted commas).",
	"In addition, the progression might derive advantages from a more leisurely cadence (From my perspective, there is a lack of commas).",
	"Furthermore, a more measured tempo would improve the rhythm (I believe there are commas missing).",
	"Moreover, the sequence would benefit from being more restrained (In my opinion, there is a dearth of commas).",
	"Additionally, a more paced flow would contribute to the progression (I think there are missing commas).",
	"Furthermore, the rhythm could derive advantages from a more leisurely rhythm (In my viewpoint, there are omitted commas).",
	"Moreover, a more deliberate cadence would enhance the overall flow (From my perspective, there is a lack of commas).",
	"In addition, the tempo would benefit from a more measured tempo (I believe there are commas missing).",
	"Besides, a more paused pace would improve the sequence (In my opinion, there is a dearth of commas)."
  ];

  randomNumber = Math.floor(Math.random() * 30);

// Para cada radio button verifa o index e escreve a frase correspondente
radioButtonsFinal1.forEach((button, index) => {
	button.addEventListener('click', () => {
		let final1Report = document.getElementById('final-1-report');
		let final12Report = document.getElementById('final-1-2-report');
		if (index === 0) {
			final1Report.innerText = lowQualityPhrases[randomNumber];
		} else if (index === 1) {
			final1Report.innerText = poorQualityPhrases[randomNumber];
		} else if (index === 2) {
			final1Report.innerText = improvePhrases[randomNumber];
		} else if (index === 3) {
			final1Report.innerText = stillImprovePhrases[randomNumber];
		} else if (index === 4) {
			conciseYes.addEventListener('click', () => {
				final1Report.innerText = wellPhrases[randomNumber]
				remaining7Yes.addEventListener('click', () => {
					final12Report.innerText = additionalPhrases[randomNumber]
				});
			});
			conciseNo.addEventListener('click', () => {
				final1Report.innerText = betterDiscussion[randomNumber]
				flowYes.addEventListener('click', () => {
					final12Report.innerText = pausedRhythmPhrases[randomNumber]
				});
				flowNo.addEventListener('click', () => {
					final12Report.innerText = ''
				});
			});
		}
	});
});






//Input da pergunta: Did you found occurrences of the usage of apostrophe to indicate possession?

let apostropheYes = document.getElementById("apostropheyesInput");
let apostropheNo = document.getElementById("apostropheyesInput");
let final2Report = document.getElementById("final-2-report")
let listApostrophProblem1Input = document.getElementById("list-apostrophe-problem-1-input")


let apostropheExamples = [
	"The usage of apostrophe to indicate possession should be avoided in technical documents. E.g., rewrite expressions such as __EXAMPLES__.",
	"Avoid using apostrophes to indicate possession in technical documents. For instance, rephrase sentences like __EXAMPLES__.",
	"In technical documents, it is advisable to refrain from using apostrophes to indicate possession. As an example, rewrite expressions such as __EXAMPLES__.",
	"It is recommended to avoid the use of apostrophes for indicating possession in technical documents. For example, rewrite expressions like __EXAMPLES__.",
	"To maintain consistency in technical documents, it is best to avoid using apostrophes to indicate possession. Instead, rewrite expressions such as __EXAMPLES__.",
	"When writing technical documents, it is better to avoid the usage of apostrophes for indicating possession. Rewrite expressions like __EXAMPLES__ as an example.",
	"In technical writing, it is suggested not to use apostrophes to indicate possession. Instead, rewrite expressions such as __EXAMPLES__.",
	"The use of apostrophes to indicate possession should be omitted in technical documents. E.g., rewrite expressions such as __EXAMPLES__.",
	"To ensure clarity in technical documents, it is advisable to avoid using apostrophes to indicate possession. For instance, rewrite expressions like __EXAMPLES__.",
	"In technical writing, it is preferable to avoid using apostrophes to indicate possession. For example, rewrite expressions such as __EXAMPLES__.",
	"Apostrophes should be avoided for indicating possession in technical documents. Instead, rewrite expressions like __EXAMPLES__.",
	"When it comes to technical documents, it is best to avoid the usage of apostrophes for indicating possession. Rewrite expressions such as __EXAMPLES__.",
	"In technical writing, it is recommended not to use apostrophes to indicate possession. Rewrite expressions like __EXAMPLES__ as an example.",
	"The usage of apostrophes to indicate possession is discouraged in technical documents. E.g., rewrite expressions such as __EXAMPLES__.",
	"It is advised to avoid using apostrophes to indicate possession in technical documents. For instance, rephrase sentences like __EXAMPLES__.",
	"In technical documents, it is better to refrain from using apostrophes to indicate possession. As an example, rewrite expressions such as __EXAMPLES__.",
	"Using apostrophes to indicate possession is not recommended in technical documents. For example, rewrite expressions like __EXAMPLES__.",
	"To maintain consistency in technical documents, it is suggested to avoid using apostrophes to indicate possession. Instead, rewrite expressions such as __EXAMPLES__.",
	"When writing technical documents, it is preferable to avoid the usage of apostrophes for indicating possession. Rewrite expressions like __EXAMPLES__ as an example.",
	"In technical writing, it is advised not to use apostrophes to indicate possession. Instead, rewrite expressions such as __EXAMPLES__.",
	"The use of apostrophes to indicate possession should be omitted in technical documents. E.g., rewrite expressions such as __EXAMPLES__.",
	"To ensure clarity in technical documents, it is recommended to avoid using apostrophes to indicate possession. For instance, rewrite expressions like __EXAMPLES__.",
	"In technical writing, it is preferable to avoid using apostrophes to indicate possession. For example, rewrite expressions such as __EXAMPLES__.",
	"Apostrophes should be avoided for indicating possession in technical documents. Instead, rewrite expressions like __EXAMPLES__.",
	"When it comes to technical documents, it is best to avoid the usage of apostrophes for indicating possession. Rewrite expressions such as __EXAMPLES__.",
	"In technical writing, it is recommended not to use apostrophes to indicate possession. Rewrite expressions like __EXAMPLES__ as an example.",
	"The usage of apostrophes to indicate possession is discouraged in technical documents. E.g., rewrite expressions such as __EXAMPLES__.",
	"It is advised to avoid using apostrophes to indicate possession in technical documents. For instance, rephrase sentences like __EXAMPLES__.",
	"In technical documents, it is better to refrain from using apostrophes to indicate possession. As an example, rewrite expressions such as __EXAMPLES__.",
	"Using apostrophes to indicate possession is not recommended in technical documents. For example, rewrite expressions like __EXAMPLES__.",
	"To maintain consistency in technical documents, it is suggested to avoid using apostrophes to indicate possession. Instead, rewrite expressions such as __EXAMPLES__.",
	"When writing technical documents, it is preferable to avoid the usage of apostrophes for indicating possession. Rewrite expressions like __EXAMPLES__ as an example.",
	"In technical writing, it is advised not to use apostrophes to indicate possession. Instead, rewrite expressions such as __EXAMPLES__."
  ];

  let apostrophe = [
	"The usage of apostrophe to indicate possession should be avoided in technical documents.",
	"Avoid using apostrophes to indicate possession in technical documents.",
	"In technical documents, it is advisable to refrain from using apostrophes to indicate possession.",
	"It is recommended to avoid the use of apostrophes for indicating possession in technical documents.",
	"To maintain consistency in technical documents, it is best to avoid using apostrophes to indicate possession.",
	"When writing technical documents, it is better to avoid the usage of apostrophes for indicating possession.",
	"In technical writing, it is suggested not to use apostrophes to indicate possession.",
	"The use of apostrophes to indicate possession should be omitted in technical documents.",
	"To ensure clarity in technical documents, it is advisable to avoid using apostrophes to indicate possession.",
	"In technical writing, it is preferable to avoid using apostrophes to indicate possession.",
	"Apostrophes should be avoided for indicating possession in technical documents.",
	"When it comes to technical documents, it is best to avoid the usage of apostrophes for indicating possession.",
	"In technical writing, it is recommended not to use apostrophes to indicate possession.",
	"The usage of apostrophes to indicate possession is discouraged in technical documents.",
	"It is advised to avoid using apostrophes to indicate possession in technical documents.",
	"In technical documents, it is better to refrain from using apostrophes to indicate possession.",
	"Using apostrophes to indicate possession is not recommended in technical documents.",
	"To maintain consistency in technical documents, it is suggested to avoid using apostrophes to indicate possession.",
	"When writing technical documents, it is preferable to avoid the usage of apostrophes for indicating possession.",
	"In technical writing, it is advised not to use apostrophes to indicate possession.",
	"The use of apostrophes to indicate possession should be omitted in technical documents.",
	"To ensure clarity in technical documents, it is recommended to avoid using apostrophes to indicate possession.",
	"In technical writing, it is preferable to avoid using apostrophes to indicate possession.",
	"Apostrophes should be avoided for indicating possession in technical documents.",
	"When it comes to technical documents, it is best to avoid the usage of apostrophes for indicating possession.",
	"In technical writing, it is recommended not to use apostrophes to indicate possession.",
	"The usage of apostrophes to indicate possession is discouraged in technical documents.",
	"It is advised to avoid using apostrophes to indicate possession in technical documents.",
	"In technical documents, it is better to refrain from using apostrophes to indicate possession.",
	"Using apostrophes to indicate possession is not recommended in technical documents.",
	"To maintain consistency in technical documents, it is suggested to avoid using apostrophes to indicate possession.",
	"When writing technical documents, it is preferable to avoid the usage of apostrophes for indicating possession.",
	"In technical writing, it is advised not to use apostrophes to indicate possession."
  ];
  

randomNumber = Math.floor(Math.random() * 30);

apostropheYes.addEventListener("input", () => {
	listApostrophProblem1Input.addEventListener("input", () => {
		if (listApostrophProblem1Input.value != "") {
			final2Report.innerText = apostropheExamples[randomNumber].replace("__EXAMPLES__", listApostrophProblem1Input.value)
		} else {
			final2Report.innerText = apostrophe[randomNumber];
		}
	});
    //Verificar se o input está vazio depois do evento "input"
    if (listApostrophProblem1Input.value === "") {
        final2Report.innerText = apostrophe[randomNumber];
    }
});

//Input da pergunta: Please write a 2 sentence summary describing the paper and the work

let summaryInput = document.getElementById("summary-input")
let summaryReport = document.getElementById("summary-report")

summaryInput.addEventListener("input", () => {
	if (summaryInput.value != "") {
		summaryReport.innerText = summaryInput.value;

	} else {
		summaryReport.innerText = "";
	}
});

//Input da pergunta: It the topic of the paper aligned with the one of the venue?

let topicYes = document.getElementById("topic-yes");
let topicNo = document.getElementById("topic-no");
let final3Report = document.getElementById("final-3-report")

let mainTopic1 = [
	"The main topic of the paper fits well within the context of this venue.",
	"The primary subject of the document aligns nicely with the scope of this location.",
	"This venue neatly encompasses the central theme of the paper.",
	"Within the boundaries of this venue, the paper's main topic harmonizes perfectly.",
	"The scope of this venue neatly accommodates the primary focus of the paper.",
	"The paper's main topic is well-suited for this venue.",
	"This venue provides a suitable framework for the main subject of the paper.",
	"The central theme of the paper falls within the scope of this venue seamlessly.",
	"The paper's main topic integrates smoothly with the purpose of this venue.",
	"Within this venue, the paper's main topic is an ideal fit.",
	"The scope of this venue aligns nicely with the main focus of the paper.",
	"This venue is a perfect match for the primary subject of the paper.",
	"The main topic of the paper fits perfectly within the context of this venue.",
	"The primary subject of the document aligns smoothly with the scope of this location.",
	"This venue conveniently encompasses the central theme of the paper.",
	"Within the boundaries of this venue, the paper's main topic blends in effortlessly.",
	"The scope of this venue conveniently accommodates the primary focus of the paper.",
	"The paper's main topic is well-aligned with this venue.",
	"This venue offers a suitable framework for the main subject of the paper.",
	"The central theme of the paper seamlessly falls within the scope of this venue.",
	"The paper's main topic integrates seamlessly with the purpose of this venue.",
	"Within this venue, the paper's main topic is a perfect fit.",
	"The scope of this venue matches perfectly with the main focus of the paper.",
	"This venue is an excellent match for the primary subject of the paper.",
	"The main topic of the paper seamlessly fits within the context of this venue.",
	"The primary subject of the document aligns perfectly with the scope of this location.",
	"This venue effectively encompasses the central theme of the paper.",
	"Within the boundaries of this venue, the paper's main topic blends in smoothly.",
	"The scope of this venue effectively accommodates the primary focus of the paper.",
	"The paper's main topic is well-integrated with this venue.",
	"This venue provides an ideal framework for the main subject of the paper.",
	"The central theme of the paper smoothly falls within the scope of this venue."
  ];

  let mainTopic2 = [
	"In my view, the subjects addressed by this piece do not fit within the confines of this location.",
	"From my perspective, the themes explored in this endeavor are outside the boundaries of this setting.",
	"In my estimation, the matters discussed in this undertaking are not within the purview of this place.",
	"In my judgment, the topics examined in this project are beyond the scope of this site.",
	"In my belief, the subjects analyzed in this work are not within the sphere of this arena.",
	"In my standpoint, the themes covered by this piece do not fall within the extent of this locale.",
	"In my point of view, the matters addressed in this endeavor are outside the range of this venue.",
	"In my assessment, the topics explored in this undertaking are not within the scope of this place.",
	"In my perception, the subjects discussed in this project are beyond the boundaries of this site.",
	"In my understanding, the themes examined in this work are not within the purview of this setting.",
	"In my opinion, the matters analyzed in this piece are outside the sphere of this arena.",
	"In my view, the topics covered by this endeavor do not fit within the extent of this locale.",
	"From my perspective, the subjects addressed in this project are outside the range of this venue.",
	"In my estimation, the themes explored in this undertaking are not within the scope of this place.",
	"In my judgment, the matters discussed in this work are beyond the boundaries of this site.",
	"In my belief, the topics examined in this piece are not within the purview of this setting.",
	"In my standpoint, the subjects analyzed in this endeavor are outside the sphere of this arena.",
	"In my point of view, the themes covered by this undertaking do not fall within the extent of this locale.",
	"In my assessment, the matters addressed in this project are outside the range of this venue.",
	"In my perception, the themes explored in this undertaking are not within the scope of this place.",
	"In my understanding, the subjects discussed in this work are beyond the boundaries of this site.",
	"In my opinion, the topics examined in this piece are not within the purview of this setting.",
	"In my view, the matters analyzed in this endeavor are outside the sphere of this arena.",
	"From my perspective, the themes covered in this project do not fit within the extent of this locale.",
	"In my estimation, the subjects addressed by this undertaking are outside the range of this venue.",
	"In my judgment, the topics explored in this work are not within the scope of this place.",
	"In my belief, the matters discussed in this piece are beyond the boundaries of this site.",
	"In my standpoint, the topics examined in this endeavor are not within the purview of this setting.",
	"In my point of view, the subjects analyzed in this project are outside the sphere of this arena.",
	"In my assessment, the themes covered by this undertaking do not fall within the extent of this locale.",
	"In my perception, the matters addressed in this work are outside the range of this venue."
  ];

  randomNumber = Math.floor(Math.random() * 30);

topicYes.addEventListener("input", () => {
	final3Report.innerText = mainTopic1[randomNumber];

});

topicNo.addEventListener("input", () => {
	final3Report.innerText = mainTopic2[randomNumber];

});






// Input da pergunta: How would you rate the quality of writing?
let radioButtonsFinal2 = document.querySelectorAll('.radio-input-novelty');
let labelElementsFinal2 = document.querySelectorAll('.radio-label-novelty');

let veryLimitedPhrases = [
	"In my view, the originality of this project is extremely restricted.",
	"From my perspective, the freshness of this undertaking is highly limited.",
	"In my estimation, the uniqueness of this endeavor is exceedingly letrained.",
	"In my judgment, the innovation level of this work is significantly limited.",
	"In my point of view, the novelty aspect of this work is quite restricted.",
	"In my belief, the novelty factor of this work is exceptionally limited.",
	"From my standpoint, the originality of this project is severely restricted.",
	"In my assessment, the freshness of this undertaking is greatly limited.",
	"In my perception, the uniqueness of this endeavor is notably letrained.",
	"In my opinion, the innovation level of this work is significantly limited.",
	"In my eyes, the novelty aspect of this work is truly restricted.",
	"From my point of view, the novelty factor of this work is remarkably limited.",
	"In my conviction, the originality of this project is extremely letrained.",
	"In my estimation, the freshness of this undertaking is highly limited.",
	"In my judgment, the uniqueness of this endeavor is significantly restricted.",
	"In my perspective, the innovation level of this work is quite limited.",
	"In my belief, the novelty aspect of this work is exceptionally limited.",
	"From my standpoint, the originality of this project is severely limited.",
	"In my assessment, the freshness of this undertaking is greatly limited.",
	"In my perception, the uniqueness of this endeavor is notably letrained.",
	"In my opinion, the innovation level of this work is significantly limited.",
	"In my eyes, the novelty factor of this work is truly limited.",
	"From my point of view, the novelty factor of this work is remarkably letrained.",
	"In my conviction, the originality of this project is extremely limited.",
	"In my estimation, the freshness of this undertaking is highly letrained.",
	"In my judgment, the uniqueness of this endeavor is significantly limited.",
	"In my perspective, the innovation level of this work is quite restricted.",
	"In my belief, the novelty aspect of this work is exceptionally letrained.",
	"From my standpoint, the originality of this project is severely letrained.",
	"In my assessment, the freshness of this undertaking is greatly letrained.",
	"In my perception, the uniqueness of this endeavor is notably limited.",
	"In my opinion, the innovation level of this work is significantly restricted.",
	"In my eyes, the novelty factor of this work is truly limited."
  ];

  let limitedPhrases = [
	"In my perspective, the originality of this endeavor is restricted.",
	"From my viewpoint, the uniqueness of this undertaking is confined.",
	"In my estimation, the freshness of this project is letrained.",
	"In my point of view, the innovativeness of this work is restricted.",
	"From my vantage point, the newness of this initiative is limited.",
	"In my judgment, the inventiveness of this task is letrained.",
	"In my belief, the originality factor of this endeavor is limited.",
	"From my standpoint, the novelty of this undertaking is restricted.",
	"In my assessment, the freshness factor of this project is confined.",
	"In my perspective, the innovativeness of this work is limited.",
	"From my point of view, the newness factor of this initiative is letrained.",
	"In my opinion, the inventiveness of this task is restricted.",
	"From my vantage point, the originality of this endeavor is limited.",
	"In my judgment, the uniqueness of this undertaking is confined.",
	"In my belief, the freshness of this project is restricted.",
	"From my standpoint, the innovativeness factor of this work is limited.",
	"In my assessment, the novelty of this initiative is letrained.",
	"In my perspective, the inventiveness factor of this task is limited.",
	"From my point of view, the originality factor of this endeavor is restricted.",
	"In my opinion, the uniqueness factor of this undertaking is confined.",
	"From my vantage point, the freshness of this project is limited.",
	"In my judgment, the innovativeness of this work is letrained.",
	"In my belief, the newness of this initiative is restricted.",
	"From my standpoint, the inventiveness of this task is limited.",
	"In my assessment, the originality of this endeavor is limited.",
	"In my perspective, the uniqueness of this undertaking is confined.",
	"From my point of view, the freshness factor of this project is limited.",
	"In my opinion, the innovativeness factor of this work is restricted.",
	"From my vantage point, the novelty of this initiative is limited.",
	"In my judgment, the inventiveness factor of this task is letrained.",
	"In my belief, the originality of this endeavor is restricted.",
	"From my standpoint, the uniqueness factor of this undertaking is confined."
  ];

  let averagePhrases = [
	"In my estimation, the novelty factor is of moderate quality.",
	"From my point of view, the novelty factor demonstrates an average level.",
	"In my judgment, the novelty factor can be considered average.",
	"In my view, the novelty factor possesses an ordinary level.",
	"From my perspective, the novelty factor showcases a standard magnitude.",
	"In my assessment, the novelty factor exhibits a middling degree.",
	"In my belief, the novelty factor is indicative of an ordinary extent.",
	"In my analysis, the novelty factor signifies a regular standard.",
	"From my standpoint, the novelty factor reflects an intermediate value.",
	"In my evaluation, the novelty factor manifests an average value.",
	"In my appraisal, the novelty factor represents a typical measure.",
	"From my observation, the novelty factor displays a standard rating.",
	"In my consideration, the novelty factor indicates an average score.",
	"In my scrutiny, the novelty factor denotes an ordinary rating.",
	"From my examination, the novelty factor points to a median value.",
	"In my discernment, the novelty factor signifies an average magnitude.",
	"In my inference, the novelty factor suggests a typical level.",
	"From my analysis, the novelty factor reveals an average grade.",
	"In my conclusion, the novelty factor implies a regular scale.",
	"In my perception, the novelty factor conveys an ordinary assessment.",
	"From my standpoint, the novelty factor implies an intermediate judgment.",
	"In my assessment, the novelty factor implies an average appraisal.",
	"In my belief, the novelty factor implies a standard estimation.",
	"From my observation, the novelty factor implies a typical opinion.",
	"In my consideration, the novelty factor implies an ordinary view.",
	"In my scrutiny, the novelty factor implies an average standpoint.",
	"From my examination, the novelty factor implies an intermediate perspective.",
	"In my discernment, the novelty factor implies an average outlook.",
	"In my inference, the novelty factor implies a typical assessment.",
	"From my analysis, the novelty factor implies an average analysis."
  ];
  
  let aboveAverageButPhrases = [
	"From my standpoint, the novelty factor surpasses the mean, albeit in an incremental manner.",
	"In my viewpoint, the novelty quotient is higher than the average, although in a gradual way.",
	"In my estimation, the novelty factor exceeds the norm, albeit in a progressive manner.",
	"Based on my observation, the novelty quotient surpasses the average level, though in an incremental fashion.",
	"From my vantage point, the novelty factor is above the mean, albeit in a progressive manner.",
	"According to my analysis, the novelty quotient exceeds the average level, albeit gradually.",
	"In my judgment, the novelty factor surpasses the norm, albeit in an incremental manner.",
	"From my perspective, the novelty quotient is higher than the average, albeit in a gradual fashion.",
	"In my assessment, the novelty factor exceeds the mean, albeit in a progressive way.",
	"Based on my evaluation, the novelty quotient surpasses the average level, though incrementally.",
	"From my point of view, the novelty factor is above average, albeit in a progressive manner.",
	"In my opinion, the novelty quotient is higher than the mean, albeit gradually.",
	"In my discernment, the novelty factor surpasses the norm, albeit in an incremental fashion.",
	"Based on my perception, the novelty quotient exceeds the average level, albeit progressively.",
	"From my understanding, the novelty factor is above the mean, albeit gradually.",
	"According to my interpretation, the novelty quotient surpasses the average level, though incrementally.",
	"In my belief, the novelty factor exceeds the norm, albeit in a progressive manner.",
	"Based on my analysis, the novelty quotient is higher than the average, albeit in a gradual fashion.",
	"From my standpoint, the novelty factor surpasses the mean, albeit gradually.",
	"In my viewpoint, the novelty quotient exceeds the average level, albeit progressively.",
	"In my estimation, the novelty factor is above the norm, albeit in an incremental manner.",
	"Based on my observation, the novelty quotient surpasses the average level, albeit gradually.",
	"From my vantage point, the novelty factor exceeds the mean, albeit progressively.",
	"According to my analysis, the novelty quotient is higher than the average, albeit in a gradual way.",
	"In my judgment, the novelty factor surpasses the norm, albeit gradually.",
	"From my perspective, the novelty quotient exceeds the mean, albeit in a progressive fashion.",
	"In my assessment, the novelty factor is above the average, albeit gradually.",
	"Based on my evaluation, the novelty quotient surpasses the average level, albeit in a progressive manner.",
	"From my point of view, the novelty factor is higher than the mean, albeit in a gradual fashion.",
	"In my opinion, the novelty quotient surpasses the norm, albeit gradually.",
	"In my discernment, the novelty factor exceeds the average level, albeit progressively."
  ];

  let aboveAveragePhrases = [
	"In my humble opinion, the novelty factor surpasses the norm.",
	"From my perspective, the novelty factor exceeds the mean.",
	"In my estimation, the novelty factor is superior to the average.",
	"According to my judgment, the novelty factor is beyond the usual.",
	"In my view, the novelty factor stands above the ordinary.",
	"In my considered opinion, the novelty factor transcends the typical.",
	"In my belief, the novelty factor is elevated compared to the median.",
	"In my assessment, the novelty factor is higher than the standard.",
	"In my point of view, the novelty factor is exceptional in comparison.",
	"In my discernment, the novelty factor is elevated beyond the median.",
	"According to my perception, the novelty factor exceeds the customary.",
	"In my appraisal, the novelty factor is superior to the average.",
	"In my understanding, the novelty factor surpasses the norm.",
	"In my conviction, the novelty factor stands above the ordinary.",
	"In my interpretation, the novelty factor is exceptional in comparison.",
	"In my analysis, the novelty factor is higher than the standard.",
	"In my observation, the novelty factor is elevated beyond the median.",
	"In my belief, the novelty factor is remarkable compared to the median.",
	"In my assessment, the novelty factor is above the mean.",
	"In my estimation, the novelty factor is superior to the typical.",
	"In my perspective, the novelty factor stands above the average.",
	"In my considered opinion, the novelty factor transcends the usual.",
	"From my point of view, the novelty factor exceeds the norm.",
	"In my judgment, the novelty factor is beyond the ordinary.",
	"According to my understanding, the novelty factor is exceptional.",
	"In my perception, the novelty factor is remarkable.",
	"In my analysis, the novelty factor is outstanding.",
	"In my observation, the novelty factor is impressive.",
	"In my conviction, the novelty factor is notable.",
	"In my interpretation, the novelty factor is noteworthy."
  ];

  let highPhrases = [
	"From my perspective, the level of novelty in this undertaking is exceedingly remarkable.",
	"In my personal estimation, the level of novelty exhibited by this endeavor is exceptionally elevated.",
	"In my view, the degree of novelty associated with this labor is exceedingly significant.",
	"From my vantage point, the level of novelty manifested in this work is remarkably high.",
	"In my considered opinion, the degree of novelty inherent in this endeavor is remarkably substantial.",
	"In my estimation, the level of novelty portrayed by this undertaking is remarkably prominent.",
	"From my standpoint, the level of novelty displayed by this work is exceedingly remarkable.",
	"In my subjective perspective, the degree of novelty exhibited by this labor is significantly high.",
	"In my discerning viewpoint, the level of novelty associated with this endeavor is remarkably pronounced.",
	"From my observation, the level of novelty in this undertaking is exceptionally notable.",
	"In my appraisal, the degree of novelty inherent in this work is remarkably significant.",
	"In my judgment, the level of novelty portrayed by this labor is remarkably prominent.",
	"From my assessment, the level of novelty displayed by this endeavor is exceedingly remarkable.",
	"In my analysis, the degree of novelty associated with this undertaking is remarkably pronounced.",
	"In my scrutiny, the level of novelty in this work is significantly notable.",
	"From my examination, the degree of novelty inherent in this labor is remarkably significant.",
	"In my consideration, the level of novelty portrayed by this endeavor is remarkably prominent.",
	"From my inspection, the level of novelty displayed by this undertaking is exceedingly remarkable.",
	"In my examination, the degree of novelty associated with this work is remarkably pronounced.",
	"From my scrutiny, the level of novelty in this labor is significantly notable.",
	"In my assessment, the degree of novelty inherent in this endeavor is remarkably significant.",
	"From my analysis, the level of novelty portrayed by this work is remarkably prominent.",
	"In my discernment, the level of novelty displayed by this labor is exceedingly remarkable.",
	"From my evaluation, the degree of novelty associated with this undertaking is remarkably pronounced.",
	"In my observation, the level of novelty in this work is significantly notable.",
	"From my appraisal, the degree of novelty inherent in this labor is remarkably significant.",
	"In my judgment, the level of novelty portrayed by this endeavor is remarkably prominent.",
	"From my estimation, the level of novelty displayed by this undertaking is exceedingly remarkable.",
	"In my perspective, the degree of novelty associated with this work is remarkably pronounced.",
	"From my viewpoint, the level of novelty in this labor is significantly notable."
  ];
  

  randomNumber = Math.floor(Math.random() * 30);

// Para cada radio button verifa o index e escreve a frase correspondente
radioButtonsFinal2.forEach((button, index) => {
	button.addEventListener('click', () => {
		let final4Report = document.getElementById('final-4-report');
		if (index === 0) {
			final4Report.innerText = veryLimitedPhrases[randomNumber];
		} else if (index === 1) {
			final4Report.innerText = limitedPhrases[randomNumber];
		} else if (index === 2) {
			final4Report.innerText = averagePhrases[randomNumber];
		} else if (index === 3) {
			final4Report.innerText = aboveAverageButPhrases[randomNumber];
		} else if (index === 4) {
			final4Report.innerText = aboveAveragePhrases[randomNumber];
		} else if (index === 5) {
			final4Report.innerText = highPhrases[randomNumber];
		}
	});
});

//Input da pergunta: Was the approach to the problem and method appropriate?
let methodYes = document.getElementById("method-yes");
let methodNo = document.getElementById("method-no");
let final5Report = document.getElementById("final-5-report")

let methodPhrases = [
	"In my estimation, the methodology employed to address the issue was inadequate.",
	"From my perspective, the approach utilized to tackle the problem was unsuitable.",
	"In my view, the technique employed to deal with the matter was inappropriate.",
	"In my judgement, the strategy utilized to handle the situation was ill-suited.",
	"In my belief, the procedure employed to confront the challenge was not fitting.",
	"In my standpoint, the method utilized to tackle the issue was not befitting.",
	"From my vantage point, the approach employed to address the problem was not fitting.",
	"In my assessment, the technique utilized to handle the matter was inadequate.",
	"In my point of view, the methodology employed to confront the situation was not appropriate.",
	"From my perspective, the method utilized to tackle the issue was not suitable.",
	"In my opinion, the strategy employed to deal with the problem was not appropriate.",
	"In my estimation, the approach utilized to address the matter was not fitting.",
	"In my view, the procedure employed to handle the situation was not fitting.",
	"In my judgement, the technique utilized to confront the challenge was inadequate.",
	"In my belief, the method employed to tackle the issue was not appropriate.",
	"In my standpoint, the strategy utilized to deal with the matter was not befitting.",
	"From my vantage point, the approach employed to handle the problem was unsuitable.",
	"In my assessment, the technique utilized to address the situation was not appropriate.",
	"In my point of view, the methodology employed to confront the issue was inadequate.",
	"From my perspective, the method utilized to tackle the problem was not appropriate.",
	"In my opinion, the strategy employed to deal with the matter was not fitting.",
	"In my estimation, the approach utilized to handle the situation was not appropriate.",
	"In my view, the procedure employed to confront the challenge was not suitable.",
	"In my judgement, the technique utilized to address the issue was not appropriate.",
	"In my belief, the method employed to tackle the matter was inadequate.",
	"In my standpoint, the strategy utilized to handle the problem was not appropriate.",
	"From my vantage point, the approach employed to deal with the situation was not fitting.",
	"In my assessment, the technique utilized to tackle the issue was unsuitable.",
	"In my point of view, the methodology employed to address the problem was not appropriate.",
	"From my perspective, the method utilized to deal with the matter was not fitting.",
	"In my opinion, the approach employed to handle the situation was inadequate."
  ];

randomNumber = Math.floor(Math.random() * 30);

displayValueAtIndex(methodNo, final5Report, methodPhrases, randomNumber);

//Input da pergunta: Results and conclusions support the claims of the work?

let resultsYes = document.getElementById("results-yes");
let resultsNo = document.getElementById("results-no");
let conclusionsYes = document.getElementById("conclusions-yes");
let conclusionsNo = document.getElementById("conclusions-no");
let final6Report = document.getElementById("final-6-report")
let final7Report = document.getElementById("final-7-report")

resultsYes.addEventListener("input", updateFinalReport);
resultsNo.addEventListener("input", updateFinalReport);
conclusionsYes.addEventListener("input", updateFinalReport);
conclusionsNo.addEventListener("input", updateFinalReport);

//previne que o utilizador responda primeiro à segunda pergunta e que depois o texto não apareça
function updateFinalReport() {
	if (resultsYes.checked) {
		final6Report.innerText = "Results and conclusions support the claims of the work.";
		if (conclusionsNo.checked) {
			final7Report.innerText = "Nonetheless, conclusions do not adequately wrap up the most important aspects of the work.";
		} else {
			final7Report.innerText = "";
		}
	} else if (resultsNo.checked) {
		final6Report.innerText = "Results or conclusions do not fully support the claims of the work.";
		final7Report.innerText = "";
	}
}


//TYPOS AND ERRORS

let tableCounter = 0;

function addTable() {
	showerrorsInput.innerText = "Point out another typo or error";
  
	tableCounter++;
  
	let table = document.createElement("table");
	table.setAttribute("id", "table-" + tableCounter);
  
	let row1 = table.insertRow();
	let row2 = table.insertRow();
  
	let cell1 = row1.insertCell();
	cell1.innerHTML = '<label  for="replaced-input-' + tableCounter + '">What should be replaced?</label><br>';
  
	let cell2 = row1.insertCell();
	cell2.innerHTML = '<label for="replaced-with-input-' + tableCounter + '">What to replace it with?</label><br>';
  
	let cell21 = row2.insertCell();
	cell21.innerHTML = '<textarea class="replace" id="replaced-input-' + tableCounter + '" style="width: 20vw; height: 1.3vw;"></textarea>';
  
	let cell22 = row2.insertCell();
	cell22.innerHTML = '<textarea class="replace" id="replaced-with-input-' + tableCounter + '" style="width: 20vw; height: 1.3vw;"></textarea>';
  
	let cell23 = row2.insertCell();
  
	let removeButton = document.createElement("button");
	removeButton.setAttribute("id", "remove-button-" + tableCounter);
	removeButton.setAttribute("style", "background-color: white; color:black; margin:10px; font-size: 15px;");
	removeButton.innerHTML = "X";
  
	removeButton.addEventListener("click", function() {
	  table.remove();
	  removeButton.remove();
	  updateTyposReport();
	  let tablesLeft = document.querySelectorAll('#table-container table');
	  if (tablesLeft.length == 0) {
		document.getElementById('typos-comment').style.display = 'none';
	  }
	});
  
	cell23.appendChild(removeButton);
  
	let tableContainer = document.getElementById("table-container");
	tableContainer.appendChild(table);
  
	let replacedInput = document.getElementById("replaced-input-" + tableCounter);
	let replacedWithInput = document.getElementById("replaced-with-input-" + tableCounter);
  
	replacedInput.addEventListener("input", updateTyposReport);
	replacedWithInput.addEventListener("input", updateTyposReport);
  }
  

let typosCommentReport = document.getElementById("typos-comment");


function updateTyposReport() {
	
typosCommentReport.style.display = "block";

let inputs = document.querySelectorAll("textarea.replace");

  let typosReport = "";
  let counter = 1;

  inputs.forEach(input => {
    let value = input.value.trim();
    if (value !== "") {
		if(counter%2 !=0){
			typosReport += "<br>" + value + " -> ";
			counter++;
		} else{
			typosReport +=  value;
			counter++;
		}

    }
  });

  let typosReportElement = document.getElementById("typos-report");
  typosReportElement.innerHTML = typosReport;
}

//BOTÃO DE DOWNLOAD

//Este código serve para obter o mês e o ano atual*/ 
let atualDate = new Date();
let meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let atualMonth = meses[atualDate.getMonth()];
let atualYear = atualDate.getFullYear();

let pdfbutton = document.getElementById("pdfoption");
let txtbutton = document.getElementById("txtoption");


txtbutton.addEventListener("click", () => {
	let text = textrelatorio.innerText;

	let conteudo = `${text}`;
	let blob = new Blob([conteudo], {type: "text/plain;charset=utf-8"});

	let link = document.createElement("a");
	link.href = URL.createObjectURL(blob);

	if (acronymInput.value != '') {
		link.download = "REV-" + acronymInput.value + "-" + atualMonth + atualYear + ".txt";
	} else {
		link.download = "REV-" + atualMonth + atualYear + ".txt";
	}

	link.click();


});
pdfbutton.addEventListener("click", () => {
	let text = textrelatorio.innerText;
  
	let docDefinition = {
	  content: [
		{ text: text }
	  ],
	  defaultStyle: {
		font: 'Roboto'
	  }
	};
  
	let filename = "REV-" + atualMonth + atualYear + ".pdf";
	if (acronymInput.value !== '') {
	  filename = "REV-" + acronymInput.value + "-" + atualMonth + atualYear + ".pdf";
	}
  
	let pdfDoc = pdfMake.createPdf(docDefinition);
	pdfDoc.getBlob((blob) => {
	  if (navigator.msSaveBlob) {
		//Para o Internet Explorer e Edge
		navigator.msSaveBlob(blob, filename);
	  } else {
		//Para os outros browsers
		let link = document.createElement("a");
		let url = URL.createObjectURL(blob);
		link.href = url;
		link.download = filename;
		link.click();
		setTimeout(() => {
		  URL.revokeObjectURL(url);
		}, 0);
	  }
	});
  });
  
  