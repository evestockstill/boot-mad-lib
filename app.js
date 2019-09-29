
function makeStory() {
    
    const noun1 = document.getElementById('noun-1').value;
    const noun1S = document.getElementById('noun1S');
    noun1S.textContent = noun1;
    
    const actionVerb = document.getElementById('action-verb').value;
    const actionVerbS = document.getElementById('actionVerbS');
    actionVerbS.textContent = actionVerb;


    const noun2 = document.getElementById('noun-2').value;
    const noun2S = document.getElementById('noun2S');
    noun2S.textContent = noun2;

    const noun3 = document.getElementById('noun-3').value;
    const noun3S = document.getElementById('noun3S');
    noun3S.textContent = noun3;

    const adjective1 = document.getElementById('adjective-1').value;
    const adjective1S = document.getElementById('adjective1S');
    adjective1S.textContent = adjective1;

    const adverb1 = document.getElementById('adverb-1').value;
    const adverb1S = document.getElementById('adverb1S');
    adverb1S.textContent = adverb1;

    const adjective3 = document.getElementById('adjective-3').value;
    const adjective3S = document.getElementById('adjective3S');
    adjective3S.textContent = adjective3;

    const adjective4 = document.getElementById('adjective-4').value;
    const adjective4S = document.getElementById('adjective4S');
    adjective4S.textContent = adjective4;

    const adverb2 = document.getElementById('adverb-2').value;
    const adverb2S = document.getElementById('adverb2S');
    adverb2S.textContent = adverb2;
    const noun6 = document.getElementById('noun-6').value;
    const noun6S = document.getElementById('noun6S');
    noun6S.textContent = noun6;

    const storyTime = document.getElementById('story');
    storyTime.classList.remove('hidden');


    


}

// document.getElementById('btn').addEventListener('click', makeStory);


